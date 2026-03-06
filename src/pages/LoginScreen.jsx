import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useStore } from '../store/useStore';

export default function LoginScreen() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { setUser } = useStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang.toLowerCase());
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoggingIn(true);
    
    // DEMO MODE BYPASS
    if (import.meta.env.VITE_FIREBASE_API_KEY?.includes('placeholder') || !import.meta.env.VITE_FIREBASE_API_KEY) {
      setTimeout(() => {
        setUser({
          uid: 'demo_user_001',
          email: email || 'demo@falconpoint.os',
          displayName: 'Demo Agent',
          role: 'superadmin',
          org_id: 'org_falcon_01',
          authorized_orgs: ['org_falcon_01']
        });
        navigate('/');
      }, 1000);
      return;
    }

    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      navigate('/');
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        setError('Email is already registered. Please sign in.');
      } else {
        // Expose the EXACT Firebase error message to the UI for debugging
        setError(`Error: ${err.message}`);
      }
      console.error(err);
    } finally {
      setIsLoggingIn(false);
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex flex-col text-left">
      <header className="w-full flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="text-primary size-10 flex items-center justify-center bg-primary/10 rounded-lg">
            <span className="material-symbols-outlined text-3xl">security</span>
          </div>
          <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold tracking-tight uppercase">FALCON POINT</h2>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex bg-slate-200/50 dark:bg-slate-800/50 p-1 rounded-lg">
            <button 
              onClick={() => handleLanguageChange('EN')}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${i18n.language === 'en' ? 'bg-white dark:bg-slate-700 shadow-sm text-slate-900 dark:text-white' : 'text-slate-500 hover:text-primary'}`}
            >EN</button>
            <button 
              onClick={() => handleLanguageChange('ES')}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${i18n.language === 'es' ? 'bg-white dark:bg-slate-700 shadow-sm text-slate-900 dark:text-white' : 'text-slate-500 hover:text-primary'}`}
            >ES</button>
            <button 
              onClick={() => handleLanguageChange('PT')}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${i18n.language === 'pt' ? 'bg-white dark:bg-slate-700 shadow-sm text-slate-900 dark:text-white' : 'text-slate-500 hover:text-primary'}`}
            >PT</button>
          </div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-12 relative z-10">
        <div className="w-full max-w-[440px] space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center justify-center p-6 bg-primary/10 rounded-2xl mb-6 relative">
              <span className="material-symbols-outlined text-primary text-6xl" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48" }}>security</span>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-xl translate-y-[-2px] translate-x-[2px]" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48" }}>location_on</span>
              </div>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              {isSignUp ? t('login.createAccountTitle') : t('login.welcomeBackTitle')}
            </h1>
            <p className="text-slate-500 dark:text-slate-400">
              {isSignUp ? t('login.createDesc') : t('login.loginDesc')}
            </p>
          </div>
          
          <div className="bg-white dark:bg-slate-900 shadow-xl shadow-slate-200/50 dark:shadow-none rounded-xl p-8 border border-slate-100 dark:border-slate-800">
            <form className="space-y-5" onSubmit={handleLogin}>
              <div className="space-y-2 relative">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">{t('login.emailLabel')}</label>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">mail</span>
                  <input 
                    className="w-full pl-12 pr-4 py-3.5 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-slate-400 outline-none" 
                    placeholder={t('login.emailPlaceholder')} 
                    type="email" 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-2 relative">
                <div className="flex justify-between items-center px-1">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">{t('login.passwordLabel')}</label>
                  <a className="text-xs font-medium text-primary hover:underline" href="/construction">{t('login.forgotPassword')}</a>
                </div>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">lock</span>
                  <input 
                    className="w-full pl-12 pr-12 py-3.5 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-slate-400 outline-none" 
                    placeholder="••••••••" 
                    type="password" 
                    required 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600" type="button">
                    <span className="material-symbols-outlined text-xl">visibility</span>
                  </button>
                </div>
              </div>
              <div className="flex items-center space-x-2 px-1 pb-2">
                <input className="rounded border-slate-300 text-primary focus:ring-primary" id="remember" type="checkbox"/>
                <label className="text-sm text-slate-600 dark:text-slate-400 cursor-pointer" htmlFor="remember">{t('login.staySignedIn')}</label>
              </div>
              {error && (
                <div className="p-3 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-sm font-semibold rounded-lg flex items-center gap-2">
                  <span className="material-symbols-outlined text-lg">error</span>
                  {error}
                </div>
              )}
              
              <button 
                type="submit" 
                disabled={isLoggingIn}
                className="w-full bg-primary hover:bg-primary/90 disabled:opacity-70 text-white font-bold py-4 rounded-lg shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                {isLoggingIn ? (isSignUp ? t('login.creating') : t('login.authenticating')) : (isSignUp ? t('login.createAccountBtn') : t('login.signInBtn'))}
                {!isLoggingIn && <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>}
              </button>
            </form>
            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 text-center">
              <p className="text-sm text-slate-500">
                {isSignUp ? t('login.alreadyHaveAccount') : t('login.newToPlatform')} 
                <button 
                  type="button" 
                  onClick={() => setIsSignUp(!isSignUp)}
                  className="text-primary font-bold hover:underline ml-1"
                >
                  {isSignUp ? t('login.signInBtn') : t('login.createAccountBtn')}
                </button>
              </p>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-6 mt-12 opacity-80">
            <div className="flex items-center gap-8">
              <div className="h-8 w-px bg-slate-300 dark:bg-slate-700"></div>
              <div className="flex items-center gap-2 text-slate-400">
                <span className="material-symbols-outlined">verified_user</span>
                <span className="text-xs font-medium tracking-widest uppercase">{t('login.secureArchitecture')}</span>
              </div>
              <div className="h-8 w-px bg-slate-300 dark:bg-slate-700"></div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center grayscale opacity-50">
                <span className="material-symbols-outlined text-sm">cloud</span>
              </div>
              <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center grayscale opacity-50">
                <span className="material-symbols-outlined text-sm">security</span>
              </div>
              <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center grayscale opacity-50">
                <span className="material-symbols-outlined text-sm">hub</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="p-6 text-center text-slate-400 dark:text-slate-600 text-xs relative z-10">
        {t('login.footer')}
      </footer>
      
      <div className="fixed bottom-0 right-0 p-8 pointer-events-none opacity-20">
        <div className="w-96 h-96 bg-primary rounded-full blur-[120px]"></div>
      </div>
    </div>
  );
}
