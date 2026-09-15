import React, { useState } from 'react';
import { Download, Type, ExternalLink, Sliders } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

interface FontStudioProps {
  lang: 'ar' | 'en';
}

export const FontStudio: React.FC<FontStudioProps> = ({ lang }) => {
  const [sampleText, setSampleText] = useState(
    'انتماءٌ راسخ يتجاوز الحدود — الجمهورية العربية السورية'
  );
  const [selectedWeight, setSelectedWeight] = useState<'300' | '400' | '500' | '700'>('400');
  const [fontSize, setFontSize] = useState<number>(32);

  const weights = [
    { labelAr: 'خفيف (Light)', labelEn: 'Light', value: '300', class: 'font-light' },
    { labelAr: 'عادي (Regular)', labelEn: 'Regular', value: '400', class: 'font-normal' },
    { labelAr: 'متوسط (Medium)', labelEn: 'Medium', value: '500', class: 'font-medium' },
    { labelAr: 'عريض (Bold)', labelEn: 'Bold', value: '700', class: 'font-bold' },
  ];

  return (
    <div className="space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#988561]/10 text-[#988561] text-xs font-semibold">
          <Type className="w-3.5 h-3.5" />
          <span>{lang === 'ar' ? 'التايبوغرافي والخطوط الرسمية' : 'Official Typography'}</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          {lang === 'ar' ? 'خطوط الهوية البصرية ومختبر التجربة' : 'Brand Typography & Interactive Studio'}
        </h2>
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
          {lang === 'ar'
            ? 'تعتمد الهوية البصرية على خط قمرة (Qomra) المعاصر المصمم خصيصاً من قبل وكالة iWantype، كما يتوفر خط "حيّاكم الله" كبديل مجاني متكامل بأربعة أوزان لجميع الاستخدامات.'
            : 'Centered around the custom Qomra typeface by iWantype, accompanied by Hayyakum Allah as a free community open-type alternative across 4 weights.'}
        </p>
      </div>

      {/* Two Fonts Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1: Qomra Font */}
        <div className="bg-white dark:bg-[#1c1c1c] border border-gray-200 dark:border-gray-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-sm">
          <div className="space-y-4">
            <div className="flex justify-center bg-gray-50 dark:bg-black/40 p-4 rounded-2xl border border-gray-100 dark:border-gray-800">
              <img
                src={getAssetUrl('assets/materials/qomra2.webp')}
                alt="خط قمرة"
                className="max-h-48 w-auto rounded-xl object-contain drop-shadow-sm"
              />
            </div>
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {lang === 'ar' ? 'خط قمرة (Qomra Font)' : 'Qomra Typeface'}
                </h3>
                <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-200 font-bold">
                  {lang === 'ar' ? 'الخط الرسمي الأساسي' : 'Primary Official Font'}
                </span>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">
                {lang === 'ar'
                  ? 'الخط المعتمد في كافة نصوص وشعارات الهوية البصرية السورية الجديدة. صُمم بأسلوب يجمع بين عراقة الحرف الكوفي وأناقة المعاصرة الرقمية من قبل وكالة iWantype.'
                  : 'The primary commissioned typeface for Syrian Identity logos and texts, combining geometric Kufic inspiration with contemporary elegance by iWantype.'}
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row gap-3">
            <a
              href="https://iwantype.com/product/qomra/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#054239] hover:bg-[#428177] text-white text-xs font-bold transition shadow-sm"
            >
              <span>{lang === 'ar' ? 'شراء الترخيص من iWantype' : 'Purchase License on iWantype'}</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>
        </div>

        {/* Card 2: Hayyakum Allah Font */}
        <div className="bg-white dark:bg-[#1c1c1c] border border-gray-200 dark:border-gray-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-sm">
          <div className="space-y-4">
            <div className="flex justify-center bg-gray-50 dark:bg-black/40 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 flex-col items-center text-center">
              <span className="text-4xl font-bold text-[#054239] dark:text-[#edebe0] font-sans">
                حيّاكم الله
              </span>
              <span className="text-xs text-gray-500 mt-2">
                {lang === 'ar' ? 'أربعة أوزان: Light • Regular • Medium • Bold' : 'Four weights: Light • Regular • Medium • Bold'}
              </span>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {lang === 'ar' ? 'خط حيّاكم الله (Hayyakum Allah)' : 'Hayyakum Allah (Free Font)'}
                </h3>
                <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-200 font-bold">
                  {lang === 'ar' ? 'مجاني ومفتوح' : 'Free Alternative'}
                </span>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">
                {lang === 'ar'
                  ? 'خط طباعي متناسق وجميل متاح للاستخدام الحر المباشر في التصميم والمواقع الإلكترونية، ويحاكي طابع الهوية البصرية بأعلى درجات الدقة.'
                  : 'An open and accessible complementary font family crafted to match Syrian Identity visual aesthetics across print and web projects.'}
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-wrap gap-2">
            <a
              href={getAssetUrl('assets/fonts/HayyakumAllah-Regular.ttf')}
              download="HayyakumAllah-Regular.ttf"
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-[#988561] text-xs font-semibold text-gray-800 dark:text-gray-200 transition"
            >
              <Download className="w-3.5 h-3.5 text-[#988561]" />
              <span>{lang === 'ar' ? 'تحميل TTF' : 'Download TTF'}</span>
            </a>
            <a
              href={getAssetUrl('assets/fonts/HayyakumAllah-Regular.woff2')}
              download="HayyakumAllah-Regular.woff2"
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-[#988561] text-xs font-semibold text-gray-800 dark:text-gray-200 transition"
            >
              <Download className="w-3.5 h-3.5 text-[#988561]" />
              <span>{lang === 'ar' ? 'تحميل WOFF2 للويب' : 'Download WOFF2'}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Interactive Live Type Tester */}
      <div className="bg-white dark:bg-[#1c1c1c] border border-gray-200 dark:border-gray-800 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 dark:border-gray-800 pb-6">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {lang === 'ar' ? 'مختبر تجربة الخط التفاعلي' : 'Live Type Tester Sandbox'}
            </h3>
            <p className="text-xs text-gray-500 mt-0.5">
              {lang === 'ar' ? 'جرّب كتابة أي نص سوري أو عبارة واختبر الأوزان والأحجام' : 'Type custom text and adjust weights and sizes in real time'}
            </p>
          </div>

          {/* Controls: Weight and Size */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Weight Switcher */}
            <div className="inline-flex rounded-xl bg-gray-100 dark:bg-gray-800 p-1">
              {weights.map((w) => (
                <button
                  key={w.value}
                  onClick={() => setSelectedWeight(w.value as any)}
                  className={`px-3 py-1 rounded-lg text-xs transition ${
                    selectedWeight === w.value
                      ? 'bg-white dark:bg-gray-700 text-[#054239] dark:text-white font-bold shadow-xs'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900'
                  }`}
                >
                  {lang === 'ar' ? w.labelAr.split(' ')[0] : w.labelEn}
                </button>
              ))}
            </div>

            {/* Size Slider */}
            <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
              <Sliders className="w-3.5 h-3.5 text-[#988561]" />
              <input
                type="range"
                min="18"
                max="64"
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
                className="w-24 accent-[#054239]"
              />
              <span>{fontSize}px</span>
            </div>
          </div>
        </div>

        {/* Input Textarea & Live Display */}
        <div className="space-y-4">
          <input
            type="text"
            value={sampleText}
            onChange={(e) => setSampleText(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50/70 dark:bg-black/30 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#988561]"
            placeholder={lang === 'ar' ? 'اكتب نصاً للمعاينة...' : 'Type sample text to preview...'}
          />

          <div
            className="p-8 rounded-2xl bg-gray-50/50 dark:bg-black/20 border border-gray-100 dark:border-gray-800 min-h-[140px] flex items-center justify-center text-center text-gray-900 dark:text-white transition-all overflow-x-auto"
            style={{
              fontFamily: 'HayyakumAllah, sans-serif',
              fontWeight: Number(selectedWeight),
              fontSize: `${fontSize}px`,
              lineHeight: 1.4,
            }}
          >
            {sampleText || (lang === 'ar' ? 'سوريا مهد الحضارة وملتقى الإنسانية' : 'Syria: Cradle of Civilization & Meeting Point of Humanity')}
          </div>
        </div>
      </div>
    </div>
  );
};
