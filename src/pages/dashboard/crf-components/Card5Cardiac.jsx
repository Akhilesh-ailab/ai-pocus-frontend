import React from 'react';
import { Activity } from 'lucide-react';

const FormChip = ({ label, selected, onClick }) => (
  <div onClick={onClick} className={`px-4 py-2 rounded-full text-sm font-medium border cursor-pointer transition-all duration-200 select-none hover:-translate-y-0.5 ${selected ? 'bg-blue-600 border-blue-600 text-white shadow-md' : 'bg-white border-slate-300 text-slate-600 hover:bg-slate-50 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm'}`}>
    {label}
  </div>
);

export default function Card5Cardiac({ data = {}, update }) {
  
  const toggleArray = (key, val) => {
    const arr = data[key] || [];
    update(key, arr.includes(val) ? arr.filter(item => item !== val) : [...arr, val]);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md hover:border-blue-300 transition-all duration-300">
      <div className="bg-slate-50 border-b border-slate-200 p-5 flex items-center gap-3">
        <div className="p-2 bg-blue-100 text-blue-700 rounded-lg"><Activity className="h-6 w-6" /></div>
        <h2 className="text-lg font-bold text-slate-900 font-serif">Card 5: Cardiac Ultrasound (FATE)</h2>
      </div>
      
      <div className="p-6 md:p-8 space-y-6">
        <div className="space-y-3">
          <label className="block text-sm font-semibold text-slate-700">Views Obtained (Tick all acquired)</label>
          <div className="flex flex-wrap gap-2">
            {['PLAX', 'PSAX', 'Apical 4-Chamber (A4C)', 'Subcostal'].map(opt => (
              <FormChip key={opt} label={opt} selected={data.fateViews?.includes(opt)} onClick={() => toggleArray('fateViews', opt)} />
            ))}
          </div>
        </div>

        <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-4">
          <h4 className="font-bold text-blue-800 text-sm uppercase tracking-wider">Left Ventricular (LV) Assessment</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-600">LV size</label>
              <div className="flex flex-wrap gap-2">
                {['Normal', 'Dilated', 'Small / Underfilled'].map(opt => <FormChip key={opt} label={opt} selected={data.lvSize === opt} onClick={() => update('lvSize', opt)} />)}
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-600">LV systolic function (visual)</label>
              <div className="flex flex-wrap gap-2">
                {['Normal', 'Mildly reduced', 'Moderately reduced', 'Severely reduced'].map(opt => <FormChip key={opt} label={opt} selected={data.lvFunc === opt} onClick={() => update('lvFunc', opt)} />)}
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-600">LV contractility pattern</label>
              <div className="flex flex-wrap gap-2">
                {['Global', 'Regional wall motion abnormality'].map(opt => <FormChip key={opt} label={opt} selected={data.lvContract === opt} onClick={() => update('lvContract', opt)} />)}
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-600">Estimated LV ejection fraction (%)</label>
              <input type="number" value={data.lvEf || ''} onChange={e => update('lvEf', e.target.value)} placeholder="e.g. 45" className="w-full md:w-32 p-2 bg-white border border-slate-300 rounded-lg text-sm" />
            </div>
          </div>
        </div>

        <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-4">
          <h4 className="font-bold text-blue-800 text-sm uppercase tracking-wider">Right Ventricular (RV) Assessment</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-600">RV size (RV:LV ratio)</label>
              <div className="flex flex-wrap gap-2">
                {['<1', '>=1'].map(opt => <FormChip key={opt} label={opt} selected={data.rvSize === opt} onClick={() => update('rvSize', opt)} />)}
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-600">RV systolic function</label>
              <div className="flex flex-wrap gap-2">
                {['Normal', 'Reduced'].map(opt => <FormChip key={opt} label={opt} selected={data.rvFunc === opt} onClick={() => update('rvFunc', opt)} />)}
              </div>
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="block text-xs font-semibold text-slate-600">Signs of RV strain</label>
              <div className="flex flex-wrap gap-2">
                {['RV dilation', 'Septal flattening / D-sign', "McConnell's sign"].map(opt => <FormChip key={opt} label={opt} selected={data.rvStrainSigns?.includes(opt)} onClick={() => toggleArray('rvStrainSigns', opt)} />)}
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-600">Overall RV strain</label>
              <div className="flex flex-wrap gap-2">
                {['Present', 'Absent'].map(opt => <FormChip key={opt} label={opt} selected={data.rvStrain === opt} onClick={() => update('rvStrain', opt)} />)}
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-4">
          <h4 className="font-bold text-blue-800 text-sm uppercase tracking-wider">Pericardial Assessment</h4>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-600">Pericardial effusion</label>
              <div className="flex flex-wrap gap-2">
                {['Absent', 'Present'].map(opt => <FormChip key={opt} label={opt} selected={data.periEff === opt} onClick={() => update('periEff', opt)} />)}
              </div>
            </div>
            {data.periEff === 'Present' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-slate-600">Size</label>
                  <div className="flex flex-wrap gap-2">
                    {['Small', 'Moderate', 'Large'].map(opt => <FormChip key={opt} label={opt} selected={data.periSize === opt} onClick={() => update('periSize', opt)} />)}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-slate-600">Distribution</label>
                  <div className="flex flex-wrap gap-2">
                    {['Circumferential', 'Loculated'].map(opt => <FormChip key={opt} label={opt} selected={data.periDist === opt} onClick={() => update('periDist', opt)} />)}
                  </div>
                </div>
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-600">Tamponade physiology (if assessed)</label>
                <div className="flex flex-wrap gap-2">
                  {['RA/RV diastolic collapse', 'Plethoric IVC', 'Exaggerated respiratory variation'].map(opt => <FormChip key={opt} label={opt} selected={data.tamponadeSigns?.includes(opt)} onClick={() => toggleArray('tamponadeSigns', opt)} />)}
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-600">Tamponade likely</label>
                <div className="flex flex-wrap gap-2">
                  {['Yes', 'No'].map(opt => <FormChip key={opt} label={opt} selected={data.tamponade === opt} onClick={() => update('tamponade', opt)} />)}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-4">
              <h4 className="font-bold text-blue-800 text-sm uppercase tracking-wider">Cardiac Output / Volume Status</h4>
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-600">Stroke volume appearance</label>
                <div className="flex flex-wrap gap-2">
                  {['Low', 'Normal', 'High'].map(opt => <FormChip key={opt} label={opt} selected={data.sv === opt} onClick={() => update('sv', opt)} />)}
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-600">Overall hemodynamic state</label>
                <div className="flex flex-wrap gap-2">
                  {['Hypovolemic', 'Cardiogenic', 'Obstructive', 'Hyperdynamic'].map(opt => <FormChip key={opt} label={opt} selected={data.hemo === opt} onClick={() => update('hemo', opt)} />)}
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-4">
              <h4 className="font-bold text-blue-800 text-sm uppercase tracking-wider">Additional Findings</h4>
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-600">Gross valvular abnormality</label>
                <div className="flex flex-wrap gap-2 items-center">
                  {['None', 'Suspected'].map(opt => <FormChip key={opt} label={opt} selected={data.valve === opt} onClick={() => update('valve', opt)} />)}
                  {data.valve === 'Suspected' && (
                    <input type="text" value={data.valveSpecify || ''} onChange={e => update('valveSpecify', e.target.value)} placeholder="Specify..." className="ml-2 p-2 bg-white border border-slate-300 rounded-full focus:ring-2 focus:ring-blue-500 text-sm w-40" />
                  )}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-slate-600">Intracardiac thrombus/mass</label>
                  <div className="flex flex-wrap gap-2">
                    {['Yes', 'No'].map(opt => <FormChip key={opt} label={opt} selected={data.mass === opt} onClick={() => update('mass', opt)} />)}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-slate-600">Cardiac activity</label>
                  <div className="flex flex-wrap gap-2">
                    {['Present', 'Absent'].map(opt => <FormChip key={opt} label={opt} selected={data.activity === opt} onClick={() => update('activity', opt)} />)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-4">
            <h4 className="font-bold text-blue-800 text-sm uppercase tracking-wider">Image Adequacy (Operator Assessment)</h4>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-600">Number of interpretable views</label>
                <div className="flex flex-wrap gap-2">
                  {['1', '2', '>=3'].map(opt => <FormChip key={opt} label={opt} selected={data.fateViewsCount === opt} onClick={() => update('fateViewsCount', opt)} />)}
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-600">Endocardial border definition</label>
                <div className="flex flex-wrap gap-2">
                  {['Good', 'Fair', 'Poor'].map(opt => <FormChip key={opt} label={opt} selected={data.fateBorder === opt} onClick={() => update('fateBorder', opt)} />)}
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-600">Depth and gain optimized</label>
                <div className="flex flex-wrap gap-2">
                  {['Yes', 'No'].map(opt => <FormChip key={`fate-dg-${opt}`} label={opt} selected={data.fateDG === opt} onClick={() => update('fateDG', opt)} />)}
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-600">Foreshortening avoided (A4C)</label>
                <div className="flex flex-wrap gap-2">
                  {['Yes', 'No'].map(opt => <FormChip key={`fate-fs-${opt}`} label={opt} selected={data.fateFS === opt} onClick={() => update('fateFS', opt)} />)}
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-600">Motion/rib shadow artifact</label>
                <div className="flex flex-wrap gap-2">
                  {['Minimal', 'Significant'].map(opt => <FormChip key={`fate-ma-${opt}`} label={opt} selected={data.fateMA === opt} onClick={() => update('fateMA', opt)} />)}
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-600">Overall adequacy for interpretation</label>
                <div className="flex flex-wrap gap-2">
                  {['Adequate', 'Inadequate'].map(opt => <FormChip key={`fate-oa-${opt}`} label={opt} selected={data.fateOA === opt} onClick={() => update('fateOA', opt)} />)}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-slate-700">FATE-Based Interpretation</label>
            <div className="flex flex-wrap gap-2">
              {['Normal cardiac function', 'Cardiogenic shock', 'Obstructive shock', 'Hypovolemia', 'Indeterminate'].map(opt => (
                <FormChip key={opt} label={opt} selected={data.fateInterp === opt} onClick={() => update('fateInterp', opt)} />
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-700">Remarks</label>
            <textarea value={data.fateRemarks || ''} onChange={e => update('fateRemarks', e.target.value)} placeholder="Additional FATE observations..." className="w-full p-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm min-h-[100px]"></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}