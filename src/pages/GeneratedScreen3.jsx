import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function GeneratedScreen3() {
  const { t } = useTranslation();

  return (
    <div className="bg-white text-slate-900 font-sans antialiased min-h-screen pb-20 md:pb-0 text-left">
      <style>
        {`
          .workflow-line {
            width: 2px;
            height: 24px;
            background-color: #E2E8F0;
            margin-left: 24px;
          }
        `}
      </style>

      {/* MainHeader */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Falcon Point Logo Concept */}
          <div className="relative w-8 h-10 flex items-center justify-center">
            <svg className="w-full h-full" viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 0 L90 20 V60 C90 90 50 115 50 115 C50 115 10 90 10 60 V20 L50 0Z" fill="#0F172A"></path>
              <path d="M35 40 Q50 25 70 45 L65 55 L55 50 L45 65 Z" fill="white"></path>
              <circle cx="58" cy="42" fill="#10B981" r="5"></circle>
            </svg>
          </div>
          <h1 className="font-bold text-lg tracking-tight text-slate-900">FALCON POINT</h1>
        </div>
        <button className="bg-emerald-500 text-white px-4 py-1.5 rounded-lg text-sm font-semibold hover:bg-emerald-600 transition-colors outline-none cursor-pointer">
          Publish
        </button>
      </header>

      <main className="max-w-md mx-auto p-4 space-y-6">
        {/* WorkflowInfo */}
        <section>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold">New Lead Onboarding</h2>
              <p className="text-slate-500 text-sm italic">Last edited 2 mins ago</p>
            </div>
            <div className="flex items-center gap-2 bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-xs font-medium">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              Active
            </div>
          </div>
        </section>

        {/* AutomationCanvas */}
        <section className="space-y-0">
          {/* Trigger Card */}
          <div className="relative">
            <div className="bg-slate-900 text-white p-4 rounded-xl shadow-lg border-l-4 border-emerald-500">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500">Trigger</span>
                <span className="bg-slate-800 p-1.5 rounded">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                </span>
              </div>
              <h3 className="text-base font-semibold">If Lead Signed</h3>
              <p className="text-slate-400 text-xs mt-1">When any contract is marked as 'Signed' in CRM</p>
            </div>
            <div className="workflow-line"></div>
          </div>

          {/* Action Card 1 */}
          <div className="relative">
            <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Action</span>
                <span className="bg-emerald-100 p-1.5 rounded">
                  <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                </span>
              </div>
              <h3 className="text-base font-semibold">Send Welcome Email</h3>
              <p className="text-slate-500 text-xs mt-1">Send Template: "Client_Welcome_V2"</p>
            </div>
            <div className="workflow-line"></div>
          </div>

          {/* Action Card 2 (Empty State) */}
          <div className="relative">
            <button className="w-full border-2 border-dashed border-slate-200 rounded-xl p-4 flex items-center justify-center gap-2 hover:border-emerald-300 transition-colors group cursor-pointer outline-none">
              <span className="bg-slate-100 group-hover:bg-emerald-100 p-1 rounded-full transition-colors">
                <svg className="w-5 h-5 text-slate-400 group-hover:text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </span>
              <span className="text-sm font-medium text-slate-400 group-hover:text-emerald-600">Add Next Step</span>
            </button>
          </div>
        </section>

        {/* SimpleTemplateEditor */}
        <section className="mt-10 bg-slate-50 rounded-2xl p-4 border border-slate-100">
          <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-4">Action Configuration: Email</h3>
          <div className="space-y-4">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-slate-700">Email Subject</label>
              <input className="w-full rounded-lg border border-slate-200 text-sm focus:ring-emerald-500 focus:border-emerald-500 p-2 outline-none" type="text" defaultValue="Welcome to the family, {{first_name}}!"/>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-slate-700">Body Content</label>
              <div className="bg-white border border-slate-200 rounded-lg p-3 min-h-[120px] text-sm text-slate-600">
                <p>Hi <span className="bg-emerald-100 text-emerald-700 px-1 rounded">{'{{first_name}}'}</span>,</p>
                <br/>
                <p>We're thrilled to have you on board. Your account executive will reach out shortly to schedule your kickoff call.</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="flex-1 bg-slate-200 text-slate-700 py-2 rounded-lg text-xs font-bold uppercase tracking-wider cursor-pointer outline-none hover:bg-slate-300 transition-colors">Test Step</button>
              <button className="flex-1 bg-emerald-500 text-white py-2 rounded-lg text-xs font-bold uppercase tracking-wider cursor-pointer outline-none hover:bg-emerald-600 transition-colors">Save Step</button>
            </div>
          </div>
        </section>
      </main>

      {/* BottomNav (Mobile Only) */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 flex justify-around items-center py-4 px-6 md:hidden">
        <button className="flex flex-col items-center gap-1 text-emerald-500">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
          <span className="text-[10px] font-bold">Workflows</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-slate-400 hover:text-emerald-500 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
          <span className="text-[10px] font-bold">Analytics</span>
        </button>
        <Link to="/settings" className="flex flex-col items-center gap-1 text-slate-400 hover:text-emerald-500 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m12 4a2 2 0 100-4m0 4a2 2 0 110-4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m-4-2a2 2 0 114 0m-4 0a2 2 0 104 0m-4 0a2 2 0 014 0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
          <span className="text-[10px] font-bold">Settings</span>
        </Link>
      </footer>
    </div>
  );
}
