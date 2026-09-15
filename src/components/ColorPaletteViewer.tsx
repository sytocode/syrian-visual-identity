import React, { useState } from 'react';
import { brandPalettes, ColorInfo } from '../data/colorsData';
import { Copy, Check, Palette, Bot } from 'lucide-react';

interface ColorPaletteViewerProps {
  lang: 'ar' | 'en';
}

export const ColorPaletteViewer: React.FC<ColorPaletteViewerProps> = ({ lang }) => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (text: string, key?: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(key || text);
    setTimeout(() => {
      setCopiedCode(null);
    }, 2000);
  };

  const copyGroupForAi = (group: any) => {
    const lines = [
      `### Syrian Visual Identity: ${group.nameEn} (${group.nameAr})`,
      `${group.descriptionEn}`,
      '```json',
      JSON.stringify(
        group.colors.map((c: ColorInfo) => ({
          name: c.nameEn,
          arabicName: c.nameAr,
          hex: c.hex,
          cmyk: c.cmyk,
          oklch: c.oklch
        })),
        null,
        2
      ),
      '```'
    ].join('\n');
    copyToClipboard(lines, `ai-${group.id}`);
  };

  return (
    <div className="space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#054239]/10 dark:bg-[#054239]/40 text-[#054239] dark:text-[#edebe0] text-xs font-semibold">
          <Palette className="w-3.5 h-3.5 text-[#988561]" />
          <span>{lang === 'ar' ? 'نظام الألوان الرسمي' : 'Official Color System'}</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          {lang === 'ar' ? 'لوحة الألوان وقيم التنسيق' : 'Brand Color Palettes'}
        </h2>
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
          {lang === 'ar'
            ? 'تستمد الهوية البصرية ألوانها من طبيعة سوريا وترابها وتراثها؛ من خضرة الغوطة والساحل، إلى سنابل حوران الذهبية، وحمرة الطين والعمارة العريقة. اضغط على أي كود لنسخه مباشرة.'
            : 'Derived from the rich Syrian landscape, agricultural fertile plains, ancient basalt stone, and cultural craftsmanship. Click any code format to copy.'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {brandPalettes.map((group) => (
          <div
            key={group.id}
            className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1f1f1f] overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {lang === 'ar' ? group.nameAr : group.nameEn}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {lang === 'ar' ? group.descriptionAr : group.descriptionEn}
                </p>
              </div>

              <button
                onClick={() => copyGroupForAi(group)}
                className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[#b9a779]/40 bg-[#b9a779]/10 hover:bg-[#b9a779]/20 text-[#054239] dark:text-[#b9a779] text-xs font-semibold transition"
                title={lang === 'ar' ? 'نسخ لذكاء اصطناعي (AI Prompt / JSON)' : 'Copy for AI (Prompt / JSON)'}
              >
                {copiedCode === `ai-${group.id}` ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-500" />
                    <span>{lang === 'ar' ? 'تم النسخ!' : 'Copied!'}</span>
                  </>
                ) : (
                  <>
                    <Bot className="w-3.5 h-3.5" />
                    <span>{lang === 'ar' ? 'نسخ للـ AI' : 'Copy for AI'}</span>
                  </>
                )}
              </button>
            </div>

            {/* Colors */}
            <div className="p-6 space-y-5">
              {group.colors.map((c: ColorInfo, idx: number) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl border border-gray-100 dark:border-gray-800/80 bg-gray-50/50 dark:bg-black/20 gap-4"
                >
                  {/* Swatch & Name */}
                  <div className="flex items-center gap-3.5 min-w-[160px]">
                    <div
                      className="w-12 h-12 rounded-xl shadow-inner border border-black/10 flex-shrink-0 flex items-center justify-center"
                      style={{ backgroundColor: c.hex }}
                    />
                    <div>
                      <span className="font-bold text-sm text-gray-900 dark:text-white block">
                        {lang === 'ar' ? c.nameAr || c.hex : c.nameEn || c.hex}
                      </span>
                      <span className="font-mono text-xs text-gray-500">{c.hex}</span>
                    </div>
                  </div>

                  {/* Format Pills */}
                  <div className="flex flex-wrap items-center gap-1.5 justify-start sm:justify-end">
                    {[
                      { label: 'HEX', val: c.hex },
                      { label: 'RGB', val: c.hsl.replace('hsl', 'rgb') }, // or cmyk
                      { label: 'CMYK', val: c.cmyk },
                      { label: 'OKLCH', val: c.oklch }
                    ].map((f) => {
                      const isCopied = copiedCode === f.val;
                      return (
                        <button
                          key={f.label}
                          onClick={() => copyToClipboard(f.val)}
                          className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-mono transition border ${
                            isCopied
                              ? 'bg-[#054239] text-white border-[#054239]'
                              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-[#988561]'
                          }`}
                          title={`Click to copy ${f.label}`}
                        >
                          <span className="text-[10px] font-sans font-bold opacity-60">{f.label}:</span>
                          <span>{f.label === 'HEX' ? f.val : f.val.split(' ')[0]}</span>
                          {isCopied ? (
                            <Check className="w-3 h-3 text-emerald-400" />
                          ) : (
                            <Copy className="w-3 h-3 opacity-40 group-hover:opacity-100" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
