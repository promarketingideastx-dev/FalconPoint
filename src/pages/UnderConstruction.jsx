import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function UnderConstruction() {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col items-center justify-center text-slate-900 dark:text-white font-display p-6">
      <div className="bg-white dark:bg-slate-900 border border-primary/10 rounded-2xl p-8 max-w-md w-full text-center shadow-lg">
        <div className="size-20 bg-amber-500/10 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="material-symbols-outlined text-4xl">construction</span>
        </div>
        <h2 className="text-2xl font-bold mb-3 tracking-tight">Under Construction</h2>
        <p className="text-slate-500 text-sm mb-8">
          This feature or page is currently being built and will be available in a future update.
        </p>
        <button 
          onClick={() => navigate(-1)}
          className="bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors w-full flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined">arrow_back</span>
          Go Back
        </button>
      </div>
    </div>
  );
}
