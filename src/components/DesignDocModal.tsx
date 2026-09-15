import React, { useState, useEffect } from 'react';
import { X, Copy, Check, Download, FileText, Search, ExternalLink, BookOpen, Code } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

interface DesignDocModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'ar' | 'en';
}

export const DesignDocModal: React.FC<DesignDocModalProps> = ({ isOpen, onClose, lang }) => {
  const isAr = lang === 'ar';
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'preview' | 'raw'>('preview');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    if (!isOpen) return;

    let isMounted = true;
    setLoading(true);

    fetch(getAssetUrl('/DESIGN.md'))
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load DESIGN.md');
        return res.text();
      })
      .then((text) => {
        if (isMounted) {
          setContent(text);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error('Error fetching DESIGN.md:', err);
        if (isMounted) {
          setContent('# Syrian Visual Identity - DESIGN.md\nFailed to load remote document.');
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [isOpen]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'DESIGN.md';
    a.click();
    URL.revokeObjectURL(url);
  };

  // Simple markdown renderer for headers, code blocks, and lists
  const renderSimpleMarkdown = (text: string) => {
    const lines = text.split('\n');
    const elements: React.ReactNode[] = [];
    let inCodeBlock = false;
    let codeBlockContent: string[] = [];
    let codeLanguage = '';

    lines.forEach((line, index) => {
      if (line.startsWith('```')) {
        if (inCodeBlock) {
          // Closing code block
          elements.push(
            <pre
              key={`code-${index}`}
              className="bg-[#0f1715] text-[#b9a779] p-4 rounded-xl text-xs font-mono overflow-x-auto my-3 border border-white/10"
              dir="ltr"
            >
              <code>{codeBlockContent.join('\n')}</code>
            </pre>
          );
          codeBlockContent = [];
          inCodeBlock = false;
        } else {
          // Opening code block
          inCodeBlock = true;
          codeLanguage = line.replace('```', '').trim();
        }
        return;
      }

      if (inCodeBlock) {
        codeBlockContent.push(line);
        return;
      }

      if (line.startsWith('# ')) {
        elements.push(
          <h1 key={index} className="text-2xl sm:text-3xl font-extrabold text-[#054239] dark:text-[#b9a779] mt-6 mb-3 pb-2 border-b border-gray-200 dark:border-gray-800">
            {line.replace('# ', '')}
          </h1>
        );
      } else if (line.startsWith('## ')) {
        elements.push(
          <h2 key={index} className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-6 mb-2">
            {line.replace('## ', '')}
          </h2>
        );
      } else if (line.startsWith('### ')) {
        elements.push(
          <h3 key={index} className="text-lg font-bold text-[#054239] dark:text-[#edebe0] mt-4 mb-2">
            {line.replace('### ', '')}
          </h3>
        );
      } else if (line.startsWith('- ') || line.startsWith('* ')) {
        elements.push(
          <li key={index} className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 ml-4 list-disc my-1">
            {line.replace(/^[-*]\s+/, '')}
          </li>
        );
      } else if (line.startsWith('> ')) {
        elements.push(
          <blockquote key={index} className="p-3 my-2 bg-[#054239]/5 dark:bg-white/5 border-r-4 border-[#054239] dark:border-[#b9a779] text-xs sm:text-sm italic text-gray-800 dark:text-gray-200 rounded-l-lg">
            {line.replace('> ', '')}
          </blockquote>
        );
      } else if (line.trim() === '') {
        elements.push(<div key={index} className="h-2" />);
      } else {
        elements.push(
          <p key={index} className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed my-1">
            {line}
          </p>
        );
      }
    });

    return elements;
  };

  const filteredLines = searchQuery.trim()
    ? content.split('\n').filter((l) => l.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-5xl h-[90vh] bg-[#fdfbf7] dark:bg-[#161616] rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-800 flex flex-col overflow-hidden">
        {/* Top Header */}
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between gap-4 bg-white/50 dark:bg-black/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#054239] text-[#b9a779] flex items-center justify-center font-bold">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                  DESIGN.md
                </h3>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#b9a779]/20 text-[#054239] dark:text-[#b9a779] border border-[#b9a779]/30">
                  {isAr ? 'الدليل الإرشادي الرسمي' : 'Official Guidelines'}
                </span>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {isAr
                  ? 'المواصفة التصميمية الكاملة للهوية البصرية للجمهورية العربية السورية'
                  : 'Exhaustive design tokens, geometry, and component architecture'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* View Mode Toggle */}
            <div className="hidden sm:flex items-center bg-gray-100 dark:bg-gray-800 rounded-xl p-1 text-xs">
              <button
                onClick={() => setViewMode('preview')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition ${
                  viewMode === 'preview'
                    ? 'bg-white dark:bg-black text-gray-900 dark:text-white shadow-xs'
                    : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>{isAr ? 'عرض منسق' : 'Preview'}</span>
              </button>
              <button
                onClick={() => setViewMode('raw')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition ${
                  viewMode === 'raw'
                    ? 'bg-white dark:bg-black text-gray-900 dark:text-white shadow-xs'
                    : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <Code className="w-3.5 h-3.5" />
                <span>{isAr ? 'كود خام' : 'Raw'}</span>
              </button>
            </div>

            {/* Copy Button */}
            <button
              onClick={handleCopy}
              disabled={loading}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-[#b9a779]/20 hover:text-[#054239] dark:hover:text-[#b9a779] text-xs font-semibold text-gray-700 dark:text-gray-300 transition"
              title="Copy markdown"
            >
              {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
              <span className="hidden sm:inline">{copied ? (isAr ? 'تم النسخ' : 'Copied!') : (isAr ? 'نسخ الملف' : 'Copy MD')}</span>
            </button>

            {/* Download Button */}
            <button
              onClick={handleDownload}
              disabled={loading}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#054239] hover:bg-[#428177] text-white text-xs font-bold transition shadow-xs"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">{isAr ? 'تنزيل' : 'Download'}</span>
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-500 hover:text-gray-800 dark:hover:text-white transition"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Search Toolbar */}
        <div className="px-6 py-2.5 bg-gray-50/50 dark:bg-black/10 border-b border-gray-200/60 dark:border-gray-800/60 flex items-center justify-between gap-4">
          <div className="relative w-full max-w-sm">
            <Search className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isAr ? 'بحث سريع داخل الدليل...' : 'Search within DESIGN.md...'}
              className="w-full pr-9 pl-3 py-1.5 rounded-lg text-xs bg-white dark:bg-black/40 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-1 focus:ring-[#988561]"
            />
          </div>
          <div className="text-[11px] text-gray-400 hidden sm:block">
            {content.length.toLocaleString()} {isAr ? 'حرف' : 'characters'} • Markdown Specification
          </div>
        </div>

        {/* Document Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8">
          {loading ? (
            <div className="h-full flex flex-col items-center justify-center space-y-3 text-gray-400">
              <div className="w-8 h-8 border-3 border-[#054239] border-t-transparent rounded-full animate-spin" />
              <p className="text-xs">{isAr ? 'جاري تحميل الدليل...' : 'Loading specification...'}</p>
            </div>
          ) : searchQuery.trim() && filteredLines.length > 0 ? (
            <div className="space-y-2">
              <p className="text-xs text-gray-400 mb-4">
                {isAr ? `نتائج البحث عن "${searchQuery}":` : `Search results for "${searchQuery}":`} ({filteredLines.length})
              </p>
              {filteredLines.map((line, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-gray-800 text-xs font-mono text-gray-700 dark:text-gray-300">
                  {line}
                </div>
              ))}
            </div>
          ) : viewMode === 'preview' ? (
            <div className="max-w-4xl mx-auto space-y-2 font-sans">
              {renderSimpleMarkdown(content)}
            </div>
          ) : (
            <pre className="text-xs font-mono p-4 rounded-2xl bg-[#0f1715] text-[#edebe0] overflow-x-auto whitespace-pre-wrap leading-relaxed border border-white/10" dir="ltr">
              {content}
            </pre>
          )}
        </div>
      </div>
    </div>
  );
};
