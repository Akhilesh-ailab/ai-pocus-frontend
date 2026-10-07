import React from 'react';
import { Image, Wind, Activity, Droplets } from 'lucide-react';
// Corrected import path below:
import DicomUploadZone from './DicomUploadZone';

export default function Card3PrePocus() {
  const lungViews = [
    'Right Anterior Upper', 'Right Anterior Lower', 'Left Anterior Upper', 'Left Anterior Lower',
    'Right Lateral (PLAPS)', 'Left Lateral (PLAPS)', 'Right Posterior', 'Left Posterior'
  ];

  const cardiacViews = [
    'PLAX', 'PSAX: Apical view', 'PSAX: Apical level', 'PSAX: Papillary muscle',
    'PSAX: Mitral valve', 'PSAX: Aortic valve', 'Apical 4-Chamber (A4C)', 'Subcostal 4-Chamber'
  ];

  const ivcViews = [
    'Subcostal long-axis', 'Subcostal short-axis'
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden animate-in slide-in-from-right-4 duration-500">
      
      <div className="bg-slate-50 border-b border-slate-200 p-5 flex items-center gap-3">
        <div className="p-2 bg-blue-100 text-blue-700 rounded-lg"><Image className="h-6 w-6" /></div>
        <h2 className="text-lg font-bold text-slate-900 font-serif">Card 3: Pre-POCUS DICOM Uploads</h2>
      </div>
      
      <div className="p-6 md:p-8 space-y-10">
        
        {/* Lung Ultrasound Section */}
        <div>
          <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-100">
            <Wind className="h-6 w-6 text-slate-700" />
            <h3 className="text-lg font-bold text-slate-900">1. Lung Ultrasound - BLUE Protocol</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {lungViews.map(view => (
              <DicomUploadZone key={view} viewName={view} />
            ))}
          </div>
        </div>

        {/* Cardiac Ultrasound Section */}
        <div>
          <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-100">
            <Activity className="h-6 w-6 text-slate-700" />
            <h3 className="text-lg font-bold text-slate-900">2. Cardiac Ultrasound</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {cardiacViews.map(view => (
              <DicomUploadZone key={view} viewName={view} />
            ))}
          </div>
        </div>

        {/* IVC Assessment Section */}
        <div>
          <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-100">
            <Droplets className="h-6 w-6 text-slate-700" />
            <h3 className="text-lg font-bold text-slate-900">3. IVC Image Acquisition</h3>
          </div>
          <p className="text-sm text-slate-500 mb-4">Target: 1-2 cm caudal to hepatic vein-IVC junction.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {ivcViews.map(view => (
              <DicomUploadZone key={view} viewName={view} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}