import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  BookOpen,
  Layers,
  MapPin,
  Compass,
  ShieldCheck,
  Download,
  Eye,
  Maximize2,
  Palette,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import { getAssetUrl } from '../utils/assets';
import { governorates } from '../data/governoratesData';
import { governorateSvgs } from '../data/governorateSvgs';
import { ImagePreviewModal } from '../components/ImagePreviewModal';

interface HomePageProps {
  lang: 'ar' | 'en';
  setActiveTab: (tab: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ lang, setActiveTab }) => {
  const isAr = lang === 'ar';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const [previewModal, setPreviewModal] = useState<{
    src: string;
    title: string;
    format: string;
    desc: string;
    downloadUrl?: string;
  } | null>(null);

  // Curated 6 Syrian Governorate Landmark Icons for the Homepage Quick Showcase
  const featuredGovIds = ['damascus', 'aleppo', 'homs', 'latakia', 'deir-ez-zor', 'idlib'];
  const featuredGovernorates = governorates.filter((g) => featuredGovIds.includes(g.id));

  // Authentic Preserved Syrian Heritage Patterns (الزخارف)
  const heritagePatterns = [
    {
      id: 'pattern-1',
      titleAr: 'الزخرفة الهندسية الأولى (تناظر أموي)',
      titleEn: 'Umayyad Geometric Harmony',
      descAr: 'مستوحاة من الفسيفساء الجدارية والعمارة الأموية الخالدة في دمشق القديمة.',
      descEn: 'Inspired by mural mosaics and timeless Umayyad architecture in Old Damascus.',
      src: getAssetUrl('/assets/media/25741af0874cd5aaa825b5f1b68c2463.jpg'),
      tagAr: 'دمشق الأموية',
      tagEn: 'Damascus',
    },
    {
      id: 'pattern-2',
      titleAr: 'الزخرفة الهندسية الثانية (التناظر النجمي)',
      titleEn: 'Damascene Star Symmetry',
      descAr: 'تناظر ثماني دقيق يعبر عن الحكمة والعلوم والرياضيات في الحضارة السورية.',
      descEn: 'Precise octagonal symmetry embodying wisdom, science, and Syrian heritage.',
      src: getAssetUrl('/assets/media/42579150ef34db6fd8c2359eb9ba8363.jpg'),
      tagAr: 'تناظر إسلامي',
      tagEn: 'Islamic Geometry',
    },
    {
      id: 'pattern-3',
      titleAr: 'الزخرفة الهندسية الثالثة (تسنيم القلاع)',
      titleEn: 'Citadel Battlements Motif',
      descAr: 'مأخوذة من بوابات وأبراج قلعة حلب التاريخية وتفاصيل الحجر الأبلق.',
      descEn: 'Derived from ancient gates of the Aleppo Citadel and historic stone masonry.',
      src: getAssetUrl('/assets/media/07d0eca67be9d8ef47a424c23b33e4e7.jpg'),
      tagAr: 'حلب الشهباء',
      tagEn: 'Aleppo',
    },
    {
      id: 'pattern-4',
      titleAr: 'الزخرفة الهندسية الرابعة (نسيج النجوم)',
      titleEn: 'Interlocking Star Grid',
      descAr: 'نسيج هندسي متقاطع يرمز إلى الوحدة الوطنية وتكامل المحافظات الـ 14.',
      descEn: 'Interlocking geometric network symbolizing national unity and cultural harmony.',
      src: getAssetUrl('/assets/media/46090a0515cd857e09c67ccc9425fbdc.jpg'),
      tagAr: 'وحدة النسيج',
      tagEn: 'National Unity',
    },
  ];

  // Preserved Real-World Brand Applications (الهوية في الواقع)
  const applicationGalleries = [
    {
      id: 'app-exhibition',
      titleAr: 'الهوية في الفضاءات والمعارض العامة',
      titleEn: 'Identity in Exhibitions & Public Spaces',
      categoryAr: 'معارض وفضاءات',
      categoryEn: 'Pavilions',
      src: getAssetUrl('/assets/media/7c47c148e9b75602dafbd6f8d6f6492f.jpg'),
      span: 'md:col-span-2 md:row-span-2',
      aspect: 'aspect-[16/10]',
    },
    {
      id: 'app-stationery',
      titleAr: 'المطبوعات والمستندات الدبلوماسية',
      titleEn: 'Diplomatic Publications & Protocol Stationery',
      categoryAr: 'وثائق رسمية',
      categoryEn: 'Protocol',
      src: getAssetUrl('/assets/media/c7dc6e6ccdbf9705843d4d5bad4e50ec.jpg'),
      span: 'md:col-span-1',
      aspect: 'aspect-square',
    },
    {
      id: 'app-textiles',
      titleAr: 'الأوشحة والحرير الدمشقي التقليدي',
      titleEn: 'Traditional Damascene Silk Textiles',
      categoryAr: 'أنسجة سورية',
      categoryEn: 'Textiles',
      src: getAssetUrl('/assets/media/7458da0dd305ec790e7761f5e66aeb9f.jpg'),
      span: 'md:col-span-1',
      aspect: 'aspect-square',
    },
    {
      id: 'app-urban',
      titleAr: 'اللافتات الحضرية وتجميل المدن',
      titleEn: 'Urban Wayfinding & Signage',
      categoryAr: 'تخطيط حضري',
      categoryEn: 'Urban',
      src: getAssetUrl('/assets/media/6515842db4fd9195e73be4bf81db90cc.jpg'),
      span: 'md:col-span-1',
      aspect: 'aspect-square',
    },
    {
      id: 'app-packaging',
      titleAr: 'تغليف المنتجات السورية التراثية',
      titleEn: 'Heritage Syrian Product Packaging',
      categoryAr: 'تغليف وتصدير',
      categoryEn: 'Packaging',
      src: getAssetUrl('/assets/media/93b6badaf8588070fa15d7466fbad083.jpg'),
      span: 'md:col-span-1',
      aspect: 'aspect-square',
    },
    {
      id: 'app-digital',
      titleAr: 'التطبيقات والمنظومات الرقمية',
      titleEn: 'Modern Digital Interfaces & Systems',
      categoryAr: 'تطبيقات رقمية',
      categoryEn: 'Digital UI',
      src: getAssetUrl('/assets/media/b415d4a46ec0157055feea4837b4c66e.jpg'),
      span: 'md:col-span-2',
      aspect: 'aspect-[21/9]',
    },
  ];

  return (
    <div className="space-y-28">
      {/* 1. HERO SECTION WITH ARABESQUE PATTERN AND FLOATING EMBLEM */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 pt-16 pb-12 overflow-hidden">
        {/* Subtle geometric star background overlay */}
        <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.07] pointer-events-none bg-[radial-gradient(#988561_2px,transparent_2px)] [background-size:32px_32px]" />
        
        {/* Ambient Gradient Lighting */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[350px] bg-radial from-[#428177]/20 via-[#054239]/10 to-transparent blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left / Main Text Column */}
          <div className="lg:col-span-7 text-center lg:text-start space-y-6">
            {/* National Seal Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#054239]/10 dark:bg-white/10 text-[#054239] dark:text-[#edebe0] text-xs sm:text-sm font-semibold border border-[#054239]/20 dark:border-white/20 shadow-xs">
              <Sparkles className="w-4 h-4 text-[#988561]" />
              <span>
                {isAr
                  ? 'الهوية البصرية الرسمية للجمهورية العربية السورية'
                  : 'Official Visual Identity of the Syrian Arab Republic'}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-[1.12]">
              <span className="block">{isAr ? 'انتماءٌ راسخ' : 'Steadfast Belonging'}</span>
              <span className="block text-[#054239] dark:text-[#b9a779] mt-2">
                {isAr ? 'يتجاوز الحدود' : 'Beyond Borders'}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {isAr
                ? 'نشكّل التراث والابتكار وروح المجتمع، فنصوغها معاً لنزرع الفخر ونبني مستقبلاً مزدهراً يركّز على كل السوريين في الداخل وحول العالم.'
                : 'Shaping heritage, innovation, and community spirit to cultivate pride and build a prosperous, human-centered future for all Syrians globally.'}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => setActiveTab('brand-story')}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-[#054239] hover:bg-[#428177] text-white font-bold text-sm shadow-md hover:shadow-lg transition active:scale-95"
              >
                <span>{isAr ? 'اكتشف قصة الهوية' : 'Discover Brand Story'}</span>
                <ArrowIcon className="w-4 h-4" />
              </button>

              <button
                onClick={() => setActiveTab('downloads')}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-[#b9a779] hover:bg-[#edebe0] text-[#054239] font-bold text-sm transition shadow-sm hover:shadow-md active:scale-95"
              >
                <Download className="w-4 h-4" />
                <span>{isAr ? 'تحميل الحزمة الرسمية' : 'Download Master Assets'}</span>
              </button>

              <button
                onClick={() => setActiveTab('tools')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white dark:bg-[#1f1f1f] border border-gray-300 dark:border-gray-700 hover:border-[#988561] text-gray-800 dark:text-gray-200 font-semibold text-sm transition active:scale-95 shadow-xs"
              >
                <span>{isAr ? 'الأدوات والعلم والخط' : 'Tools & Map'}</span>
              </button>
            </div>

            {/* National Metrics Ribbon */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-gray-200/80 dark:border-gray-800/80 text-center lg:text-start">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#054239] dark:text-[#edebe0]">14</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{isAr ? 'محافظة سورية موحدة' : 'Governorates'}</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#988561] dark:text-[#b9a779]">4000+</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{isAr ? 'عام من التراث الحضاري' : 'Years Heritage'}</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#054239] dark:text-[#edebe0]">125</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{isAr ? 'أصلاً رسمياً متجهاً' : 'Master Assets'}</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#988561] dark:text-[#b9a779]">100%</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{isAr ? 'توثيق مفتوح ومجاني' : 'Open Access'}</div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase Emblem Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Outer decorative halo */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#988561]/20 to-[#054239]/20 blur-xl -rotate-2 transform" />

              {/* Main Card */}
              <div className="relative rounded-3xl p-8 sm:p-10 bg-gradient-to-b from-[#054239] via-[#04332c] to-[#002623] text-white shadow-2xl border border-white/10 flex flex-col items-center text-center space-y-6 overflow-hidden group">
                {/* Background Geometric Star Pattern Watermark */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#b9a779_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none" />

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#b9a779]/20 border border-[#b9a779]/30 text-[#edebe0] text-xs font-bold">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#b9a779]" />
                  <span>{isAr ? 'الختم الوطني الرسمي' : 'Official National Seal'}</span>
                </div>

                {/* Animated Logo Image */}
                <div className="py-4 relative">
                  <img
                    src={getAssetUrl('/assets/materials/logo.ai.svg')}
                    alt="الرمز الرسمي للهوية البصرية السورية"
                    className="w-48 sm:w-56 h-auto drop-shadow-2xl transform transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-bold tracking-tight text-white">
                    {isAr ? 'الجمهورية العربية السورية' : 'Syrian Arab Republic'}
                  </h3>
                  <p className="text-xs text-gray-300">
                    {isAr ? 'شعار النجمة الثمانية المعمارية وتلاقي المسارات' : 'Eight-pointed architectural star and converging paths'}
                  </p>
                </div>

                <div className="pt-2 w-full flex items-center justify-center gap-3">
                  <button
                    onClick={() =>
                      setPreviewModal({
                        src: getAssetUrl('/assets/materials/logo.ai.svg'),
                        title: isAr ? 'الشعار الرسمي للجمهورية العربية السورية' : 'Official Syrian Identity Seal',
                        format: 'SVG',
                        desc: isAr ? 'الرمز المتجه الرسمي للهوية البصرية السورية معتمد بجميع تفاصيله الهندسية.' : 'Master vector seal of the Syrian visual identity.',
                        downloadUrl: getAssetUrl('/assets/materials/logo.ai.svg'),
                      })
                    }
                    className="flex-1 py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-semibold text-white transition inline-flex items-center justify-center gap-2"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{isAr ? 'معاينة الشعار' : 'Inspect Seal'}</span>
                  </button>

                  <a
                    href={getAssetUrl('/assets/materials/logo.ai.svg')}
                    download="شعار_الهوية_البصرية_السورية.svg"
                    className="py-2.5 px-4 rounded-xl bg-[#b9a779] hover:bg-[#edebe0] text-[#054239] text-xs font-bold transition shadow-sm inline-flex items-center justify-center gap-2"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>{isAr ? 'تنزيل SVG' : 'SVG'}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DEDICATED HERITAGE PATTERNS & MOTIFS SHOWCASE (الزخارف التراثية) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-200 dark:border-gray-800 pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#988561] uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5" />
              <span>{isAr ? 'الأصالة المعمارية والتراثية' : 'Architectural Legacy'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mt-1">
              {isAr ? 'الأنماط والزخارف التراثية السورية' : 'Syrian Heritage Patterns & Motifs'}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 max-w-2xl">
              {isAr
                ? 'زخارف هندسية تاريخية متوارثة عبر العصور من دمشق وحلب وتدمر، أُعيد توظيفها بدقة رياضية في منظومة الهوية الرسمية.'
                : 'Historic geometric patterns inherited across millennia, reimagined with mathematical precision in the national identity.'}
            </p>
          </div>

          <button
            onClick={() => setActiveTab('brand-elements')}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#054239] dark:text-[#b9a779] hover:underline"
          >
            <span>{isAr ? 'عرض كافة عناصر الهوية والألوان' : 'View all Brand Elements'}</span>
            <ArrowIcon className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Patterns 4-Grid Cards with Image Previews */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {heritagePatterns.map((pattern) => (
            <div
              key={pattern.id}
              className="bg-white dark:bg-[#1c1c1c] border border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Image Preview Canvas */}
              <div
                onClick={() =>
                  setPreviewModal({
                    src: pattern.src,
                    title: isAr ? pattern.titleAr : pattern.titleEn,
                    format: 'JPG',
                    desc: isAr ? pattern.descAr : pattern.descEn,
                    downloadUrl: pattern.src,
                  })
                }
                className="aspect-square bg-gray-100 dark:bg-black/40 overflow-hidden relative cursor-pointer"
              >
                <img
                  src={pattern.src}
                  alt={isAr ? pattern.titleAr : pattern.titleEn}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4">
                  <span className="text-xs font-bold text-white flex items-center gap-1.5">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>{isAr ? 'تكبير النمط' : 'Enlarge'}</span>
                  </span>
                </div>

                <div className="absolute top-3 right-3">
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-black/60 backdrop-blur text-white">
                    {isAr ? pattern.tagAr : pattern.tagEn}
                  </span>
                </div>
              </div>

              {/* Text info */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <h3 className="font-bold text-base text-gray-900 dark:text-white leading-snug">
                    {isAr ? pattern.titleAr : pattern.titleEn}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">
                    {isAr ? pattern.descAr : pattern.descEn}
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-gray-100 dark:border-gray-800 text-xs">
                  <button
                    onClick={() =>
                      setPreviewModal({
                        src: pattern.src,
                        title: isAr ? pattern.titleAr : pattern.titleEn,
                        format: 'JPG',
                        desc: isAr ? pattern.descAr : pattern.descEn,
                        downloadUrl: pattern.src,
                      })
                    }
                    className="text-[#054239] dark:text-[#b9a779] font-bold inline-flex items-center gap-1 hover:underline"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{isAr ? 'معاينة سريعة' : 'Inspect'}</span>
                  </button>

                  <a
                    href={pattern.src}
                    download
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white p-1 rounded-lg transition"
                    title={isAr ? 'تحميل عالي الدقة' : 'Download'}
                  >
                    <Download className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. REAL-WORLD BRAND APPLICATION GALLERY (الهوية في فضاءات الحياة) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#054239]/10 text-[#054239] dark:text-[#edebe0] text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#988561]" />
            <span>{isAr ? 'تجسيد الهوية على أرض الواقع' : 'Living The Identity'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            {isAr ? 'نماذج وتطبيقات الهوية في الحياة' : 'Real-World Brand Applications'}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {isAr
              ? 'تطبيقات عملية معتمدة تمتد من الصروح الدبلوماسية والأوشحة التراثية إلى الفضاءات الحضرية والمنصات الرقمية.'
              : 'Official implementations spanning diplomatic summits, traditional textiles, urban wayfinding, and digital systems.'}
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {applicationGalleries.map((item) => (
            <div
              key={item.id}
              onClick={() =>
                setPreviewModal({
                  src: item.src,
                  title: isAr ? item.titleAr : item.titleEn,
                  format: 'Photo',
                  desc: isAr ? item.titleAr : item.titleEn,
                  downloadUrl: item.src,
                })
              }
              className={`${item.span} group relative rounded-3xl overflow-hidden bg-gray-100 dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer`}
            >
              <div className={`w-full ${item.aspect} overflow-hidden relative`}>
                <img
                  src={item.src}
                  alt={isAr ? item.titleAr : item.titleEn}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/20 text-white backdrop-blur border border-white/20">
                      {isAr ? item.categoryAr : item.categoryEn}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                      {isAr ? item.titleAr : item.titleEn}
                    </h3>
                    <p className="text-xs text-gray-300 opacity-90 hidden sm:block">
                      {isAr ? 'انقر للمعاينة بالحجم الكامل' : 'Click to inspect in full resolution'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. GOVERNORATES LANDMARKS STRIP (رموز المحافظات الـ 14) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-200 dark:border-gray-800 pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#988561] uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              <span>{isAr ? 'فسيفساء المحافظات الـ 14' : 'The 14 Governorates'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-1">
              {isAr ? 'معالم وهوية المحافظات السورية' : 'Provincial Landmarks & Heritage'}
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
              {isAr
                ? 'رموز بصرية متجهة صُممت بعناية تمثل الهوية المعمارية والرمزية لكل محافظة سورية.'
                : 'Vector landmarks thoughtfully designed representing the architectural spirit of each Syrian province.'}
            </p>
          </div>

          <button
            onClick={() => setActiveTab('tools')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#054239] dark:text-[#b9a779] hover:underline"
          >
            <span>{isAr ? 'استكشف كافة المحافظات والخريطة التفاعلية' : 'Explore Full Interactive Map & Icons'}</span>
            <ArrowIcon className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 6 Featured Governorate Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {featuredGovernorates.map((gov) => {
            const rawSvg = governorateSvgs[gov.svgFile] || '';
            return (
              <div
                key={gov.id}
                onClick={() => setActiveTab('tools')}
                className="bg-white dark:bg-[#1c1c1c] border border-gray-200 dark:border-gray-800 rounded-2xl p-4 flex flex-col items-center text-center space-y-3 hover:border-[#988561] hover:shadow-md transition cursor-pointer group"
              >
                {/* SVG Emblem Display */}
                <div className="w-16 h-16 rounded-xl bg-[#054239]/5 dark:bg-white/5 flex items-center justify-center p-2 group-hover:scale-105 transition-transform">
                  <div
                    className="w-full h-full flex items-center justify-center [&>svg]:max-w-full [&>svg]:max-h-full [&>svg]:w-auto [&>svg]:h-auto"
                    dangerouslySetInnerHTML={{ __html: rawSvg }}
                  />
                </div>

                <div className="space-y-0.5">
                  <h4 className="font-bold text-sm text-gray-900 dark:text-white">
                    {isAr ? gov.nameAr : gov.nameEn}
                  </h4>
                  <p className="text-[11px] text-[#988561] font-medium truncate max-w-[120px]">
                    {isAr ? gov.landmarkAr : gov.landmarkEn}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. PHILOSOPHY PILLARS SECTION: سوريا هي القلب & قصتنا إلى العالم */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Card 1: سوريا هي القلب */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#1c1c1c] border border-gray-200 dark:border-gray-800 shadow-sm space-y-4 relative overflow-hidden group hover:border-[#988561] transition">
            {/* Subtle background ornament */}
            <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 rounded-full bg-[#054239]/5 pointer-events-none" />

            <div className="w-12 h-12 rounded-2xl bg-[#054239]/10 text-[#054239] dark:text-[#edebe0] flex items-center justify-center font-bold">
              <Compass className="w-6 h-6 text-[#988561]" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {isAr ? 'سوريا هي القلب' : 'Syria is the Heart'}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              {isAr
                ? 'ففي سوريا تنبض الحضارة وتمتزج الحكمة الموروثة بالطموح الحديث، لتتجلّى الخصوصية السوريّة، حيث تقع في ملتقى القارات كأرضٍ وُلدت فيها الحكايات، وتشابكت الثقافات، وترسخت روح الصمود. واليوم، تنبض سوريا بطاقة شعب يعيد البناء بعزّة وطموح وعزيمةٍ لا تنكسر! فسوريا ليست أي وجهةٍ أو مكان، بل هي المركز العاطفي لمسيرة إنسانية مشتركة.'
                : 'In Syria beats the heart of civilization, weaving ancient wisdom with modern ambition. Situated at the crossroads of continents, Syria is a cradle of human stories, interconnected cultures, and enduring resilience.'}
            </p>
          </div>

          {/* Card 2: قصتنا إلى العالم */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#1c1c1c] border border-gray-200 dark:border-gray-800 shadow-sm space-y-4 relative overflow-hidden group hover:border-[#988561] transition">
            {/* Subtle background ornament */}
            <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 rounded-full bg-[#988561]/5 pointer-events-none" />

            <div className="w-12 h-12 rounded-2xl bg-[#988561]/10 text-[#988561] flex items-center justify-center font-bold">
              <BookOpen className="w-6 h-6 text-[#988561]" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {isAr ? 'قصتنا إلى العالم' : 'Our Story to the World'}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              {isAr
                ? 'قصتنا ليست قصة دمار، بل قصة إصرارٍ سُطّرت بأقلام أجيال رفضت أن تُوسم بالصراع، حيث أبت إلا أن توقظ من رماد الماضي طموحاً يسترد التراث ويوحّد الهوية ويرسم المستقبل بالأمل ضمن رواية عالمية تكتبها سوريا اليوم بسواعد أبنائها! هذه الرواية هي دعوةٌ لكل من يؤمن بالأمل والكرامة وقوة النهوض الجماعي وزراعة الانتماء بعيداً عن حدود الجغرافيا.'
                : 'Our story is not of tragedy, but of defiant perseverance written by generations who reject despair. It is a story of reclaiming heritage, uniting identity, and forging a future anchored in dignity, hope, and collective renewal.'}
            </p>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION VAULT BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#054239] to-[#002623] p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl relative overflow-hidden">
          <div className="space-y-3 max-w-2xl relative z-10 text-center md:text-start">
            <span className="text-xs font-bold text-[#b9a779] uppercase tracking-wider block">
              {isAr ? 'مستودع الموارد المفتوحة' : 'Open Digital Vault'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {isAr
                ? 'حمّل الحزمة الرسمية الكاملة واستخدم مواد الهوية'
                : 'Download Master Visual Assets Package'}
            </h3>
            <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
              {isAr
                ? 'كافة ملفات الشعار الرسمية بصيغ فيكتور للمطابع والوسائط الرقمية (SVG, PDF, EPS, PNG) متاحة مجاناً ومحفوظة للجميع.'
                : 'All official logo variations, CAD blueprints, and typography assets preserved in master formats for universal access.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 relative z-10">
            <button
              onClick={() => setActiveTab('downloads')}
              className="px-6 py-3.5 rounded-2xl bg-[#b9a779] hover:bg-[#edebe0] text-[#054239] font-bold text-xs sm:text-sm transition shadow-lg active:scale-95 inline-flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>{isAr ? 'تصفح المكتبة الرقمية' : 'Open Downloads Vault'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Reusable Image Lightbox / Fullscreen Preview Modal */}
      {previewModal && (
        <ImagePreviewModal
          isOpen={!!previewModal}
          onClose={() => setPreviewModal(null)}
          imageSrc={previewModal.src}
          title={previewModal.title}
          format={previewModal.format}
          description={previewModal.desc}
          downloadUrl={previewModal.downloadUrl}
          lang={lang}
        />
      )}
    </div>
  );
};
