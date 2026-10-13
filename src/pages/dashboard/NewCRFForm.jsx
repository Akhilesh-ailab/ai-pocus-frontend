import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronRight, UserCircle, Save, CheckCircle2 } from 'lucide-react';
import { AUTH_ROUTES } from '../../constants/authConstants';

// Import your split components
import Card2Clinical from './crf-components/Card2Clinical';
import Card3PrePocus from './crf-components/Card3PrePocus';
import Card4Lung from './crf-components/Card4Lung';
import Card5Cardiac from './crf-components/Card5Cardiac';
import Card6IVC from './crf-components/Card6IVC';
import Card7Outcomes from './crf-components/Card7Outcomes';

const FormChip = ({ label, selected, onClick, color = 'blue' }) => {
  const baseStyle = "px-4 py-2 rounded-full text-sm font-medium border cursor-pointer transition-all duration-200 select-none hover:-translate-y-0.5";
  const activeStyle = `bg-${color}-600 border-${color}-600 text-white shadow-md`;
  const inactiveStyle = "bg-white border-slate-300 text-slate-600 hover:bg-slate-50 hover:border-blue-300 hover:shadow-sm";
  
  let specificActive = activeStyle;
  if (selected && color !== 'blue') {
     if(color === 'Red') specificActive = 'bg-red-600 border-red-600 text-white shadow-md';
     if(color === 'Orange') specificActive = 'bg-orange-500 border-orange-500 text-white shadow-md';
     if(color === 'Yellow') specificActive = 'bg-yellow-400 border-yellow-400 text-slate-900 shadow-md';
     if(color === 'Green') specificActive = 'bg-green-600 border-green-600 text-white shadow-md';
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
  const TOTAL_STEPS = 7;
  
  // Card 1 State
  const [triage, setTriage] = useState('');
  const [complaint, setComplaint] = useState('');
  const [history, setHistory] = useState([]); 
  const [otherHistory, setOtherHistory] = useState('');

  useEffect(() => {
    const session = JSON.parse(localStorage.getItem('aipocus_session'));
    if (session) setInvestigatorName(session.name);
  }, []);

  const toggleHistory = (item) => {
    if (item === 'None') {
      setHistory(['None']);
      return;
    }
    setHistory(prev => {
      const filtered = prev.filter(i => i !== 'None');
      return filtered.includes(item) 
        ? filtered.filter(i => i !== item) 
        : [...filtered, item];
    });
  };

  const getStepTitle = (step) => {
    const titles = {
      1: 'Admin & Demographics',
      2: 'Primary Survey (ABCDE)',
      3: 'Pre-POCUS DICOM Uploads',
      4: 'Lung Ultrasound (BLUE)',
      5: 'Cardiac Ultrasound (FATE)',
      6: 'Inferior Vena Cava (IVC)',
      7: 'Impressions & Outcomes'
    };
    return titles[step];
  };

  return (
    <div className="max-w-5xl mx-auto pb-12 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out">
      
      {/* Top Header & Progress */}
      <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm">
        <button 
          onClick={() => navigate(AUTH_ROUTES.DASHBOARD)}
          className="text-slate-500 hover:text-blue-600 flex items-center gap-1 mb-4 text-sm font-semibold transition-colors cursor-pointer w-max"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Cases
        </button>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 font-serif">New Case Record Form</h1>
            <p className="text-sm font-medium text-slate-500 mt-1">
              Step {currentStep} of {TOTAL_STEPS}: <span className="text-slate-800">{getStepTitle(currentStep)}</span>
            </p>
          </div>
          <div className="text-right hidden md:block">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Completion</span>
            <div className="text-2xl font-bold font-mono text-blue-600">
              {Math.round((currentStep / TOTAL_STEPS) * 100)}%
            </div>
          </div>
        </div>

        {/* Animated Progress Bar */}
        <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
          <div 
            className="bg-blue-600 h-full rounded-full transition-all duration-500 ease-out" 
            style={{ width: `${(currentStep / TOTAL_STEPS) * 100}%` }}
          />
        </div>
      </div>

      {/* Main Content Area (Wraps the active card) */}
      <div className="min-h-[50vh] transition-all duration-300">
        {currentStep === 1 && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md hover:border-blue-300 transition-all duration-300 animate-in slide-in-from-right-4 fade-in">
            <div className="bg-slate-50 border-b border-slate-200 p-5 flex items-center gap-3">
              <div className="p-2 bg-blue-100 text-blue-700 rounded-lg"><UserCircle className="h-6 w-6" /></div>
              <h2 className="text-lg font-bold text-slate-900 font-serif">Card 1: Admin, Demographics & ED Presentation</h2>
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
                  <div className="md:col-span-2 space-y-3 mt-2">
                    <label className="block text-sm font-semibold text-slate-700">Triage Category (ESI/Local)</label>
                    <div className="flex flex-wrap gap-2">
                      {['Red', 'Orange', 'Yellow', 'Green'].map((color) => (
                        <FormChip key={color} label={color} color={color} selected={triage === color} onClick={() => setTriage(color)} />
                      ))}
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

              <div className="pt-4 border-t border-slate-100">
                <h3 className="text-base font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">C. Emergency Department Presentation</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="block text-sm font-semibold text-slate-700">Presenting Complaint</label>
                    <div className="flex flex-wrap gap-2">
                      {['Dyspnea', 'Shock', 'Both'].map((comp) => (
                        <FormChip key={comp} label={comp} selected={complaint === comp} onClick={() => setComplaint(comp)} />
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-700">Duration of symptoms</label>
                    <input type="text" placeholder="e.g. 3 days, 12 hours..." className="w-full p-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm transition-shadow hover:shadow-sm" />
                  </div>
                  <div className="md:col-span-2 space-y-3 mt-2">
                    <label className="block text-sm font-semibold text-slate-700">Relevant history (Select all that apply)</label>
                    <div className="flex flex-wrap gap-2 items-center">
                      {['Fever', 'Chest pain', 'Cough', 'Orthopnea', 'Trauma (exclude)'].map((hist) => (
                        <FormChip key={hist} label={hist} selected={history.includes(hist)} onClick={() => toggleHistory(hist)} />
                      ))}
                      <div className="flex items-center gap-2">
                        <FormChip label="Others" selected={history.includes('Others')} onClick={() => toggleHistory('Others')} />
                        {history.includes('Others') && (
                          <input 
                            type="text" 
                            placeholder="Specify other history..." 
                            value={otherHistory}
                            onChange={(e) => setOtherHistory(e.target.value)}
                            className="p-2 bg-white border border-slate-300 rounded-full focus:ring-2 focus:ring-blue-500 text-sm w-48 md:w-64 transition-all shadow-sm" 
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Dynamic Card Rendering with Slide Animations */}
        {currentStep === 2 && <div className="animate-in slide-in-from-right-4 fade-in duration-300"><Card2Clinical /></div>}
        {currentStep === 3 && <div className="animate-in slide-in-from-right-4 fade-in duration-300"><Card3PrePocus /></div>}
        {currentStep === 4 && <div className="animate-in slide-in-from-right-4 fade-in duration-300"><Card4Lung /></div>}
        {currentStep === 5 && <div className="animate-in slide-in-from-right-4 fade-in duration-300"><Card5Cardiac /></div>}
        {currentStep === 6 && <div className="animate-in slide-in-from-right-4 fade-in duration-300"><Card6IVC /></div>}
        {currentStep === 7 && <div className="animate-in slide-in-from-right-4 fade-in duration-300"><Card7Outcomes /></div>}
      </div>

      {/* 
        BOTTOM NAVIGATION ACTION BAR 
        Clean, unboxed layout that rests naturally below the form.
      */}
      <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col-reverse sm:flex-row justify-between items-center gap-4 transition-all">
        
        {/* Left Side: Previous Button */}
        <div className="w-full sm:w-auto">
          {currentStep > 1 ? (
            <button 
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setCurrentStep(currentStep - 1);
              }}
              className="w-full sm:w-auto px-6 py-3 bg-white border border-slate-300 text-slate-700 text-sm font-bold rounded-xl hover:bg-slate-50 hover:border-slate-400 transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <ArrowLeft className="h-4 w-4" /> Previous Step
            </button>
          ) : (
            <div className="hidden sm:block w-[140px]"></div> // Spacer to keep right buttons aligned
          )}
        </div>

        {/* Right Side: Save & Next/Submit Buttons */}
        <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-3">
          <button className="w-full sm:w-auto px-6 py-3 bg-slate-50 border border-slate-200 text-slate-600 text-sm font-bold rounded-xl hover:bg-slate-100 hover:text-blue-600 transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer active:scale-95">
            <Save className="h-4 w-4" /> Save Draft
          </button>
          
          {currentStep < TOTAL_STEPS ? (
            <button 
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setCurrentStep(currentStep + 1);
              }}
              className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 hover:-translate-y-0.5 text-white text-sm font-bold rounded-xl shadow-md hover:shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-95"
            >
              {currentStep === 3 ? 'Send to AI & Proceed' : 'Next Section'} <ChevronRight className="h-4 w-4" />
            </button>
          ) : (
            <button 
              onClick={() => {
                alert("CRF Successfully Submitted! Redirecting to AI Analysis...");
                navigate(AUTH_ROUTES.AI_ANALYSIS);
              }}
              className="w-full sm:w-auto px-8 py-3 bg-emerald-600 hover:bg-emerald-700 hover:-translate-y-0.5 text-white text-sm font-bold rounded-xl shadow-md hover:shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-95"
            >
              Submit Case <CheckCircle2 className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>

    </div>
  );
}