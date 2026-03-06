import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function AdminSettings() {
  const { t, i18n } = useTranslation();
  const [activeModal, setActiveModal] = useState(null); // 'costItem', 'pricingRule', 'apiKey'

  const [salesTeam, setSalesTeam] = useState([
    { 
      id: 1, 
      name: 'Alex Rivera', 
      email: 'alex@geopoint.com', 
      roleKey: 'adminSettings.table.seniorSales', 
      region: 'North America', 
      performance: 85, 
      status: 'Active',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBH3oXJTYDcP1Hq9K5zCbsVjFkyq_oirCxEflSs1W7Zd5kbMKY3MARKTaMvLVjcb0raSe0PtP8lNGTH5dioeF2-mOsU7dl5l5gZp1AzG3fRJZIHQZB_5fPLMUJn9noJMeLDA59iri_iK7EEQ4zycdAKqzSrtoT5bIionIxTqJXTc50Do87xWFs9QjuCQ6kqUtXYG7jn6PQpBEQdZTKVw621CaphYUSw2qIP9E_uHpGha6fJa3ugvV1fX13RJHxGTL1g0wsx471JhMQ'
    },
    { 
      id: 2, 
      name: 'Beatriz Silva', 
      email: 'beatriz.s@geopoint.pt', 
      roleKey: 'adminSettings.table.accountExec', 
      region: 'Europe / PT', 
      performance: 62, 
      status: 'Active',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdDcRxvSWc2iSiiz7r-kLXz2rs0cXEiIEO3LBbSOi_pZiOVcWK_bAgy1yHSgkC3fKjP4gdHkn99H5nkC2tb4jWh30FN2guwJJ6cfwbAK2VSBc2XdDu7KAuLh4HGRELmh-6_515yICfwWsTjUUDFQV5aXT087YWB--N5csldTLIHfK_zHnlAfGqhkIEVFnw09IFiHhcX1LEFPcx6pt1CTjG5F3SZqlXQZOPcdhAzYWgQFJDhwjQdhDFgB-vyLO0j7J7gO0DqRdQhBQ'
    }
  ]);

  const handleAddSalesperson = () => {
    const newId = Date.now();
    const newPerson = {
      id: newId,
      name: `New Agent ${Math.floor(Math.random() * 1000)}`,
      email: `agent${newId.toString().slice(-4)}@geopoint.com`,
      roleKey: 'adminSettings.table.accountExec',
      region: 'Global',
      performance: 0,
      status: 'Pending',
      avatar: `https://ui-avatars.com/api/?name=New+Agent&background=0fb863&color=fff`
    };
    setSalesTeam([newPerson, ...salesTeam]);
  };

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang.toLowerCase());
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col text-left font-display">
      {/* Top Navigation / Header */}
      <header className="bg-white dark:bg-slate-900 border-b border-primary/10 px-4 md:px-8 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center">
              <img src="/falcon_point_logo_dark_mode/screen.png" alt="Falcon Point Logo" className="h-8 w-auto object-contain" />
            </div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">FALCON <span className="text-primary">POINT</span> Admin</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg p-1">
              <button 
                onClick={() => handleLanguageChange('EN')}
                className={`px-3 py-1 text-xs font-bold shadow-sm rounded uppercase ${i18n.language === 'en' ? 'bg-white dark:bg-slate-700 text-primary' : 'text-slate-500 hover:text-primary'}`}
              >EN</button>
              <button 
                onClick={() => handleLanguageChange('ES')}
                className={`px-3 py-1 text-xs font-bold shadow-sm rounded uppercase ${i18n.language === 'es' ? 'bg-white dark:bg-slate-700 text-primary' : 'text-slate-500 hover:text-primary'}`}
              >ES</button>
              <button 
                onClick={() => handleLanguageChange('PT')}
                className={`px-3 py-1 text-xs font-bold shadow-sm rounded uppercase ${i18n.language === 'pt' ? 'bg-white dark:bg-slate-700 text-primary' : 'text-slate-500 hover:text-primary'}`}
              >PT</button>
            </div>
            <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
              <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">notifications</span>
            </button>
            <div className="size-10 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center overflow-hidden">
              <img alt="Admin user profile avatar" className="size-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbdq8dnJ29V_2C1tZW76m0VZoZ3zmdk35dC5DshxC19T-b17KKS6jG8fUEWQdS2E3KaU5tRd_ClioP-Ira11y1SeqFREI8MFjiEnIbwFiDUUnWXUbCbjTYgP5iDPrjvcviBWpi8ys6DlH7D-ZNZgKQt1emg4ORmmVnSfgW6p83JY_JQK5e_FqT-7axWQMiPaI1BjHe7fgFcsVD5F59bl2oQyTl2yCwRk5Lp__GAikPXGoQgtfD4CbkkP6yQgUKVFA2mxN_sAOh8SM"/>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full p-4 md:p-8 space-y-8">
        {/* Tab Navigation */}
        <nav className="flex border-b border-slate-200 dark:border-slate-800 overflow-x-auto no-scrollbar">
          <Link className="px-6 py-4 border-b-2 border-primary text-primary font-semibold whitespace-nowrap flex items-center gap-2" to="/construction">
            <span className="material-symbols-outlined text-[20px]">group</span> {t('adminSettings.teamManagement')}
          </Link>
          <Link className="px-6 py-4 border-b-2 border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white whitespace-nowrap flex items-center gap-2 transition-colors" to="/pricing">
            <span className="material-symbols-outlined text-[20px]">credit_card</span> {t('adminSettings.subscriptionBilling')}
          </Link>
          <Link className="px-6 py-4 border-b-2 border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white whitespace-nowrap flex items-center gap-2 transition-colors" to="/construction">
            <span className="material-symbols-outlined text-[20px]">api</span> {t('adminSettings.apiConfig')}
          </Link>
        </nav>

        {/* Section: Team Management */}
        <section className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{t('adminSettings.salesTeam')}</h2>
              <p className="text-slate-500 text-sm">{t('adminSettings.salesTeamDesc')}</p>
            </div>
            <button onClick={handleAddSalesperson} className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all">
              <span className="material-symbols-outlined">person_add</span> {t('adminSettings.addSalesperson')}
            </button>
          </div>
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 text-xs font-bold uppercase tracking-wider">
                  <tr>
                    <th className="px-6 py-4">{t('adminSettings.table.nameEmail')}</th>
                    <th className="px-6 py-4">{t('adminSettings.table.role')}</th>
                    <th className="px-6 py-4">{t('adminSettings.table.region')}</th>
                    <th className="px-6 py-4">{t('adminSettings.table.performance')}</th>
                    <th className="px-6 py-4">{t('adminSettings.table.status')}</th>
                    <th className="px-6 py-4 text-right">{t('adminSettings.table.actions')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {salesTeam.map((person) => (
                    <tr key={person.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="size-10 rounded-full bg-slate-200 overflow-hidden shrink-0 border border-slate-200 dark:border-slate-700">
                            <img alt={person.name} src={person.avatar}/>
                          </div>
                          <div>
                            <div className="font-semibold text-slate-900 dark:text-white">{person.name}</div>
                            <div className="text-xs text-slate-500">{person.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium">{t(person.roleKey)}</td>
                      <td className="px-6 py-4 text-sm">{person.region}</td>
                      <td className="px-6 py-4">
                        <div className="w-24 bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-primary h-full transition-all duration-1000" style={{ width: `${person.performance}%` }}></div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${person.status === 'Active' ? 'bg-primary/10 text-primary' : 'bg-amber-500/10 text-amber-500'}`}>
                          {person.status === 'Active' ? t('adminSettings.table.active') : person.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-slate-400 hover:text-primary transition-colors"><span className="material-symbols-outlined">edit</span></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Pricing Rules & Cost Items */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">{t('adminSettings.costItems')}</h3>
              <button 
                onClick={() => setActiveModal('costItem')} 
                className="text-primary text-sm font-semibold hover:underline"
              >
                {t('adminSettings.addItem')}
              </button>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 space-y-4">
              <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <div>
                  <p className="text-sm font-bold">{t('adminSettings.pricing.dataEnrichment')}</p>
                  <p className="text-xs text-slate-500">{t('adminSettings.pricing.dataEnrichmentDesc')}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-primary">$4.50</p>
                  <p className="text-[10px] text-slate-400">{t('adminSettings.pricing.margin')}: 35%</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <div>
                  <p className="text-sm font-bold">{t('adminSettings.pricing.reverseGeocoding')}</p>
                  <p className="text-xs text-slate-500">{t('adminSettings.pricing.reverseGeocodingDesc')}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-primary">$0.12</p>
                  <p className="text-[10px] text-slate-400">{t('adminSettings.pricing.margin')}: 20%</p>
                </div>
              </div>
            </div>
          </section>
          
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">{t('adminSettings.dynamicPricing')}</h3>
              <button 
                onClick={() => setActiveModal('pricingRule')} 
                className="text-primary text-sm font-semibold hover:underline"
              >
                {t('adminSettings.newRule')}
              </button>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 space-y-4">
              <div className="flex items-center gap-4">
                <div className="size-10 shrink-0 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">sell</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold">{t('adminSettings.pricing.tier1')}</p>
                  <p className="text-xs text-slate-500">{t('adminSettings.pricing.tier1Desc')}</p>
                </div>
                <div className="form-switch cursor-pointer">
                  <div className="w-10 h-5 bg-primary rounded-full relative">
                    <div className="size-4 bg-white rounded-full absolute top-0.5 right-0.5 shadow-sm"></div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="size-10 shrink-0 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">public</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold">{t('adminSettings.pricing.latam')}</p>
                  <p className="text-xs text-slate-500">{t('adminSettings.pricing.latamDesc')}</p>
                </div>
                <div className="form-switch cursor-pointer">
                  <div className="w-10 h-5 bg-slate-300 dark:bg-slate-700 rounded-full relative">
                    <div className="size-4 bg-white rounded-full absolute top-0.5 left-0.5 shadow-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* API Configurations */}
        <section className="space-y-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">{t('adminSettings.coreApiIntegrations')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Google Maps */}
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="size-10 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center">
                  <img alt="Google" className="size-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKIHJ2Wo-doOuRuWNkVPA-MRbiQ2aLvRPGyqjnQaqw11cdyRj-fxaDNFjmLHgH3-uqx517sGjmv6Um0XOLuceO-J8Adug9Eq-kOHxaVxC3Ui2GXGx6bla6cAe11pl-518K_PkJeQANsBEqBkHbOjF5rl59Xcs_Wl8FZ8r53AHSoEg0ZpYW-6fHY3eukzY9c3OYocxRLVIB9mvMaeaeUQvunTJnnAjjCgZaOmeR8MoSifDldJ0rUP_CbSSCo_snY7v-UnerhdMp3hM"/>
                </div>
                <span className="flex items-center gap-1 text-[10px] font-bold text-primary uppercase">
                  <span className="size-2 rounded-full bg-primary"></span> {t('adminSettings.api.connected')}
                </span>
              </div>
              <div>
                <h4 className="font-bold text-sm">Google Cloud API</h4>
                <p className="text-xs text-slate-500">{t('adminSettings.api.googleDesc')}</p>
              </div>
              <div className="mt-auto">
                <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">{t('adminSettings.api.apiKey')}</label>
                <div className="flex items-center gap-2">
                  <input className="flex-1 bg-slate-50 dark:bg-slate-800 border-none rounded-lg text-xs py-2 px-3 focus:ring-primary outline-none" readOnly type="password" value="AIzaSyA_****************"/>
                  <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"><span className="material-symbols-outlined text-sm">visibility</span></button>
                </div>
              </div>
            </div>

            {/* Twilio */}
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="size-10 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center font-bold text-red-600 text-xl">
                  T
                </div>
                <span className="flex items-center gap-1 text-[10px] font-bold text-primary uppercase">
                  <span className="size-2 rounded-full bg-primary"></span> {t('adminSettings.api.connected')}
                </span>
              </div>
              <div>
                <h4 className="font-bold text-sm">Twilio SMS</h4>
                <p className="text-xs text-slate-500">{t('adminSettings.api.twilioDesc')}</p>
              </div>
              <div className="mt-auto">
                <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">ACCOUNT SID</label>
                <div className="flex items-center gap-2">
                  <input className="flex-1 bg-slate-50 dark:bg-slate-800 border-none rounded-lg text-xs py-2 px-3 focus:ring-primary outline-none" readOnly type="text" value="AC90234123..."/>
                  <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"><span className="material-symbols-outlined text-sm">settings</span></button>
                </div>
              </div>
            </div>

            {/* Resend */}
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="size-10 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-slate-900 dark:text-white">alternate_email</span>
                </div>
                <span className="flex items-center gap-1 text-[10px] font-bold text-amber-500 uppercase">
                  <span className="size-2 rounded-full bg-amber-500"></span> {t('adminSettings.api.checkConfig')}
                </span>
              </div>
              <div>
                <h4 className="font-bold text-sm">Resend Email</h4>
                <p className="text-xs text-slate-500">{t('adminSettings.api.resendDesc')}</p>
              </div>
              <div className="mt-auto">
                <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">{t('adminSettings.api.apiKey')}</label>
                <div className="flex items-center gap-2">
                  <input className="flex-1 bg-slate-50 dark:bg-slate-800 border border-red-500 rounded-lg text-xs py-2 px-3 focus:ring-primary outline-none" type="password" placeholder={t('adminSettings.api.missingKey')}/>
                  <button 
                    onClick={() => setActiveModal('apiKey')} 
                    className="bg-primary/10 text-primary p-2 rounded-lg hover:bg-primary/20 transition-colors"
                  >
                    <span className="material-symbols-outlined text-sm">save</span>
                  </button>
                </div>
                <p className="text-[10px] text-red-500 mt-1 font-semibold">{t('adminSettings.api.apiKeyReq')}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Bottom Navigation Bar (Mobile) */}
      <div className="md:hidden sticky bottom-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 px-4 py-2 flex items-center justify-between">
        <Link className="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors" to="/">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="text-[10px] font-medium">Dashboard</span>
        </Link>
        <Link className="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors" to="/crm">
          <span className="material-symbols-outlined">group</span>
          <span className="text-[10px] font-medium">{t('superAdmin.tenants')}</span>
        </Link>
        <Link className="flex flex-col items-center gap-1 text-primary transition-colors" to="/settings">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>settings</span>
          <span className="text-[10px] font-medium">{t('superAdmin.settings')}</span>
        </Link>
        <Link className="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors" to="/skymetric">
          <span className="material-symbols-outlined">article</span>
          <span className="text-[10px] font-medium">{t('superAdmin.apiLogs')}</span>
        </Link>
      </div>

      {/* Tailwind UI Modal Placeholder overlay */}
      {activeModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl p-6 w-full max-w-md space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Feature Under Construction</h3>
              <button onClick={() => setActiveModal(null)} className="text-slate-400 hover:text-slate-600 transition-colors">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <p className="text-slate-500 text-sm">This internal tool is currently disabled pending backend database synchronization. Modals will be fully interactive soon.</p>
            <button onClick={() => setActiveModal(null)} className="w-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold py-3 rounded-lg transition-colors">
              Close Preview
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-900 mt-auto py-6 border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-xs">{t('adminSettings.footer.rights')}</p>
          <div className="flex gap-6">
            <Link className="text-xs text-slate-400 hover:text-primary transition-colors" to="/construction">{t('adminSettings.footer.privacy')}</Link>
            <Link className="text-xs text-slate-400 hover:text-primary transition-colors" to="/construction">{t('adminSettings.footer.status')}</Link>
            <Link className="text-xs text-slate-400 hover:text-primary transition-colors" to="/construction">{t('adminSettings.footer.docs')}</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
