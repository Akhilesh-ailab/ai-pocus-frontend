import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Search, Activity, AlertTriangle, ShieldCheck, Clock, ArrowUpRight } from 'lucide-react';
import { AUTH_ROUTES } from '../../constants/authConstants';

export default function PatientList() {
  const navigate = useNavigate();

  const recentCases = [
    { id: 'RPR-0142', patient: 'M.K., 58M', presentation: 'Dyspnea', enrolled: '2026-09-28', status: 'In progress', statusType: 'active' },
    { id: 'RPR-0141', patient: 'S.T., 34F', presentation: 'Shock', enrolled: '2026-09-28', status: 'Critical', statusType: 'critical' },
    { id: 'RPR-0140', patient: 'A.P., 71M', presentation: 'Both', enrolled: '2026-09-27', status: 'Locked', statusType: 'locked' },
    { id: 'RPR-0139', patient: 'R.D., 45F', presentation: 'Dyspnea', enrolled: '2026-09-27', status: 'Locked', statusType: 'locked' },
    { id: 'RPR-0138', patient: 'V.N., 62M', presentation: 'Shock', enrolled: '2026-09-26', status: 'Locked', statusType: 'locked' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Top Header Actions */}
      <div className="flex justify-between items-center border-b border-slate-200 pb-4">
        <div>
          <h1 className="text-2xl font-bold font-serif text-slate-900">Emergency Triage Registry</h1>
          <p className="text-sm text-slate-500">Live AI-POCUS monitoring for trauma & emergency admissions.</p>
        </div>
        <button 
          onClick={() => navigate(AUTH_ROUTES.NEW_CRF)}
          className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer active:scale-95"
        >
          <Plus className="h-4 w-4" /> New case
        </button>
      </div>

      {/* Stat Cards with Hover & Lift */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default">
          <div className="flex items-center justify-between mb-2">
            <div className="text-3xl font-bold font-serif text-slate-900">1,248</div>
            <div className="p-2 bg-blue-50 text-blue-600 rounded-xl"><Activity className="h-5 w-5" /></div>
          </div>
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Cases</div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default" style={{ animationDelay: '100ms' }}>
          <div className="flex items-center justify-between mb-2">
            <div className="text-3xl font-bold font-serif text-slate-900">23</div>
            <div className="p-2 bg-amber-50 text-amber-600 rounded-xl"><Clock className="h-5 w-5" /></div>
          </div>
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Active Cases</div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default" style={{ animationDelay: '200ms' }}>
          <div className="flex items-center justify-between mb-2">
            <div className="text-3xl font-bold font-serif text-slate-900">1,102</div>
            <div className="p-2 bg-purple-50 text-purple-600 rounded-xl"><ShieldCheck className="h-5 w-5" /></div>
          </div>
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">AI Analyses</div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default" style={{ animationDelay: '300ms' }}>
          <div className="flex items-center justify-between mb-2">
            <div className="text-3xl font-bold font-serif text-slate-900">1,078</div>
            <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl"><Activity className="h-5 w-5" /></div>
          </div>
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Completed</div>
        </div>
      </div>

      {/* Chart Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Cases by Presentation */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default">
          <h3 className="text-base font-bold text-slate-900 font-serif mb-6">Cases by presentation</h3>
          <div className="space-y-4">
            {[
              { label: 'Dyspnea', pct: '68%', count: '848 cases' },
              { label: 'Shock', pct: '40%', count: '499 cases' },
              { label: 'Both', pct: '28%', count: '349 cases' }
            ].map((item, i) => (
              <div key={item.label} className="space-y-1.5">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-slate-700">{item.label}</span>
                  <span className="text-slate-400 text-xs">{item.count} ({item.pct})</span>
                </div>
                <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 rounded-full animate-in slide-in-from-left duration-1000" style={{ width: item.pct, animationDelay: `${i * 150}ms` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* POCUS Completion */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default">
          <h3 className="text-base font-bold text-slate-900 font-serif mb-6">POCUS completion rate</h3>
          <div className="space-y-4">
            {[
              { label: 'Lung Protocol', pct: '98%', status: 'Optimal' },
              { label: 'Cardiac (FATE)', pct: '94%', status: 'High' },
              { label: 'IVC Assessment', pct: '89%', status: 'Standard' }
            ].map((item, i) => (
              <div key={item.label} className="space-y-1.5">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-slate-700">{item.label}</span>
                  <span className="text-blue-600 font-bold text-xs">{item.pct}</span>
                </div>
                <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 rounded-full animate-in slide-in-from-left duration-1000" style={{ width: item.pct, animationDelay: `${i * 150}ms` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Additional Quick Feature Card */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-950 p-6 rounded-2xl text-white shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h3 className="text-lg font-bold font-serif mb-1">Need protocol guidelines or clinical support?</h3>
          <p className="text-blue-200 text-sm">Review the standardized AIIMS Raipur BLUE/FATE protocols in our resource center.</p>
        </div>
        <button 
          onClick={() => navigate(AUTH_ROUTES.PROTOCOL)}
          className="px-5 py-2.5 bg-white text-blue-950 hover:bg-blue-50 text-sm font-bold rounded-xl shadow-sm transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap active:scale-95"
        >
          View Protocols <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>

      {/* Cases Table Section */}
      <div className="pt-2">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-slate-900 font-serif">Recent Cases</h3>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search ID..." 
              className="pl-9 pr-4 py-2 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm shadow-sm transition-all focus:shadow-md"
            />
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-500 border-b border-slate-200 text-xs uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4 font-semibold">Study ID</th>
                  <th className="px-6 py-4 font-semibold">Patient</th>
                  <th className="px-6 py-4 font-semibold">Presentation</th>
                  <th className="px-6 py-4 font-semibold">Enrolled</th>
                  <th className="px-6 py-4 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {recentCases.map((p, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors cursor-pointer group" onClick={() => navigate(AUTH_ROUTES.AI_ANALYSIS)}>
                    <td className="px-6 py-4 font-mono text-slate-900 font-medium group-hover:text-blue-600 transition-colors">{p.id}</td>
                    <td className="px-6 py-4">{p.patient}</td>
                    <td className="px-6 py-4">{p.presentation}</td>
                    <td className="px-6 py-4 font-mono text-slate-500">{p.enrolled}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold
                        ${p.statusType === 'active' ? 'bg-blue-100 text-blue-700' : 
                          p.statusType === 'critical' ? 'bg-red-100 text-red-700' : 
                          'bg-slate-100 text-slate-600'}`}
                      >
                        {p.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  );
}