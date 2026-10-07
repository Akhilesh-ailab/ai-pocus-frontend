import React from 'react';
import { Lock, BrainCircuit, CheckCircle2, AlertCircle, FileText, ArrowRight } from 'lucide-react';

export default function AiAnalysis() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-200 pb-5 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 font-serif flex items-center gap-3">
            AI Analysis <span className="text-slate-400 font-light">—</span> <span className="font-mono text-2xl text-slate-500">RPR-0140</span>
          </h1>
          <p className="text-sm text-slate-500 mt-1">Automated multi-view ultrasound interpretation and clinical risk stratification.</p>
        </div>
        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-bold font-mono">
          Model v0.3.1-PROD
        </span>
      </div>

      {/* Blinded Security Banner with Hover Lift */}
      <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl flex items-center gap-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
        <Lock className="h-5 w-5 text-blue-600 flex-shrink-0" />
        <p className="text-sm font-bold text-blue-800">
          Blinded to treating clinicians — research team & data manager access only
        </p>
      </div>

      {/* 3-Column AI Interpretation Cards with Hover & Lift */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Lung Card */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-default">
          <div className="flex justify-between items-start mb-3">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Lung Interpretation</h4>
            <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full">High Match</span>
          </div>
          <div className="text-2xl font-serif font-bold text-slate-900 mb-2">B-profile</div>
          <p className="text-sm text-slate-600 leading-relaxed">Bilateral diffuse B-lines observed across anterior and lateral zones, consistent with cardiogenic pulmonary edema.</p>
        </div>

        {/* Cardiac Card */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-default" style={{ animationDelay: '100ms' }}>
          <div className="flex justify-between items-start mb-3">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Cardiac Interpretation</h4>
            <span className="px-2.5 py-0.5 bg-blue-100 text-blue-800 text-xs font-bold rounded-full">Stable</span>
          </div>
          <div className="text-2xl font-serif font-bold text-slate-900 mb-2">EF ~42%</div>
          <p className="text-sm text-slate-600 leading-relaxed">Mildly reduced LV function noted on 4-chamber view. No acute right ventricular strain or D-sign detected.</p>
        </div>

        {/* IVC Card */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-default" style={{ animationDelay: '200ms' }}>
          <div className="flex justify-between items-start mb-3">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">IVC Interpretation</h4>
            <span className="px-2.5 py-0.5 bg-purple-100 text-purple-800 text-xs font-bold rounded-full">Responsive</span>
          </div>
          <div className="text-2xl font-serif font-bold text-slate-900 mb-2">63% collapse</div>
          <p className="text-sm text-slate-600 leading-relaxed">Highly collapsible inferior vena cava. Suggests low baseline preload and high fluid responsiveness.</p>
        </div>

      </div>

      {/* Suggested Diagnosis Panel with Hover & Lift */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-default" style={{ animationDelay: '300ms' }}>
        <div className="flex items-center gap-2 mb-4">
          <BrainCircuit className="h-6 w-6 text-blue-600" />
          <h3 className="text-xl font-bold text-slate-900 font-serif">Suggested consensus diagnosis</h3>
        </div>
        
        <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl mb-6">
          <p className="text-lg font-bold text-slate-900">Cardiogenic shock / acute decompensated pulmonary edema</p>
          <p className="text-sm text-slate-500 mt-1">Model Confidence Rating: <strong className="text-emerald-600">91% (High Confidence)</strong></p>
        </div>
        
        {/* Confidence Score Bar with Animation */}
        <div className="space-y-2 mb-6">
          <div className="flex justify-between text-sm font-medium">
            <span className="text-slate-600">Ensemble model confidence score</span>
            <span className="text-slate-900 font-bold">91%</span>
          </div>
          <div className="w-full h-3 bg-blue-50 rounded-full overflow-hidden">
            <div className="h-full bg-blue-600 rounded-full animate-in slide-in-from-left duration-1000" style={{ width: '91%' }}></div>
          </div>
        </div>

        {/* Clinical Recommendations Checklist */}
        <div className="border-t border-slate-100 pt-6">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Protocol-Based Next Steps</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-700">
            <div className="flex items-center gap-2.5 p-3 bg-slate-50 rounded-xl">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0" />
              <span>Consider conservative fluid challenge with serial IVC checks</span>
            </div>
            <div className="flex items-center gap-2.5 p-3 bg-slate-50 rounded-xl">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0" />
              <span>Evaluate for vasodilator or inotropic therapy support</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}