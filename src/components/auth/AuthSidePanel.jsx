import React from 'react';
import { Activity } from 'lucide-react';

export default function AuthSidePanel() {
  return (
    <div className="hidden lg:flex lg:w-1/2 relative flex-col justify-between p-12 overflow-hidden">
      {/* Animated Background Image Wrapper */}
      <div className="absolute inset-0 overflow-hidden bg-slate-900">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-subtle-zoom"
          style={{ backgroundImage: "url('/ai-pocus-hero.jpeg')" }}
        />
      </div>
      
      {/* Clinical Blue Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-blue-800/80 mix-blend-multiply" />
      
      <div className="relative z-10">
        <div className="flex items-center space-x-2 text-blue-400 mb-8">
          <Activity className="h-8 w-8" />
          <span className="text-xl font-bold tracking-wider">AI-POCUS</span>
        </div>
        <h1 className="text-4xl font-bold text-white leading-tight mb-4">
AI-Assisted Point-of-Care Ultrasound Protocol        </h1>
        <p className="text-lg text-blue-100 max-w-md">
          Rapid Triage and Diagnosis in Emergency Department Patients with Dyspnea and Shock.
        </p>
        
      </div>

      <div className="relative z-10 grid grid-cols-2 gap-4 text-sm text-slate-300">
        <div className="bg-slate-900/40 p-4 rounded-xl border border-white/10 backdrop-blur-sm">
          <p className="font-semibold text-white mb-1">Host Institution</p>
          <p>Department of Trauma & Emergency</p>
          <p>AIIMS Raipur</p>
        </div>
        <div className="bg-slate-900/40 p-4 rounded-xl border border-white/10 backdrop-blur-sm">
          <p className="font-semibold text-white mb-1">Supported By</p>
          <p>DRISHTI CPS Foundation</p>
          <p>IIT Indore</p>
        </div>
      </div>
    </div>
  );
}