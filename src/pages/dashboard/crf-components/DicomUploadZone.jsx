import React, { useState, useRef } from 'react';
import { UploadCloud, CheckCircle2, Loader2, FileImage, Film } from 'lucide-react';

export default function DicomUploadZone({ viewName, onFileUpload }) {
  const [status, setStatus] = useState('idle'); // idle, dragging, uploading, success
  const [fileName, setFileName] = useState('');
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef(null);

  const processFile = (file) => {
    if (!file) return;
    setFileName(file.name);
    setStatus('uploading');
    setProgress(0);

    // Simulate a network upload delay (Replace this with real Axios upload progress later)
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
    setStatus('idle');
    const file = e.dataTransfer.files[0];
    processFile(file);
  };

  return (
    <div 
      className={`relative p-4 rounded-xl border-2 border-dashed transition-all cursor-pointer flex flex-col items-center justify-center text-center h-40 overflow-hidden ${
        status === 'success' ? 'bg-blue-50 border-blue-400' : 
        status === 'dragging' ? 'bg-slate-100 border-blue-500 scale-[1.02]' : 
        'bg-white border-slate-300 hover:bg-slate-50 hover:border-slate-400'
      }`}
      onDragOver={(e) => { e.preventDefault(); setStatus('dragging'); }}
      onDragLeave={(e) => { e.preventDefault(); setStatus('idle'); }}
      onDrop={handleDrop}
      onClick={() => status !== 'uploading' && fileInputRef.current?.click()}
    >
      {/* Accepts JPGs, standard videos, and DICOM formats */}
      <input 
        type="file" 
        accept=".jpg,.jpeg,.mp4,.avi,.webm,.dcm,image/jpeg,video/*" 
        className="hidden" 
        ref={fileInputRef} 
        onChange={(e) => processFile(e.target.files[0])} 
      />
      
      {status === 'idle' || status === 'dragging' ? (
        <>
          <UploadCloud className={`h-8 w-8 mb-2 ${status === 'dragging' ? 'text-blue-500 animate-bounce' : 'text-slate-400'}`} />
          <p className="text-sm font-bold text-slate-700 leading-tight">{viewName}</p>
          <p className="text-xs text-slate-400 mt-1">JPG, MP4, or DCM</p>
        </>
      ) : status === 'uploading' ? (
        <>
          <Loader2 className="h-8 w-8 text-blue-500 animate-spin mb-3" />
          <div className="w-3/4 h-1.5 bg-slate-200 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 rounded-full transition-all duration-200" style={{ width: `${progress}%` }}></div>
          </div>
          <p className="text-xs text-slate-500 mt-2 truncate w-full px-2">{fileName}</p>
        </>
      ) : (
        <>
          <div className="flex items-center justify-center h-10 w-10 bg-blue-100 rounded-full mb-2">
            {fileName.toLowerCase().match(/\.(mp4|avi|webm)$/) ? (
              <Film className="h-5 w-5 text-blue-600" />
            ) : (
              <FileImage className="h-5 w-5 text-blue-600" />
            )}
          </div>
          <p className="text-sm font-bold text-blue-900 truncate w-full px-2">{fileName}</p>
          <div className="flex items-center gap-1 text-xs text-blue-600 mt-1 font-medium">
            <CheckCircle2 className="h-3.5 w-3.5" /> Uploaded
          </div>
        </>
      )}
    </div>
  );
}