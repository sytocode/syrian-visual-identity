import React from 'react';
import { Download, ExternalLink, Info, ShieldCheck } from 'lucide-react';

interface FlagProportionsProps {
  lang: 'ar' | 'en';
}

export const FlagProportions: React.FC<FlagProportionsProps> = ({ lang }) => {
  return (
    <div className="space-y-10">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ce1126]/10 text-[#ce1126] text-xs font-semibold">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>{lang === 'ar' ? 'المعايير الدستورية والهندسية' : 'Constitutional Geometric Specs'}</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          {lang === 'ar' ? 'العلم السوري ونسبه الدقيقة' : 'Syrian Flag Proportions'}
        </h2>
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
          {lang === 'ar'
            ? 'مخطط هندسي تفصيلي يوضح الأبعاد والنسب القياسية المعتمدة للعلم الوطني للجمهورية العربية السورية (نسبة الطول إلى العرض 3:2 أو 36:24 مع النجوم الثلاثة الحمراء الخماسية).'
            : 'Exact structural blueprint showcasing constitutional dimensional ratios (3:2 or 36:24) with three red five-pointed stars centered along the white band.'}
        </p>
      </div>

      {/* Flag Interactive Visual Diagram */}
      <div className="bg-white dark:bg-[#1c1c1c] border border-gray-200 dark:border-gray-800 rounded-3xl p-6 sm:p-10 shadow-sm overflow-hidden">
        {/* CSS/SVG Rendered Blueprint */}
        <div className="max-w-4xl mx-auto my-6 px-4 sm:px-12 py-10 relative select-none">
          {/* Top Measurement Lines (Total 36 and 4 x 9) */}
          <div className="relative mb-8 text-xs font-mono text-gray-500">
            {/* Total 36 Bar */}
            <div className="text-center font-bold text-sm text-[#054239] dark:text-[#edebe0] mb-2">
              36
            </div>
            <div className="h-0.5 bg-gray-300 dark:bg-gray-700 w-full relative">
              <span className="absolute -top-1 left-0 w-0.5 h-3 bg-gray-400" />
              <span className="absolute -top-1 right-0 w-0.5 h-3 bg-gray-400" />
            </div>

            {/* Sub segments (9, 9, 9, 9) */}
            <div className="grid grid-cols-4 mt-2 text-center text-xs opacity-75">
              <div className="relative border-r border-gray-300 dark:border-gray-700 pb-1">9</div>
              <div className="relative border-r border-gray-300 dark:border-gray-700 pb-1">9</div>
              <div className="relative border-r border-gray-300 dark:border-gray-700 pb-1">9</div>
              <div className="pb-1">9</div>
            </div>
          </div>

          {/* Main Flag Container with Right Stripe Measurements */}
          <div className="flex items-stretch gap-6">
            {/* The Flag Rectangle (Ratio 3:2 -> 36:24) */}
            <div className="flex-1 aspect-[36/24] border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden shadow-md flex flex-col relative">
              {/* Green Stripe */}
              <div className="flex-1 bg-[#007a3d]" />

              {/* White Stripe with 3 Red Stars */}
              <div className="flex-1 bg-white relative flex items-center justify-around px-[8.33%]">
                {/* Star 1 (at 25%) */}
                <svg viewBox="0 0 100 95" className="h-[75%] max-h-16 fill-[#ce1126] drop-shadow-sm">
                  <path d="M50 0 L61.2 36.2 L100 36.2 L69.1 58.8 L79.4 95 L50 72.5 L20.6 95 L30.9 58.8 L0 36.2 L38.8 36.2 Z" />
                </svg>
                {/* Star 2 (at 50%) */}
                <svg viewBox="0 0 100 95" className="h-[75%] max-h-16 fill-[#ce1126] drop-shadow-sm">
                  <path d="M50 0 L61.2 36.2 L100 36.2 L69.1 58.8 L79.4 95 L50 72.5 L20.6 95 L30.9 58.8 L0 36.2 L38.8 36.2 Z" />
                </svg>
                {/* Star 3 (at 75%) */}
                <svg viewBox="0 0 100 95" className="h-[75%] max-h-16 fill-[#ce1126] drop-shadow-sm">
                  <path d="M50 0 L61.2 36.2 L100 36.2 L69.1 58.8 L79.4 95 L50 72.5 L20.6 95 L30.9 58.8 L0 36.2 L38.8 36.2 Z" />
                </svg>
              </div>

              {/* Black Stripe */}
              <div className="flex-1 bg-[#161616]" />
            </div>

            {/* Vertical Measurement Lines (Total 24 and 3 x 8) */}
            <div className="flex flex-col justify-between py-2 text-xs font-mono text-gray-500 pl-2">
              <div className="flex-1 flex items-center justify-center border-b border-gray-300 dark:border-gray-700 pr-2">
                <span>8</span>
              </div>
              <div className="flex-1 flex items-center justify-center border-b border-gray-300 dark:border-gray-700 pr-2">
                <span>8</span>
              </div>
              <div className="flex-1 flex items-center justify-center pr-2">
                <span>8</span>
              </div>
            </div>
            <div className="flex items-center text-sm font-bold text-[#054239] dark:text-[#edebe0] font-mono border-l-2 border-gray-300 dark:border-gray-700 pl-3">
              <span>24</span>
            </div>
          </div>

          {/* Bottom Star Coordinates Label */}
          <div className="mt-8 pt-4 border-t border-dashed border-gray-200 dark:border-gray-800 flex justify-between text-xs text-gray-400 font-mono text-center">
            <span className="w-1/4">0% (طرف السارية)</span>
            <span className="w-1/4">25% (النجمة الأولى)</span>
            <span className="w-1/4">50% (النجمة الوسطى)</span>
            <span className="w-1/4">75% (النجمة الثالثة)</span>
          </div>
        </div>

        {/* Downloads & Resources Grid */}
        <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-800 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Official PDF Manual */}
          <div className="p-5 rounded-2xl bg-gray-50 dark:bg-black/30 border border-gray-100 dark:border-gray-800 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-base text-gray-900 dark:text-white">
                  {lang === 'ar' ? 'الدليل الإرشادي للعلم السوري (PDF)' : 'Syrian Flag Official Guide (PDF)'}
                </h4>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-medium">
                  {lang === 'ar' ? 'شامل ومفصل' : 'Comprehensive'}
                </span>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                {lang === 'ar'
                  ? 'إعداد ومساهمة: المصمم عبدالرحمن حداد (@abd_hmh). يتناول تاريخ النسب والاستخدامات الصحيحة والخاطئة.'
                  : 'Prepared & contributed by designer Abdurrahman Haddad (@abd_hmh). Covers history, usage, and correct display specs.'}
              </p>
            </div>
            <a
              href="https://drive.google.com/uc?export=download&id=1-HbfWI2PC76TTR6rKpmGl7GDcUlcZFXl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#054239] hover:bg-[#428177] text-white text-xs font-bold transition shadow-sm"
            >
              <Download className="w-4 h-4" />
              <span>{lang === 'ar' ? 'تحميل الدليل (Google Drive)' : 'Download Flag Guide (PDF)'}</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>

          {/* Card 2: Vector & CAD File Formats */}
          <div className="p-5 rounded-2xl bg-gray-50 dark:bg-black/30 border border-gray-100 dark:border-gray-800 flex flex-col justify-between space-y-4">
            <div>
              <h4 className="font-bold text-base text-gray-900 dark:text-white">
                {lang === 'ar' ? 'ملفات الرسم الهندسي والمتجهات' : 'Engineering CAD & Vector Blueprints'}
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                {lang === 'ar'
                  ? 'ملفات بصيغة متجهة دقيقة قابلة للتحجيم وغير قابلة للتشويه مخصصة للطباعة الكبيرة وأعمال التصميم والهندسة.'
                  : 'Precision scalable vector and AutoCAD files for large format printing, architectural specs, and digital design.'}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <a
                href="/assets/materials/syrian-flag-proportions.svg"
                download="العلم_السوري_النسب_الهندسية.svg"
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-[#988561] text-xs font-semibold text-gray-800 dark:text-gray-200 transition"
              >
                <Download className="w-3.5 h-3.5 text-[#988561]" />
                <span>SVG المتجه</span>
              </a>
              <a
                href="/assets/materials/syrian-flag-proportions.png"
                download="العلم_السوري_النسب_الهندسية.png"
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-[#988561] text-xs font-semibold text-gray-800 dark:text-gray-200 transition"
              >
                <Download className="w-3.5 h-3.5 text-[#988561]" />
                <span>PNG عالي الدقة</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
