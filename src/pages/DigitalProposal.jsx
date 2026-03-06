import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useSettings } from '../hooks/useSettings';

export default function DigitalProposal() {
  const { t } = useTranslation();
  const { settings } = useSettings();
  
  // Quoting Engine calculation: Dynamic based on settings.unit_price and fixed 3450 sqft area
  const area = 3450;
  const materialsPrice = settings.unit_price * area;
  const laborPrice = 6360.00;
  const totalPrice = materialsPrice + laborPrice;

  return (
    <div className="bg-background-light dark:bg-[#102219] text-slate-900 dark:text-slate-100 min-h-screen">
      {/* Main Container */}
      <div className="max-w-4xl mx-auto shadow-xl bg-white dark:bg-slate-900/50 min-h-screen pb-24 text-left">
        {/* Header */}
        <header className="flex items-center bg-white dark:bg-slate-900 p-4 sticky top-0 z-50 border-b border-primary/10">
          <Link to="/crm" className="mr-4 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors flex items-center justify-center">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <div className="text-primary mr-4">
            {/* Added official logo here */}
            <img src="/falcon_point_logo_dark_mode/screen.png" alt="Falcon Point Logo" className="h-8 w-auto object-contain" />
          </div>
          <div className="flex-1">
            <h1 className="text-lg font-bold leading-tight tracking-tight">FALCON POINT</h1>
            <p className="text-xs text-slate-500 uppercase tracking-widest">{t('proposal.title')}</p>
          </div>
          <div className="flex gap-2">
            <button className="p-2 hover:bg-primary/10 rounded-full text-slate-600 dark:text-slate-400">
              <span className="material-symbols-outlined">share</span>
            </button>
            <button className="p-2 hover:bg-primary/10 rounded-full text-slate-600 dark:text-slate-400">
              <span className="material-symbols-outlined">download</span>
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <div className="relative h-64 w-full bg-slate-200 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10"></div>
          <img alt="Modern architectural roofing profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuADbGu8ewHvaI0KyEW4uGXoqo-kn14M3EllPcpxB1vg-Ef93-_ra93Frb-4RaSlszZcJxEou0TDvv-Ne5Y9BABryXYN6vW2na7s2QK70FHcv_t-hFcKC7JTySFtLD-FIwLuCXZu-VvDQC9kh413hfr7z-hJSzF06dDBPdJXowg6jKg2o89L-9woRQ_i0wAco_Nwo8SceBG6g4cBU6h2XdybQtJLN5i9FEayY4LBzm2hk_CY9cFAflSOs96l7nfCy5T4FEJKQoelx18"/>
          <div className="absolute bottom-6 left-6 z-20">
            <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-bold mb-2 inline-block">PROJECT ID: FP-2024-089</span>
            <h2 className="text-white text-3xl font-bold">Premium Roofing Installation</h2>
            <p className="text-primary/90 font-medium">{t('proposal.preparedFor')}: West Creek Estates</p>
          </div>
        </div>

        {/* SkyMetric Satellite Map Section */}
        <section className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">layers</span>
              {t('proposal.map')}
            </h3>
            <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">{t('proposal.precision')}</span>
          </div>
          
          <div className="relative rounded-xl overflow-hidden border-2 border-primary/20 bg-slate-800 aspect-video group">
            {/* Mock Satellite View with Polygon */}
            <img alt="Satellite view of house with green measurement polygon overlay" className="w-full h-full object-cover opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOhlpA4sachgLvVFlo7k1pwskxg4bqKj0gPPMjiDzV0LSbSoV8aHMx4AqBiZBxi2GVP-VGaILSiTCq_YT-DEl3EwQSlRlPgUWfX1d_G8C2AuHo44SGVNxIkZni2aMZA-Bn_l_OvbCIFyW-xQleq80vZ5BfPiWUrNQWqEkOl35i-4Yog0k0ntPvmmr0VaBufTaXBVb5aMXLP-U2BU0dOnDWgebgvASOR4kpYher9ZFBf6voqn__umm1d3eXH0oLZ3D1K-qFpetova8"/>
            
            {/* SVG Polygon Overlay */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
              <path d="M30,30 L70,25 L85,60 L40,80 Z" fill="rgba(15, 184, 99, 0.3)" stroke="#0fb863" strokeWidth="0.5"></path>
              <circle cx="30" cy="30" fill="#0fb863" r="1"></circle>
              <circle cx="70" cy="25" fill="#0fb863" r="1"></circle>
              <circle cx="85" cy="60" fill="#0fb863" r="1"></circle>
              <circle cx="40" cy="80" fill="#0fb863" r="1"></circle>
            </svg>
            
            <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md p-3 rounded-lg border border-primary/30 text-[10px] text-white space-y-1">
              <div className="flex justify-between gap-4"><span>Total Area:</span><span className="text-primary">3,450 sq ft</span></div>
              <div className="flex justify-between gap-4"><span>Pitch:</span><span className="text-primary">8/12</span></div>
              <div className="flex justify-between gap-4"><span>Ridges:</span><span className="text-primary">142 ft</span></div>
            </div>
          </div>
        </section>

        {/* Material Breakdown */}
        <section className="p-6 bg-primary/5">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">inventory_2</span>
            {t('proposal.materialBreakdown')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-primary/10 flex gap-4">
              <div className="w-20 h-20 bg-slate-100 rounded-lg overflow-hidden shrink-0">
                <img alt="High quality architectural asphalt shingles sample" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxcHawBhjoIEiVs2azza1xzlWcA90j4_rKNTvZfJ8mlx_KopTMBB_GBGYCtsGC0xrVAJnxpC8zy6Y_7nT9q7vgQw_RfyvzRx6bnr3OqEOL0FU8wGAI8y3-jvf4kvjrd4Co1cUvmpYDMhmxuDha_8M8ioD39IReulZEavJHluAKgyoYxDp8mG4FnaSiAcvh-ncC1hBde_y4Al_F6sjnxeOKHrK_F_sA5ghWTpxwA-c0cNe0FdpsZsZKZKNFdMCowHW37QZrZUV8FZA"/>
              </div>
              <div>
                <h4 className="font-bold text-sm">Owens Corning Duration</h4>
                <p className="text-xs text-slate-500">Estate Gray - Limited Lifetime Warranty</p>
                <p className="text-primary font-bold mt-1">$4,850.00</p>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-primary/10 flex gap-4">
              <div className="w-20 h-20 bg-slate-100 rounded-lg overflow-hidden shrink-0">
                <img alt="Synthetic roofing underlayment roll for moisture protection" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeVSdipzi6iNgMl0IPim9WTsxSDPpLex8VkX3Xwo7rtBiqKbepFKJh-hHxtuYPRnqpHMOPRwMOdmbeqDPVfefI0iTzThCl9t17ovhqDVT61iX19fFoDTU3rYaIOJDqjJ6_tH6WwtUYmpXw2xzlwPqg9T-oi850qR8GlMTbuDE5IJSeTDwM7W8CMIhcwt1Aet_iNMoTbu6s0VeJFYFnDl-9LRx6EUln92S6bUIYs-gEVwC7WJyyjH4sR9OBvuNtfRbwctFiaDZEq7Q"/>
              </div>
              <div>
                <h4 className="font-bold text-sm">Synthetic Underlayment</h4>
                <p className="text-xs text-slate-500">WeatherLock G Granulated Self-Adhered</p>
                <p className="text-primary font-bold mt-1">$1,240.00</p>
              </div>
            </div>
          </div>
        </section>

        {/* Totals & Quote Summary */}
        <section className="p-6">
          <div className="bg-slate-900 text-white rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full -mr-16 -mt-16"></div>
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-end gap-6">
              <div>
                <p className="text-slate-400 text-sm uppercase tracking-widest mb-1">{t('proposal.totalInvestment')}</p>
                <h2 className="text-5xl font-extrabold text-primary">
                  {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(totalPrice)}
                </h2>
              </div>
              <div className="w-full md:w-auto text-right space-y-2">
                <div className="flex justify-between md:justify-end gap-8 text-sm text-slate-400">
                  <span>{t('proposal.laborPermits')}:</span>
                  <span className="text-white">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(laborPrice)}</span>
                </div>
                <div className="flex justify-between md:justify-end gap-8 text-sm text-slate-400">
                  <span>{t('proposal.materialsTotal')} (@ ${settings.unit_price}/sqft):</span>
                  <span className="text-white">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(materialsPrice)}</span>
                </div>
                <div className="h-px bg-slate-700 my-2"></div>
                <button className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-full transition-colors flex items-center justify-center gap-2">
                  {t('proposal.accept')} <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Terms and Conditions */}
        <section className="p-6 border-t border-slate-100 dark:border-slate-800">
          <h3 className="text-sm font-bold uppercase text-slate-400 mb-4 tracking-tighter">{t('proposal.terms')}</h3>
          <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed space-y-2 h-32 overflow-y-auto pr-2 custom-scrollbar">
            <p>1. <strong>Validity:</strong> This proposal is valid for 30 days from the date of issuance.</p>
            <p>2. <strong>Scope:</strong> Work is limited strictly to the items mentioned in the material breakdown. Any structural rot discovered during teardown will be billed at $85/hr plus materials.</p>
            <p>3. <strong>Payment:</strong> 40% deposit required upon signature, 60% due immediately upon project completion and inspection.</p>
            <p>4. <strong>Warranty:</strong> 10-year workmanship warranty provided by Falcon Point in addition to manufacturer material warranties.</p>
            <p>5. <strong>Permits:</strong> All municipal permits are included in the Labor &amp; Permits section unless otherwise specified.</p>
          </div>
        </section>

        {/* Digital Signature */}
        <section className="p-6 bg-slate-50 dark:bg-slate-800/50 mx-6 rounded-xl border-2 border-dashed border-slate-200 dark:border-slate-700 mb-12">
          <div className="flex flex-col items-center justify-center py-8">
            <span className="material-symbols-outlined text-4xl text-slate-300 mb-2">draw</span>
            <p className="text-sm text-slate-400 mb-6">{t('proposal.clickSign')}</p>
            <div className="w-full max-w-md h-32 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700 relative cursor-crosshair">
              {/* Signature placeholder */}
              <div className="absolute bottom-4 left-4 right-4 border-b border-slate-200"></div>
              <span className="absolute bottom-1 left-4 text-[10px] text-slate-400">{t('proposal.authSignature')}</span>
            </div>
          </div>
        </section>
      </div>

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-t border-primary/10 z-50">
        <div className="max-w-4xl mx-auto flex items-center justify-around p-2">
          <Link className="flex flex-col items-center gap-1 text-primary" to="/proposals">
            <span className="material-symbols-outlined">description</span>
            <span className="text-[10px] font-medium">{t('proposal.nav.proposal')}</span>
          </Link>
          <Link className="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors" to="/dashboard">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-[10px] font-medium">{t('proposal.nav.dash')}</span>
          </Link>
          <Link className="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors" to="/crm">
            <span className="material-symbols-outlined">group</span>
            <span className="text-[10px] font-medium">{t('proposal.nav.clients')}</span>
          </Link>
          <Link className="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors" to="/settings">
            <span className="material-symbols-outlined">settings</span>
            <span className="text-[10px] font-medium">{t('proposal.nav.settings')}</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
