import React from 'react';
import { Lock, BrainCircuit, Activity, HeartPulse, Waves, Image as ImageIcon } from 'lucide-react';

export default function AiAnalysis() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-200 pb-5 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 font-serif flex items-center gap-3">
            AI Output <span className="text-slate-400 font-light">—</span> <span className="font-mono text-2xl text-slate-500">RPR-0143</span>
          </h1>
          <p className="text-sm text-slate-500 mt-1">Section H: Automated multi-view ultrasound interpretation.</p>
        </div>
        <div className="flex gap-3">
          <span className="px-4 py-2 bg-emerald-100 text-emerald-800 rounded-xl text-sm font-bold flex items-center gap-2 shadow-sm border border-emerald-200">
            <ImageIcon className="h-4 w-4" /> AI Image Adequacy: Adequate
          </span>
          <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-xl text-sm font-bold font-mono shadow-sm border border-blue-200">
            Model v0.3.1
          </span>
        </div>
      </div>

      {/* Blinded Security Banner */}
      <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-center gap-3 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
        <Lock className="h-5 w-5 text-blue-400 flex-shrink-0" />
        <p className="text-sm font-bold text-white tracking-wide">
          OFFLINE RESEARCH ONLY <span className="font-normal text-slate-400 mx-2">|</span> Blinded to treating clinicians — research team & data manager access only
        </p>
      </div>

      {/* 3-Column AI Interpretation Cards (Lung, Cardiac, IVC) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Lung Card */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-default">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
            <Activity className="h-5 w-5 text-blue-600" />
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">AI Lung Interpretation</h4>
          </div>
          <div className="text-2xl font-serif font-bold text-slate-900 mb-2">B-profile</div>
          <p className="text-sm text-slate-600 leading-relaxed">
            Bilateral diffuse B-lines (&gt;3 per space) observed across anterior and lateral zones, consistent with cardiogenic pulmonary edema. Lung sliding present.
          </p>
        </div>

        {/* Cardiac Card */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-default" style={{ animationDelay: '100ms' }}>
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
            <HeartPulse className="h-5 w-5 text-red-500" />
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">AI Cardiac Interpretation</h4>
          </div>
          <div className="text-2xl font-serif font-bold text-slate-900 mb-2">EF ~42%</div>
          <p className="text-sm text-slate-600 leading-relaxed">
            Mildly reduced LV systolic function noted on A4C view. No acute right ventricular strain or D-sign detected. No significant pericardial effusion.
          </p>
        </div>

        {/* IVC Card */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-default" style={{ animationDelay: '200ms' }}>
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
            <Waves className="h-5 w-5 text-cyan-600" />
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">AI IVC Interpretation</h4>
          </div>
          <div className="text-2xl font-serif font-bold text-slate-900 mb-2">Plethoric</div>
          <p className="text-sm text-slate-600 leading-relaxed">
            Maximum diameter 2.4cm. Minimum diameter 2.1cm. Calculated CI: 12.5%. Poorly collapsible inferior vena cava suggesting high preload / volume overload.
          </p>
        </div>

      </div>

      {/* Suggested Diagnosis Panel */}
      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 md:p-8 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-default" style={{ animationDelay: '300ms' }}>
        <div className="flex items-center gap-2 mb-4">
          <BrainCircuit className="h-6 w-6 text-blue-700" />
          <h3 className="text-xl font-bold text-blue-900 font-serif">AI Suggested Diagnosis</h3>
        </div>
        
        <div className="p-5 bg-white border border-blue-100 rounded-xl mb-6 shadow-sm">
          <p className="text-xl font-bold text-slate-900">Cardiogenic shock / Pulmonary edema</p>
          <p className="text-sm text-slate-500 mt-2">Correlated with B-profile (Lung), reduced LV function (Cardiac), and plethoric state (IVC).</p>
        </div>
        
        {/* Confidence Score Bar */}
        <div className="space-y-2 mb-2">
          <div className="flex justify-between text-sm font-bold">
            <span className="text-blue-900 uppercase tracking-wider text-xs">Confidence Score</span>
            <span className="text-blue-700">91%</span>
          </div>
          <div className="w-full h-3 bg-blue-200 rounded-full overflow-hidden">
            <div className="h-full bg-blue-600 rounded-full animate-in slide-in-from-left duration-1000" style={{ width: '91%' }}></div>
          </div>
        </div>

      </div>

    </div>
  );
}