import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function FalconPointDashboard1() {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang.toLowerCase());
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display text-left min-h-screen">
      {/* Main Layout Container */}
      <div className="flex flex-col min-h-screen max-w-7xl mx-auto shadow-sm border-x border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
        
        {/* Header */}
        <header className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center">
              <img src="/falcon_point_logo_dark_mode/screen.png" alt="Falcon Point Logo" className="h-8 w-auto object-contain" />
            </div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-50">FALCON <span className="text-primary font-medium">POINT</span></h1>
          </div>
          <div className="flex items-center gap-6">
            {/* Language Selector */}
            <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-full p-1 px-3 gap-3">
              <span className="material-symbols-outlined text-sm text-slate-500">language</span>
              <div className="flex gap-2 text-xs font-bold uppercase tracking-wider">
                <button 
                  onClick={() => handleLanguageChange('EN')}
                  className={i18n.language === 'en' ? 'text-primary' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'}
                >EN</button>
                <span className="text-slate-300 dark:text-slate-600">|</span>
                <button 
                  onClick={() => handleLanguageChange('ES')}
                  className={i18n.language === 'es' ? 'text-primary' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'}
                >ES</button>
                <span className="text-slate-300 dark:text-slate-600">|</span>
                <button 
                  onClick={() => handleLanguageChange('PT')}
                  className={i18n.language === 'pt' ? 'text-primary' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'}
                >PT</button>
              </div>
            </div>
            <div className="h-8 w-px bg-slate-200 dark:bg-slate-800"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                <img alt="User profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3XZQ18ggorchL1PMKMlc5sxpkXnt0LVKk5PC1wCE6_BJrpxbOXuhjBDPejugn_5WmzLdk9qbdIqywvharZHj5kDSN7U8lvpCRtPB8FuD6iOBRPjpOWVCltPse6t8bvkd3HMX6yabO3jvQ1UtttcgVJfb63v8W_tMp9BCnaO8-tTU4ofhOiWSyIy_-8qbbH8W3ycnfZmdEOu17yJDZr5SEOooTljByW9M-zkKUPOKydBVcuG4IaFMVDZ4oIOTsFNFLEYE2selEkcc"/>
              </div>
              <span className="material-symbols-outlined text-slate-400">expand_more</span>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 p-6 space-y-8 pl-0 md:pl-20">
          {/* Welcome Section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Engineering Overview</h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Real-time telemetry and global sales logistics.</p>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg flex items-center gap-2 hover:opacity-90 transition-opacity">
                <span className="material-symbols-outlined text-sm">add</span> New Project
              </button>
              <button className="px-4 py-2 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 text-sm font-semibold rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                Export Report
              </button>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Global Sales Card */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Global Sales</p>
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-white mt-1">$4.2M</h3>
                </div>
                <div className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-bold">+12.5%</div>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-50 dark:border-slate-800/50">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="material-symbols-outlined text-xs">trending_up</span>
                  <span>Target: $4.5M for Q3</span>
                </div>
              </div>
            </div>
            {/* Active Projects Card */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Active Projects</p>
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-white mt-1">128</h3>
                </div>
                <div className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-bold">+4%</div>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-50 dark:border-slate-800/50">
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden mt-1">
                  <div className="bg-primary h-full rounded-full" style={{ width: '72%' }}></div>
                </div>
                <p className="text-[10px] text-slate-400 mt-2 uppercase tracking-widest font-bold">72% Completion Rate</p>
              </div>
            </div>
            {/* Efficiency Card */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">System Efficiency</p>
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-white mt-1">94%</h3>
                </div>
                <div className="bg-red-50 dark:bg-red-950/30 text-red-500 px-2 py-1 rounded text-xs font-bold">-2.1%</div>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-50 dark:border-slate-800/50">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="material-symbols-outlined text-xs">bolt</span>
                  <span>Operational across 14 nodes</span>
                </div>
              </div>
            </div>
          </div>

          {/* Visualization Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Sales Trend Graph */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h4 className="font-bold text-slate-800 dark:text-slate-200">Revenue Velocity</h4>
                <select className="text-xs bg-slate-50 dark:bg-slate-800 border-none rounded p-1 px-2 focus:ring-0 outline-none">
                  <option>Last 6 Months</option>
                  <option>Last Year</option>
                </select>
              </div>
              <div className="relative h-48 w-full mt-4">
                <svg fill="none" height="100%" preserveAspectRatio="none" viewBox="0 0 400 150" width="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id="graphGradient" x1="0" x2="0" y1="0" y2="150">
                      <stop stopColor="#10B981" stopOpacity="0.2"></stop>
                      <stop offset="1" stopColor="#10B981" stopOpacity="0"></stop>
                    </linearGradient>
                  </defs>
                  <path d="M0 120 C 50 110, 80 40, 120 50 C 160 60, 200 140, 250 120 C 300 100, 350 20, 400 30 V 150 H 0 Z" fill="url(#graphGradient)"></path>
                  <path d="M0 120 C 50 110, 80 40, 120 50 C 160 60, 200 140, 250 120 C 300 100, 350 20, 400 30" fill="none" stroke="#10B981" strokeLinecap="round" strokeWidth="3"></path>
                </svg>
                <div className="flex justify-between mt-4 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                </div>
              </div>
            </div>

            {/* Global Map / Distribution placeholder */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden relative">
              <div className="flex justify-between items-center mb-6">
                <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm">Active Nodes</h4>
                <span className="text-[10px] bg-primary text-white px-2 py-0.5 rounded-full uppercase">Live</span>
              </div>
              <div className="w-full h-48 bg-slate-50 dark:bg-slate-800/50 rounded-lg flex items-center justify-center relative">
                <img alt="World Map Distribution" className="absolute inset-0 w-full h-full object-cover opacity-20 dark:opacity-10 mix-blend-multiply dark:mix-blend-overlay" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBU8d5lOqflC459MltJ_kzjji1bC8bVGrKathSu2i9Y7s_6AwoBnP9bXEnyk-bwh_QNsv92WT4NcRZWIugu4cqJ2qrpg2Xj-STGD4lnn1We-4sJr4etNMjy0TgB2LNTl35AgLejO-l_ovRX4StQZvzTylrfXaCnhFIFA2m9QgSHdgsCPeemlDrOrzkORGxfM23XFoVY0T7vsyLdivC-zw7ZTvb_4zA8cbU1M_efkfHp1LPCeZTV6jBhkguD8SMzNrixwCBK0cr48Qk"/>
                <div className="z-10 text-center">
                  <p className="text-xs text-slate-500 font-medium">Node Distribution Map</p>
                  <p className="text-[10px] text-primary font-bold mt-1">42 SITES WORLDWIDE</p>
                </div>
              </div>
            </div>
          </div>

          {/* Table Section */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-50 dark:border-slate-800 flex items-center justify-between">
              <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm">Recent Projects</h4>
              <button className="text-xs text-primary font-bold hover:underline">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-[11px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50 dark:bg-slate-800/50">
                    <th className="px-6 py-3">Project ID</th>
                    <th className="px-6 py-3">Client / Region</th>
                    <th className="px-6 py-3">Status</th>
                    <th className="px-6 py-3 text-right">Budget</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-4 text-sm font-mono text-slate-600 dark:text-slate-400">PRJ-2401</td>
                    <td className="px-6 py-4">
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Skyline Infrastructure</p>
                      <p className="text-xs text-slate-400">London, UK</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 dark:bg-blue-900/20 text-blue-600 uppercase">In Progress</span>
                    </td>
                    <td className="px-6 py-4 text-right text-sm font-semibold">$124,000</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-4 text-sm font-mono text-slate-600 dark:text-slate-400">PRJ-2405</td>
                    <td className="px-6 py-4">
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">AeroDynamics Hub</p>
                      <p className="text-xs text-slate-400">Sao Paulo, BR</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-primary/10 text-primary uppercase">Completed</span>
                    </td>
                    <td className="px-6 py-4 text-right text-sm font-semibold">$89,200</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-4 text-sm font-mono text-slate-600 dark:text-slate-400">PRJ-2408</td>
                    <td className="px-6 py-4">
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Solaris Grid System</p>
                      <p className="text-xs text-slate-400">Berlin, DE</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 dark:bg-amber-900/20 text-amber-600 uppercase">Awaiting QA</span>
                    </td>
                    <td className="px-6 py-4 text-right text-sm font-semibold">$312,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>

        {/* Bottom Navigation (Mobile) */}
        <nav className="md:hidden sticky bottom-0 border-t border-slate-100 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md flex justify-around py-3 px-4 z-50">
          <Link className="flex flex-col items-center gap-1 text-primary" to="/dashboard">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-[10px] font-bold uppercase tracking-wider">{t('nav.dash')}</span>
          </Link>
          <Link className="flex flex-col items-center gap-1 text-slate-400" to="/skymetric">
            <span className="material-symbols-outlined">map</span>
            <span className="text-[10px] font-bold uppercase tracking-wider">{t('nav.map')}</span>
          </Link>
          <Link className="flex flex-col items-center gap-1 text-slate-400" to="/crm">
            <span className="material-symbols-outlined">folder</span>
            <span className="text-[10px] font-bold uppercase tracking-wider">{t('nav.projects')}</span>
          </Link>
          <Link className="flex flex-col items-center gap-1 text-slate-400" to="/settings">
            <span className="material-symbols-outlined">settings</span>
            <span className="text-[10px] font-bold uppercase tracking-wider">{t('nav.settings')}</span>
          </Link>
        </nav>

        {/* Sidebar (Desktop) */}
        <aside className="hidden md:flex fixed left-0 top-0 h-screen w-20 flex-col items-center py-8 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 z-20">
          <div className="mb-10 text-primary">
            <div className="relative flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-4xl">shield</span>
              <span className="material-symbols-outlined absolute text-[12px] top-[10px]" style={{ fontVariationSettings: "'FILL' 1" }}>flutter_dash</span>
            </div>
          </div>
          <div className="flex flex-col gap-8 flex-1">
            <Link className="p-2 rounded-lg bg-primary text-white shadow-lg shadow-primary/20" title={t('nav.dash')} to="/dashboard">
              <span className="material-symbols-outlined">grid_view</span>
            </Link>
            <Link className="p-2 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors" title={t('nav.map')} to="/skymetric">
              <span className="material-symbols-outlined">map</span>
            </Link>
            <Link className="p-2 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors" title={t('nav.projects')} to="/crm">
              <span className="material-symbols-outlined">folder</span>
            </Link>
            <Link className="p-2 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors" title={t('nav.settings')} to="/settings">
              <span className="material-symbols-outlined">settings</span>
            </Link>
          </div>
          <div className="mt-auto">
            <button className="p-2 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
              <span className="material-symbols-outlined">logout</span>
            </button>
          </div>
        </aside>

      </div>
    </div>
  );
}
