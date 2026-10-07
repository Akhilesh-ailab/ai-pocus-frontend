import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import { AUTH_ROUTES } from '../../constants/authConstants';

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem('aipocus_session', JSON.stringify({
      name: 'Dr. Akhilesh Bankar',
      role: 'doctor',
      token: 'mock-jwt-token-123'
    }));
    navigate(AUTH_ROUTES.DASHBOARD);
  };

  return (
    <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 w-full animate-in slide-in-from-bottom-4 duration-500">
      
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 font-serif mb-2">Welcome back</h2>
        <p className="text-sm text-slate-500">Sign in to access patient CRFs and DICOM processing.</p>
      </div>

      <form onSubmit={handleLogin} className="space-y-5">
        
        {/* Email Input */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input 
              type="email" 
              required
              placeholder="physician@aiims.edu.in"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-sm transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Password Input */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Password</label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input 
              type="password" 
              required
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-10 py-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-sm transition-all shadow-sm"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs font-serif">@</div>
          </div>
        </div>

        {/* Options Row */}
        <div className="flex items-center justify-between mt-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-600" />
            <span className="text-xs font-medium text-slate-600">Remember me</span>
          </label>
          <Link to={AUTH_ROUTES.FORGOT_PASSWORD} className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors">
            Forgot password?
          </Link>
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          className="w-full mt-6 py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 active:scale-[0.98] cursor-pointer"
        >
          Sign In <ArrowRight className="h-4 w-4" />
        </button>

      </form>

      {/* Footer Link */}
      <p className="mt-8 text-center text-xs text-slate-500 font-medium">
        Don't have an account? <Link to={AUTH_ROUTES.SIGNUP} className="text-blue-600 font-bold hover:underline">Register here</Link>
      </p>

    </div>
  );
}