import React, { useEffect, useState } from 'react';
import { X, Download, ZoomIn, ZoomOut, Check, Copy, Sparkles, Layers } from 'lucide-react';

interface ImagePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title: string;
  format?: string;
  description?: string;
  downloadUrl?: string;
  lang?: 'ar' | 'en';
}

export const ImagePreviewModal: React.FC<ImagePreviewModalProps> = ({
  isOpen,
  onClose,
  imageSrc,
  title,
  format = 'SVG',
  description,
  downloadUrl,
  lang = 'ar',
}) => {
  const isAr = lang === 'ar';
  const [bgMode, setBgMode] = useState<'dark' | 'light' | 'emerald' | 'grid'>('grid');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const targetDownload = downloadUrl || imageSrc;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.origin + targetDownload);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const bgClasses = {
    grid: 'bg-[radial-gradient(#988561_1px,transparent_1px)] [background-size:16px_16px] bg-[#edebe0]/50 dark:bg-[#1a1a1a]',
    dark: 'bg-[#141414]',
    light: 'bg-white',
    emerald: 'bg-gradient-to-br from-[#054239] to-[#002623]',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 animate-fade-in">
      {/* Dark overlay backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-4xl max-h-[90vh] flex flex-col bg-white dark:bg-[#1c1c1c] rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-[#222]">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold uppercase tracking-wider bg-[#054239] text-white">
              {format}
            </span>
            <h3 className="font-bold text-base sm:text-lg text-gray-900 dark:text-white truncate">
              {title}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              title={isAr ? 'إغلاق' : 'Close'}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Canvas / Preview Display */}
        <div
          className={`relative flex-1 min-h-[320px] max-h-[55vh] flex items-center justify-center p-8 overflow-auto transition-colors duration-300 ${bgClasses[bgMode]}`}
        >
          <img
            src={imageSrc}
            alt={title}
            className="max-h-full max-w-full object-contain drop-shadow-md select-none"
          />

          {/* Background switcher toolbar */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 dark:bg-black/80 backdrop-blur shadow-md border border-gray-200 dark:border-gray-700 text-xs font-semibold">
            <span className="text-[11px] text-gray-500 px-1 hidden sm:inline">
              {isAr ? 'خلفية المعاينة:' : 'Canvas:'}
            </span>
            <button
              onClick={() => setBgMode('grid')}
              className={`px-2 py-0.5 rounded-full transition ${
                bgMode === 'grid' ? 'bg-[#054239] text-white' : 'text-gray-600 dark:text-gray-400 hover:text-black'
              }`}
            >
              {isAr ? 'شفافة' : 'Grid'}
            </button>
            <button
              onClick={() => setBgMode('dark')}
              className={`px-2 py-0.5 rounded-full transition ${
                bgMode === 'dark' ? 'bg-[#054239] text-white' : 'text-gray-600 dark:text-gray-400 hover:text-black'
              }`}
            >
              {isAr ? 'داكنة' : 'Dark'}
            </button>
            <button
              onClick={() => setBgMode('emerald')}
              className={`px-2 py-0.5 rounded-full transition ${
                bgMode === 'emerald' ? 'bg-[#054239] text-white' : 'text-gray-600 dark:text-gray-400 hover:text-black'
              }`}
            >
              {isAr ? 'أخضر سوري' : 'Emerald'}
            </button>
            <button
              onClick={() => setBgMode('light')}
              className={`px-2 py-0.5 rounded-full transition ${
                bgMode === 'light' ? 'bg-[#054239] text-white' : 'text-gray-600 dark:text-gray-400 hover:text-black'
              }`}
            >
              {isAr ? 'فاتحة' : 'Light'}
            </button>
          </div>
        </div>

        {/* Footer info & download action */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 bg-white dark:bg-[#1c1c1c] border-t border-gray-200 dark:border-gray-800">
          <p className="text-xs text-gray-500 dark:text-gray-400 max-w-lg text-center sm:text-start leading-relaxed">
            {description || (isAr ? 'ملف أصلي عالي الدقة محفوظ للاستخدامات الرسمية والطباعة والتصميم الرقمي.' : 'Original high-resolution asset preserved for design, print, and digital use.')}
          </p>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-center">
            <button
              onClick={handleCopyLink}
              className="px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 text-xs font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition inline-flex items-center gap-1.5"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? (isAr ? 'تم نسخ الرابط' : 'Link Copied') : (isAr ? 'نسخ الرابط' : 'Copy Link')}</span>
            </button>

            <a
              href={targetDownload}
              download
              className="px-5 py-2 rounded-xl bg-[#054239] hover:bg-[#428177] text-white text-xs font-bold transition shadow-sm hover:shadow-md inline-flex items-center gap-2 active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>{isAr ? 'تنزيل الملف المباشر' : 'Download Asset'}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
