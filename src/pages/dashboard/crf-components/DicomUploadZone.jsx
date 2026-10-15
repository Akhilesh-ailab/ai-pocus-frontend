import React, { useState, useRef, useEffect } from 'react';
import { UploadCloud, CheckCircle2, Loader2, FileImage, Film } from 'lucide-react';

export default function DicomUploadZone({ viewName, existingFile, onFileUpload }) {
  const [status, setStatus] = useState(existingFile ? 'success' : 'idle'); // idle, dragging, uploading, success
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef(null);

  // Sync status if file already exists in the central brain
  useEffect(() => {
    if (existingFile) setStatus('success');
  }, [existingFile]);

  const processFile = (file) => {
    if (!file) return;
    setStatus('uploading');
    setProgress(0);

    // Simulate a network upload delay (Replace this with real upload logic later)
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 20;
      setProgress(currentProgress);
      if (currentProgress >= 100) {
        clearInterval(interval);
        setStatus('success');
        if (onFileUpload) onFileUpload(viewName, file);
      }
    }, 150);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (status === 'uploading') return;
    setStatus('idle');
    const file = e.dataTransfer.files[0];
    processFile(file);
  };

  const fileName = existingFile ? existingFile.name : '';

  return (
    <div 
      className={`relative p-4 rounded-xl border-2 border-dashed transition-all cursor-pointer flex flex-col items-center justify-center text-center h-40 overflow-hidden ${
        status === 'success' ? 'bg-green-50 border-green-400 hover:bg-green-100' : 
        status === 'dragging' ? 'bg-slate-100 border-blue-500 scale-[1.02]' : 
        'bg-slate-50 border-slate-300 hover:border-blue-400 hover:bg-blue-50/30'
      }`}
      onDragOver={(e) => { e.preventDefault(); if (status !== 'uploading') setStatus('dragging'); }}
      onDragLeave={(e) => { e.preventDefault(); if (status !== 'uploading' && !existingFile) setStatus('idle'); }}
      onDrop={handleDrop}
      onClick={() => status !== 'uploading' && fileInputRef.current?.click()}
    >
      <input 
        type="file" 
        accept=".jpg,.jpeg,.mp4,.avi,.webm,.dcm,image/jpeg,video/*" 
        className="hidden" 
        ref={fileInputRef} 
        onChange={(e) => processFile(e.target.files[0])} 
      />
      
      {status === 'idle' || status === 'dragging' ? (
        <>
          <UploadCloud className={`h-10 w-10 mb-3 transition-colors ${status === 'dragging' ? 'text-blue-500 animate-bounce' : 'text-slate-400 group-hover:text-blue-500'}`} />
          <span className="text-sm font-semibold text-slate-700 line-clamp-2 px-2">{viewName}</span>
          <span className="text-xs text-slate-500 mt-2">Click or drag .dcm file</span>
        </>
      ) : status === 'uploading' ? (
        <div className="w-full flex flex-col items-center">
          <Loader2 className="h-8 w-8 text-blue-500 animate-spin mb-3" />
          <div className="w-3/4 h-1.5 bg-slate-200 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 rounded-full transition-all duration-200" style={{ width: `${progress}%` }}></div>
          </div>
          <p className="text-xs text-slate-500 mt-2">Uploading...</p>
        </div>
      ) : (
        <>
          <CheckCircle2 className="h-10 w-10 text-green-500 mb-3" />
          <span className="text-sm font-bold text-green-800 line-clamp-2">{viewName}</span>
          <span className="text-xs text-green-600 mt-2 truncate w-full px-2 border-t border-green-200 pt-2">
            {fileName}
          </span>
        </>
      )}
    </div>
  );
}