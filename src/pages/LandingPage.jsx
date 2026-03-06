import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  const { t, i18n } = useTranslation();

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display text-left min-h-screen">
      {/* TopAppBar / Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-3xl">shield_with_house</span>
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100 uppercase">FALCON POINT</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#features">Features</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#integration">Integration</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#pricing">Pricing</a>
          </nav>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-1 text-xs font-bold text-slate-500 uppercase tracking-widest">
              <span className="text-primary">EN</span>
              <span className="mx-1">/</span>
              <span>ES</span>
              <span className="mx-1">/</span>
              <span>PT</span>
            </div>
            <Link to="/login" className="bg-primary text-white px-5 py-2 rounded-lg font-semibold text-sm hover:opacity-90 transition-all flex items-center justify-center">
              Sign In
            </Link>
          </div>
        </div>
      </header>
      
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col gap-6 max-w-2xl">
                <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 w-max">
                  v4.0 Launching Now
                </div>
                <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-slate-100">
                  Precision Measurement meets <span className="text-primary">powerful CRM</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                  The all-in-one operating system for high-growth tech teams. Manage SkyMetric data and customer relations in one unified interface.
                </p>
                <div className="flex flex-wrap gap-4 mt-4">
                  <Link to="/pricing" className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/20 hover:bg-[#0da372] active:scale-[0.98] transition-all flex items-center justify-center">
                    Get Started Free
                  </Link>
                  <Link to="/dashboard1" className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-all flex items-center justify-center">
                    View Demo
                  </Link>
                </div>
                <div className="flex items-center gap-4 mt-4 grayscale opacity-60">
                  <span className="text-xs font-semibold uppercase tracking-widest">Trusted by</span>
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined">api</span>
                    <span className="material-symbols-outlined">data_thresholding</span>
                    <span className="material-symbols-outlined">hub</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl">
                  <img alt="Dashboard Preview" className="w-full h-auto object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuKjLHgNLuEsCpJXN-w2wtrsNEY5kihPeLeWGvmuq2o543C-FRChJfvU1OIL4cF4pqY6tcJfcsTRuj0pHY34hVIxhZ_ZzYrr9_I7UaMKnhUJRFRgoPhDGTvegvPE351iwzJhtrWfvbMKBU6S88dqw3PeQx1nqYhqHDLSt6kaNl-1k3MKG-PEWMtsFV2iRhPGEGhw8x7hitUtWsg4ATpD16tS9rL8ABfqMHE1icV0AjGjVoEdFtLvNoj0EQxgrteA6qyy-Y42KK6cI"/>
                </div>
                {/* Floating element */}
                <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-900 p-4 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 hidden md:block">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/20 p-2 rounded-lg">
                      <span className="material-symbols-outlined text-primary">analytics</span>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium">SkyMetric Efficiency</p>
                      <p className="text-lg font-bold text-slate-900 dark:text-white">+42.5%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SkyMetric Integration Section */}
        <section className="bg-slate-50 dark:bg-slate-900/50 py-24" id="integration">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">SkyMetric Integration</h2>
              <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">Advanced Analytics for Modern Teams</h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                Seamlessly sync your SkyMetric data with our powerful CRM tools. Everything you need to scale performance is right here.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-primary/50 transition-colors group">
                <div className="mb-6 bg-slate-100 dark:bg-slate-700 w-14 h-14 rounded-xl flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <span className="material-symbols-outlined text-slate-600 dark:text-slate-300 group-hover:text-primary">timer</span>
                </div>
                <h4 className="text-xl font-bold mb-3">Real-time Tracking</h4>
                <p className="text-slate-600 dark:text-slate-400">Precision measurement at every touchpoint of your customer journey.</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-primary/50 transition-colors group">
                <div className="mb-6 bg-slate-100 dark:bg-slate-700 w-14 h-14 rounded-xl flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <span className="material-symbols-outlined text-slate-600 dark:text-slate-300 group-hover:text-primary">query_stats</span>
                </div>
                <h4 className="text-xl font-bold mb-3">Automated Reporting</h4>
                <p className="text-slate-600 dark:text-slate-400">Generate SkyMetric insights instantly with customizable automated workflows.</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-primary/50 transition-colors group">
                <div className="mb-6 bg-slate-100 dark:bg-slate-700 w-14 h-14 rounded-xl flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <span className="material-symbols-outlined text-slate-600 dark:text-slate-300 group-hover:text-primary">stars</span>
                </div>
                <h4 className="text-xl font-bold mb-3">Smart Lead Scoring</h4>
                <p className="text-slate-600 dark:text-slate-400">Prioritize high-value opportunities automatically based on behavioral metrics.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24" id="pricing">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Transparent Pricing</h2>
              <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">Built for scale, priced for growth</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Starter */}
              <div className="flex flex-col p-8 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 h-full">
                <div className="mb-8">
                  <h4 className="text-slate-500 font-bold uppercase text-xs tracking-widest mb-4">Starter</h4>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-black text-slate-900 dark:text-white">$49</span>
                    <span className="text-slate-500 text-sm ml-2">/month</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-center gap-3 text-sm">
                    <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                    Up to 5 users
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                    Basic SkyMetric data
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                    Email Support
                  </li>
                </ul>
                <button className="w-full py-3 rounded-xl border-2 border-primary text-primary font-bold hover:bg-primary/5 transition-colors">Get Started</button>
              </div>
              {/* Pro */}
              <div className="flex flex-col p-8 bg-slate-900 dark:bg-primary/10 rounded-3xl border-2 border-primary relative h-full transform md:-translate-y-4 shadow-2xl">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full">Most Popular</div>
                <div className="mb-8">
                  <h4 className="text-primary font-bold uppercase text-xs tracking-widest mb-4">Pro</h4>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-black text-white">$129</span>
                    <span className="text-slate-400 text-sm ml-2">/month</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8 flex-1 text-slate-300">
                  <li className="flex items-center gap-3 text-sm">
                    <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                    Unlimited users
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                    Full SkyMetric Integration
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                    Priority 24/7 Support
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                    Custom Dashboards
                  </li>
                </ul>
                <button className="w-full py-3 rounded-xl bg-primary text-white font-bold hover:bg-[#0da372] transition-colors">Choose Pro</button>
              </div>
              {/* Enterprise */}
              <div className="flex flex-col p-8 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 h-full">
                <div className="mb-8">
                  <h4 className="text-slate-500 font-bold uppercase text-xs tracking-widest mb-4">Enterprise</h4>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-black text-slate-900 dark:text-white">Custom</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-center gap-3 text-sm">
                    <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                    Multi-org Management
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                    Dedicated Account Manager
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                    On-premise Options
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                    Custom SLA
                  </li>
                </ul>
                <button className="w-full py-3 rounded-xl border-2 border-slate-900 dark:border-white font-bold hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-colors">Contact Sales</button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="text-3xl md:text-5xl font-black mb-6">Ready to scale your precision?</h2>
            <p className="text-primary-foreground/80 text-lg mb-10 max-w-xl mx-auto">
              Join over 2,500+ tech teams globally using Falcon Point OS to unify their data and customer management.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-slate-900 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all">Start 14-Day Free Trial</button>
              <button className="bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm text-white px-10 py-4 rounded-xl font-bold text-lg transition-all">Talk to an Expert</button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 dark:bg-slate-950 pt-20 pb-10 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
            <div className="col-span-2 lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-primary text-2xl">shield_with_house</span>
                <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white uppercase">FALCON POINT</span>
              </div>
              <p className="text-slate-500 max-w-sm text-sm leading-relaxed mb-6">
                The ultimate integration platform for teams who demand precision and growth.
              </p>
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-slate-400 hover:text-primary cursor-pointer">public</span>
                <span className="material-symbols-outlined text-slate-400 hover:text-primary cursor-pointer">hub</span>
                <span className="material-symbols-outlined text-slate-400 hover:text-primary cursor-pointer">share</span>
              </div>
            </div>
            
            <div>
              <h5 className="font-bold text-slate-900 dark:text-white mb-6">Product</h5>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><a className="hover:text-primary transition-colors" href="#">Integrations</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Analytics</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">CRM Features</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-bold text-slate-900 dark:text-white mb-6">Resources</h5>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><a className="hover:text-primary transition-colors" href="#">Documentation</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">API Reference</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Guides</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Changelog</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-bold text-slate-900 dark:text-white mb-6">Legal</h5>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Terms of Service</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Security</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-500 text-xs">© 2026 Falcon Point OS. All rights reserved.</p>
            <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-slate-400">
              <span className="text-primary hover:text-slate-600 cursor-pointer">English</span>
              <span className="hover:text-slate-600 cursor-pointer">Español</span>
              <span className="hover:text-slate-600 cursor-pointer">Português</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
