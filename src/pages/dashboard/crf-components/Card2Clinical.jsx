import React from 'react';
import { Activity } from 'lucide-react';

const FormChip = ({ label, selected, onClick }) => (
  <div onClick={onClick} className={`px-4 py-2 rounded-full text-sm font-medium border cursor-pointer transition-all duration-200 select-none hover:-translate-y-0.5 ${selected ? 'bg-blue-600 border-blue-600 text-white shadow-md' : 'bg-white border-slate-300 text-slate-600 hover:bg-slate-50 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm'}`}>
    {label}
  </div>
);

export default function Card2Clinical({ data = {}, update }) {
  
  const toggleArray = (key, val) => {
    const arr = data[key] || [];
    update(key, arr.includes(val) ? arr.filter(item => item !== val) : [...arr, val]);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md hover:border-blue-300 transition-all duration-300">
      <div className="bg-slate-50 border-b border-slate-200 p-5 flex items-center gap-3">
        <div className="p-2 bg-blue-100 text-blue-700 rounded-lg"><Activity className="h-6 w-6" /></div>
        <h2 className="text-lg font-bold text-slate-900 font-serif">Card 2: Primary Survey (ABCDE Format)</h2>
      </div>
      
      <div className="p-6 md:p-8 space-y-8">
        
        {/* A - Airway with Cervical Spine Control */}
        <div>
          <h3 className="text-base font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">A. Airway with Cervical Spine Control</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-slate-700">Airway</label>
              <div className="flex flex-wrap gap-2">
                {['Patent', 'Threatened', 'Obstructed'].map(opt => (
                  <FormChip key={opt} label={opt} selected={data.airway === opt} onClick={() => update('airway', opt)} />
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-slate-700">Sounds</label>
              <div className="flex flex-wrap gap-2">
                {['Normal', 'Snoring', 'Gurgling', 'Stridor'].map(opt => (
                  <FormChip key={opt} label={opt} selected={data.sounds === opt} onClick={() => update('sounds', opt)} />
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-slate-700">Airway adjunct used</label>
              <div className="flex flex-wrap gap-2">
                {['None', 'OPA', 'NPA', 'ETT'].map(opt => (
                  <FormChip key={opt} label={opt} selected={data.adjunct === opt} onClick={() => update('adjunct', opt)} />
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-slate-700">Cervical spine protection</label>
              <div className="flex flex-wrap gap-2">
                {['Yes', 'No'].map(opt => (
                  <FormChip key={opt} label={opt} selected={data.cspine === opt} onClick={() => update('cspine', opt)} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* B - Breathing */}
        <div className="pt-4 border-t border-slate-100">
          <h3 className="text-base font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">B. Breathing</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700">Respiratory rate (/min)</label>
              <input type="number" value={data.respRate || ''} onChange={e => update('respRate', e.target.value)} className="w-full p-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm" />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700">SpO2 on arrival (%)</label>
              <input type="number" value={data.spo2 || ''} onChange={e => update('spo2', e.target.value)} className="w-full p-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm" />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700">FiO2</label>
              <input type="text" value={data.fio2 || ''} onChange={e => update('fio2', e.target.value)} className="w-full p-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-slate-700">Chest movement</label>
              <div className="flex flex-wrap gap-2">
                {['Symmetrical', 'Asymmetrical'].map(opt => (
                  <FormChip key={opt} label={opt} selected={data.chestMov === opt} onClick={() => update('chestMov', opt)} />
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-slate-700">Accessory muscle use</label>
              <div className="flex flex-wrap gap-2">
                {['Yes', 'No'].map(opt => (
                  <FormChip key={opt} label={opt} selected={data.accMuscle === opt} onClick={() => update('accMuscle', opt)} />
                ))}
              </div>
            </div>
            <div className="space-y-3 md:col-span-2">
              <label className="block text-sm font-semibold text-slate-700">Breath sounds</label>
              <div className="flex flex-wrap gap-2">
                {['Normal', 'Reduced', 'Absent', 'Crepitations', 'Wheeze'].map(opt => (
                  <FormChip key={opt} label={opt} selected={data.breath === opt} onClick={() => update('breath', opt)} />
                ))}
              </div>
            </div>
            <div className="space-y-3 md:col-span-2">
              <label className="block text-sm font-semibold text-slate-700">Immediate intervention (Select all that apply)</label>
              <div className="flex flex-wrap gap-2">
                {['O2', 'NIV', 'Intubation', 'Needle decompression'].map(opt => (
                  <FormChip key={opt} label={opt} selected={data.interventions?.includes(opt)} onClick={() => toggleArray('interventions', opt)} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* C - Circulation */}
        <div className="pt-4 border-t border-slate-100">
          <h3 className="text-base font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">C. Circulation</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700">Pulse rate (/min)</label>
              <input type="number" value={data.pulseRate || ''} onChange={e => update('pulseRate', e.target.value)} className="w-full p-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm" />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700">Blood pressure (mmHg)</label>
              <input type="text" placeholder="120/80" value={data.bloodPressure || ''} onChange={e => update('bloodPressure', e.target.value)} className="w-full p-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm" />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700">Capillary refill time (sec)</label>
              <input type="number" value={data.capRefill || ''} onChange={e => update('capRefill', e.target.value)} className="w-full p-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-slate-700">Peripheral pulses</label>
              <div className="flex flex-wrap gap-2">
                {['Present', 'Weak', 'Absent'].map(opt => (
                  <FormChip key={opt} label={opt} selected={data.pulses === opt} onClick={() => update('pulses', opt)} />
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-slate-700">Skin</label>
              <div className="flex flex-wrap gap-2">
                {['Warm', 'Cold', 'Clammy'].map(opt => (
                  <FormChip key={opt} label={opt} selected={data.skin === opt} onClick={() => update('skin', opt)} />
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-slate-700">IV/IO access</label>
              <div className="flex flex-wrap gap-2">
                {['IV', 'IO', 'Central line'].map(opt => (
                  <FormChip key={opt} label={opt} selected={data.access === opt} onClick={() => update('access', opt)} />
                ))}
              </div>
            </div>
            
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-slate-700">Fluids/vasopressors initiated</label>
              <div className="flex flex-wrap gap-2 items-center">
                {['Yes', 'No'].map(opt => (
                  <FormChip key={opt} label={opt} selected={data.fluids === opt} onClick={() => update('fluids', opt)} />
                ))}
                {data.fluids === 'Yes' && (
                  <input 
                    type="text" 
                    placeholder="Specify..." 
                    value={data.fluidsSpecify || ''}
                    onChange={(e) => update('fluidsSpecify', e.target.value)}
                    className="ml-2 p-2 bg-white border border-slate-300 rounded-full focus:ring-2 focus:ring-blue-500 text-sm transition-all shadow-sm w-40 md:w-48" 
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* D - Disability */}
        <div className="pt-4 border-t border-slate-100">
          <h3 className="text-base font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">D. Disability</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            
            {/* GCS Grid */}
            <div className="space-y-3 md:col-span-2">
              <label className="block text-sm font-semibold text-slate-700">GCS (Glasgow Coma Scale)</label>
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-slate-600">E</span>
                  <input type="number" min="1" max="4" value={data.gcsE || ''} onChange={e => update('gcsE', e.target.value)} placeholder="4" className="w-16 p-2 bg-white border border-slate-300 rounded-lg text-center text-sm" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-slate-600">V</span>
                  <input type="number" min="1" max="5" value={data.gcsV || ''} onChange={e => update('gcsV', e.target.value)} placeholder="5" className="w-16 p-2 bg-white border border-slate-300 rounded-lg text-center text-sm" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-slate-600">M</span>
                  <input type="number" min="1" max="6" value={data.gcsM || ''} onChange={e => update('gcsM', e.target.value)} placeholder="6" className="w-16 p-2 bg-white border border-slate-300 rounded-lg text-center text-sm" />
                </div>
                <div className="flex items-center gap-2 pl-4 border-l border-slate-200">
                  <span className="text-sm font-bold text-slate-900">Total</span>
                  <input type="text" readOnly value={(Number(data.gcsE||0) + Number(data.gcsV||0) + Number(data.gcsM||0)) || ''} placeholder="/15" className="w-20 p-2 bg-slate-50 border border-slate-200 rounded-lg text-center text-sm font-bold text-slate-500" />
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <label className="block text-sm font-semibold text-slate-700">AVPU</label>
              <div className="flex flex-wrap gap-2">
                {['A', 'V', 'P', 'U'].map(opt => (
                  <FormChip key={opt} label={opt} selected={data.avpu === opt} onClick={() => update('avpu', opt)} />
                ))}
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700">Blood glucose (mg/dL)</label>
              <input type="number" value={data.bloodGlucose || ''} onChange={e => update('bloodGlucose', e.target.value)} className="w-full p-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm" />
            </div>

            <div className="space-y-3 md:col-span-2">
              <label className="block text-sm font-semibold text-slate-700">Pupils</label>
              <div className="flex flex-wrap gap-2">
                {['Equal', 'Unequal', 'Reactive', 'Non-reactive'].map(opt => (
                  <FormChip key={opt} label={opt} selected={data.pupils?.includes(opt)} onClick={() => toggleArray('pupils', opt)} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* E - Exposure / Environment */}
        <div className="pt-4 border-t border-slate-100">
          <h3 className="text-base font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">E. Exposure / Environment</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700">Temperature (°)</label>
              <input type="text" value={data.temperature || ''} onChange={e => update('temperature', e.target.value)} className="w-full p-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm" />
            </div>
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-slate-700">Patient fully exposed</label>
              <div className="flex flex-wrap gap-2">
                {['Yes', 'No'].map(opt => (
                  <FormChip key={opt} label={opt} selected={data.exposed === opt} onClick={() => update('exposed', opt)} />
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-slate-700">Hypothermia prevention</label>
              <div className="flex flex-wrap gap-2">
                {['Yes', 'No'].map(opt => (
                  <FormChip key={opt} label={opt} selected={data.hypothermia === opt} onClick={() => update('hypothermia', opt)} />
                ))}
              </div>
            </div>
            <div className="space-y-2 md:col-span-3">
              <label className="block text-sm font-semibold text-slate-700">External findings (edema, rash, wounds)</label>
              <input type="text" value={data.externalFindings || ''} onChange={e => update('externalFindings', e.target.value)} placeholder="Describe any notable external findings..." className="w-full p-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}