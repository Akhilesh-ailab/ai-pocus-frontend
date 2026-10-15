import React from 'react';
import { Activity } from 'lucide-react';

const FormChip = ({ label, selected, onClick }) => (
  <div onClick={onClick} className={`px-4 py-2 rounded-full text-sm font-medium border cursor-pointer transition-all duration-200 select-none hover:-translate-y-0.5 ${selected ? 'bg-blue-600 border-blue-600 text-white shadow-md' : 'bg-white border-slate-300 text-slate-600 hover:bg-slate-50 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm'}`}>
    {label}
  </div>
);

export default function Card6IVC({ data = {}, update }) {
  const ivcMax = parseFloat(data.ivcMax);
  const ivcMin = parseFloat(data.ivcMin);
  const ci = (!isNaN(ivcMax) && !isNaN(ivcMin) && ivcMax > 0) 
    ? (((ivcMax - ivcMin) / ivcMax) * 100).toFixed(1) 
    : '';

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md hover:border-blue-300 transition-all duration-300">
      <div className="bg-slate-50 border-b border-slate-200 p-5 flex items-center gap-3">
        <div className="p-2 bg-blue-100 text-blue-700 rounded-lg"><Activity className="h-6 w-6" /></div>
        <h2 className="text-lg font-bold text-slate-900 font-serif">Card 6: Inferior Vena Cava (IVC) Assessment</h2>
      </div>
      
      <div className="p-6 md:p-8 space-y-6">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-700">Maximum IVC diameter (end-expiration, cm)</label>
            <input 
              type="number" step="0.1" 
              value={data.ivcMax || ''} 
              onChange={e => update('ivcMax', e.target.value)} 
              className="w-full p-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm" 
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-700">Minimum IVC diameter (end-inspiration, cm)</label>
            <input 
              type="number" step="0.1" 
              value={data.ivcMin || ''} 
              onChange={e => update('ivcMin', e.target.value)} 
              className="w-full p-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm" 
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-700">Collapsibility Index (CI %)</label>
            <div className="relative">
              <input 
                type="text" 
                readOnly 
                value={ci ? `${ci}%` : ''} 
                placeholder="Auto-calculated" 
                className="w-full p-2.5 bg-slate-50 border border-slate-200 text-blue-700 rounded-lg text-sm font-bold" 
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-4">
            <h4 className="font-bold text-blue-800 text-sm uppercase tracking-wider">Qualitative Assessment</h4>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-600">Respiratory variation</label>
                <div className="flex flex-wrap gap-2">
                  {['Normal', 'Reduced', 'Absent'].map(opt => <FormChip key={`resp-${opt}`} label={opt} selected={data.ivcResp === opt} onClick={() => update('ivcResp', opt)} />)}
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-600">IVC shape</label>
                <div className="flex flex-wrap gap-2">
                  {['Normal', 'Plethoric', 'Slit-like'].map(opt => <FormChip key={`shape-${opt}`} label={opt} selected={data.ivcShape === opt} onClick={() => update('ivcShape', opt)} />)}
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-600">Hepatic vein flow (if visualized)</label>
                <div className="flex flex-wrap gap-2">
                  {['Normal', 'Pulsatile'].map(opt => <FormChip key={`hepa-${opt}`} label={opt} selected={data.hepaticFlow === opt} onClick={() => update('hepaticFlow', opt)} />)}
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-4">
            <h4 className="font-bold text-blue-800 text-sm uppercase tracking-wider">Image Adequacy (Operator Assessment)</h4>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-600">Visualization of IVC walls</label>
                <div className="flex flex-wrap gap-2">
                  {['Good', 'Fair', 'Poor'].map(opt => <FormChip key={`ivcw-${opt}`} label={opt} selected={data.ivcWalls === opt} onClick={() => update('ivcWalls', opt)} />)}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-slate-600">Resp. variation clearly seen</label>
                  <div className="flex flex-wrap gap-2">
                    {['Yes', 'No'].map(opt => <FormChip key={`ivcrvs-${opt}`} label={opt} selected={data.ivcRespSeen === opt} onClick={() => update('ivcRespSeen', opt)} />)}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-slate-600">Measurement reproducible</label>
                  <div className="flex flex-wrap gap-2">
                    {['Yes', 'No'].map(opt => <FormChip key={`ivcmr-${opt}`} label={opt} selected={data.ivcRepro === opt} onClick={() => update('ivcRepro', opt)} />)}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-slate-600">Motion / bowel gas artifact</label>
                  <div className="flex flex-wrap gap-2">
                    {['Minimal', 'Significant'].map(opt => <FormChip key={`ivcma-${opt}`} label={opt} selected={data.ivcArtifact === opt} onClick={() => update('ivcArtifact', opt)} />)}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-slate-600">Overall adequacy</label>
                  <div className="flex flex-wrap gap-2">
                    {['Adequate', 'Inadequate'].map(opt => <FormChip key={`ivcoa-${opt}`} label={opt} selected={data.ivcAdequacy === opt} onClick={() => update('ivcAdequacy', opt)} />)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-slate-700">IVC Collapsibility Category</label>
            <div className="flex flex-col gap-2">
              {[
                '>50% collapse -> Highly collapsible', 
                '20-50% collapse -> Intermediate', 
                '<20% collapse -> Poorly collapsible / Plethoric'
              ].map(opt => (
                <div key={opt} onClick={() => update('ivcCat', opt)} className={`px-4 py-3 rounded-xl text-sm font-medium border cursor-pointer transition-all hover:-translate-y-0.5 select-none ${data.ivcCat === opt ? 'bg-blue-600 border-blue-600 text-white shadow-md' : 'bg-white border-slate-300 text-slate-600 hover:bg-slate-50'}`}>
                  {opt}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-semibold text-slate-700">Hemodynamic Interpretation (Clinician)</label>
            <div className="flex flex-col gap-2">
              {['Low preload / fluid responsive', 'Indeterminate / euvolemic', 'High preload / volume overload'].map(opt => (
                <div key={`hemo-${opt}`} onClick={() => update('ivcHemo', opt)} className={`px-4 py-3 rounded-xl text-sm font-medium border cursor-pointer transition-all hover:-translate-y-0.5 select-none ${data.ivcHemo === opt ? 'bg-blue-600 border-blue-600 text-white shadow-md' : 'bg-white border-slate-300 text-slate-600 hover:bg-slate-50'}`}>
                  {opt}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-slate-700">Remarks</label>
          <textarea value={data.ivcRemarks || ''} onChange={e => update('ivcRemarks', e.target.value)} placeholder="Additional IVC observations..." className="w-full p-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm min-h-[80px]"></textarea>
        </div>
      </div>
    </div>
  );
}