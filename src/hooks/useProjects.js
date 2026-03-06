import { useState, useEffect, useCallback } from 'react';
import { collection, query, where, onSnapshot, doc, updateDoc, limit, orderBy, startAfter, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { useStore } from '../store/useStore';

export function useProjects() {
  const { user } = useStore(state => ({ user: state.user }));
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastDoc, setLastDoc] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  const PAGE_SIZE = 25;

  // Initial load
  useEffect(() => {
    if (!user?.org_id) return;
    
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
    if (!user?.org_id || !lastDoc || !hasMore) return;
    
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
