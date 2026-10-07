import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, ArrowLeft, Send } from 'lucide-react';
import { AUTH_ROUTES } from '../../constants/authConstants';

export default function ForgotPasswordPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleReset = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 w-full animate-in slide-in-from-bottom-4 duration-500">
      
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 font-serif mb-2">Reset password</h2>
        <p className="text-sm text-slate-500">Enter your email and we'll send you a reset link.</p>
      </div>

      {!isSubmitted ? (
        <form onSubmit={handleReset} className="space-y-5">
          
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input 
                type="email" required placeholder="physician@aiims.edu.in"
                value={email} onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-sm transition-all shadow-sm"
              />
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 active:scale-[0.98] cursor-pointer"
          >
            Send Reset Link <Send className="h-4 w-4" />
          </button>

        </form>
      ) : (
        <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl text-center animate-in fade-in zoom-in duration-300">
          <p className="text-emerald-800 text-sm font-bold mb-1">Check your inbox</p>
          <p className="text-emerald-600 text-xs">We sent a recovery link to <strong>{email}</strong></p>
        </div>
      )}

      <div className="mt-8 pt-6 border-t border-slate-100 flex justify-center">
        <Link to={AUTH_ROUTES.LOGIN} className="flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to Login
        </Link>
      </div>

    </div>
  );
}