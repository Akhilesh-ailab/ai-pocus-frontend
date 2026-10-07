import React from 'react';
import { HelpCircle, Mail, MessageSquare } from 'lucide-react';

export default function HelpSupport() {
  return (
    <div className="max-w-4xl space-y-6 animate-in fade-in duration-500">
      
      <div className="border-b border-slate-200 pb-5">
        <h1 className="text-3xl font-bold text-slate-900 font-serif flex items-center gap-3">
          <HelpCircle className="h-8 w-8 text-blue-600" />
          Help & Support
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Contact Form */}
        <div className="md:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8">
          <h2 className="text-lg font-bold text-slate-900 font-serif mb-4 flex items-center gap-2 border-b border-slate-100 pb-2">
            <MessageSquare className="h-5 w-5 text-blue-600" /> Contact the Research Team
          </h2>
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Message Sent!'); }}>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700">Subject</label>
              <select className="w-full p-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500">
                <option>Technical Issue / Bug Report</option>
                <option>Clinical Protocol Question</option>
                <option>Data Correction Request</option>
                <option>Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700">Message</label>
              <textarea rows="5" className="w-full p-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500" placeholder="Describe your issue here..."></textarea>
            </div>
            <button type="submit" className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-lg shadow-sm transition-colors cursor-pointer">
              Send Message
            </button>
          </form>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
            <h3 className="font-bold text-slate-900 mb-2">Direct Contact</h3>
            <div className="flex items-center gap-2 text-sm text-slate-600 mb-2">
              <Mail className="h-4 w-4 text-blue-600" />
              <a href="mailto:support@aipocus.aiims.edu" className="hover:text-blue-600 hover:underline">support@aipocus.aiims.edu</a>
            </div>
            <p className="text-xs text-slate-500 mt-4">Expected response time: 24-48 hours during business days.</p>
          </div>

          <div className="bg-blue-50 rounded-xl border border-blue-100 p-6">
            <h3 className="font-bold text-blue-900 mb-2">System Info</h3>
            <p className="text-sm text-blue-800 mb-1"><strong>Version:</strong> 1.0.4 Beta</p>
            <p className="text-sm text-blue-800"><strong>Environment:</strong> Production</p>
          </div>
        </div>

      </div>
    </div>
  );
}