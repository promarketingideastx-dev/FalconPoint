import React, { useState, useRef } from 'react';
import { uploadProjectAsset } from '../services/storage';
import toast from 'react-hot-toast';

export default function FileUploader({ projectId, onUploadSuccess }) {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = async (files) => {
    const file = files[0]; // Accept single file for now
    
    // Validate file type
    const validTypes = ['image/jpeg', 'image/png', 'application/pdf'];
    if (!validTypes.includes(file.type)) {
      toast.error('Invalid file type. Please upload JPG, PNG, or PDF.');
      return;
    }

    // Validate size (e.g. max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      toast.error('File size exceeds 10MB limit.');
      return;
    }

    try {
      setIsUploading(true);
      setProgress(0);
      
      const downloadURL = await uploadProjectAsset(file, projectId, (prog) => {
        setProgress(prog);
      });
      
      toast.success('Asset uploaded successfully!');
      if (onUploadSuccess) onUploadSuccess(downloadURL);
      
    } catch (error) {
      console.error(error);
      toast.error('Failed to upload file. Please try again.');
    } finally {
      setIsUploading(false);
      setProgress(0);
    }
  };

  return (
    <div 
      className={`border-2 border-dashed rounded-xl p-6 text-center transition-colors relative ${isDragging ? 'border-primary bg-primary/10' : 'border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={() => fileInputRef.current.click()}
    >
      <input 
        type="file" 
        className="hidden" 
        ref={fileInputRef} 
        onChange={handleFileInput}
        accept=".jpg,.jpeg,.png,.pdf"
      />
      
      {isUploading ? (
        <div className="flex flex-col items-center gap-3">
          <span className="material-symbols-outlined text-primary animate-spin">refresh</span>
          <div className="w-full max-w-[200px] h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-xs text-slate-500 font-semibold">{Math.round(progress)}% Uploading...</p>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <div className="size-10 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-2">
            <span className="material-symbols-outlined">cloud_upload</span>
          </div>
          <p className="text-sm font-bold text-slate-900 dark:text-white">Drag & Drop files here</p>
          <p className="text-xs text-slate-500">or click to browse (JPG, PNG, PDF up to 10MB)</p>
        </div>
      )}
    </div>
  );
}
