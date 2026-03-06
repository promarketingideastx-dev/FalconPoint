import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { useStore } from '../store/useStore';

export function useAuth() {
  const { user, authLoading, setUser, setAuthLoading, switchOrganization } = useStore();

  useEffect(() => {
    // DEMO MODE BYPASS
    if (import.meta.env.VITE_FIREBASE_API_KEY.includes('placeholder')) {
      console.warn('Running in Demo Mode. Firebase Auth bypassed.');
      // Do not hydrate user automatically so they see the login screen.
      setAuthLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        try {
          // Fetch additional user metadata (roles, orgs) from Firestore
          const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
          
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setUser({
              uid: firebaseUser.uid,
              email: firebaseUser.email,
              displayName: firebaseUser.displayName || userData.name || 'User',
              role: userData.role || 'sales',
              org_id: userData.org_id || null,
              authorized_orgs: userData.authorized_orgs || []
            });
          } else {
            // Fallback for users without a Firestore doc
            setUser({
              uid: firebaseUser.uid,
              email: firebaseUser.email,
              displayName: firebaseUser.displayName || 'User',
              role: 'sales',
              org_id: null,
              authorized_orgs: []
            });
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
          setUser(null);
        }
      } else {
        setUser(null);
      }
      setAuthLoading(false);
    });

    return () => unsubscribe();
  }, [setUser, setAuthLoading]);

  return { user, loading: authLoading, switchOrganization };
}
