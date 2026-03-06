import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useProjects } from '../hooks/useProjects';
import { seedDatabase } from '../utils/seedData';
import { useAuth } from '../hooks/useAuth';

export default function SuperAdminDashboard() {
  const { t } = useTranslation();
  const { user } = useAuth();
  const { projects, loading } = useProjects();
  const [isSeeding, setIsSeeding] = useState(false);
  
  const handleSeed = async () => {
    setIsSeeding(true);
    await seedDatabase(user.org_id);
    setIsSeeding(false);
  };
  
  const totalRevenue = projects.reduce((acc, curr) => acc + (curr.value || 0), 0);
  const displayRevenue = totalRevenue >= 1000000 
    ? `$${(totalRevenue / 1000000).toFixed(1)}M` 
    : new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(totalRevenue);
  
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen">
      <div className="flex flex-col min-h-screen max-w-7xl mx-auto pb-24 lg:pb-0">
        {/* Header */}
        <header className="flex flex-col gap-2 bg-background-light dark:bg-background-dark p-4 border-b border-primary/10">
          <div className="flex items-center h-12 justify-between">
            <div className="text-primary flex shrink-0 items-center">
              {/* Replace generic security icon with requested primary logo component */}
              <img src="/falcon_point_logo_dark_mode/screen.png" alt="Falcon Point Logo" className="h-10 w-auto object-contain" />
            </div>
            <div className="flex items-center gap-4">
              <button 
                onClick={handleSeed} 
                disabled={isSeeding}
                className="bg-primary/10 text-primary text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-primary/20 transition-colors"
                title="Seed Firebase Data"
              >
                {isSeeding ? 'Seeding...' : 'Seed Data'}
              </button>
              <div className="flex items-center gap-2 bg-primary/5 px-3 py-1.5 rounded-lg border border-primary/10">
                <span className="material-symbols-outlined text-primary text-sm">language</span>
                <p className="text-primary text-sm font-bold leading-normal tracking-wide">English (US)</p>
              </div>
              <div className="size-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                {user?.displayName?.[0] || 'JD'}
              </div>
            </div>
          </div>
          <div className="mt-2 text-left">
            <h1 className="text-slate-900 dark:text-slate-50 tracking-tight text-3xl font-extrabold leading-tight">FALCON POINT</h1>
            <p className="text-slate-500 text-sm font-medium">Super-Admin Global Overview</p>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto">
          {/* Top Metrics Row */}
          <div className="flex flex-wrap gap-4 p-4 mt-2">
            <div className="flex min-w-[280px] flex-1 flex-col gap-2 rounded-xl p-6 bg-white dark:bg-slate-900 border border-primary/10 shadow-sm text-left">
              <div className="flex items-center justify-between">
                <p className="text-slate-600 dark:text-slate-400 text-sm font-semibold uppercase tracking-wider">Total Revenue</p>
                <span className="material-symbols-outlined text-primary">payments</span>
              </div>
              <p className="text-slate-900 dark:text-slate-50 tracking-tight text-3xl font-bold leading-tight">
                {loading ? '...' : (totalRevenue > 0 ? displayRevenue : '$512,800')}
              </p>
              <div className="flex items-center gap-1 mt-1">
                <span className="material-symbols-outlined text-primary text-sm">trending_up</span>
                <p className="text-primary text-sm font-bold">+14.2% vs last month</p>
              </div>
            </div>
            
            <div className="flex min-w-[280px] flex-1 flex-col gap-2 rounded-xl p-6 bg-white dark:bg-slate-900 border border-primary/10 shadow-sm text-left">
              <div className="flex items-center justify-between">
                <p className="text-slate-600 dark:text-slate-400 text-sm font-semibold uppercase tracking-wider">Active Tenants</p>
                <span className="material-symbols-outlined text-primary">corporate_fare</span>
              </div>
              <p className="text-slate-900 dark:text-slate-50 tracking-tight text-3xl font-bold leading-tight">1,452</p>
              <div className="flex items-center gap-1 mt-1">
                <span className="material-symbols-outlined text-primary text-sm">trending_up</span>
                <p className="text-primary text-sm font-bold">+8.5% growth</p>
              </div>
            </div>
            
            <div className="flex min-w-[280px] flex-1 flex-col gap-2 rounded-xl p-6 bg-white dark:bg-slate-900 border border-primary/10 shadow-sm text-left">
              <div className="flex items-center justify-between">
                <p className="text-slate-600 dark:text-slate-400 text-sm font-semibold uppercase tracking-wider">API Usage</p>
                <span className="material-symbols-outlined text-primary">dynamic_form</span>
              </div>
              <p className="text-slate-900 dark:text-slate-50 tracking-tight text-3xl font-bold leading-tight">104.5M</p>
              <div className="flex items-center gap-1 mt-1">
                <span className="material-symbols-outlined text-primary text-sm">trending_up</span>
                <p className="text-primary text-sm font-bold">+18.2% requests</p>
              </div>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-4 py-4 text-left">
            <div className="flex flex-col gap-4 p-6 bg-white dark:bg-slate-900 border border-primary/10 rounded-xl shadow-sm">
              <div>
                <p className="text-slate-500 text-sm font-medium">Revenue Growth</p>
                <div className="flex items-baseline gap-2 mt-1">
                  <p className="text-slate-900 dark:text-slate-50 tracking-tight text-2xl font-bold">$428.5K</p>
                  <p className="text-primary text-sm font-bold">+12%</p>
                </div>
              </div>
              <div className="flex min-h-[160px] flex-1 flex-col gap-4 py-2">
                <svg fill="none" height="120" preserveAspectRatio="none" viewBox="0 0 472 150" width="100%" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H0V109Z" fill="url(#chart-gradient)"></path>
                  <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25" stroke="#0fb863" strokeLinecap="round" strokeWidth="4"></path>
                  <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id="chart-gradient" x1="236" x2="236" y1="1" y2="149">
                      <stop stopColor="#0fb863" stopOpacity="0.2"></stop>
                      <stop offset="1" stopColor="#0fb863" stopOpacity="0"></stop>
                    </linearGradient>
                  </defs>
                </svg>
                <div className="flex justify-between px-2">
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">W1</p>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">W2</p>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">W3</p>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">W4</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 p-6 bg-white dark:bg-slate-900 border border-primary/10 rounded-xl shadow-sm">
              <div>
                <p className="text-slate-500 text-sm font-medium">API Consumption (Cloud/Maps)</p>
                <div className="flex items-baseline gap-2 mt-1">
                  <p className="text-slate-900 dark:text-slate-50 tracking-tight text-2xl font-bold">89.2M req</p>
                  <p className="text-red-500 text-sm font-bold">-5.2%</p>
                </div>
              </div>
              <div className="grid min-h-[160px] grid-flow-col gap-8 grid-rows-[1fr_auto] items-end justify-items-center px-4">
                <div className="group relative w-full flex flex-col items-center justify-end h-full">
                  <div className="bg-primary/20 hover:bg-primary/30 border-t-4 border-primary w-full transition-all duration-300" style={{ height: '75%' }}></div>
                  <p className="mt-2 text-slate-500 text-[11px] font-bold uppercase tracking-widest">G-Maps</p>
                </div>
                <div className="group relative w-full flex flex-col items-center justify-end h-full">
                  <div className="bg-primary/20 hover:bg-primary/30 border-t-4 border-primary w-full transition-all duration-300" style={{ height: '45%' }}></div>
                  <p className="mt-2 text-slate-500 text-[11px] font-bold uppercase tracking-widest">Compute</p>
                </div>
                <div className="group relative w-full flex flex-col items-center justify-end h-full">
                  <div className="bg-primary/20 hover:bg-primary/30 border-t-4 border-primary w-full transition-all duration-300" style={{ height: '90%' }}></div>
                  <p className="mt-2 text-slate-500 text-[11px] font-bold uppercase tracking-widest">Storage</p>
                </div>
                <div className="group relative w-full flex flex-col items-center justify-end h-full">
                  <div className="bg-primary/20 hover:bg-primary/30 border-t-4 border-primary w-full transition-all duration-300" style={{ height: '60%' }}></div>
                  <p className="mt-2 text-slate-500 text-[11px] font-bold uppercase tracking-widest">VPC</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tenants Management Table */}
          <div className="px-4 py-6 text-left">
            <div className="flex items-center justify-between mb-4 px-2">
              <h2 className="text-slate-900 dark:text-slate-50 text-xl font-bold leading-tight">Tenants Management</h2>
              <button className="bg-primary text-white text-sm font-bold px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">add</span>
                New Tenant
              </button>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-primary/10 overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-background-light dark:bg-slate-800 border-b border-primary/10">
                    <tr>
                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Company Name</th>
                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Tier</th>
                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Status</th>
                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Usage</th>
                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-primary/5">
                    <tr className="hover:bg-primary/5 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="size-8 rounded bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-bold text-slate-400">N</div>
                          <span className="font-semibold text-slate-900 dark:text-slate-50">Nexus Global</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium">Enterprise</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-primary/10 text-primary">Active</span>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500">1.2M API/mo</td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-primary hover:text-primary/70 font-bold text-sm underline decoration-2 underline-offset-4">Manage</button>
                      </td>
                    </tr>
                    <tr className="hover:bg-primary/5 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="size-8 rounded bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-bold text-slate-400">Q</div>
                          <span className="font-semibold text-slate-900 dark:text-slate-50">Quantum Labs</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium">Standard</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-primary/10 text-primary">Active</span>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500">450K API/mo</td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-primary hover:text-primary/70 font-bold text-sm underline decoration-2 underline-offset-4">Manage</button>
                      </td>
                    </tr>
                    <tr className="hover:bg-primary/5 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="size-8 rounded bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-bold text-slate-400">V</div>
                          <span className="font-semibold text-slate-900 dark:text-slate-50">Vertex FinTech</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium">Enterprise</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-100 text-red-600">Suspended</span>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500">0 API/mo</td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-primary hover:text-primary/70 font-bold text-sm underline decoration-2 underline-offset-4">Manage</button>
                      </td>
                    </tr>
                    <tr className="hover:bg-primary/5 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="size-8 rounded bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-bold text-slate-400">A</div>
                          <span className="font-semibold text-slate-900 dark:text-slate-50">Astra Tech</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium">Trial</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-600">Pending</span>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500">22K API/mo</td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-primary hover:text-primary/70 font-bold text-sm underline decoration-2 underline-offset-4">Manage</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>

        {/* Bottom Navigation */}
        <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-950 border-t border-primary/10 px-4 py-2 lg:relative lg:border-t-0 lg:bg-transparent lg:max-w-7xl lg:mx-auto">
          <div className="flex justify-around items-center">
            <Link className="flex flex-col items-center gap-1 p-2 text-primary" to="/">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
              <span className="text-[10px] font-bold uppercase tracking-wider">Dashboard</span>
            </Link>
            <Link className="flex flex-col items-center gap-1 p-2 text-slate-400 hover:text-primary transition-colors" to="/crm">
              <span className="material-symbols-outlined">corporate_fare</span>
              <span className="text-[10px] font-bold uppercase tracking-wider">Tenants</span>
            </Link>
            <Link className="flex flex-col items-center gap-1 p-2 text-slate-400 hover:text-primary transition-colors" to="/skymetric">
              <span className="material-symbols-outlined">data_exploration</span>
              <span className="text-[10px] font-bold uppercase tracking-wider">API Logs</span>
            </Link>
            <Link className="flex flex-col items-center gap-1 p-2 text-slate-400 hover:text-primary transition-colors" to="/settings">
              <span className="material-symbols-outlined">settings</span>
              <span className="text-[10px] font-bold uppercase tracking-wider">Settings</span>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
