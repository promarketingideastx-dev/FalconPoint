import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function ProtectedRoute({ children, allowedRoles }) {
  const { user, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-900 text-primary">
        <span className="material-symbols-outlined animate-spin text-4xl">refresh</span>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  // RBAC: If a specific role is required and user does not have it
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    // Redirect standard sales agents back to their CRM
    return <Navigate to="/crm" replace />;
  }
  
  return children;
}
