import React, { useState } from 'react';
import { FileCheck, Stethoscope } from 'lucide-react';

const FormChip = ({ label, selected, onClick, color = 'blue' }) => {
  const baseStyle = "px-4 py-2 rounded-full text-sm font-medium border cursor-pointer transition-colors select-none";
  const activeStyle = `bg-${color}-600 border-${color}-600 text-white shadow-sm`;
  const inactiveStyle = "bg-white border-slate-300 text-slate-600 hover:bg-slate-50";
  let specificActive = activeStyle;
  if (selected && (color === 'Red' || color === 'red')) specificActive = 'bg-red-600 border-red-600 text-white shadow-sm';

  return (
    <div onClick={onClick} className={`${baseStyle} ${selected ? specificActive : inactiveStyle}`}>
      {label}
    </div>
  );
};

export default function Card5Outcomes() {
  const [impression, setImpression] = useState('');
  const [disposition, setDisposition] = useState('');

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md hover:border-blue-300 hover:-translate-y-1 transition-all duration-300">
      <div className="bg-slate-50 border-b border-slate-200 p-5 flex items-center gap-3">
        <div className="p-2 bg-blue-100 text-blue-700 rounded-lg"><FileCheck className="h-6 w-6" /></div>
        <h2 className="text-lg font-bold text-slate-900 font-serif">Card 5: Impressions & Final Outcomes</h2>
      </div>

      <div className="p-6 md:p-8 space-y-8">
        <div>
          <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-100">
            <Stethoscope className="h-5 w-5 text-slate-700" />
            <h3 className="text-base font-bold text-slate-900">G. Clinician POCUS-Based Impression</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {['Cardiogenic shock / Pulmonary edema', 'Hypovolemic shock', 'Septic shock', 'Obstructive shock', 'Mixed/Indeterminate'].map(opt => (
              <FormChip key={opt} label={opt} selected={impression === opt} onClick={() => setImpression(opt)} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-base font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">J. ED Management & Outcomes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3 md:col-span-2 pt-2 border-t border-slate-100">
              <label className="block text-sm font-semibold text-slate-700">ED Disposition</label>
              <div className="flex flex-wrap gap-3">
                {['Ward', 'ICU', 'Discharge', 'Death'].map(disp => (
                  <FormChip 
                    key={disp} 
                    label={disp} 
                    color={disp === 'Death' ? 'red' : 'blue'}
                    selected={disposition === disp} 
                    onClick={() => setDisposition(disp)} 
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}