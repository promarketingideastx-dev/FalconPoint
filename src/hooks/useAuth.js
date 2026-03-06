import { useState, useEffect } from 'react';
import { auth } from '../firebase';

// Mock implementation until real Firebase Auth is fully integrated
export function useAuth() {
  const [user, setUser] = useState({
    uid: 'admin_user_001',
    email: 'admin@falconpoint.os',
    org_id: 'org_falcon_01', // Multi-tenant org ID
    displayName: 'Admin Manager'
  });
  
  return { user };
}
