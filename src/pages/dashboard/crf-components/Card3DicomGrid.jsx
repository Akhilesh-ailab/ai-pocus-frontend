import React, { useState } from 'react';
import { UploadCloud, FileImage, CheckCircle2, Image as ImageIcon, Activity } from 'lucide-react';
export default function Card3DicomGrid() {
  const [activeTab, setActiveTab] = useState('Lung');
  const [uploadedFiles, setUploadedFiles] = useState({});

  // Categories mapped exactly to CRF Section E & 3[cite: 3, 4]
  const dicomCategories = {
    Lung: [
      'Right Anterior Upper', 'Right Anterior Lower', 
      'Left Anterior Upper', 'Left Anterior Lower',
      'Right Lateral (PLAPS point)', 'Left Lateral (PLAPS point)',
      'Right Posterior', 'Left Posterior'
    ], //[cite: 3]
    Cardiac: [
      'Parasternal Long Axis (PLAX)', 'PSAX: Apical view',
      'PSAX: Apical level', 'PSAX: Papillary muscle level',
      'PSAX: Mitral valve level', 'PSAX: Aortic valve level',
      'Apical 4-Chamber (A4C)', 'Subcostal 4-Chamber'
    ], //[cite: 3]
    IVC: [
      'Subcostal long-axis', 'Subcostal short-axis'
    ] //[cite: 4]
  };

  const tabs = [
    { name: 'Lung', icon: Activity, count: 8 },
    { name: 'Cardiac', icon: Activity, count: 8 },
    { name: 'IVC', icon: Activity, count: 2 },
  ];

  // Mock upload handler for UI demonstration
  const handleFileUpload = (viewName, e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFiles(prev => ({ ...prev, [viewName]: file.name }));
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden animate-in slide-in-from-right-4 duration-500">
      <div className="bg-slate-50 border-b border-slate-200 p-5 flex items-center gap-3">
        <div className="p-2 bg-blue-100 text-blue-700 rounded-lg"><ImageIcon className="h-6 w-6" /></div>
        <h2 className="text-xl font-bold text-slate-800">Card 3: Pre-POCUS DICOM Uploads</h2>
      </div>

      <div className="p-6 md:p-8">
        <p className="text-base text-slate-600 mb-6">
          Upload the corresponding <strong>.dcm</strong> files for each required view. The AI inference engine will process these images asynchronously.[cite: 3]
        </p>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-200 pb-px">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`flex items-center gap-2 px-6 py-3 text-base font-semibold border-b-2 transition-colors cursor-pointer ${
                activeTab === tab.name
                  ? 'border-blue-600 text-blue-600 bg-blue-50/50 rounded-t-lg'
                  : 'border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50 rounded-t-lg'
              }`}
            >
              <tab.icon className="h-5 w-5" />
              {tab.name} Ultrasound
              <span className={`ml-2 px-2.5 py-0.5 rounded-full text-xs ${activeTab === tab.name ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-600'}`}>
                {dicomCategories[tab.name].length} Views
              </span>
            </button>
          ))}
        </div>

        {/* Dynamic Grid based on Active Tab */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dicomCategories[activeTab].map((view) => {
            const isUploaded = !!uploadedFiles[view];
            
            return (
              <div 
                key={view} 
                className={`relative group rounded-xl border-2 border-dashed transition-all p-4 flex flex-col items-center justify-center text-center min-h-[180px] ${
                  isUploaded 
                    ? 'border-green-400 bg-green-50' 
                    : 'border-slate-300 bg-slate-50 hover:border-blue-400 hover:bg-blue-50/30'
                }`}
              >
                {/* Upload Input Overlay */}
                <input 
                  type="file" 
                  accept=".dcm,image/dicom,.jpg,.png" 
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  onChange={(e) => handleFileUpload(view, e)}
                  title={`Upload ${view} DICOM`}
                />
                
                {isUploaded ? (
                  <>
                    <CheckCircle2 className="h-10 w-10 text-green-500 mb-3" />
                    <span className="text-sm font-bold text-green-800 line-clamp-2">{view}</span>
                    <span className="text-xs text-green-600 mt-2 truncate w-full px-2 border-t border-green-200 pt-2">
                      {uploadedFiles[view]}
                    </span>
                  </>
                ) : (
                  <>
                    <UploadCloud className="h-10 w-10 text-slate-400 group-hover:text-blue-500 mb-3 transition-colors" />
                    <span className="text-sm font-semibold text-slate-700 line-clamp-2 px-2">{view}</span>
                    <span className="text-xs text-slate-500 mt-2">Click or drag .dcm file</span>
                  </>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}