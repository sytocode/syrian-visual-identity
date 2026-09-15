import React, { useState } from 'react';
import { Download, FileArchive, Eye, Sparkles, CheckCircle2, Flag, Image as ImageIcon, Bot, Check, BookOpen } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';
import { ImagePreviewModal } from './ImagePreviewModal';
import { DesignDocModal } from './DesignDocModal';

interface DownloadsVaultProps {
  lang: 'ar' | 'en';
}

interface DownloadItem {
  id: string;
  nameAr: string;
  nameEn: string;
  format: string;
  file: string;
  tagAr: string;
  tagEn: string;
  bgType: 'dark' | 'light' | 'emerald';
  descAr: string;
  descEn: string;
}

export const DownloadsVault: React.FC<DownloadsVaultProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const [activeCategory, setActiveCategory] = useState<'all' | 'logos' | 'flag' | 'patterns'>('all');
  const [copiedAiId, setCopiedAiId] = useState<string | null>(null);
  const [isDesignModalOpen, setIsDesignModalOpen] = useState(false);
  const [previewItem, setPreviewItem] = useState<{
    src: string;
    title: string;
    format: string;
    desc: string;
    downloadUrl: string;
  } | null>(null);

  const copyForAi = (item: DownloadItem) => {
    const fullUrl = item.file.startsWith('http') 
      ? item.file 
      : `https://sytocode.github.io/syrian-visual-identity${item.file.startsWith('/') ? item.file : '/' + item.file}`;
    
    const snippet = `<!-- Syrian Visual Identity: ${item.nameEn} (${item.nameAr}) -->\n<!-- Format: ${item.format} | ${item.descEn} -->\n<img src="${fullUrl}" alt="${item.nameEn}" />`;
    navigator.clipboard.writeText(snippet);
    setCopiedAiId(item.id);
    setTimeout(() => setCopiedAiId(null), 2000);
  };

  const logoDownloads: DownloadItem[] = [
    {
      id: 'logo-horiz-green',
      nameAr: 'الشعار الأفقي الرسمي (Vector SVG)',
      nameEn: 'Horizontal Logo (Vector SVG)',
      format: 'SVG',
      file: getAssetUrl('/assets/logos/Logos/SVG/Syrian_horizontal_dark_green.svg'),
      tagAr: 'الأكثر استخداماً',
      tagEn: 'Most Popular',
      bgType: 'light',
      descAr: 'الشعار الرسمي الأفقي للجمهورية العربية السورية باللون الأخضر الداكن المعتمد، ملائم للمطبوعات والمواقع ذات الخلفيات الفاتحة.',
      descEn: 'Official horizontal emblem in national forest green, ideal for light backgrounds and print media.'
    },
    {
      id: 'logo-vert-green',
      nameAr: 'الشعار العمودي الرسمي (Vector SVG)',
      nameEn: 'Vertical Logo (Vector SVG)',
      format: 'SVG',
      file: getAssetUrl('/assets/logos/Logos/SVG/Syrian_vertical_logo_.svg'),
      tagAr: 'رسمي',
      tagEn: 'Official',
      bgType: 'light',
      descAr: 'الشعار الرسمي بالصيغة الرأسية/العمودية، مخصص للافتات والكتب والشهادات والمواد البروتوكولية.',
      descEn: 'Official vertical configuration designed for banners, certifications, and protocol materials.'
    },
    {
      id: 'logo-icon-gold',
      nameAr: 'أيقونة الشعار الذهبية (Logo Icon Gold)',
      nameEn: 'Logo Icon Gold (Vector SVG)',
      format: 'SVG',
      file: getAssetUrl('/assets/logos/Logos/SVG/Syrian_logo_icon_gold.svg'),
      tagAr: 'ذهبي',
      tagEn: 'Gold Edition',
      bgType: 'emerald',
      descAr: 'الرمز النجمي التجريدي باللون الذهبي المذهب، مخصص للأوسمة والأيقونات الرقمية وشارات التطبيقات.',
      descEn: 'Abstract eight-pointed star emblem rendered in imperial gold, optimized for badges and app icons.'
    },
    {
      id: 'logo-type-black',
      nameAr: 'الرمز اللفظي للهوية (Logotype Black)',
      nameEn: 'Logotype Black (Vector SVG)',
      format: 'SVG',
      file: getAssetUrl('/assets/logos/Logos/SVG/Syrian_logotype_black.svg'),
      tagAr: 'نصي',
      tagEn: 'Wordmark',
      bgType: 'light',
      descAr: 'الرمز اللفظي والتايبوغرافي الكوفي المعاصر "سوريا" باللون الأسود الفاحم.',
      descEn: 'Contemporary Kufic typographic wordmark "Syria" in charcoal black.'
    },
    {
      id: 'logo-horiz-white',
      nameAr: 'شعار الهوية باللون الأبيض (White SVG)',
      nameEn: 'White Logo for Dark Backgrounds',
      format: 'SVG',
      file: getAssetUrl('/assets/logos/Logos/SVG/Syrian_horizontal_white.svg'),
      tagAr: 'للخلفيات الداكنة',
      tagEn: 'For Dark Backgrounds',
      bgType: 'emerald',
      descAr: 'نسخة متجهة مفرغة بيضاء ناصعة مخصصة للاستخدام فوق الخلفيات الخضراء الداكنة والفوتوغرافية.',
      descEn: 'Crisp white vector logo optimized for deep green backdrops, dark mode, and photography overlays.'
    },
    {
      id: 'logo-png-hires',
      nameAr: 'شعار الهوية المفرغ عالي الدقة (PNG)',
      nameEn: 'High-Res Transparent PNG',
      format: 'PNG',
      file: getAssetUrl('/assets/logos/Logos/PNG/Syrian_horizontal_dark_green.png'),
      tagAr: 'بدقة عالية',
      tagEn: 'High Resolution',
      bgType: 'light',
      descAr: 'شعار مفرغ الخلفية بدقة عالية جداً جاهز للاستخدام السريع في برامج التحرير والعروض التقديمية.',
      descEn: 'High-resolution raster PNG with transparent alpha background, ready for quick presentations and editing.'
    }
  ];

  const flagDownloads: DownloadItem[] = [
    {
      id: 'flag-blueprint-svg',
      nameAr: 'مخطط النسب الهندسية للعلم (SVG)',
      nameEn: 'Constitutional Flag Blueprint (SVG)',
      format: 'SVG',
      file: getAssetUrl('/assets/materials/syrian-flag-proportions.svg'),
      tagAr: 'هندسي دقيق',
      tagEn: 'CAD Blueprint',
      bgType: 'light',
      descAr: 'الرسم المتجه الهندسي الدقيق لنسب العلم السوري وتوزيع النجوم الثلاثة وفق الدستور.',
      descEn: 'Scalable vector blueprint of Syrian flag constitutional proportions and star alignments.'
    },
    {
      id: 'flag-blueprint-png',
      nameAr: 'مخطط العلم السوري عالي الدقة (PNG)',
      nameEn: 'Syrian Flag Blueprint (High-Res PNG)',
      format: 'PNG',
      file: getAssetUrl('/assets/materials/syrian-flag-proportions.png'),
      tagAr: 'معاينة جاهزة',
      tagEn: 'Visual Guide',
      bgType: 'light',
      descAr: 'مخطط العلم السوري المصور بدقة عالية مع كافة الأبعاد والنسب القياسية 36:24.',
      descEn: 'High-resolution raster illustration of the Syrian flag design manual and engineering dimensions.'
    }
  ];

  const patternDownloads: DownloadItem[] = [
    {
      id: 'pattern-1',
      nameAr: 'الزخرفة الهندسية الأولى (نمط أموي)',
      nameEn: 'Geometric Heritage Pattern 1',
      format: 'JPG',
      file: getAssetUrl('/assets/media/25741af0874cd5aaa825b5f1b68c2463.jpg'),
      tagAr: 'تراثي',
      tagEn: 'Heritage Motif',
      bgType: 'light',
      descAr: 'النمط الزخرفي الهندسي المتكرر المستوحى من فنون الرخام والفسيفساء الأموية في دمشق.',
      descEn: 'Geometric repetitive ornamental motif inspired by Umayyad marble craftsmanship in Damascus.'
    },
    {
      id: 'pattern-2',
      nameAr: 'الزخرفة الهندسية الثانية (نمط أندلسي دمشقي)',
      nameEn: 'Geometric Heritage Pattern 2',
      format: 'JPG',
      file: getAssetUrl('/assets/media/42579150ef34db6fd8c2359eb9ba8363.jpg'),
      tagAr: 'تراثي',
      tagEn: 'Heritage Motif',
      bgType: 'light',
      descAr: 'نمط تناظر نجمي هندسي متقدم مخصص للمطبوعات الفاخرة وخلفيات الهوية الرسمية.',
      descEn: 'Advanced geometric symmetry pattern tailored for luxury publications and identity backgrounds.'
    },
    {
      id: 'pattern-3',
      nameAr: 'الزخرفة الهندسية الثالثة (تسنيم العمارة)',
      nameEn: 'Geometric Heritage Pattern 3',
      format: 'JPG',
      file: getAssetUrl('/assets/media/07d0eca67be9d8ef47a424c23b33e4e7.jpg'),
      tagAr: 'تراثي',
      tagEn: 'Heritage Motif',
      bgType: 'light',
      descAr: 'نمط التسنيم المعماري السوري المستوحى من جدران القلاع والأبواب التاريخية في حلب وحمص.',
      descEn: 'Syrian architectural battlements motif derived from historic citadel gates across Aleppo and Homs.'
    },
    {
      id: 'pattern-4',
      nameAr: 'الزخرفة الهندسية الرابعة (نسيج النجوم)',
      nameEn: 'Geometric Heritage Pattern 4',
      format: 'JPG',
      file: getAssetUrl('/assets/media/46090a0515cd857e09c67ccc9425fbdc.jpg'),
      tagAr: 'تراثي',
      tagEn: 'Heritage Motif',
      bgType: 'light',
      descAr: 'شبكة النجوم المتعانقة التي تعكس وحدة الجغرافيا والتنوع الثقافي السوري الأصيل.',
      descEn: 'Interlocking star constellation network representing Syrian cultural harmony and geographic unity.'
    }
  ];

  const getFilteredItems = () => {
    switch (activeCategory) {
      case 'logos':
        return logoDownloads;
      case 'flag':
        return flagDownloads;
      case 'patterns':
        return patternDownloads;
      default:
        return [...logoDownloads, ...flagDownloads, ...patternDownloads];
    }
  };

  const currentItems = getFilteredItems();

  return (
    <div className="space-y-12">
      {/* Title & Introduction */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#054239]/10 text-[#054239] dark:text-[#edebe0] text-xs font-semibold">
          <FileArchive className="w-3.5 h-3.5 text-[#988561]" />
          <span>{isAr ? 'المستودع الرقمي الموحد' : 'Digital Assets Vault'}</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          {isAr ? 'تحميل ومعاينة مواد الهوية البصرية الرسمية' : 'Official Assets Download & Preview'}
        </h2>
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
          {isAr
            ? 'نظراً لتوقف خوادم الموقع الأصلي، تم توثيق وحفظ كافّة الملفات والمتجهات الرسمية وتوفيرها هنا مع إمكانية المعاينة البصرية الحية والتنزيل المباشر المفتوح خدمةً للجمهور والمؤسسات.'
            : 'Preserved digital vault providing direct visual previews and downloads for official brand assets, vector logos, flags, CAD blueprints, and design motifs.'}
        </p>
      </div>

      {/* Featured Master Package Card */}
      <div className="bg-gradient-to-br from-[#054239] to-[#002623] text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
        {/* Subtle decorative background shape */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white/5 blur-2xl pointer-events-none" />

        <div className="max-w-3xl space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#b9a779]/20 text-[#edebe0] text-xs font-bold border border-[#b9a779]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#b9a779]" />
            <span>{isAr ? 'الحزمة الرسمية الكاملة' : 'Complete Master Package'}</span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-bold tracking-tight">
            {isAr
              ? 'حزمة الهوية البصرية السورية الشاملة (ZIP)'
              : 'Complete Official Syrian Identity Package (ZIP)'}
          </h3>

          <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
            {isAr
              ? 'تتضمن 125 ملفاً أصلياً بصيغ متجهة واحترافية للطباعة والنشر الرقمي (SVG, PDF, EPS, PNG) لكافة أشكال وتطبيقات الشعار (الأفقي، العمودي، الأيقونة، الرمز اللفظي) بجميع الألوان المعتمدة (الأخضر الداكن، الذهبي، الأبيض، والأسود).'
              : 'Includes 125 master vector and print-ready files (SVG, PDF, EPS, PNG) encompassing all official orientations, logotypes, icons, and approved color palettes.'}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2 text-xs text-gray-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#b9a779]" />
              <span>{isAr ? '125 ملف رسمي' : '125 Master Files'}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#b9a779]" />
              <span>{isAr ? 'فيكتور SVG و EPS' : 'SVG & EPS Vectors'}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#b9a779]" />
              <span>{isAr ? 'جاهز للمطابع PDF' : 'Print-Ready PDF'}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#b9a779]" />
              <span>{isAr ? 'حجم خفيف: 4.5 MB' : 'Size: 4.5 MB'}</span>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-3">
            <a
              href={getAssetUrl('/downloads/Syrian_Identity_Official_Package.zip')}
              download="Syrian_Identity_Official_Package.zip"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-[#b9a779] hover:bg-[#edebe0] text-[#054239] font-bold text-sm transition shadow-lg hover:shadow-xl active:scale-95 cursor-pointer"
            >
              <Download className="w-5 h-5" />
              <span>{isAr ? 'تحميل الحزمة الشاملة (4.5 MB ZIP)' : 'Download Master ZIP (4.5 MB)'}</span>
            </a>

            <button
              type="button"
              onClick={() => setIsDesignModalOpen(true)}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm transition backdrop-blur-xs active:scale-95 cursor-pointer"
            >
              <BookOpen className="w-5 h-5 text-[#b9a779]" />
              <span>{isAr ? 'معاينة وتحميل DESIGN.md' : 'Preview & Download DESIGN.md'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 pt-4 border-b border-gray-200 dark:border-gray-800 pb-4">
        <button
          onClick={() => setActiveCategory('all')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
            activeCategory === 'all'
              ? 'bg-[#054239] text-white shadow-sm'
              : 'bg-white dark:bg-[#1c1c1c] text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
          }`}
        >
          {isAr ? 'جميع الأصول المحفوظة' : 'All Preserved Assets'} ({logoDownloads.length + flagDownloads.length + patternDownloads.length})
        </button>
        <button
          onClick={() => setActiveCategory('logos')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
            activeCategory === 'logos'
              ? 'bg-[#054239] text-white shadow-sm'
              : 'bg-white dark:bg-[#1c1c1c] text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
          }`}
        >
          {isAr ? 'الشعارات والرموز الرسمية' : 'Logos & Symbols'} ({logoDownloads.length})
        </button>
        <button
          onClick={() => setActiveCategory('flag')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
            activeCategory === 'flag'
              ? 'bg-[#054239] text-white shadow-sm'
              : 'bg-white dark:bg-[#1c1c1c] text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
          }`}
        >
          {isAr ? 'مخططات العلم السوري' : 'Flag Blueprints'} ({flagDownloads.length})
        </button>
        <button
          onClick={() => setActiveCategory('patterns')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
            activeCategory === 'patterns'
              ? 'bg-[#054239] text-white shadow-sm'
              : 'bg-white dark:bg-[#1c1c1c] text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
          }`}
        >
          {isAr ? 'الأنماط والزخارف التراثية' : 'Heritage Patterns'} ({patternDownloads.length})
        </button>
      </div>

      {/* Individual Assets Grid with Live Visual Previews */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentItems.map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-[#1c1c1c] border border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden hover:shadow-lg transition-all flex flex-col justify-between group"
          >
            {/* Visual Preview Canvas */}
            <div
              className={`relative h-48 flex items-center justify-center p-6 transition-all duration-300 overflow-hidden cursor-pointer ${
                item.bgType === 'emerald'
                  ? 'bg-gradient-to-br from-[#054239] to-[#002623]'
                  : 'bg-[radial-gradient(#988561_1px,transparent_1px)] [background-size:16px_16px] bg-[#edebe0]/40 dark:bg-[#202020]'
              }`}
              onClick={() =>
                setPreviewItem({
                  src: item.file,
                  title: isAr ? item.nameAr : item.nameEn,
                  format: item.format,
                  desc: isAr ? item.descAr : item.descEn,
                  downloadUrl: item.file,
                })
              }
            >
              <img
                src={item.file}
                alt={isAr ? item.nameAr : item.nameEn}
                className="max-h-28 max-w-[80%] object-contain drop-shadow transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover Quick Preview Action */}
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <button
                  type="button"
                  className="px-4 py-2 rounded-xl bg-white text-gray-900 font-bold text-xs shadow-lg inline-flex items-center gap-1.5 hover:bg-[#edebe0] transition transform scale-95 group-hover:scale-100"
                >
                  <Eye className="w-3.5 h-3.5 text-[#054239]" />
                  <span>{isAr ? 'معاينة بالحجم الكامل' : 'Full Preview'}</span>
                </button>
              </div>

              {/* Tag indicator */}
              <div className="absolute top-3 right-3 flex items-center gap-1.5">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-white/90 dark:bg-black/80 text-gray-700 dark:text-gray-300 backdrop-blur border border-black/5 dark:border-white/10">
                  {item.format}
                </span>
              </div>
            </div>

            {/* Card Content & Action */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#988561] font-semibold">{isAr ? item.tagAr : item.tagEn}</span>
                </div>
                <h4 className="font-bold text-sm text-gray-900 dark:text-white leading-snug">
                  {isAr ? item.nameAr : item.nameEn}
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">
                  {isAr ? item.descAr : item.descEn}
                </p>
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-2 pt-2">
                <button
                  onClick={() =>
                    setPreviewItem({
                      src: item.file,
                      title: isAr ? item.nameAr : item.nameEn,
                      format: item.format,
                      desc: isAr ? item.descAr : item.descEn,
                      downloadUrl: item.file,
                    })
                  }
                  className="p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 text-xs font-semibold transition"
                  title={isAr ? 'معاينة' : 'Preview'}
                >
                  <Eye className="w-4 h-4" />
                </button>

                <button
                  onClick={() => copyForAi(item)}
                  className="p-2.5 rounded-xl border border-[#b9a779]/40 bg-[#b9a779]/10 hover:bg-[#b9a779]/20 text-[#054239] dark:text-[#b9a779] text-xs font-semibold transition flex items-center gap-1"
                  title={isAr ? 'نسخ وسم الأصل للذكاء الاصطناعي' : 'Copy asset code for AI'}
                >
                  {copiedAiId === item.id ? (
                    <Check className="w-4 h-4 text-green-500" />
                  ) : (
                    <Bot className="w-4 h-4" />
                  )}
                </button>

                <a
                  href={item.file}
                  download
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#054239] hover:bg-[#428177] text-white text-xs font-bold transition shadow-xs active:scale-95"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{isAr ? 'تنزيل مباشر' : 'Download'}</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / Full Preview Modal */}
      {previewItem && (
        <ImagePreviewModal
          isOpen={!!previewItem}
          onClose={() => setPreviewItem(null)}
          imageSrc={previewItem.src}
          title={previewItem.title}
          format={previewItem.format}
          description={previewItem.desc}
          downloadUrl={previewItem.downloadUrl}
          lang={lang}
        />
      )}

      {/* Full DESIGN.md Interactive Modal */}
      <DesignDocModal
        isOpen={isDesignModalOpen}
        onClose={() => setIsDesignModalOpen(false)}
        lang={lang}
      />
    </div>
  );
};
