import React, { useState, useEffect, useRef } from 'react';
import { FileSignature, AlertCircle } from 'lucide-react';
import { PROJECT_INFO } from '../../constants/authConstants';

export default function ConsentModal({ onAccept, onDecline }) {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const contentRef = useRef(null);

  // Check if the content needs scrolling when the modal opens
  useEffect(() => {
    const el = contentRef.current;
    if (el) {
      // If the total content height is less than or equal to the visible container height,
      // it means there is no scrollbar. Auto-unlock the checkbox.
      if (el.scrollHeight <= el.clientHeight) {
        setHasScrolled(true);
      }
    }
  }, []);

  const handleScroll = (e) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop <= e.target.clientHeight + 10;
    if (bottom) setHasScrolled(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-slate-50 p-6 border-b border-slate-200 flex items-center space-x-3">
          <div className="p-2 bg-blue-100 text-blue-700 rounded-lg">
            <FileSignature className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">Investigator Declaration & Data Agreement</h2>
            <p className="text-sm text-slate-500">Required before accessing clinical records.</p>
          </div>
        </div>

        {/* Scrollable Terms */}
        <div 
          ref={contentRef}
          className="p-6 overflow-y-auto flex-1 text-sm text-slate-600 space-y-4"
          onScroll={handleScroll}
        >
          <div className="bg-blue-50 text-blue-800 p-4 rounded-lg border border-blue-100 flex items-start space-x-3 mb-4">
            <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
            <p><strong>Study Design:</strong> Prospective observational, non-interventional study.</p>
          </div>
          <p>
            You are accessing the AI-POCUS clinical registry for the study: <strong>{PROJECT_INFO.TITLE}</strong>.
          </p>
          <p>
            By proceeding, you agree to the following conditions as outlined in Section L (Investigator Declaration) of the study protocol:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>I confirm that patient data, including DICOM ultrasound images, will be handled in accordance with institutional data privacy guidelines.</li>
            <li>I understand that the AI Output is intended for offline research purposes only and will not be available to treating clinicians for real-time patient management.</li>
            <li>I verify that the primary survey (ABCDE format) and POCUS examinations will be recorded accurately based on the established clinical workflow.</li>
          </ul>
          
          {!hasScrolled && (
            <p className="text-xs text-slate-400 mt-6 pt-4 border-t border-slate-100 animate-pulse">
              Please scroll to the bottom to accept the terms.
            </p>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-slate-200 bg-slate-50">
          <label className={`flex items-center space-x-3 mb-4 ${hasScrolled ? 'cursor-pointer' : 'cursor-not-allowed opacity-60'}`}>
            <input 
              type="checkbox" 
              className="h-4 w-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500 disabled:bg-slate-200"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
              disabled={!hasScrolled}
            />
            <span className={`text-sm ${hasScrolled ? 'text-slate-700 font-medium' : 'text-slate-400'}`}>
              I have read and agree to the investigator terms and data privacy conditions.
            </span>
          </label>
          <div className="flex justify-end space-x-3">
            <button 
              onClick={onDecline}
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
            >
              Decline & Logout
            </button>
            <button 
              onClick={onAccept}
              disabled={!isChecked}
              className="px-6 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg shadow-sm transition-all cursor-pointer"
            >
              Accept & Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}