import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function InputField({ 
  icon: Icon, 
  type = 'text', 
  label, 
  placeholder, 
  showToggle = false,
  value,       // Added to track state
  onChange,    // Added to update state
  required = true 
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mb-4 text-left">
      <label className="block text-sm font-medium text-slate-700 mb-1">{label}</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon className="h-5 w-5 text-slate-400" />
        </div>
        <input
          type={showToggle && showPassword ? 'text' : type}
          value={value}       // Bind to state
          onChange={onChange} // Handle typing
          className="block w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-lg focus:ring-blue-600 focus:border-blue-600 sm:text-sm transition-colors bg-white text-slate-900"
          placeholder={placeholder}
          required={required}
        />
        {showToggle && (
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
          </button>
        )}
      </div>
    </div>
  );
}