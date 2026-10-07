import React from 'react';
import { Outlet } from 'react-router-dom';
import { Activity } from 'lucide-react';
import { PROJECT_INFO } from '../constants/authConstants';

export default function AuthLayout() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen relative font-sans bg-slate-950 overflow-x-hidden">
      
      {/* Custom keyframes for the shrink and grow (zoom in/out) animation */}
      <style>{`
        @keyframes shrink-grow-zoom {
          0% { transform: scale(1); }
          50% { transform: scale(1.10); }
          100% { transform: scale(1); }
        }
        .animate-zoom-pulse {
          animation: shrink-grow-zoom 20s ease-in-out infinite;
        }
      `}</style>

      {/* 
        BACKGROUND PANEL (Robot & Ultrasound)
        On mobile/tablet: Fixed full-screen background.
        On desktop: Left 50% split panel.
      */}
      <div className="absolute inset-0 lg:relative lg:w-1/2 bg-slate-950 overflow-hidden flex flex-col justify-between p-6 sm:p-10 lg:p-16 z-0">
        
        {/* Animated Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center animate-zoom-pulse opacity-75 transition-transform"
          style={{ backgroundImage: `url('/ai-pocus-hero.jpeg')` }}
        />
        
        {/* Lighter gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/60 via-blue-900/50 to-slate-950/70" />

        {/* Top Content: Logo (Hidden on mobile here, as we centered it in the form container for mobile) */}
        <div className="relative z-10 hidden lg:flex items-center space-x-2 text-blue-400">
          <div className="p-2 bg-slate-950/60 backdrop-blur-md rounded-xl border border-white/10 flex items-center space-x-2">
            <Activity className="h-6 w-6 text-blue-400" />
            <span className="text-lg font-bold tracking-wider text-white">AI-POCUS</span>
          </div>
        </div>

        {/* Middle Content: Titles */}
        <div className="relative z-10 my-auto py-12 lg:py-0 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-white font-serif leading-tight mb-4 drop-shadow-md">
            AI-Assisted Point-of-Care Ultrasound Protocol
          </h1>
          <p className="text-base sm:text-lg text-blue-100 max-w-md mx-auto lg:mx-0 font-medium leading-relaxed drop-shadow">
            {PROJECT_INFO.SUBTITLE}
          </p>
        </div>

        {/* Bottom Content: Host Institution & Partner Cards */}
        <div className="relative z-10 hidden sm:flex flex-col xl:flex-row gap-4">
          <div className="bg-slate-900/60 backdrop-blur-md border border-white/20 rounded-xl p-4 flex-1 shadow-lg">
            <p className="text-xs text-blue-300 font-bold uppercase tracking-wider mb-1">Host Institution</p>
            <p className="text-sm text-white font-medium">{PROJECT_INFO.SITE}</p>
          </div>
          <div className="bg-slate-900/60 backdrop-blur-md border border-white/20 rounded-xl p-4 flex-1 shadow-lg">
            <p className="text-xs text-blue-300 font-bold uppercase tracking-wider mb-1">Supported By</p>
            <p className="text-sm text-white font-medium">{PROJECT_INFO.PARTNER}</p>
          </div>
        </div>
      </div>

      {/* 
        FORM AREA (Login, Signup, Forgot Password)
        On mobile/tablet: Vertically centered with a crystal-clear centered logo right above the card.
        On desktop: Solid right-hand panel.
      */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-4 sm:p-8 lg:p-12 z-10 bg-slate-950/70 lg:bg-slate-50 backdrop-blur-md lg:backdrop-blur-none relative min-h-screen lg:min-h-0 animate-in fade-in duration-700">
        
        <div className="w-full max-w-md my-auto flex flex-col items-center">
          
          {/* Centered Sharp Mobile Logo (Visible only on mobile/tablet view) */}
          <div className="lg:hidden flex items-center space-x-2.5 mb-6 px-4 py-2 bg-slate-900/80 border border-white/15 rounded-2xl shadow-xl backdrop-blur-md">
            <Activity className="h-6 w-6 text-blue-400" />
            <span className="text-lg font-bold tracking-wider text-white">AI-POCUS</span>
          </div>

          {/* The Login/Signup/Forgot Card */}
          <div className="w-full">
            <Outlet />
          </div>

        </div>
      </div>

    </div>
  );
}