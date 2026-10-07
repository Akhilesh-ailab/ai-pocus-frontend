import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, User, Shield, ArrowRight } from 'lucide-react';
import { AUTH_ROUTES, CLINICAL_ROLES } from '../../constants/authConstants';

export default function SignupPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', password: '', role: '' });

  const handleSignup = (e) => {
    e.preventDefault();
    // Simulate account creation
    alert("Account created! Please log in.");
    navigate(AUTH_ROUTES.LOGIN);
  };

  return (
    <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 w-full animate-in slide-in-from-bottom-4 duration-500">
      
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 font-serif mb-2">Create an account</h2>
        <p className="text-sm text-slate-500">Join the AI-POCUS clinical registry study.</p>
      </div>

      <form onSubmit={handleSignup} className="space-y-4">
        
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Full Name</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input 
              type="text" required placeholder="Dr. Jane Doe"
              value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-sm transition-all shadow-sm"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Clinical Role</label>
          <div className="relative">
            <Shield className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <select 
              required
              value={formData.role} onChange={(e) => setFormData({...formData, role: e.target.value})}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-sm transition-all shadow-sm appearance-none"
            >
              <option value="" disabled>Select your role...</option>
              {CLINICAL_ROLES.map(r => (
                <option key={r.value} value={r.value}>{r.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input 
              type="email" required placeholder="physician@aiims.edu.in"
              value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-sm transition-all shadow-sm"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Password</label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input 
              type="password" required placeholder="••••••••"
              value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="w-full pl-10 pr-10 py-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-sm transition-all shadow-sm"
            />
          </div>
        </div>

        <button 
          type="submit" 
          className="w-full mt-6 py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 active:scale-[0.98] cursor-pointer"
        >
          Register Account <ArrowRight className="h-4 w-4" />
        </button>

      </form>

      <p className="mt-8 text-center text-xs text-slate-500 font-medium">
        Already have an account? <Link to={AUTH_ROUTES.LOGIN} className="text-blue-600 font-bold hover:underline">Sign in here</Link>
      </p>
    </div>
  );
}