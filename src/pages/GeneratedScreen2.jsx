import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function GeneratedScreen2() {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value.toLowerCase());
  };

  return (
    <div className="bg-white text-slate-900 font-sans antialiased min-h-screen flex flex-col text-left">
      <style>
        {`
          .calendar-grid {
            display: grid;
            grid-template-columns: 80px repeat(2, 1fr);
            min-height: 600px;
          }
          .time-slot {
            height: 60px;
            border-bottom: 1px solid #e2e8f0;
          }
          .work-order-card {
            cursor: grab;
            transition: transform 0.2s;
          }
          .work-order-card:active {
            cursor: grabbing;
            transform: scale(0.98);
          }
        `}
      </style>

      {/* MainHeader */}
      <header className="flex items-center justify-between px-4 py-3 border-b border-slate-200 sticky top-0 bg-white z-50">
        <div className="flex items-center gap-3">
          {/* Logo Container */}
          <div className="relative w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center overflow-hidden">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L4 5V11C4 16.1 7.4 20.8 12 22C16.6 20.8 20 16.1 20 11V5L12 2Z" fill="currentColor"></path>
              <path d="M12 7C11 7 9 8 9 11C9 14 12 16 12 16C12 16 15 14 15 11C15 8 13 7 12 7Z" fill="#10B981"></path>
            </svg>
          </div>
          <h1 className="text-xl font-bold tracking-tight text-slate-900">FALCON POINT</h1>
        </div>
        
        {/* Language Selector */}
        <div className="flex items-center gap-2">
          <select 
            value={i18n.language.toUpperCase()} 
            onChange={handleLanguageChange}
            className="text-xs border-slate-200 rounded-md py-1 pr-8 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
          >
            <option value="EN">EN</option>
            <option value="ES">ES</option>
            <option value="PT">PT</option>
          </select>
        </div>
      </header>

      {/* MainContent */}
      <main className="flex flex-col flex-1">
        {/* View Switcher & Actions */}
        <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="flex bg-white rounded-lg p-1 shadow-sm border border-slate-200">
            <button className="px-4 py-1.5 text-xs font-semibold rounded-md bg-emerald-500 text-white">Daily</button>
            <button className="px-4 py-1.5 text-xs font-semibold rounded-md text-slate-600">Weekly</button>
          </div>
          <div className="text-sm font-medium">Oct 24, 2026</div>
        </div>

        <div className="flex flex-1 overflow-hidden flex-col md:flex-row">
          {/* DispatchCalendar */}
          <section className="flex-1 overflow-y-auto border-r border-slate-200 md:min-h-0 min-h-[400px]">
            <div className="calendar-grid">
              {/* Header for Columns */}
              <div className="sticky top-0 bg-white border-b border-slate-200"></div>
              <div className="sticky top-0 bg-white border-b border-slate-200 p-2 text-center font-bold text-xs uppercase tracking-wider text-slate-500">Crew 1</div>
              <div className="sticky top-0 bg-white border-b border-slate-200 p-2 text-center font-bold text-xs uppercase tracking-wider text-slate-500">Crew 2</div>

              {/* Time Rows */}
              {/* 08:00 */}
              <div className="time-slot flex items-center justify-center text-[10px] text-slate-400 font-medium">08:00 AM</div>
              <div className="time-slot border-r border-slate-100 p-1 relative">
                <div className="work-order-card bg-emerald-50 border-l-4 border-emerald-500 p-2 rounded shadow-sm text-xs h-full" draggable="true">
                  <div className="font-bold text-emerald-900">WO-8821</div>
                  <div className="text-[10px] text-emerald-700 truncate">Roof Inspection</div>
                </div>
              </div>
              <div className="time-slot p-1"></div>

              {/* 09:00 */}
              <div className="time-slot flex items-center justify-center text-[10px] text-slate-400 font-medium">09:00 AM</div>
              <div className="time-slot border-r border-slate-100 p-1"></div>
              <div className="time-slot p-1">
                <div className="work-order-card bg-slate-100 border-l-4 border-slate-400 p-2 rounded shadow-sm text-xs" draggable="true">
                  <div className="font-bold text-slate-900">WO-8825</div>
                  <div className="text-[10px] text-slate-600 truncate">Site Prep</div>
                </div>
              </div>

              {/* 10:00 */}
              <div className="time-slot flex items-center justify-center text-[10px] text-slate-400 font-medium">10:00 AM</div>
              <div className="time-slot border-r border-slate-100 p-1"></div>
              <div className="time-slot p-1"></div>

              {/* 11:00 */}
              <div className="time-slot flex items-center justify-center text-[10px] text-slate-400 font-medium">11:00 AM</div>
              <div className="time-slot border-r border-slate-100 p-1"></div>
              <div className="time-slot p-1"></div>
            </div>
          </section>

          {/* SideMap */}
          <aside className="w-full md:w-1/3 flex flex-col bg-slate-50 border-t md:border-t-0 border-slate-200">
            <div className="p-3 border-b border-slate-200 flex justify-between items-center bg-white">
              <h2 className="text-xs font-bold text-slate-500 uppercase">Unassigned Orders</h2>
              <span className="bg-emerald-100 text-emerald-700 text-[10px] px-2 py-0.5 rounded-full font-bold">4</span>
            </div>
            
            {/* Mock Map Area */}
            <div className="flex-1 relative bg-slate-200 overflow-hidden min-h-[200px]">
              <img alt="Map of Work Orders" className="w-full h-full object-cover opacity-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqahrtPpp4T43ZKgfKiJTNLF9J5Ljoi_-fz6-mpzIE0VI-RuaERVZVoQPn0iSKy4sJ0XVu7bihqsgAL9BvYJEViIDoVLOA1r2olcSMC1lQJ6U1G5SY1FyqeBCsuPovoxwjI1tjafgNP06JdptUF5xvLSj-9Ez5SF53DdU0PS8g_Zd2LcesycpFZoxUeZXfU0Wv6BalBcWRmnBtaM2hietF87Exy0DWW4tm0hREFHM6gWA_pimPMU7JOBwi3lNuKcE0sImzn966_OM"/>
              
              {/* Map Pins */}
              <div className="absolute top-1/4 left-1/3 group cursor-pointer">
                <div className="bg-emerald-500 w-6 h-6 rounded-full border-2 border-white shadow-lg flex items-center justify-center text-white text-[10px] font-bold">1</div>
                <div className="hidden group-hover:block absolute top-8 left-0 bg-white p-2 rounded shadow-xl border border-slate-200 z-10 w-32">
                  <p className="text-[10px] font-bold">WO-9012</p>
                  <p className="text-[9px] text-slate-500">1.2 miles away</p>
                </div>
              </div>
              <div className="absolute top-1/2 left-2/3 group cursor-pointer">
                <div className="bg-slate-900 w-6 h-6 rounded-full border-2 border-white shadow-lg flex items-center justify-center text-white text-[10px] font-bold">2</div>
              </div>
            </div>
            
            {/* Scrollable Unassigned List */}
            <div className="h-[200px] md:h-1/3 bg-white border-t border-slate-200 overflow-y-auto p-2 space-y-2">
              <div className="border border-slate-200 rounded p-2 text-xs hover:border-emerald-500 transition-colors cursor-move">
                <div className="flex justify-between font-bold">
                  <span>WO-9045</span>
                  <span className="text-emerald-500">$$</span>
                </div>
                <p className="text-[10px] text-slate-500">Emergency Repair</p>
              </div>
              <div className="border border-slate-200 rounded p-2 text-xs hover:border-emerald-500 transition-colors cursor-move">
                <div className="flex justify-between font-bold">
                  <span>WO-9048</span>
                  <span className="text-slate-400">$</span>
                </div>
                <p className="text-[10px] text-slate-500">Standard Maintenance</p>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* NavigationFooter */}
      <footer className="bg-white border-t border-slate-200 px-6 py-2 flex justify-around items-center">
        <button className="flex flex-col items-center gap-1 text-emerald-500">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
          <span className="text-[10px] font-bold uppercase">Schedule</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-slate-400 hover:text-emerald-500 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
          <span className="text-[10px] font-bold uppercase">Map</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-slate-400 hover:text-emerald-500 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
          <span className="text-[10px] font-bold uppercase">Crews</span>
        </button>
      </footer>
    </div>
  );
}
