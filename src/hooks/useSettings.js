import { useState, useEffect } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from './useAuth';

export function useSettings() {
  const { user } = useAuth();
  const [settings, setSettings] = useState({
    unit_price: 4.25 // Fallback value
  });

  useEffect(() => {
    if (!user?.org_id) return;
    
    const orgRef = doc(db, 'organizations', user.org_id);
    const unsubscribe = onSnapshot(orgRef, (docSnap) => {
      if (docSnap.exists() && docSnap.data().settings) {
        setSettings(docSnap.data().settings);
      }
    });
    
    return () => unsubscribe();
  }, [user]);
  
  return { settings };
}
