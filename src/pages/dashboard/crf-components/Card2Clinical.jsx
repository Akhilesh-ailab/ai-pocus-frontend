import React, { useState } from 'react';
import { Activity, ChevronDown, ChevronUp, Stethoscope } from 'lucide-react';

export default function Card2Clinical() {
  // State to manage which ABCDE accordion is open
  const [openSection, setOpenSection] = useState('A');

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const AccordionHeader = ({ title, section, isActive }) => (
    <button
      onClick={() => toggleSection(section)}
      className={`w-full flex justify-between items-center p-4 text-left font-bold text-lg rounded-t-xl transition-colors cursor-pointer ${
        isActive ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
      }`}
    >
      <span>{title}</span>
      {isActive ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
    </button>
  );

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden animate-in slide-in-from-right-4 duration-500">
      <div className="bg-slate-50 border-b border-slate-200 p-5 flex items-center gap-3">
        <div className="p-2 bg-indigo-100 text-indigo-700 rounded-lg"><Activity className="h-6 w-6" /></div>
        <h2 className="text-xl font-bold text-slate-800">Card 2: Clinical Presentation & Primary Survey</h2>
      </div>

      <div className="p-6 md:p-8 space-y-8">
        
        {/* Section C: ED Presentation[cite: 1] */}
        <div>
          <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">C. Emergency Department Presentation</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="space-y-3">
              <label className="block text-base font-semibold text-slate-700">Presenting Complaint[cite: 1]</label>
              <div className="flex flex-wrap gap-4">
                {['Dyspnea', 'Shock', 'Both'].map((complaint) => (
                  <label key={complaint} className="flex items-center space-x-2 cursor-pointer">
                    <input type="radio" name="complaint" value={complaint} className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-slate-300" />
                    <span className="text-base text-slate-700">{complaint}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-base font-semibold text-slate-700">Duration of symptoms[cite: 1]</label>
              <input type="text" placeholder="e.g., 2 days, 4 hours" className="w-full p-3 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 text-base" />
            </div>

            <div className="md:col-span-2 space-y-3">
              <label className="block text-base font-semibold text-slate-700">Relevant history[cite: 1]</label>
              <div className="flex flex-wrap gap-4">
                {['Fever', 'Chest pain', 'Cough', 'Orthopnea', 'Trauma (exclude)'].map((hist) => (
                  <label key={hist} className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" value={hist} className="h-5 w-5 rounded text-blue-600 focus:ring-blue-500 border-slate-300" />
                    <span className="text-base text-slate-700">{hist}</span>
                  </label>
                ))}
                <div className="flex items-center gap-2 flex-1 min-w-[200px]">
                  <span className="text-base text-slate-700">Others:</span>
                  <input type="text" className="flex-1 p-2 border-b border-slate-300 focus:border-blue-500 focus:outline-none bg-transparent" />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Section D: Primary Survey (ABCDE) Accordion[cite: 1] */}
        <div>
          <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-100">
            <Stethoscope className="h-6 w-6 text-slate-700" />
            <h3 className="text-lg font-bold text-slate-900">D. Primary Survey (ABCDE Format)</h3>
          </div>

          <div className="space-y-4">
            
            {/* A - Airway[cite: 1, 2] */}
            <div className="border border-slate-200 rounded-xl">
              <AccordionHeader title="A - Airway with Cervical Spine Control" section="A" isActive={openSection === 'A'} />
              {openSection === 'A' && (
                <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 rounded-b-xl">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-700">Airway Status[cite: 1]</label>
                    <select className="w-full p-2.5 border border-slate-300 rounded-lg text-base bg-white">
                      <option>Select...</option>
                      <option>Patent</option>
                      <option>Threatened</option>
                      <option>Obstructed</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-700">Sounds[cite: 2]</label>
                    <select className="w-full p-2.5 border border-slate-300 rounded-lg text-base bg-white">
                      <option>Select...</option>
                      <option>Normal</option>
                      <option>Snoring</option>
                      <option>Gurgling</option>
                      <option>Stridor</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-700">Cervical Spine Protection[cite: 2]</label>
                    <div className="flex gap-4 mt-2">
                      <label className="flex items-center gap-2"><input type="radio" name="cspine" className="h-4 w-4" /> Yes</label>
                      <label className="flex items-center gap-2"><input type="radio" name="cspine" className="h-4 w-4" /> No</label>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* B - Breathing[cite: 2] */}
            <div className="border border-slate-200 rounded-xl">
              <AccordionHeader title="B - Breathing" section="B" isActive={openSection === 'B'} />
              {openSection === 'B' && (
                <div className="p-5 grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-50 rounded-b-xl">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-700">Respiratory Rate (/min)[cite: 2]</label>
                    <input type="number" className="w-full p-2.5 border border-slate-300 rounded-lg text-base bg-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-700">SpO2 on arrival (%)[cite: 2]</label>
                    <input type="number" className="w-full p-2.5 border border-slate-300 rounded-lg text-base bg-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-700">FiO2 (%)[cite: 2]</label>
                    <input type="number" className="w-full p-2.5 border border-slate-300 rounded-lg text-base bg-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-700">Breath Sounds[cite: 2]</label>
                    <select className="w-full p-2.5 border border-slate-300 rounded-lg text-base bg-white">
                      <option>Normal</option>
                      <option>Reduced</option>
                      <option>Absent</option>
                    </select>
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="block text-sm font-semibold text-slate-700">Immediate Intervention[cite: 2]</label>
                    <div className="flex flex-wrap gap-4 mt-2">
                      {['O2', 'NIV', 'Intubation', 'Needle decompression'].map(inv => (
                        <label key={inv} className="flex items-center gap-2"><input type="checkbox" className="h-4 w-4 rounded" /> {inv}</label>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* C - Circulation[cite: 2] */}
            <div className="border border-slate-200 rounded-xl">
              <AccordionHeader title="C - Circulation" section="C" isActive={openSection === 'C'} />
              {openSection === 'C' && (
                <div className="p-5 grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-50 rounded-b-xl">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-700">Pulse Rate (/min)[cite: 2]</label>
                    <input type="number" className="w-full p-2.5 border border-slate-300 rounded-lg text-base bg-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-700">Blood Pressure (mmHg)[cite: 2]</label>
                    <input type="text" placeholder="120/80" className="w-full p-2.5 border border-slate-300 rounded-lg text-base bg-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-700">Capillary Refill (sec)[cite: 2]</label>
                    <input type="number" className="w-full p-2.5 border border-slate-300 rounded-lg text-base bg-white" />
                  </div>
                </div>
              )}
            </div>

            {/* D - Disability & E - Exposure (Condensed for demo)[cite: 2, 3] */}
            <div className="border border-slate-200 rounded-xl">
              <AccordionHeader title="D & E - Disability & Exposure" section="DE" isActive={openSection === 'DE'} />
              {openSection === 'DE' && (
                <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 rounded-b-xl">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-700">GCS Total (/15)[cite: 2]</label>
                    <input type="number" max="15" className="w-full p-2.5 border border-slate-300 rounded-lg text-base bg-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-700">Temperature</label>
                    <input type="text" placeholder="°C or °F" className="w-full p-2.5 border border-slate-300 rounded-lg text-base bg-white" />
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}