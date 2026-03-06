import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import { useTranslation } from 'react-i18next';
import { Toaster } from 'react-hot-toast';
import SuperAdminDashboard from './pages/SuperAdminDashboard';
import CrmKanbanBoard from './pages/CrmKanbanBoard';
import SkyMetricWorkspace from './pages/SkyMetricWorkspace';
import DigitalProposal from './pages/DigitalProposal';
import AdminSettings from './pages/AdminSettings';
import FalconPointDashboard1 from './pages/FalconPointDashboard1';
import FalconPointDashboard2 from './pages/FalconPointDashboard2';
import LandingPage from './pages/LandingPage';
import LoginScreen from './pages/LoginScreen';
import SkyMetricWorkspaceBright from './pages/SkyMetricWorkspaceBright';
import GeneratedScreen1 from './pages/GeneratedScreen1';
import GeneratedScreen2 from './pages/GeneratedScreen2';
import GeneratedScreen3 from './pages/GeneratedScreen3';
import GeneratedScreen4 from './pages/GeneratedScreen4';
import PricingPlans from './pages/PricingPlans';
import UnderConstruction from './pages/UnderConstruction';

function App() {
  const { t } = useTranslation();

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-900 text-white font-sans">
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/landing" element={<LandingPage />} />
          
          {/* Protected Routes */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          
          <Route path="/dashboard" element={
            <ProtectedRoute allowedRoles={['superadmin', 'admin']}><SuperAdminDashboard /></ProtectedRoute>
          } />
          <Route path="/crm" element={
            <ProtectedRoute><CrmKanbanBoard /></ProtectedRoute>
          } />
          <Route path="/skymetric" element={
            <ProtectedRoute><SkyMetricWorkspace /></ProtectedRoute>
          } />
          <Route path="/skymetric-bright" element={
            <ProtectedRoute><SkyMetricWorkspaceBright /></ProtectedRoute>
          } />
          <Route path="/proposals" element={
            <ProtectedRoute><DigitalProposal /></ProtectedRoute>
          } />
          <Route path="/settings" element={
            <ProtectedRoute allowedRoles={['superadmin', 'admin']}><AdminSettings /></ProtectedRoute>
          } />
          <Route path="/dashboard1" element={
            <ProtectedRoute allowedRoles={['superadmin', 'admin']}><FalconPointDashboard1 /></ProtectedRoute>
          } />
          <Route path="/dashboard2" element={
            <ProtectedRoute allowedRoles={['superadmin', 'admin']}><FalconPointDashboard2 /></ProtectedRoute>
          } />
          
          {/* Generated Routes mapped to specific functions */}
          <Route path="/tracker" element={
            <ProtectedRoute><GeneratedScreen1 /></ProtectedRoute>
          } />
          <Route path="/dispatch" element={
            <ProtectedRoute><GeneratedScreen2 /></ProtectedRoute>
          } />
          <Route path="/automation" element={
            <ProtectedRoute><GeneratedScreen3 /></ProtectedRoute>
          } />
          <Route path="/pricing" element={
            <ProtectedRoute><PricingPlans /></ProtectedRoute>
          } />
          <Route path="/billing" element={
            <ProtectedRoute><GeneratedScreen4 /></ProtectedRoute>
          } />
          <Route path="/construction" element={
            <ProtectedRoute><UnderConstruction /></ProtectedRoute>
          } />
        </Routes>
        <Toaster position="top-right" toastOptions={{ className: 'dark:bg-slate-800 dark:text-white border border-slate-200 dark:border-slate-700' }} />
      </div>
    </BrowserRouter>
  );
}

export default App;
