import React from 'react';
import { Download, FileArchive, FileText, Image as ImageIcon, Type, Sparkles, CheckCircle2 } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

interface DownloadsVaultProps {
  lang: 'ar' | 'en';
}

export const DownloadsVault: React.FC<DownloadsVaultProps> = ({ lang }) => {
  const logoDownloads = [
    {
      nameAr: 'الشعار الأفقي الرسمي (Vector SVG)',
      nameEn: 'Horizontal Logo (Vector SVG)',
      format: 'SVG',
      file: getAssetUrl('/assets/logos/Logos/SVG/Syrian_horizontal_dark_green.svg'),
      tag: 'الأكثر استخداماً'
    },
    {
      nameAr: 'الشعار العمودي الرسمي (Vector SVG)',
      nameEn: 'Vertical Logo (Vector SVG)',
      format: 'SVG',
      file: getAssetUrl('/assets/logos/Logos/SVG/Syrian_vertical_logo_.svg'),
      tag: 'رسمي'
    },
    {
      nameAr: 'أيقونة الشعار الذهبية (Logo Icon Gold)',
      nameEn: 'Logo Icon Gold (Vector SVG)',
      format: 'SVG',
      file: getAssetUrl('/assets/logos/Logos/SVG/Syrian_logo_icon_gold.svg'),
      tag: 'ذهبي'
    },
    {
      nameAr: 'الرمز اللفظي للهوية (Logotype Black)',
      nameEn: 'Logotype Black (Vector SVG)',
      format: 'SVG',
      file: getAssetUrl('/assets/logos/Logos/SVG/Syrian_logotype_black.svg'),
      tag: 'نصي'
    },
    {
      nameAr: 'شعار الهوية باللون الأبيض (White SVG)',
      nameEn: 'White Logo for Dark Backgrounds',
      format: 'SVG',
      file: getAssetUrl('/assets/logos/Logos/SVG/Syrian_horizontal_white.svg'),
      tag: 'للخلفيات الداكنة'
    },
    {
      nameAr: 'شعار الهوية المفرغ عالي الدقة (PNG)',
      nameEn: 'High-Res Transparent PNG',
      format: 'PNG',
      file: getAssetUrl('/assets/logos/Logos/PNG/Syrian_horizontal_dark_green.png'),
      tag: 'بدقة عالية'
    }
  ];

  return (
    <div className="space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#054239]/10 text-[#054239] dark:text-[#edebe0] text-xs font-semibold">
          <FileArchive className="w-3.5 h-3.5 text-[#988561]" />
          <span>{lang === 'ar' ? 'المستودع الرقمي الموحد' : 'Digital Assets Vault'}</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          {lang === 'ar' ? 'تحميل مواد الهوية البصرية الرسمية' : 'Official Asset Downloads'}
        </h2>
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
          {lang === 'ar'
            ? 'نظراً لتوقف خوادم الموقع الأصلي، تم توثيق وحفظ كافّة الملفات والمتجهات الرسمية وتوفيرها هنا للتنزيل المباشر المفتوح خدمةً للجمهور والمؤسسات.'
            : 'Preserved digital vault providing direct high-speed download for official brand assets, vector logos, fonts, CAD blueprints, and design guides.'}
        </p>
      </div>

      {/* Featured Master Package Card */}
      <div className="bg-gradient-to-br from-[#054239] to-[#002623] text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
        {/* Subtle decorative background shape */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white/5 blur-2xl pointer-events-none" />

        <div className="max-w-3xl space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#b9a779]/20 text-[#edebe0] text-xs font-bold border border-[#b9a779]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#b9a779]" />
            <span>{lang === 'ar' ? 'الحزمة الرسمية الكاملة' : 'Complete Master Package'}</span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-bold tracking-tight">
            {lang === 'ar'
              ? 'حزمة الهوية البصرية السورية الشاملة (ZIP)'
              : 'Complete Official Syrian Identity Package (ZIP)'}
          </h3>

          <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
            {lang === 'ar'
              ? 'تتضمن 125 ملفاً أصلياً بصيغ متجهة واحترافية للطباعة والنشر الرقمي (SVG, PDF, EPS, PNG) لكافة أشكال وتطبيقات الشعار (الأفقي، العمودي، الأيقونة، الرمز اللفظي) بجميع الألوان المعتمدة (الأخضر الداكن، الذهبي، الأبيض، والأسود).'
              : 'Includes 125 master vector and print-ready files (SVG, PDF, EPS, PNG) encompassing all official orientations, logotypes, icons, and approved color palettes.'}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2 text-xs text-gray-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#b9a779]" />
              <span>125 ملف رسمي</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#b9a779]" />
              <span>فيكتور SVG و EPS</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#b9a779]" />
              <span>جاهز للمطابع PDF</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#b9a779]" />
              <span>حجم خفيف: 4.5 MB</span>
            </div>
          </div>

          <div className="pt-4">
            <a
              href={getAssetUrl('/downloads/Syrian_Identity_Official_Package.zip')}
              download="Syrian_Identity_Official_Package.zip"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-[#b9a779] hover:bg-[#edebe0] text-[#054239] font-bold text-sm transition shadow-lg hover:shadow-xl active:scale-95"
            >
              <Download className="w-5 h-5" />
              <span>{lang === 'ar' ? 'تحميل الحزمة الشاملة (4.5 MB ZIP)' : 'Download Master ZIP (4.5 MB)'}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Individual Quick Downloads Grid */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {lang === 'ar' ? 'تنزيل شعارات وأصول منفردة' : 'Individual Assets & Vectors'}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {logoDownloads.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#1c1c1c] border border-gray-200 dark:border-gray-800 rounded-2xl p-5 flex flex-col justify-between hover:shadow-md transition space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
                    {item.format}
                  </span>
                  <span className="text-xs text-[#988561] font-medium">{item.tag}</span>
                </div>
                <h4 className="font-bold text-sm text-gray-900 dark:text-white">
                  {lang === 'ar' ? item.nameAr : item.nameEn}
                </h4>
              </div>

              <a
                href={item.file}
                download
                className="inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-gray-50 dark:bg-black/30 hover:bg-[#054239] hover:text-white dark:hover:bg-[#054239] text-xs font-semibold text-gray-800 dark:text-gray-200 transition"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{lang === 'ar' ? 'تحميل مباشر' : 'Download'}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
