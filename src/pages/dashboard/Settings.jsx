import React, { useState, useEffect } from 'react';
import { Settings as SettingsIcon, User, Lock, Save } from 'lucide-react';
import { CLINICAL_ROLES } from '../../constants/authConstants';

export default function Settings() {
  const [profile, setProfile] = useState({ name: '', role: '', email: 'investigator@aiims.edu' });

  useEffect(() => {
    const session = JSON.parse(localStorage.getItem('aipocus_session'));
    if (session) {
      setProfile(prev => ({ ...prev, name: session.name, role: session.role }));
    }
  }, []);

  const handleSave = (e) => {
    e.preventDefault();
    const session = JSON.parse(localStorage.getItem('aipocus_session')) || {};
    session.name = profile.name;
    session.role = profile.role;
    localStorage.setItem('aipocus_session', JSON.stringify(session));
    alert('Settings saved successfully!');
    window.location.reload(); // Refresh to update the top right header
  };

  return (
    <div className="max-w-3xl space-y-6 animate-in fade-in duration-500">
      
      <div className="border-b border-slate-200 pb-5">
        <h1 className="text-3xl font-bold text-slate-900 font-serif flex items-center gap-3">
          <SettingsIcon className="h-8 w-8 text-blue-600" />
          Settings
        </h1>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        
        <form onSubmit={handleSave} className="p-6 md:p-8 space-y-8">
          
          {/* Profile Section */}
          <div>
            <h2 className="text-lg font-bold text-slate-900 font-serif flex items-center gap-2 mb-4 border-b border-slate-100 pb-2">
              <User className="h-5 w-5 text-blue-600" /> Profile Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700">Full Name</label>
                <input 
                  type="text" 
                  value={profile.name}
                  onChange={(e) => setProfile({...profile, name: e.target.value})}
                  className="w-full p-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm" 
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700">Clinical Role</label>
                <select 
                  value={profile.role}
                  onChange={(e) => setProfile({...profile, role: e.target.value})}
                  className="w-full p-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                >
                  <option value="">Select Role...</option>
                  {CLINICAL_ROLES.map(r => (
                    <option key={r.value} value={r.value}>{r.label}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="block text-sm font-semibold text-slate-700">Email Address</label>
                <input type="email" value={profile.email} disabled className="w-full p-2.5 bg-slate-50 border border-slate-200 text-slate-500 rounded-lg text-sm" />
                <p className="text-xs text-slate-400">Contact admin to change your institutional email.</p>
              </div>
            </div>
          </div>

          {/* Security Section */}
          <div className="pt-2">
            <h2 className="text-lg font-bold text-slate-900 font-serif flex items-center gap-2 mb-4 border-b border-slate-100 pb-2">
              <Lock className="h-5 w-5 text-blue-600" /> Account Security
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700">New Password</label>
                <input type="password" placeholder="••••••••" className="w-full p-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm" />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700">Confirm Password</label>
                <input type="password" placeholder="••••••••" className="w-full p-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm" />
              </div>
            </div>
          </div>

          <div className="flex justify-end border-t border-slate-100 pt-6">
            <button type="submit" className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-lg shadow-sm flex items-center gap-2 transition-colors cursor-pointer">
              <Save className="h-4 w-4" /> Save Changes
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}