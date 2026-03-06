import { create } from 'zustand';

export const useStore = create((set) => ({
  // Auth State
  user: null, // Full user profile including role and authorized_orgs
  activeOrgId: null, // The currently active organization
  authLoading: true, // Init state

  // Actions
  setUser: (user) => set({ user, authLoading: false }),
  setAuthLoading: (loading) => set({ authLoading: loading }),
  
  // Multi-tenant Org Switcher
  switchOrganization: (orgId) => set((state) => {
    if (state.user?.authorized_orgs?.includes(orgId) || state.user?.role === 'superadmin') {
      return { activeOrgId: orgId };
    }
    console.error('Unauthorized organization switch attempted.');
    return state;
  }),
}));
