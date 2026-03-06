import { useState, useEffect } from 'react';
import { auth } from '../firebase';

// Mock implementation until real Firebase Auth is fully integrated
export function useAuth() {
  const [user, setUser] = useState({
    uid: 'admin_user_001',
    email: 'admin@falconpoint.os',
    role: 'superadmin', // Enables cross-tenant access in Firestore Rules
    org_id: 'org_falcon_01', // Active Organization
    authorized_orgs: ['org_falcon_01', 'org_nexus_02', 'org_vertex_03'], // Enables Agnistic Org Jumping
    displayName: 'Admin Manager'
  });
  
  // Agnostic Org Jumper Stub (Will connect to Firebase in Phase 2)
  const switchOrganization = (newOrgId) => {
    if (user.authorized_orgs.includes(newOrgId) || user.role === 'superadmin') {
      setUser({ ...user, org_id: newOrgId });
      console.log(`[Auth] Switched active organization context to: ${newOrgId}`);
    } else {
      console.error('[Auth] Unauthorized to access this organization.');
    }
  };

  return { user, switchOrganization };
}
