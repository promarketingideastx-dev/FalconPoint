import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './i18n'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <React.Suspense fallback={<div className="h-screen w-full bg-[#0F172A] flex items-center justify-center text-emerald-500 font-bold tracking-widest uppercase">Initializing...</div>}>
      <App />
    </React.Suspense>
  </React.StrictMode>,
)
