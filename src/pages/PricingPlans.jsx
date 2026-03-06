import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { detectPlatform, purchasePlan, PLATFORMS } from '../services/billing';

export default function PricingPlans() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [platform, setPlatform] = useState(PLATFORMS.WEB);

  useEffect(() => {
    setPlatform(detectPlatform());
  }, []);

  const isMobile = platform === PLATFORMS.IOS || platform === PLATFORMS.ANDROID;

  const handleSelectPlan = async (plan) => {
    try {
      await purchasePlan(plan);
    } catch (error) {
      console.error('Failed to initiate purchase', error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <Link to="/settings" className="inline-flex items-center text-primary hover:text-emerald-400 mb-8 font-semibold">
            <span className="material-symbols-outlined mr-2">arrow_back</span>
            Back to Settings
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {t('pricing.choose_plan')}
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            {t('pricing.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-8">
          {/* Starter Plan */}
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 flex flex-col justify-between hover:border-primary transition-colors">
            <div>
              <h3 className="text-xl font-bold text-slate-200">{t('pricing.starter')}</h3>
              <p className="text-slate-400 text-sm mt-2 font-medium">{t('pricing.starterDesc')}</p>
              <div className="my-6">
                <span className="text-4xl font-black text-white">$99</span>
                <span className="text-slate-500 font-medium tracking-wide text-sm"> /mo</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-sm text-slate-300">
                  <span className="material-symbols-outlined text-primary mr-3 text-lg">check_circle</span>
                  100 Measurements per month
                </li>
                <li className="flex items-center text-sm text-slate-300">
                  <span className="material-symbols-outlined text-primary mr-3 text-lg">check_circle</span>
                  Basic Export (PDF)
                </li>
                <li className="flex items-center text-sm text-slate-500">
                  <span className="material-symbols-outlined text-slate-600 mr-3 text-lg">cancel</span>
                  No CRM integrations
                </li>
              </ul>
            </div>
            <button 
              onClick={() => handleSelectPlan('starter')}
              className="w-full py-3 px-4 rounded-xl font-bold bg-slate-700 hover:bg-slate-600 text-white transition-colors"
            >
              {isMobile ? t('pricing.subscribe_mobile') : t('pricing.chooseStarter')}
            </button>
          </div>

          {/* Professional Plan (Highlighted) */}
          <div className="bg-slate-800 border-2 border-primary rounded-2xl p-8 flex flex-col justify-between relative transform md:-translate-y-4 shadow-2xl shadow-primary/20">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
              {t('pricing.mostPopular')}
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">verified</span>
                {t('pricing.professional')}
              </h3>
              <p className="text-slate-400 text-sm mt-2 font-medium">{t('pricing.professionalDesc')}</p>
              <div className="my-6">
                <span className="text-4xl font-black text-white">$299</span>
                <span className="text-slate-500 font-medium tracking-wide text-sm"> /mo</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-sm text-slate-200 font-bold">
                  <span className="material-symbols-outlined text-primary mr-3 text-lg">check_circle</span>
                  Unlimited Measurements
                </li>
                <li className="flex items-center text-sm text-slate-300">
                  <span className="material-symbols-outlined text-primary mr-3 text-lg">check_circle</span>
                  Full CRM Integration & Pipeline
                </li>
                <li className="flex items-center text-sm text-slate-300">
                  <span className="material-symbols-outlined text-primary mr-3 text-lg">check_circle</span>
                  Advanced Digital Proposals
                </li>
                <li className="flex items-center text-sm text-slate-300">
                  <span className="material-symbols-outlined text-primary mr-3 text-lg">check_circle</span>
                  Team Management (5 users)
                </li>
              </ul>
            </div>
            <button 
              onClick={() => handleSelectPlan('professional')}
              className="w-full py-3 px-4 rounded-xl font-bold bg-primary hover:bg-emerald-400 text-slate-900 transition-colors shadow-lg shadow-primary/20 flex justify-center items-center gap-2"
            >
              {isMobile && <span className="material-symbols-outlined text-lg">phone_iphone</span>}
              {isMobile ? t('pricing.subscribe_mobile') : t('pricing.choosePro')}
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 flex flex-col justify-between hover:border-primary transition-colors">
            <div>
              <h3 className="text-xl font-bold text-slate-200">{t('pricing.enterprise')}</h3>
              <p className="text-slate-400 text-sm mt-2 font-medium">{t('pricing.enterpriseDesc')}</p>
              <div className="my-6">
                <span className="text-4xl font-black text-white">Custom</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-sm text-slate-300">
                  <span className="material-symbols-outlined text-primary mr-3 text-lg">check_circle</span>
                  Full API Access
                </li>
                <li className="flex items-center text-sm text-slate-300">
                  <span className="material-symbols-outlined text-primary mr-3 text-lg">check_circle</span>
                  24/7 Priority Support
                </li>
                <li className="flex items-center text-sm text-slate-300">
                  <span className="material-symbols-outlined text-primary mr-3 text-lg">check_circle</span>
                  Dedicated Account Manager
                </li>
                <li className="flex items-center text-sm text-slate-300">
                  <span className="material-symbols-outlined text-primary mr-3 text-lg">check_circle</span>
                  Custom Integration Logic
                </li>
              </ul>
            </div>
            <button 
              onClick={() => handleSelectPlan('enterprise')}
              className="w-full py-3 px-4 rounded-xl font-bold bg-slate-700 hover:bg-slate-600 text-white transition-colors"
            >
              {t('pricing.contact_sales')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
