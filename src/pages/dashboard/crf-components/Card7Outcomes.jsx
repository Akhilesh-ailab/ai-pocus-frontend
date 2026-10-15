import React from 'react';
import { FileCheck } from 'lucide-react';

const FormChip = ({ label, selected, onClick }) => (
  <div onClick={onClick} className={`px-4 py-2 rounded-full text-sm font-medium border cursor-pointer transition-all duration-200 select-none hover:-translate-y-0.5 ${selected ? 'bg-blue-600 border-blue-600 text-white shadow-md' : 'bg-white border-slate-300 text-slate-600 hover:bg-slate-50 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm'}`}>
    {label}
  </div>
);

export default function Card7Outcomes({ data = {}, update }) {
  
  const toggleArray = (key, val) => {
    const arr = data[key] || [];
    update(key, arr.includes(val) ? arr.filter(item => item !== val) : [...arr, val]);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md hover:border-blue-300 transition-all duration-300">
      <div className="bg-slate-50 border-b border-slate-200 p-5 flex items-center gap-3">
        <div className="p-2 bg-blue-100 text-blue-700 rounded-lg"><FileCheck className="h-6 w-6" /></div>
        <h2 className="text-lg font-bold text-slate-900 font-serif">Card 7: Impressions & Outcomes</h2>
      </div>
      
      <div className="p-6 md:p-8 space-y-8">
        
        <div>
          <h3 className="text-base font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">G. Clinician POCUS-Based Impression</h3>
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              {['Cardiogenic shock / Pulmonary edema', 'Hypovolemic shock', 'Septic shock', 'Obstructive shock (PE / Tamponade / Tension ptx)', 'Mixed/Indeterminate'].map(opt => (
                <FormChip key={opt} label={opt} selected={data.impression === opt} onClick={() => update('impression', opt)} />
              ))}
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100">
          <h3 className="text-base font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">I. Reference Standard / Final Composite Diagnosis</h3>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-700">Final diagnosis (Based on labs, imaging, specialist opinion, and clinical course)</label>
            <input type="text" value={data.finalDiagnosis || ''} onChange={e => update('finalDiagnosis', e.target.value)} placeholder="Enter final composite diagnosis..." className="w-full p-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm" />
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100">
          <h3 className="text-base font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">J. ED Management and Outcomes</h3>
          <div className="space-y-6">
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-slate-700">ED interventions (Select all that apply)</label>
              <div className="flex flex-wrap gap-2 items-center">
                {['Fluids', 'Vasopressors', 'NIV', 'Intubation', 'Antibiotics', 'Diuretics', 'Thrombolysis'].map(opt => (
                  <FormChip key={opt} label={opt} selected={data.interventions?.includes(opt)} onClick={() => toggleArray('interventions', opt)} />
                ))}
                <FormChip label="Other" selected={data.interventions?.includes('Other')} onClick={() => toggleArray('interventions', 'Other')} />
                {data.interventions?.includes('Other') && (
                  <input type="text" placeholder="Specify other..." value={data.otherIntervention || ''} onChange={e => update('otherIntervention', e.target.value)} className="ml-2 p-2 bg-white border border-slate-300 rounded-full focus:ring-2 focus:ring-blue-500 text-sm w-48" />
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700">Time to definitive diagnosis (minutes)</label>
                <input type="number" value={data.timeToDiagnosis || ''} onChange={e => update('timeToDiagnosis', e.target.value)} className="w-full p-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm" />
              </div>
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-slate-700">ED disposition</label>
                <div className="flex flex-wrap gap-2">
                  {['Ward', 'ICU', 'Discharge', 'Death'].map(opt => (
                    <FormChip key={opt} label={opt} selected={data.disposition === opt} onClick={() => update('disposition', opt)} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100">
          <h3 className="text-base font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">K. Follow-Up Outcomes</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-slate-700">ICU admission</label>
              <div className="flex flex-wrap gap-2">
                {['Yes', 'No'].map(opt => (
                  <FormChip key={`icu-${opt}`} label={opt} selected={data.icuAdmit === opt} onClick={() => update('icuAdmit', opt)} />
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700">Hospital length of stay (days)</label>
              <input type="number" value={data.los || ''} onChange={e => update('los', e.target.value)} className="w-full p-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm" />
            </div>
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-slate-700">30-day outcome</label>
              <div className="flex flex-wrap gap-2">
                {['Alive', 'Deceased', 'Lost to follow-up'].map(opt => (
                  <FormChip key={opt} label={opt} selected={data.outcome30 === opt} onClick={() => update('outcome30', opt)} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-blue-50 border border-blue-200 p-6 rounded-xl">
          <h3 className="text-base font-bold text-blue-900 mb-4">L. Investigator Declaration</h3>
          <div className="space-y-4">
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" checked={data.declarationChecked || false} onChange={e => update('declarationChecked', e.target.checked)} className="mt-1 h-5 w-5 rounded border-blue-400 text-blue-600 focus:ring-blue-600" required />
              <span className="text-sm text-blue-800 font-medium">
                I verify that the primary survey and POCUS examinations have been recorded accurately based on the established clinical workflow and data protocol.
              </span>
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-blue-800 uppercase tracking-wider">Investigator Signature / Initials</label>
                <input type="text" value={data.investigatorSignature || ''} onChange={e => update('investigatorSignature', e.target.value)} placeholder="e.g. Dr. A.B." className="w-full p-2.5 bg-white border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm" required />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-blue-800 uppercase tracking-wider">Date</label>
                <input type="date" value={data.declarationDate || ''} onChange={e => update('declarationDate', e.target.value)} className="w-full p-2.5 bg-white border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm text-slate-700" required />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}