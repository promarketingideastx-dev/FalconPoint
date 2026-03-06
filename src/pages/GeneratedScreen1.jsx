import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function GeneratedScreen1() {
  const { t } = useTranslation();

  return (
    <div className="bg-white text-slate-900 font-sans antialiased min-h-screen">
      <style>
        {`
          @keyframes pulse-subtle {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
          }
          .animate-pulse-subtle {
            animation: pulse-subtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
        `}
      </style>

      {/* MainHeader */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 px-4 py-3">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Logo */}
            <div className="relative w-10 h-10 flex items-center justify-center bg-slate-900 rounded-lg">
              <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L4.5 5V11C4.5 15.6 7.7 19.9 12 21C16.3 19.9 19.5 15.6 19.5 11V5L12 2Z" fill="currentColor"></path>
                <path d="M14 8C13 7 11.5 7 10.5 8C9.5 9 9 10.5 9.5 12C10 13.5 12 16 12 16C12 16 14 13.5 14.5 12C15 10.5 14.5 9 14 8Z" fill="#10B981"></path>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold tracking-widest text-slate-500 leading-none">FALCON POINT</span>
              <span className="text-lg font-black text-slate-900 leading-tight">PROJECT OS</span>
            </div>
          </div>
          <button aria-label="Menu" className="p-2 text-slate-500">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6h16M4 12h12m-12 6h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
          </button>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 py-8 space-y-8 text-left">
        {/* ProjectSummary */}
        <section>
          <h1 className="text-2xl font-extrabold tracking-tight">Project Status</h1>
          <p className="text-slate-500 mt-1">Residential Solar Installation #FP-29402</p>

          <div className="mt-6 p-5 bg-slate-50 rounded-2xl border border-slate-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Current Phase</span>
              <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-bold rounded-full uppercase">On Schedule</span>
            </div>
            <p className="text-xl font-bold">Permits Approved</p>
            <p className="text-sm text-slate-600 mt-1">Waiting for crew scheduling availability.</p>
          </div>
        </section>

        {/* VisualTimeline */}
        <section>
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">Milestones</h2>
          
          <div className="relative space-y-8 pl-8">
            {/* Vertical Line Container */}
            <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-slate-100"></div>

            {/* Step 1: Completed */}
            <div className="relative">
              <div className="absolute -left-[27px] mt-1.5 w-4 h-4 rounded-full bg-emerald-500 ring-4 ring-emerald-50 border-2 border-white z-10"></div>
              <div>
                <h3 className="font-bold text-emerald-500">Contract Signed</h3>
                <p className="text-xs text-slate-400">Completed Oct 12, 2023</p>
              </div>
            </div>

            {/* Step 2: Completed */}
            <div className="relative">
              <div className="absolute -left-[27px] mt-1.5 w-4 h-4 rounded-full bg-emerald-500 ring-4 ring-emerald-50 border-2 border-white z-10"></div>
              <div>
                <h3 className="font-bold text-emerald-500">Permits Approved</h3>
                <p className="text-xs text-slate-400">Completed Nov 04, 2023</p>
              </div>
            </div>

            {/* Step 3: Current/Pending */}
            <div className="relative">
              <div className="absolute -left-[27px] mt-1.5 w-4 h-4 rounded-full bg-white border-2 border-slate-300 z-10 animate-pulse-subtle"></div>
              <div>
                <h3 className="font-bold text-slate-900">Installation Scheduled</h3>
                <p className="text-xs text-slate-500">Estimated: Nov 15 - Nov 20</p>
              </div>
            </div>

            {/* Step 4: Future */}
            <div className="relative">
              <div className="absolute -left-[27px] mt-1.5 w-4 h-4 rounded-full bg-slate-100 border-2 border-white z-10"></div>
              <div>
                <h3 className="font-bold text-slate-300">Project Completed</h3>
                <p className="text-xs text-slate-300">Pending installation</p>
              </div>
            </div>
          </div>
        </section>

        {/* DocumentDownloads */}
        <section className="pt-4">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Project Files</h2>
          <div className="grid gap-3">
            {/* Download Item 1 */}
            <a href="/construction" className="flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors group">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-100 rounded-lg group-hover:bg-white transition-colors">
                  <svg className="h-5 w-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                </div>
                <div>
                  <p className="text-sm font-bold">Signed Proposal</p>
                  <p className="text-[10px] text-slate-400 uppercase">PDF • 2.4 MB</p>
                </div>
              </div>
              <svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
            </a>

            {/* Download Item 2 */}
            <a href="/construction" className="flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors group">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-100 rounded-lg group-hover:bg-white transition-colors">
                  <svg className="h-5 w-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                </div>
                <div>
                  <p className="text-sm font-bold">SkyMetric Report</p>
                  <p className="text-[10px] text-slate-400 uppercase">PDF • 5.1 MB</p>
                </div>
              </div>
              <svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
            </a>
          </div>
        </section>

        {/* SupportCTA */}
        <section className="mt-8 p-6 bg-slate-900 rounded-2xl text-white">
          <h3 className="text-lg font-bold">Need assistance?</h3>
          <p className="text-slate-400 text-sm mt-1">Your dedicated project manager is available Mon-Fri, 9am - 5pm.</p>
          
          <div className="mt-6 grid grid-cols-2 gap-3">
            <a href="tel:1-800-FALCON" className="flex items-center justify-center gap-2 py-3 bg-white/10 rounded-xl text-sm font-semibold hover:bg-white/20 transition-colors">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              Call
            </a>
            <a href="mailto:support@falconpoint.os" className="flex items-center justify-center gap-2 py-3 bg-emerald-500 rounded-xl text-sm font-semibold text-slate-900 hover:bg-emerald-400 transition-colors">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              Email
            </a>
          </div>
        </section>
      </main>

      {/* FooterNavigation */}
      <footer className="mt-auto border-t border-slate-100 py-8 px-4 text-center">
        <p className="text-xs text-slate-400">© 2026 Falcon Point OS. All rights reserved.</p>
        <div className="mt-4 flex justify-center gap-6 text-xs font-bold uppercase tracking-widest text-slate-300">
          <a href="/construction" className="hover:text-slate-500">Privacy</a>
          <a href="/construction" className="hover:text-slate-500">Terms</a>
          <Link to="/settings" className="hover:text-slate-500">Settings</Link>
        </div>
      </footer>
    </div>
  );
}
