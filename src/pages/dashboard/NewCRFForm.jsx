import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronRight, UserCircle } from 'lucide-react';
import { AUTH_ROUTES } from '../../constants/authConstants';
import Card2Clinical from './crf-components/Card2Clinical';
import Card3PrePocus from './crf-components/Card3PrePocus';
import Card4PocusExam from './crf-components/Card4PocusExam'; 
import Card5Outcomes from './crf-components/Card5Outcomes';

const FormChip = ({ label, selected, onClick, color = 'blue' }) => {
  const baseStyle = "px-4 py-2 rounded-full text-sm font-medium border cursor-pointer transition-colors select-none";
  const activeStyle = `bg-${color}-600 border-${color}-600 text-white shadow-sm`;
  const inactiveStyle = "bg-white border-slate-300 text-slate-600 hover:bg-slate-50";
  
  let specificActive = activeStyle;
  if (selected && color !== 'blue') {
     if(color === 'Red') specificActive = 'bg-red-600 border-red-600 text-white shadow-sm';
     if(color === 'Orange') specificActive = 'bg-orange-500 border-orange-500 text-white shadow-sm';
     if(color === 'Yellow') specificActive = 'bg-yellow-400 border-yellow-400 text-slate-900 shadow-sm';
     if(color === 'Green') specificActive = 'bg-green-600 border-green-600 text-white shadow-sm';
  }

  return (
    <div onClick={onClick} className={`${baseStyle} ${selected ? specificActive : inactiveStyle}`}>
      {label}
    </div>
  );
};

export default function NewCRFForm() {
  const navigate = useNavigate();
  const [investigatorName, setInvestigatorName] = useState('');
  const [currentStep, setCurrentStep] = useState(1);
  const [triage, setTriage] = useState('');
  const [complaint, setComplaint] = useState('');

  useEffect(() => {
    const session = JSON.parse(localStorage.getItem('aipocus_session'));
    if (session) setInvestigatorName(session.name);
  }, []);

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out">
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-slate-200 pb-5">
        <div>
          <button 
            onClick={() => navigate(AUTH_ROUTES.DASHBOARD)}
            className="text-slate-500 hover:text-blue-600 flex items-center gap-1 mb-3 text-sm font-semibold transition-colors cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Cases
          </button>
          
          <h1 className="text-3xl font-bold text-slate-900 font-serif">New Case Record Form</h1>
          <p className="text-sm font-medium text-slate-500 mt-1">
            Step {currentStep} of 5: {
              currentStep === 1 ? 'Admin & Demographics' : 
              currentStep === 2 ? 'Clinical Presentation' : 
              currentStep === 3 ? 'Pre-POCUS DICOM Uploads' :
              currentStep === 4 ? 'POCUS Examination Findings' :
              'Impressions & Outcomes'
            }
          </p>
        </div>
        
        <div className="flex flex-wrap items-center gap-3 mt-4 md:mt-0">
          {currentStep > 1 && (
            <button 
              onClick={() => setCurrentStep(currentStep - 1)}
              className="px-5 py-2.5 bg-white border border-slate-300 text-slate-700 text-sm font-bold rounded-xl hover:bg-slate-50 transition-colors shadow-sm flex items-center gap-2 cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4" /> Previous
            </button>
          )}

          <button className="px-5 py-2.5 bg-white border border-slate-300 text-slate-700 text-sm font-bold rounded-xl hover:bg-slate-50 transition-colors shadow-sm cursor-pointer">
            Save Draft
          </button>
          
          {currentStep < 5 ? (
            <button 
              onClick={() => setCurrentStep(currentStep + 1)}
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 hover:-translate-y-0.5 text-white text-sm font-bold rounded-xl shadow-sm hover:shadow-md flex items-center gap-2 transition-all cursor-pointer"
            >
              {currentStep === 3 ? 'Send to AI & Proceed' : 'Next Section'} <ChevronRight className="h-4 w-4" />
            </button>
          ) : (
            <button 
              onClick={() => {
                alert("CRF Successfully Submitted! Redirecting to AI Analysis...");
                navigate(AUTH_ROUTES.AI_ANALYSIS); // <-- Changed from DASHBOARD to AI_ANALYSIS
              }}
              className="px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white text-sm font-bold rounded-xl shadow-sm flex items-center gap-2 transition-colors cursor-pointer"
            >
              Submit CRF Record
            </button>
          )}
        </div>
      </div>

      {currentStep === 1 && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md hover:border-blue-300 hover:-translate-y-1 transition-all duration-300">
          <div className="bg-slate-50 border-b border-slate-200 p-5 flex items-center gap-3">
            <div className="p-2 bg-blue-100 text-blue-700 rounded-lg"><UserCircle className="h-6 w-6" /></div>
            <h2 className="text-lg font-bold text-slate-900 font-serif">Card 1: Admin & Demographics</h2>
          </div>
          
          <div className="p-6 md:p-8 space-y-8">
            <div>
              <h3 className="text-base font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">A. Administrative Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-700">Study ID Code</label>
                  <input type="text" placeholder="e.g. RPR-0143" className="w-full p-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm transition-shadow hover:shadow-sm" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-700">Investigator Name</label>
                  <input type="text" value={investigatorName} readOnly className="w-full p-2.5 bg-slate-50 border border-slate-200 text-slate-500 rounded-lg text-sm font-medium" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-700">Date of Enrollment</label>
                  <input type="date" className="w-full p-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm transition-shadow hover:shadow-sm" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-700">Time of ED Arrival (hrs)</label>
                  <input type="time" className="w-full p-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm transition-shadow hover:shadow-sm" />
                </div>
                <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 mt-2 pt-4 border-t border-slate-100">
                  <div className="space-y-3">
                    <label className="block text-sm font-semibold text-slate-700">Triage Category (ESI/Local)</label>
                    <div className="flex flex-wrap gap-2">
                      {['Red', 'Orange', 'Yellow', 'Green'].map((color) => (
                        <FormChip key={color} label={color} color={color} selected={triage === color} onClick={() => setTriage(color)} />
                      ))}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="block text-sm font-semibold text-slate-700">Presenting Complaint</label>
                    <div className="flex flex-wrap gap-2">
                      {['Dyspnea', 'Shock', 'Both'].map((comp) => (
                        <FormChip key={comp} label={comp} selected={complaint === comp} onClick={() => setComplaint(comp)} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <h3 className="text-base font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">B. Demographics</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-700">Age (years)</label>
                  <input type="number" min="0" max="120" placeholder="e.g. 45" className="w-full p-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm transition-shadow hover:shadow-sm" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-700">Sex</label>
                  <select className="w-full p-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm transition-shadow hover:shadow-sm">
                    <option value="">Select...</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-700">Weight (kg, if available)</label>
                  <input type="number" min="0" step="0.1" placeholder="e.g. 70.5" className="w-full p-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm transition-shadow hover:shadow-sm" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {currentStep === 2 && <Card2Clinical />}
      {currentStep === 3 && <Card3PrePocus />}
      {currentStep === 4 && <Card4PocusExam />}
      {currentStep === 5 && <Card5Outcomes />}
    </div>
  );
}