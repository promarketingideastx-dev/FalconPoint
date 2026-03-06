import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function GeneratedScreen4() {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value.toLowerCase());
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans text-left flex flex-col">
      {/* MainHeader */}
      <header className="border-b border-slate-100 sticky top-0 bg-white z-50">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 flex items-center justify-center bg-slate-900 rounded-lg shadow-sm">
              <svg className="w-8 h-8 fill-white" viewBox="0 0 100 100">
                <path d="M50 5 L15 20 V50 C15 75 50 95 50 95 C50 95 85 75 85 50 V20 L50 5Z" fill="currentColor"></path>
                <path d="M50 25 C40 25 35 35 35 45 L65 45 C65 35 60 25 50 25Z" fill="#1e293b"></path>
                <circle cx="50" cy="38" fill="#10B981" r="4"></circle>
              </svg>
            </div>
            <span className="font-bold tracking-tight text-slate-900 text-lg">FALCON POINT</span>
          </div>

          {/* Language Selector */}
          <div>
            <select 
              value={i18n.language.toUpperCase()} 
              onChange={handleLanguageChange}
              className="text-xs font-medium border-none bg-slate-50 rounded-full px-3 py-1 text-slate-600 focus:ring-emerald-500 outline-none"
            >
              <option value="EN">EN</option>
              <option value="ES">ES</option>
              <option value="PT">PT</option>
            </select>
          </div>
        </div>
      </header>

      {/* MainContent */}
      <main className="max-w-4xl mx-auto px-4 py-8 flex-1 w-full">
        {/* CurrentPlanSection */}
        <section className="mb-10">
          <h1 className="text-2xl font-bold text-slate-900 mb-6">Subscription &amp; Billing</h1>
          
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Current Plan</p>
                  <h2 className="text-xl font-bold text-slate-900">Professional Yearly</h2>
                  <p className="text-slate-600 text-sm mt-1">Next renewal on Oct 12, 2026</p>
                </div>
                <span className="bg-emerald-100 text-emerald-600 text-xs font-bold px-3 py-1 rounded-full border border-emerald-200">
                  ACTIVE
                </span>
              </div>
              
              <div className="flex flex-col gap-3 mt-4 pt-6 border-t border-slate-200">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-600">Price</span>
                  <span className="font-semibold text-slate-900">$290.00 / year</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-600">Payment Method</span>
                  <span className="font-semibold text-slate-900 flex items-center gap-2">
                    <svg className="w-5 h-5 text-slate-400" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path></svg>
                    •••• 4242
                  </span>
                </div>
              </div>
              
              <div className="mt-4">
                <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-xl transition-colors duration-200 shadow-lg shadow-emerald-500/20 active:scale-[0.98]">
                  Upgrade Plan
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* InvoicesSection */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-slate-900">Billing History</h3>
            <button className="text-emerald-500 text-sm font-semibold hover:underline bg-transparent border-none cursor-pointer">Download All</button>
          </div>
          
          <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden">
            <div className="divide-y divide-slate-50">
              {/* Invoice Row 1 */}
              <div className="flex items-center justify-between p-4 hover:bg-slate-50 transition-colors border-b border-slate-50 last:border-b-0">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">Invoice #FP-2023-10</p>
                    <p className="text-xs text-slate-500">Oct 12, 2023</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-slate-900 text-sm">$290.00</p>
                  <a className="text-xs text-emerald-500 font-medium hover:underline" href="#">Receipt</a>
                </div>
              </div>
              
              {/* Invoice Row 2 */}
              <div className="flex items-center justify-between p-4 hover:bg-slate-50 transition-colors border-b border-slate-50 last:border-b-0">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">Invoice #FP-2022-10</p>
                    <p className="text-xs text-slate-500">Oct 12, 2022</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-slate-900 text-sm">$290.00</p>
                  <a className="text-xs text-emerald-500 font-medium hover:underline" href="#">Receipt</a>
                </div>
              </div>
              
              {/* Invoice Row 3 */}
              <div className="flex items-center justify-between p-4 hover:bg-slate-50 transition-colors border-b border-slate-50 last:border-b-0">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">Invoice #FP-2021-10</p>
                    <p className="text-xs text-slate-500">Oct 12, 2021</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-slate-900 text-sm">$290.00</p>
                  <a className="text-xs text-emerald-500 font-medium hover:underline" href="#">Receipt</a>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-slate-400 text-xs mt-8">
            Secure billing powered by <span className="font-bold">Stripe</span>
          </p>
        </section>
      </main>

      {/* FooterLinks */}
      <footer className="w-full mt-auto py-10 px-4 border-t border-slate-50">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
          <nav className="flex gap-6 text-sm font-medium text-slate-500">
            <a className="hover:text-slate-900" href="#">Privacy Policy</a>
            <a className="hover:text-slate-900" href="#">Terms of Service</a>
            <a className="hover:text-slate-900" href="#">Contact Support</a>
          </nav>
          <p className="text-xs text-slate-400">© 2026 Falcon Point OS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
