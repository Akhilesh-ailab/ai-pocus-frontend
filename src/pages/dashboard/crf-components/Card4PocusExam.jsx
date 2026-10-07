import React, { useState } from 'react';
import { Activity, ChevronDown, ChevronUp, Wind, Heart, Droplets } from 'lucide-react';

const FormChip = ({ label, selected, onClick }) => (
  <div 
    onClick={onClick}
    className={`px-4 py-2 rounded-full text-sm font-medium border cursor-pointer transition-colors select-none ${
      selected ? 'bg-blue-600 border-blue-600 text-white shadow-sm' : 'bg-white border-slate-300 text-slate-600 hover:bg-slate-50'
    }`}
  >
    {label}
  </div>
);

export default function Card4PocusExam() {
  const [openSection, setOpenSection] = useState('lung');
  const [selections, setSelections] = useState({});

  const handleSelect = (category, value) => {
    setSelections(prev => ({ ...prev, [category]: value }));
  };

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const AccordionHeader = ({ title, section, isActive, icon: Icon }) => (
    <button
      onClick={() => toggleSection(section)}
      className={`w-full flex justify-between items-center p-4 text-left font-bold text-base rounded-t-xl transition-colors cursor-pointer ${
        isActive ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
      }`}
    >
      <div className="flex items-center gap-2">
        <Icon className="h-5 w-5" />
        <span>{title}</span>
      </div>
      {isActive ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
    </button>
  );

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md hover:border-blue-300 hover:-translate-y-1 transition-all duration-300">
      <div className="bg-slate-50 border-b border-slate-200 p-5 flex items-center gap-3">
        <div className="p-2 bg-blue-100 text-blue-700 rounded-lg"><Activity className="h-6 w-6" /></div>
        <h2 className="text-lg font-bold text-slate-900 font-serif">Card 4: POCUS Examination Findings</h2>
      </div>

      <div className="p-6 md:p-8 space-y-6">
        
        <div className="border border-slate-200 rounded-xl transition-shadow hover:shadow-sm">
          <AccordionHeader title="Lung Ultrasound & BLUE Profile" section="lung" icon={Wind} isActive={openSection === 'lung'} />
          {openSection === 'lung' && (
            <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 rounded-b-xl">
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-slate-700">Lung Sliding</label>
                <div className="flex flex-wrap gap-2">
                  {['Present', 'Reduced', 'Absent'].map(opt => (
                    <FormChip key={opt} label={opt} selected={selections.lungSliding === opt} onClick={() => handleSelect('lungSliding', opt)} />
                  ))}
                </div>
              </div>
              <div className="space-y-3 md:col-span-2 border-t border-slate-200 pt-4">
                <label className="block text-sm font-semibold text-slate-700">BLUE Profile Interpretation</label>
                <div className="flex flex-wrap gap-2">
                  {['A-profile', 'B-profile', 'A/B profile', 'C-profile', 'Indeterminate'].map(opt => (
                    <FormChip key={opt} label={opt} selected={selections.blueProfile === opt} onClick={() => handleSelect('blueProfile', opt)} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="border border-slate-200 rounded-xl transition-shadow hover:shadow-sm">
          <AccordionHeader title="Cardiac Ultrasound (FATE)" section="cardiac" icon={Heart} isActive={openSection === 'cardiac'} />
          {openSection === 'cardiac' && (
            <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 rounded-b-xl">
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-slate-700">LV Systolic Function</label>
                <div className="flex flex-wrap gap-2">
                  {['Normal', 'Mildly reduced', 'Severely reduced'].map(opt => (
                    <FormChip key={opt} label={opt} selected={selections.lvFunc === opt} onClick={() => handleSelect('lvFunc', opt)} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}