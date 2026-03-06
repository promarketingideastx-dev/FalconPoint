import { useState, useEffect } from 'react';
import { collection, query, where, onSnapshot, doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from './useAuth';

export function useProjects() {
  const { user } = useAuth();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.org_id) return;
    
    // Multi-tenant query: only fetch projects belonging to this organization
    const q = query(
      collection(db, 'projects'), 
      where('org_id', '==', user.org_id)
    );
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const projectsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setProjects(projectsData);
      setLoading(false);
    });
    
    return () => unsubscribe();
  }, [user]);

  const updateProjectStatus = async (projectId, newStatus) => {
    try {
      const projectRef = doc(db, 'projects', projectId);
      await updateDoc(projectRef, { status: newStatus });
    } catch (error) {
      console.error('Error updating project status in CRM:', error);
    }
  };

  return { projects, loading, updateProjectStatus };
}
