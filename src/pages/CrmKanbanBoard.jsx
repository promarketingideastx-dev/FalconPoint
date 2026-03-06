import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useProjects } from '../hooks/useProjects';

export default function CrmKanbanBoard() {
  const { t } = useTranslation();
  const { projects, loading, updateProjectStatus } = useProjects();

  const handleDragStart = (e, projectId) => {
    e.dataTransfer.setData('projectId', projectId);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, newStatus) => {
    e.preventDefault();
    const projectId = e.dataTransfer.getData('projectId');
    if (projectId) {
      updateProjectStatus(projectId, newStatus);
    }
  };

  const renderColumn = (status, title, dotColor, badgeClass) => {
    const colProjects = projects.filter(p => p.status === status);
    return (
      <div 
        className="kanban-column flex flex-col gap-4 w-80"
        onDragOver={handleDragOver}
        onDrop={(e) => handleDrop(e, status)}
      >
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${dotColor}`}></span>
            <h3 className="font-bold text-slate-700 dark:text-slate-300">{title}</h3>
            <span className="text-xs font-bold bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full text-slate-500">
              {loading ? '...' : colProjects.length}
            </span>
          </div>
          <span className="material-symbols-outlined text-slate-400 cursor-pointer">more_horiz</span>
        </div>
        
        <div className="flex flex-col gap-3 min-h-[50px]">
          {colProjects.map((project) => (
            <div 
              key={project.id}
              draggable
              onDragStart={(e) => handleDragStart(e, project.id)}
              className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:border-primary/50 cursor-grab transition-all"
            >
              <div className="flex justify-between items-start mb-3">
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${badgeClass}`}>
                  {project.customer.substring(0, 10)}
                </span>
                <span className="text-xs font-bold text-primary">
                  {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumSignificantDigits: 4 }).format(project.value || 0)}
                </span>
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-4">{project.title}</h4>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="size-6 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center overflow-hidden text-[10px] font-bold text-slate-500">
                    JD
                  </div>
                  <span className="text-xs text-slate-500 dark:text-slate-400">{t('crm.salesRep')}</span>
                </div>
                {status === 'Won' && <span className="material-symbols-outlined text-primary">verified</span>}
                {status !== 'Won' && <span className="material-symbols-outlined text-slate-400 text-sm">attach_file</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display min-h-screen">
      <div className="flex flex-col min-h-screen">
        {/* Top Navigation */}
        <nav className="sticky top-0 z-50 flex items-center justify-between bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 h-16">
          <div className="flex items-center gap-3">
            <img src="/falcon_point_logo_dark_mode/screen.png" alt="Falcon Point Logo" className="h-10 w-auto object-contain" />
            <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">FALCON POINT</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg p-1">
              <button className="px-3 py-1 text-xs font-bold bg-white dark:bg-slate-700 shadow-sm rounded-md text-primary">EN</button>
            </div>
            <button className="flex items-center justify-center size-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold border border-primary/30">
              JD
            </div>
          </div>
        </nav>

        {/* Sub Header */}
        <div className="p-4 md:px-6 flex flex-col md:flex-row md:items-center justify-between gap-4 text-left">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{t('crm.projectPipeline')}</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm">{t('crm.managing')} {loading ? '...' : projects.length} {t('crm.activeProjects')}</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-primary hover:bg-emerald-600 text-white px-5 py-2.5 rounded-lg font-semibold transition-colors shadow-sm">
              <span className="material-symbols-outlined text-lg">add</span>
              <span>{t('crm.newProject')}</span>
            </button>
          </div>
        </div>

        {/* Kanban Board Container */}
        <main className="flex-1 overflow-x-auto hide-scrollbar p-4 md:px-6 h-[calc(100vh-180px)] text-left">
          <div className="flex gap-6 h-full min-w-max">
            {renderColumn('Captured', t('crm.captured'), 'bg-blue-500', 'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400')}
            {renderColumn('Measured', t('crm.measured'), 'bg-amber-500', 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400')}
            {renderColumn('Quoted', t('crm.quoted'), 'bg-primary', 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400')}
            {renderColumn('Won', t('crm.contracted'), 'bg-slate-800 dark:bg-white', 'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-400')}
          </div>
        </main>

        {/* Bottom Mobile Nav */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex justify-around p-3 z-50">
          <Link className="flex flex-col items-center gap-1 text-primary" to="/crm">
            <span className="material-symbols-outlined">view_kanban</span>
            <span className="text-[10px] font-bold">{t('crm.nav.board')}</span>
          </Link>
          <Link className="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors" to="/dashboard2">
            <span className="material-symbols-outlined">folder</span>
            <span className="text-[10px] font-bold">{t('crm.nav.projects')}</span>
          </Link>
          <Link className="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors" to="/">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-[10px] font-bold">{t('crm.nav.admin')}</span>
          </Link>
          <Link className="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors" to="/settings">
            <span className="material-symbols-outlined">settings</span>
            <span className="text-[10px] font-bold">{t('crm.nav.settings')}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
