import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function SkyMetricWorkspaceBright() {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value.toLowerCase());
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased overflow-hidden h-screen flex flex-col text-left">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white/90 backdrop-blur-md border-b border-emerald-900/10 z-20">
        <div className="flex items-center gap-3">
          <div className="bg-primary p-2 rounded-lg text-white">
            <span className="material-symbols-outlined">layers</span>
          </div>
          <h2 className="text-xl font-bold tracking-tight text-slate-900">SkyMetric <span className="text-primary">{t('skymetric.workspace')}</span></h2>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center bg-emerald-50 rounded-full px-3 py-1 border border-emerald-100">
            <span className="material-symbols-outlined text-emerald-600 text-sm mr-2">language</span>
            <select 
              value={i18n.language.toUpperCase()} 
              onChange={handleLanguageChange}
              className="bg-transparent border-none text-xs font-bold text-emerald-700 focus:ring-0 cursor-pointer p-0 pr-6 uppercase outline-none"
            >
              <option value="EN">EN</option>
              <option value="ES">ES</option>
              <option value="PT">PT</option>
            </select>
          </div>
          <button className="material-symbols-outlined text-slate-500 hover:text-primary transition-colors">account_circle</button>
        </div>
      </header>

      {/* Main Map Area */}
      <main className="relative flex-1 bg-slate-200 overflow-hidden">
        {/* Satellite Map Placeholder */}
        <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDD2N8AJOzO2hz1DmzCxOdcMbw3z7HMmKETtTU3rVRsc1I-0NmIkt3Qp_0NXGrxmIU8ML6tGudrrnaDCFKncAPaidbhbqqHC-bB79saFGl3lOWxkXfw-loT3IMwdUNZ20z6o76fkKgmpd5penmFGMgNLDdQMZ1Bdv1uNmV_HRPovKQc-YZXPfQuest924dQzaK5to4hR9tUe9xfSugnb35HuSi8J8XXLqQ3LJkCzxeSxUZf6UlPYmtKZd0qOxPZLOb1PSR45YbPfwY')" }}>
          
          {/* Emerald Measurement Polygon Overlay */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-48 map-polygon rounded-lg flex items-center justify-center">
            <div className="bg-white/90 px-2 py-1 rounded text-[10px] font-bold text-emerald-700 shadow-sm">
              4,250 sq ft
            </div>
          </div>
        </div>

        {/* Floating Controls */}
        <div className="absolute top-6 left-6 flex flex-col gap-2 z-10">
          <div className="glass-panel p-1 rounded-xl shadow-lg flex flex-col border border-white/30 backdrop-blur-md" style={{ background: 'rgba(255, 255, 255, 0.85)' }}>
            <button className="p-3 hover:bg-emerald-50 text-slate-700 hover:text-primary transition-colors rounded-lg">
              <span className="material-symbols-outlined">add</span>
            </button>
            <div className="h-px bg-slate-200 mx-2"></div>
            <button className="p-3 hover:bg-emerald-50 text-slate-700 hover:text-primary transition-colors rounded-lg">
              <span className="material-symbols-outlined">remove</span>
            </button>
          </div>
          <button className="glass-panel p-3 rounded-xl shadow-lg border border-white/30 backdrop-blur-md text-slate-700 hover:text-primary transition-colors" style={{ background: 'rgba(255, 255, 255, 0.85)' }}>
            <span className="material-symbols-outlined">my_location</span>
          </button>
        </div>

        <div className="absolute top-6 right-6 z-10">
          <div className="glass-panel p-2 rounded-xl shadow-lg border border-white/30 backdrop-blur-md flex gap-2" style={{ background: 'rgba(255, 255, 255, 0.85)' }}>
            <button className="flex items-center gap-2 px-3 py-2 bg-primary text-white rounded-lg text-sm font-semibold">
              <span className="material-symbols-outlined text-base">square_foot</span>
              <span>{t('skymetric.measure')}</span>
            </button>
            <button className="flex items-center gap-2 px-3 py-2 hover:bg-emerald-50 text-slate-700 rounded-lg text-sm font-semibold transition-colors">
              <span className="material-symbols-outlined text-base">layers</span>
              <span>{t('skymetric.layers')}</span>
            </button>
          </div>
        </div>

        {/* Bottom Sheet / Quote Card */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full max-w-lg px-4 z-20">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-emerald-100">
            <div className="p-1 flex justify-center bg-slate-50">
              <div className="w-12 h-1 bg-slate-300 rounded-full my-1"></div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{t('skymetric.quickQuote')}</h3>
                  <p className="text-sm text-slate-500">{t('skymetric.projectRef')} #7742</p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black text-primary">$349.00</span>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{t('skymetric.estimated')}</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-100/50">
                  <p className="text-[10px] text-emerald-600 font-bold uppercase mb-1">{t('skymetric.area')}</p>
                  <p className="text-lg font-bold text-slate-900">4,250 <span className="text-xs font-normal">sqft</span></p>
                </div>
                <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-100/50">
                  <p className="text-[10px] text-emerald-600 font-bold uppercase mb-1">{t('skymetric.pitch')}</p>
                  <p className="text-lg font-bold text-slate-900">6/12</p>
                </div>
                <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-100/50">
                  <p className="text-[10px] text-emerald-600 font-bold uppercase mb-1">{t('skymetric.confidence')}</p>
                  <p className="text-lg font-bold text-slate-900">98%</p>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/20">
                  <span className="material-symbols-outlined">picture_as_pdf</span>
                  <span>{t('skymetric.generatePdf')}</span>
                </button>
                <button className="p-4 border border-slate-200 rounded-xl hover:bg-slate-50 text-slate-600 transition-colors">
                  <span className="material-symbols-outlined">share</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Navigation Bar */}
      <nav className="bg-white border-t border-emerald-900/5 px-6 py-2 pb-6 flex justify-around items-center z-30">
        <Link className="flex flex-col items-center gap-1 text-primary" to="/skymetric-bright">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>map</span>
          <span className="text-[10px] font-bold uppercase tracking-widest">{t('skymetric.map')}</span>
        </Link>
        <Link className="flex flex-col items-center gap-1 text-slate-400 hover:text-emerald-600 transition-colors" to="/crm">
          <span className="material-symbols-outlined">folder</span>
          <span className="text-[10px] font-bold uppercase tracking-widest">{t('skymetric.projects')}</span>
        </Link>
        <Link className="flex flex-col items-center gap-1 text-slate-400 hover:text-emerald-600 transition-colors" to="/dashboard">
          <span className="material-symbols-outlined">analytics</span>
          <span className="text-[10px] font-bold uppercase tracking-widest">{t('skymetric.reports')}</span>
        </Link>
        <Link className="flex flex-col items-center gap-1 text-slate-400 hover:text-emerald-600 transition-colors" to="/settings">
          <span className="material-symbols-outlined">settings</span>
          <span className="text-[10px] font-bold uppercase tracking-widest">{t('skymetric.settings')}</span>
        </Link>
      </nav>
    </div>
  );
}
