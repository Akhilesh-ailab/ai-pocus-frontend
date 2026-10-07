import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation, Link } from 'react-router-dom';
import { Activity, LayoutDashboard, Users, FilePlus2, BrainCircuit, LogOut, FileText, Settings, HelpCircle, Menu, X } from 'lucide-react';
import ConsentModal from '../components/dashboard/ConsentModal';
import { AUTH_ROUTES } from '../constants/authConstants';

export default function DashboardLayout() {
  const [hasConsented, setHasConsented] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const session = localStorage.getItem('aipocus_session');
    if (session) {
      setCurrentUser(JSON.parse(session));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('aipocus_session');
    navigate(AUTH_ROUTES.LOGIN);
  };

  const globalNavItems = [
    { label: 'Dashboard', path: AUTH_ROUTES.DASHBOARD, icon: LayoutDashboard },
    { label: 'Cases', path: AUTH_ROUTES.CASES, icon: Users },
    { label: 'New Case CRF', path: AUTH_ROUTES.NEW_CRF, icon: FilePlus2 },
    { label: 'AI Analysis', path: AUTH_ROUTES.AI_ANALYSIS, icon: BrainCircuit },
  ];

  const resourceItems = [
    { label: 'Study Protocol', path: AUTH_ROUTES.PROTOCOL, icon: FileText },
    { label: 'Settings', path: AUTH_ROUTES.SETTINGS, icon: Settings },
    { label: 'Help & Support', path: AUTH_ROUTES.SUPPORT, icon: HelpCircle },
  ];

  return (
    // Root container must span full screen height with no scroll
    <div className="flex h-screen bg-slate-50 font-sans overflow-hidden">
      
      {/* Consent Modal (Covers entire screen when active) */}
      {!hasConsented && (
        <div className="fixed inset-0 z-[100]">
          <ConsentModal onAccept={() => setHasConsented(true)} onDecline={handleLogout} />
        </div>
      )}

      {/* Mobile Dark Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/60 z-30 md:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      
      {/* 
        LEFT COLUMN: FULL-HEIGHT SIDEBAR 
        Absolute on mobile (slides in), Relative on desktop (always visible) 
      */}
      <aside 
        className={`fixed inset-y-0 left-0 z-40 w-72 bg-white border-r border-slate-200 flex flex-col transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${
          isMobileMenuOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'
        }`}
      >
        {/* Sidebar Header (Brand Logo) */}
        <div className="h-16 flex items-center px-6 border-b border-slate-200 flex-shrink-0">
          <Activity className="h-6 w-6 text-blue-600 mr-2" />
          <span className="text-xl font-bold tracking-wider text-slate-900">AI-POCUS</span>
        </div>

        {/* Sidebar Navigation (Scrollable) */}
        <div className="flex-1 overflow-y-auto p-5">
          <nav className="space-y-1.5 mt-2">
            {globalNavItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={index}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 text-base rounded-xl transition-colors cursor-pointer ${
                    isActive 
                      ? 'bg-blue-50 text-blue-700 font-bold' 
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-semibold'
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full flex-shrink-0 ${isActive ? 'bg-blue-600' : 'bg-transparent'}`} />
                  <item.icon className={`h-5 w-5 flex-shrink-0 ${isActive ? 'text-blue-700' : 'text-slate-400'}`} />
                  <span className="text-left">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="my-8 border-t border-slate-100"></div>

          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 px-4">Resources</p>
          <nav className="space-y-1">
            {resourceItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={index}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`w-full flex items-center space-x-3 px-4 py-2.5 text-sm rounded-xl transition-colors cursor-pointer ${
                    isActive 
                      ? 'bg-blue-50 text-blue-700 font-bold' 
                      : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800 font-medium'
                  }`}
                >
                  <item.icon className={`h-4 w-4 flex-shrink-0 ${isActive ? 'text-blue-700' : 'text-slate-400'}`} />
                  <span className="text-left">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
        
        {/* Sidebar Footer (Status & Dept) */}
        <div className="p-5 bg-white flex-shrink-0">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-5 shadow-sm">
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0"></div>
              <p className="text-xs font-bold text-slate-700 uppercase tracking-wider">System Status</p>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">Secure connection. Data sync is up to date.</p>
          </div>

          <div className="pt-2 text-sm text-slate-500 leading-relaxed border-t border-slate-100">
            <p className="font-semibold text-slate-700">Dept. of Trauma & Emergency</p>
            <p>AIIMS Raipur</p>
          </div>
        </div>
      </aside>

      {/* 
        RIGHT COLUMN: HEADER & MAIN CONTENT 
      */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-6 z-10 flex-shrink-0">
          
          <div className="flex items-center">
            {/* Mobile Hamburger Menu Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 -ml-2 text-slate-600 hover:bg-slate-100 rounded-lg cursor-pointer transition-colors"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* User Profile & Logout */}
          <div className="flex items-center space-x-4">
            <div className="text-right hidden sm:block text-sm">
              <p className="font-medium text-slate-900">{currentUser?.name || 'Dr. Investigator'}</p>
              <p className="text-slate-500 text-xs capitalize">{currentUser?.role || 'Clinician'}</p>
            </div>
            <button 
              onClick={handleLogout} 
              className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
              title="Logout"
            >
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        </header>

        {/* Main Scrollable Content Area */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-10 relative">
          <div className="max-w-6xl mx-auto">
            {hasConsented && <Outlet />}
          </div>
        </main>

      </div>
    </div>
  );
}