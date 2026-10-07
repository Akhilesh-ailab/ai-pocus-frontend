import React from 'react';
import { BookOpen, Stethoscope, Heart, Wind, Droplets } from 'lucide-react';

export default function StudyProtocol() {
  return (
    <div className="max-w-4xl space-y-6 animate-in fade-in duration-500">
      
      <div className="border-b border-slate-200 pb-5">
        <h1 className="text-3xl font-bold text-slate-900 font-serif flex items-center gap-3">
          <BookOpen className="h-8 w-8 text-blue-600" />
          Study Protocol
        </h1>
        <p className="text-slate-500 mt-2">Clinical guidelines for AI-POCUS Dyspnea/Shock Triage.</p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 md:p-8 space-y-8 text-slate-700">
          
          <section>
            <h2 className="text-xl font-bold text-slate-900 font-serif mb-3 flex items-center gap-2">
              <Stethoscope className="h-5 w-5 text-blue-600" /> 1. Primary Survey (ABCDE)
            </h2>
            <p className="leading-relaxed">
              All patients presenting with undifferentiated shock or dyspnea must undergo a standard rapid primary survey. 
              Ensure airway patency, provide cervical spine protection if trauma is suspected, and establish IV access before POCUS initiation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 font-serif mb-3 flex items-center gap-2">
              <Wind className="h-5 w-5 text-blue-600" /> 2. Lung Ultrasound (BLUE Protocol)
            </h2>
            <p className="leading-relaxed mb-3">
              Scan the upper and lower BLUE points anteriorly, and the PLAPS point laterally on both hemithoraces. 
              Assess for lung sliding and B-lines to determine the BLUE profile.
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>A-profile:</strong> Predominant A-lines with lung sliding (suggests asthma/COPD or normal).</li>
              <li><strong>B-profile:</strong> Anterior predominant B-lines with lung sliding (suggests pulmonary edema).</li>
              <li><strong>A/B-profile:</strong> Asymmetric B-lines (suggests pneumonia).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 font-serif mb-3 flex items-center gap-2">
              <Heart className="h-5 w-5 text-blue-600" /> 3. Cardiac Ultrasound (FATE)
            </h2>
            <p className="leading-relaxed">
              Obtain PLAX, PSAX, Apical 4-Chamber, and Subcostal views. Rapidly assess for pericardial effusion, severe left ventricular dysfunction, and signs of right ventricular strain (e.g., enlarged RV, D-sign) to rule out obstructive or severe cardiogenic shock.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 font-serif mb-3 flex items-center gap-2">
              <Droplets className="h-5 w-5 text-blue-600" /> 4. IVC Assessment
            </h2>
            <p className="leading-relaxed">
              Visualize the Inferior Vena Cava in the subxiphoid long axis, 1-2 cm distal to the hepatic vein junction. 
              Measure maximum and minimum diameters during the respiratory cycle to estimate CVP and fluid responsiveness.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}