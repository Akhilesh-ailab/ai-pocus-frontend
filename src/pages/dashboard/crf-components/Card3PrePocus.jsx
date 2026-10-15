import React, { useState } from 'react';
import { Image as ImageIcon, Activity, Wind, Droplets } from 'lucide-react';
import DicomUploadZone from './DicomUploadZone';

export default function Card3PrePocus({ data = {}, update }) {
  const [activeTab, setActiveTab] = useState('Lung');

  // Categories mapped exactly to CRF Section E & 3
  const dicomCategories = {
    Lung: [
      'Right Anterior Upper', 'Right Anterior Lower', 
      'Left Anterior Upper', 'Left Anterior Lower',
      'Right Lateral (PLAPS point)', 'Left Lateral (PLAPS point)',
      'Right Posterior', 'Left Posterior'
    ],
    Cardiac: [
      'Parasternal Long Axis (PLAX)', 'PSAX: Apical view',
      'PSAX: Apical level', 'PSAX: Papillary muscle level',
      'PSAX: Mitral valve level', 'PSAX: Aortic valve level',
      'Apical 4-Chamber (A4C)', 'Subcostal 4-Chamber'
    ],
    IVC: [
      'Subcostal long-axis', 'Subcostal short-axis'
    ]
  };

  const tabs = [
    { name: 'Lung', icon: Wind, count: 8 },
    { name: 'Cardiac', icon: Activity, count: 8 },
    { name: 'IVC', icon: Droplets, count: 2 },
  ];

  // This sends the uploaded file to the central brain in NewCRFForm.jsx
  const handleFileUpload = (viewName, file) => {
    const currentUploads = data.dicomUploads || {};
    update('dicomUploads', { ...currentUploads, [viewName]: file });
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden animate-in slide-in-from-right-4 duration-500">
      <div className="bg-slate-50 border-b border-slate-200 p-5 flex items-center gap-3">
        <div className="p-2 bg-blue-100 text-blue-700 rounded-lg"><ImageIcon className="h-6 w-6" /></div>
        <h2 className="text-xl font-bold text-slate-800 font-serif">Card 3: Pre-POCUS DICOM Uploads</h2>
      </div>

      <div className="p-6 md:p-8">
        <p className="text-base text-slate-600 mb-6">
          Upload the corresponding <strong>.dcm</strong> files for each required view. The AI inference engine will process these images asynchronously.
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
          {dicomCategories[activeTab].map((view) => (
            <DicomUploadZone 
              key={view} 
              viewName={view} 
              existingFile={data.dicomUploads?.[view]} 
              onFileUpload={handleFileUpload} 
            />
          ))}
        </div>

      </div>
    </div>
  );
}