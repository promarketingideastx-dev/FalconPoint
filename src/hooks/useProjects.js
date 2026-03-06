import { useState, useEffect, useCallback } from 'react';
import { collection, query, where, onSnapshot, doc, updateDoc, limit, orderBy, startAfter, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { useStore } from '../store/useStore';

const DEMO_PROJECTS = [
  { id: '1', title: 'Solar Array Installation', customer: 'Acme Corp', value: 45000, status: 'Captured', org_id: 'org_falcon_01', createdAt: new Date().toISOString(), assets: [] },
  { id: '2', title: 'Roof Inspection', customer: 'Global Tech', value: 12000, status: 'Measured', org_id: 'org_falcon_01', createdAt: new Date().toISOString(), assets: [] },
  { id: '3', title: 'Commercial Build', customer: 'Stark Ind.', value: 150000, status: 'Quoted', org_id: 'org_falcon_01', createdAt: new Date().toISOString(), assets: [] },
  { id: '4', title: 'Drone Survey', customer: 'Wayne Ent.', value: 8500, status: 'Won', org_id: 'org_falcon_01', createdAt: new Date().toISOString(), assets: [] },
];

export function useProjects() {
  const user = useStore(state => state.user);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastDoc, setLastDoc] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  const PAGE_SIZE = 25;
  const isDemoMode = import.meta.env.VITE_FIREBASE_API_KEY?.includes('placeholder') || !import.meta.env.VITE_FIREBASE_API_KEY;

  // Initial load
  useEffect(() => {
    if (!user?.org_id) return;
    
    if (isDemoMode) {
      setProjects(DEMO_PROJECTS);
      setLoading(false);
      setHasMore(false);
      return;
    }

    // Multi-tenant query: only fetch projects belonging to this organization
    const q = query(
      collection(db, 'projects'), 
      where('org_id', '==', user.org_id),
      orderBy('createdAt', 'desc'),
      limit(PAGE_SIZE)
    );
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const projectsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setProjects(projectsData);
      
      if (snapshot.docs.length > 0) {
        setLastDoc(snapshot.docs[snapshot.docs.length - 1]);
      }
      
      setHasMore(snapshot.docs.length === PAGE_SIZE);
      setLoading(false);
    });
    
    return () => unsubscribe();
  }, [user?.org_id]); // Depend on org_id to refetch when switching orgs

  // Load more function
  const loadMore = useCallback(async () => {
    if (isDemoMode || !user?.org_id || !lastDoc || !hasMore) return;
    
    const nextQ = query(
      collection(db, 'projects'),
      where('org_id', '==', user.org_id),
      orderBy('createdAt', 'desc'),
      startAfter(lastDoc),
      limit(PAGE_SIZE)
    );

    const snapshot = await getDocs(nextQ);
    const newProjects = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    if (newProjects.length > 0) {
      setProjects(prev => {
        // Simple deduplication strategy
        const newIds = new Set(newProjects.map(p => p.id));
        return [...prev.filter(p => !newIds.has(p.id)), ...newProjects];
      });
      setLastDoc(snapshot.docs[snapshot.docs.length - 1]);
    }
    
    setHasMore(snapshot.docs.length === PAGE_SIZE);
  }, [user?.org_id, lastDoc, hasMore]);


  const updateProjectStatus = async (projectId, newStatus) => {
    if (isDemoMode) {
      setProjects(prev => prev.map(p => p.id === projectId ? { ...p, status: newStatus } : p));
      return;
    }
    
    try {
      const projectRef = doc(db, 'projects', projectId);
      await updateDoc(projectRef, { status: newStatus });
    } catch (error) {
      console.error('Error updating project status in CRM:', error);
      throw error;
    }
  };

  return { projects, loading, updateProjectStatus, loadMore, hasMore };
}
