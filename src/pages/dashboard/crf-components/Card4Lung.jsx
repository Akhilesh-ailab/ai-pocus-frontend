import React from 'react';
import { Stethoscope } from 'lucide-react';

const FormChip = ({ label, selected, onClick }) => (
  <div onClick={onClick} className={`px-4 py-2 rounded-full text-sm font-medium border cursor-pointer transition-all duration-200 select-none hover:-translate-y-0.5 ${selected ? 'bg-blue-600 border-blue-600 text-white shadow-md' : 'bg-white border-slate-300 text-slate-600 hover:bg-slate-50 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm'}`}>
    {label}
  </div>
);

export default function Card4Lung({ data = {}, update }) {
  
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md hover:border-blue-300 transition-all duration-300">
      <div className="bg-slate-50 border-b border-slate-200 p-5 flex items-center gap-3">
        <div className="p-2 bg-blue-100 text-blue-700 rounded-lg"><Stethoscope className="h-6 w-6" /></div>
        <h2 className="text-lg font-bold text-slate-900 font-serif">Card 4: Lung Ultrasound (BLUE Protocol)</h2>
      </div>
      
      <div className="p-6 md:p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-2">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-700">Time POCUS Started (hrs)</label>
            <input type="time" value={data.lungTimeStarted || ''} onChange={e => update('lungTimeStarted', e.target.value)} className="w-full p-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm" />
          </div>
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-slate-700">Operator</label>
            <div className="flex flex-wrap gap-2">
              {['Consultant', 'Resident', 'Trained Staff'].map(opt => (
                <FormChip key={opt} label={opt} selected={data.operator === opt} onClick={() => update('operator', opt)} />
              ))}
            </div>
          </div>
        </div>

        <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-4">
          <h4 className="font-bold text-blue-800 text-sm uppercase tracking-wider">Pleural Line Assessment</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-600">Lung sliding</label>
              <div className="flex flex-wrap gap-2">
                {['Present', 'Reduced', 'Absent'].map(opt => <FormChip key={opt} label={opt} selected={data.lungSliding === opt} onClick={() => update('lungSliding', opt)} />)}
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-600">Lung pulse</label>
              <div className="flex flex-wrap gap-2">
                {['Present', 'Absent'].map(opt => <FormChip key={opt} label={opt} selected={data.lungPulse === opt} onClick={() => update('lungPulse', opt)} />)}
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-600">Pleural line appearance</label>
              <div className="flex flex-wrap gap-2">
                {['Normal', 'Thickened', 'Irregular'].map(opt => <FormChip key={opt} label={opt} selected={data.pleuralApp === opt} onClick={() => update('pleuralApp', opt)} />)}
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-4">
          <h4 className="font-bold text-blue-800 text-sm uppercase tracking-wider">Artifact Pattern</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-600">A-lines</label>
              <div className="flex flex-wrap gap-2">
                {['Present', 'Absent'].map(opt => <FormChip key={opt} label={opt} selected={data.alines === opt} onClick={() => update('alines', opt)} />)}
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-600">B-lines</label>
              <div className="flex flex-wrap gap-2">
                {['Absent', 'Focal (<=2 zones)', 'Diffuse (>=3 zones)'].map(opt => <FormChip key={opt} label={opt} selected={data.blines === opt} onClick={() => update('blines', opt)} />)}
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-600">B-line density</label>
              <div className="flex flex-wrap gap-2">
                {['<=2 per space', '>=3 per space (white lung)'].map(opt => <FormChip key={opt} label={opt} selected={data.blineDensity === opt} onClick={() => update('blineDensity', opt)} />)}
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-600">Distribution</label>
              <div className="flex flex-wrap gap-2">
                {['Unilateral', 'Bilateral Symmetric', 'Asymmetric'].map(opt => <FormChip key={opt} label={opt} selected={data.distribution === opt} onClick={() => update('distribution', opt)} />)}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-4">
            <h4 className="font-bold text-blue-800 text-sm uppercase tracking-wider">Parenchymal Findings</h4>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-600">Consolidation</label>
                <div className="flex flex-wrap gap-2">
                  {['Present', 'Absent'].map(opt => <FormChip key={opt} label={opt} selected={data.consolidation === opt} onClick={() => update('consolidation', opt)} />)}
                </div>
              </div>
              {data.consolidation === 'Present' && (
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-slate-600">Type</label>
                  <div className="flex flex-wrap gap-2">
                    {['Subpleural', 'Lobar'].map(opt => <FormChip key={opt} label={opt} selected={data.consolidationType === opt} onClick={() => update('consolidationType', opt)} />)}
                  </div>
                </div>
              )}
              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-slate-600">Dynamic air bronchograms</label>
                  <div className="flex flex-wrap gap-2">
                    {['Present', 'Absent'].map(opt => <FormChip key={opt} label={opt} selected={data.bronchograms === opt} onClick={() => update('bronchograms', opt)} />)}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-slate-600">Atelectasis</label>
                  <div className="flex flex-wrap gap-2">
                    {['Yes', 'No'].map(opt => <FormChip key={opt} label={opt} selected={data.atelectasis === opt} onClick={() => update('atelectasis', opt)} />)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-4">
            <h4 className="font-bold text-blue-800 text-sm uppercase tracking-wider">Pleural Space</h4>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-600">Pleural effusion</label>
                <div className="flex flex-wrap gap-2">
                  {['Present', 'Absent'].map(opt => <FormChip key={opt} label={opt} selected={data.effusion === opt} onClick={() => update('effusion', opt)} />)}
                </div>
              </div>
              {data.effusion === 'Present' && (
                <>
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-slate-600">Side</label>
                    <div className="flex flex-wrap gap-2">
                      {['Right', 'Left', 'Bilateral'].map(opt => <FormChip key={opt} label={opt} selected={data.effusionSide === opt} onClick={() => update('effusionSide', opt)} />)}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="space-y-2">
                      <label className="block text-xs font-semibold text-slate-600">Size (subjective)</label>
                      <div className="flex flex-wrap gap-2">
                        {['Minimal', 'Moderate', 'Large'].map(opt => <FormChip key={opt} label={opt} selected={data.effusionSize === opt} onClick={() => update('effusionSize', opt)} />)}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="block text-xs font-semibold text-slate-600">Septations/debris</label>
                      <div className="flex flex-wrap gap-2">
                        {['Yes', 'No'].map(opt => <FormChip key={opt} label={opt} selected={data.effusionSept === opt} onClick={() => update('effusionSept', opt)} />)}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-4">
          <h4 className="font-bold text-blue-800 text-sm uppercase tracking-wider">Pneumothorax Assessment</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-600">Lung sliding absent</label>
              <div className="flex flex-wrap gap-2">
                {['Yes', 'No'].map(opt => <FormChip key={`ptx1-${opt}`} label={opt} selected={data.ptxSliding === opt} onClick={() => update('ptxSliding', opt)} />)}
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-600">B-lines absent</label>
              <div className="flex flex-wrap gap-2">
                {['Yes', 'No'].map(opt => <FormChip key={`ptx2-${opt}`} label={opt} selected={data.ptxBlines === opt} onClick={() => update('ptxBlines', opt)} />)}
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-600">Lung point identified</label>
              <div className="flex flex-wrap gap-2">
                {['Yes', 'No'].map(opt => <FormChip key={`ptx3-${opt}`} label={opt} selected={data.ptxPoint === opt} onClick={() => update('ptxPoint', opt)} />)}
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-600">Barcode / stratosphere</label>
              <div className="flex flex-wrap gap-2">
                {['Yes', 'No'].map(opt => <FormChip key={`ptx4-${opt}`} label={opt} selected={data.ptxBarcode === opt} onClick={() => update('ptxBarcode', opt)} />)}
              </div>
            </div>
          </div>
          <div className="space-y-2 pt-2 border-t border-slate-200">
            <label className="block text-xs font-semibold text-slate-600">Overall pneumothorax likelihood</label>
            <div className="flex flex-wrap gap-2">
              {['High', 'Low', 'Absent'].map(opt => <FormChip key={opt} label={opt} selected={data.ptxLikelihood === opt} onClick={() => update('ptxLikelihood', opt)} />)}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-slate-700">BLUE Profile</label>
            <div className="flex flex-wrap gap-2">
              {["A-profile", "A'-profile", "B-profile", "B'-profile", "C-profile", "A/B profile", "Indeterminate"].map(opt => (
                <FormChip key={opt} label={opt} selected={data.blueProfile === opt} onClick={() => update('blueProfile', opt)} />
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-slate-700">Interpretation (Based on BLUE)</label>
            <div className="flex flex-wrap gap-2">
              {['Normal lung aeration', 'Cardiogenic pulmonary edema', 'Pneumonia', 'ARDS/Non-cardiogenic edema', 'Pulmonary embolism (suggestive)', 'Pneumothorax'].map(opt => (
                <FormChip key={opt} label={opt} selected={data.lungInterp === opt} onClick={() => update('lungInterp', opt)} />
              ))}
            </div>
          </div>
        </div>
        
        <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-4">
          <h4 className="font-bold text-blue-800 text-sm uppercase tracking-wider">Image Adequacy (Operator Assessment)</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-600">Overall image quality</label>
              <div className="flex flex-wrap gap-2">
                {['Good', 'Acceptable', 'Poor'].map(opt => <FormChip key={opt} label={opt} selected={data.lungImgQuality === opt} onClick={() => update('lungImgQuality', opt)} />)}
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-600">Probe position correct</label>
              <div className="flex flex-wrap gap-2">
                {['Yes', 'No'].map(opt => <FormChip key={`prb-${opt}`} label={opt} selected={data.lungProbePos === opt} onClick={() => update('lungProbePos', opt)} />)}
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-600">Depth & gain appropriate</label>
              <div className="flex flex-wrap gap-2">
                {['Yes', 'No'].map(opt => <FormChip key={`dg-${opt}`} label={opt} selected={data.lungDepthGain === opt} onClick={() => update('lungDepthGain', opt)} />)}
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-600">Motion artifact</label>
              <div className="flex flex-wrap gap-2">
                {['Minimal', 'Significant'].map(opt => <FormChip key={opt} label={opt} selected={data.lungMotion === opt} onClick={() => update('lungMotion', opt)} />)}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-200">
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-600">Final adequacy</label>
              <div className="flex flex-wrap gap-2">
                {['Adequate', 'Inadequate'].map(opt => <FormChip key={opt} label={opt} selected={data.lungFinalAdequacy === opt} onClick={() => update('lungFinalAdequacy', opt)} />)}
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-600">Remarks</label>
              <input type="text" value={data.lungRemarks || ''} onChange={e => update('lungRemarks', e.target.value)} placeholder="Enter any specific observations..." className="w-full p-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}