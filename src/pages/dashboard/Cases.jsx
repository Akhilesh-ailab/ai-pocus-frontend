import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Plus, Filter } from 'lucide-react';
import { AUTH_ROUTES } from '../../constants/authConstants';

const FilterChip = ({ label, selected, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors cursor-pointer ${
      selected 
        ? 'bg-blue-600 border-blue-600 text-white shadow-sm' 
        : 'bg-white border-slate-300 text-slate-600 hover:bg-slate-50'
    }`}
  >
    {label}
  </button>
);

export default function Cases() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const allCases = [
    { id: 'RPR-0143', patient: 'J.D., 42M', presentation: 'Both', enrolled: '2026-10-06', status: 'Draft', statusType: 'draft' },
    { id: 'RPR-0142', patient: 'M.K., 58M', presentation: 'Dyspnea', enrolled: '2026-09-28', status: 'In progress', statusType: 'active' },
    { id: 'RPR-0141', patient: 'S.T., 34F', presentation: 'Shock', enrolled: '2026-09-28', status: 'Critical', statusType: 'critical' },
    { id: 'RPR-0140', patient: 'A.P., 71M', presentation: 'Both', enrolled: '2026-09-27', status: 'Locked', statusType: 'locked' },
    { id: 'RPR-0139', patient: 'R.D., 45F', presentation: 'Dyspnea', enrolled: '2026-09-27', status: 'Locked', statusType: 'locked' },
    { id: 'RPR-0138', patient: 'V.N., 62M', presentation: 'Shock', enrolled: '2026-09-26', status: 'Locked', statusType: 'locked' },
  ];

  const filteredCases = allCases.filter(c => {
    const matchesSearch = c.id.toLowerCase().includes(searchTerm.toLowerCase()) || c.patient.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || c.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out">
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-4">
        <h1 className="text-3xl font-bold text-slate-900 font-serif">Cases</h1>
        
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search Study ID or Patient..." 
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm shadow-sm transition-shadow hover:shadow-md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button 
            onClick={() => navigate(AUTH_ROUTES.NEW_CRF)}
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-lg shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap"
          >
            <Plus className="h-4 w-4" /> New case
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2 pb-4 border-b border-slate-200 overflow-x-auto">
        <Filter className="h-4 w-4 text-slate-400 mr-1 flex-shrink-0" />
        {['All', 'Draft', 'In progress', 'Critical', 'Locked'].map(status => (
          <FilterChip 
            key={status}
            label={status}
            selected={statusFilter === status}
            onClick={() => setStatusFilter(status)}
          />
        ))}
      </div>

      <div className="bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-500 border-b border-slate-200 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-semibold">Study ID</th>
                <th className="px-6 py-4 font-semibold">Patient</th>
                <th className="px-6 py-4 font-semibold">Presentation</th>
                <th className="px-6 py-4 font-semibold">Enrolled</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {filteredCases.length > 0 ? (
                filteredCases.map((p, i) => (
                  <tr key={i} className="hover:bg-blue-50/50 transition-colors group cursor-pointer">
                    <td className="px-6 py-4 font-mono text-slate-900 font-medium group-hover:text-blue-600 transition-colors">{p.id}</td>
                    <td className="px-6 py-4">{p.patient}</td>
                    <td className="px-6 py-4">{p.presentation}</td>
                    <td className="px-6 py-4 font-mono text-slate-500">{p.enrolled}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold inline-block
                        ${p.statusType === 'active' ? 'bg-blue-100 text-blue-700' : 
                          p.statusType === 'critical' ? 'bg-red-100 text-red-700' :
                          p.statusType === 'draft' ? 'bg-amber-100 text-amber-700' : 
                          'bg-slate-100 text-slate-600'}`}
                      >
                        {p.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button 
                        onClick={() => p.statusType === 'locked' ? navigate(AUTH_ROUTES.AI_ANALYSIS) : navigate(AUTH_ROUTES.NEW_CRF)}
                        className="text-blue-600 hover:text-blue-800 font-medium text-sm hover:underline cursor-pointer"
                      >
                        {p.statusType === 'locked' ? 'View AI' : 'Edit'}
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="px-6 py-8 text-center text-slate-500">
                    No cases match your filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}