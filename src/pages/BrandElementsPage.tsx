import React, { useState } from 'react';
import { ColorPaletteViewer } from '../components/ColorPaletteViewer';
import { Sparkles, Layers, Image as ImageIcon, CheckCircle2, Eye, Maximize2 } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';
import { ImagePreviewModal } from '../components/ImagePreviewModal';

interface BrandElementsPageProps {
  lang: 'ar' | 'en';
}

export const BrandElementsPage: React.FC<BrandElementsPageProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const [previewModal, setPreviewModal] = useState<{
    src: string;
    title: string;
    format: string;
    desc: string;
    downloadUrl?: string;
  } | null>(null);

  const logoMeanings = [
    {
      titleAr: 'النجمة الثمانية والتراث الهندسي',
      titleEn: 'Eight-Pointed Star & Geometry',
      descAr: 'تستند البنية الهندسية للشعار إلى التناظر النجمي الإسلامي والأموي المتأصل في الفنون والعمارة السورية عبر العصور.',
      descEn: 'The architectural framework stems from Islamic and Umayyad star symmetry deeply ingrained in historical Syrian art and architecture.'
    },
    {
      titleAr: 'القلب النابض في المركز',
      titleEn: 'The Pulsing Heart at the Core',
      descAr: 'يرمز المركز إلى أن سوريا هي القلب الحيوي للمنطقة، وأن الإنسان السوري هو النبض الحقيقي الذي لا ينكسر.',
      descEn: 'The core symbolizes Syria as the vibrant beating heart of the Levant, and the Syrian citizen as the true, resilient pulse.'
    },
    {
      titleAr: 'تلاقي المسارات والألوان',
      titleEn: 'Converging Lines & Colors',
      descAr: 'تلاقي الخطوط يعبر عن تنوع الجغرافيا السورية من الساحل إلى الجبل والبادية والفرات في نسيج واحد متماسك.',
      descEn: 'Converging lines reflect the unity of Syria’s diverse geographical tapestry, from the Mediterranean coast to the mountains, plains, and the Euphrates.'
    },
    {
      titleAr: 'الحداثة التيبوغرافية',
      titleEn: 'Contemporary Calligraphy',
      descAr: 'تجريد هندسي معاصر للخط العربي يعكس التطلع الرقمي المستقبلي مع الاحتفاظ بجلال الخط الكوفي الأصيل.',
      descEn: 'A modern geometric abstraction of Arabic calligraphy blending future-ready digital aesthetics with the timeless nobility of traditional Kufic script.'
    }
  ];

  // Gallery of preserved brand application images
  const applicationImages = [
    { src: getAssetUrl('/assets/media/7c47c148e9b75602dafbd6f8d6f6492f.jpg'), titleAr: 'جواز السفر والوثائق الدبلوماسية', titleEn: 'Passports & State Documents' },
    { src: getAssetUrl('/assets/media/c7dc6e6ccdbf9705843d4d5bad4e50ec.jpg'), titleAr: 'المراسم والبدلات الدبلوماسية الرسمية', titleEn: 'Diplomatic Protocol & Official Attire' },
    { src: getAssetUrl('/assets/media/7458da0dd305ec790e7761f5e66aeb9f.jpg'), titleAr: 'الصروح والواجهات الحكومية الرسمية', titleEn: 'State Facades & Institutional Buildings' },
    { src: getAssetUrl('/assets/media/b415d4a46ec0157055feea4837b4c66e.jpg'), titleAr: 'التطبيقات الرقمية وتصميم الواجهات', titleEn: 'Modern Digital Interfaces & Systems' },
    { src: getAssetUrl('/assets/media/6515842db4fd9195e73be4bf81db90cc.jpg'), titleAr: 'اللافتات الحضرية وتجميل المدن', titleEn: 'Urban Wayfinding & Signage' },
    { src: getAssetUrl('/assets/media/93b6badaf8588070fa15d7466fbad083.jpg'), titleAr: 'تغليف المنتجات السورية التراثية', titleEn: 'Heritage Syrian Product Packaging' }
  ];

  const patternImages = [
    { src: getAssetUrl('/assets/media/25741af0874cd5aaa825b5f1b68c2463.jpg'), titleAr: 'نمط التناظر الأموي الهندسي', titleEn: 'Umayyad Geometric Star Motif' },
    { src: getAssetUrl('/assets/media/42579150ef34db6fd8c2359eb9ba8363.jpg'), titleAr: 'نمط التسنيم وتداخل المسارات', titleEn: 'Converging Paths & Merlon Lattice' },
    { src: getAssetUrl('/assets/media/07d0eca67be9d8ef47a424c23b33e4e7.jpg'), titleAr: 'نمط التعشيق والفسيفساء الدمشقية', titleEn: 'Damascene Interlocking Mosaic' },
    { src: getAssetUrl('/assets/media/46090a0515cd857e09c67ccc9425fbdc.jpg'), titleAr: 'نمط الأرابيسك والزخرفة النباتية', titleEn: 'Levantine Floral Arabesque' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
      {/* Page Title */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#054239]/10 dark:bg-white/10 text-[#054239] dark:text-[#edebe0] text-xs font-semibold">
          <Layers className="w-4 h-4 text-[#988561]" />
          <span>{isAr ? 'المكونات البصرية والرمزية' : 'Visual Components & Symbolism'}</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          {isAr ? 'عناصر الهوية البصرية' : 'Brand Elements'}
        </h1>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          {isAr
            ? 'تشريح بصري دقيق للشعار، دلالات الرموز، لوحة الألوان الرسمية، الزخارف التراثية، ونماذج التطبيقات الواقعية.'
            : 'Visual breakdown of the logo emblem, color architecture, historical motifs, and real-world implementations.'}
        </p>
      </div>

      {/* Section 1: Logo & Symbolism */}
      <section className="space-y-12">
        <div className="border-b border-gray-200 dark:border-gray-800 pb-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            {isAr ? 'الشعار ومعاني الرموز' : 'The Logo & Symbolism'}
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            {isAr ? 'فلسفة التصميم المعماري والتجريدي للشعار الرسمي' : 'Design architectural philosophy behind the national insignia'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Logo Visual Showcase */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#054239] to-[#002623] rounded-3xl p-10 flex flex-col items-center justify-center text-center shadow-lg relative min-h-[380px]">
            <img
              src={getAssetUrl('/assets/materials/logo.ai.svg')}
              alt={isAr ? 'شعار الهوية البصرية السورية' : 'Syrian Visual Identity Seal'}
              className="w-48 sm:w-56 h-auto drop-shadow-xl"
            />
            <span className="mt-8 text-xs font-semibold text-[#b9a779] tracking-wider uppercase">
              {isAr ? 'الرمز الرسمي المعتمد' : 'Official National Seal'}
            </span>
          </div>

          {/* Meaning Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {logoMeanings.map((m, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-[#1c1c1c] border border-gray-200 dark:border-gray-800 space-y-2 shadow-xs"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#988561]" />
                  <h3 className="font-bold text-sm sm:text-base text-gray-900 dark:text-white">
                    {isAr ? m.titleAr : m.titleEn}
                  </h3>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  {isAr ? m.descAr : m.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Color Palette System */}
      <section>
        <ColorPaletteViewer lang={lang} />
      </section>

      {/* Section 3: Cultural Patterns & Motifs (الزخارف) */}
      <section className="space-y-8">
        <div className="border-b border-gray-200 dark:border-gray-800 pb-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            {isAr ? 'الزخارف والأنماط التراثية' : 'Heritage Patterns & Motifs'}
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            {isAr
              ? 'زخارف بصرية مستوحاة من الفنون والعمارة السورية لتعزيز الهوية في المطبوعات والوسائط الرقمية'
              : 'Decorative geometric patterns drawn from Syrian architectural legacy for print and digital assets'}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {patternImages.map((p, idx) => (
            <div
              key={idx}
              onClick={() =>
                setPreviewModal({
                  src: p.src,
                  title: isAr ? p.titleAr : p.titleEn,
                  format: 'Pattern',
                  desc: isAr ? p.titleAr : p.titleEn,
                  downloadUrl: p.src,
                })
              }
              className="rounded-2xl overflow-hidden bg-white dark:bg-[#1c1c1c] border border-gray-200 dark:border-gray-800 group shadow-xs hover:shadow-md transition cursor-pointer"
            >
              <div className="aspect-square bg-gray-100 dark:bg-black/40 overflow-hidden relative">
                <img
                  src={p.src}
                  alt={isAr ? p.titleAr : p.titleEn}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Maximize2 className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="p-3 text-center">
                <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                  {isAr ? p.titleAr : p.titleEn}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Real-World Brand Applications */}
      <section className="space-y-8">
        <div className="border-b border-gray-200 dark:border-gray-800 pb-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            {isAr ? 'تطبيقات الهوية في الواقع' : 'Real-World Applications'}
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            {isAr
              ? 'نماذج استرشادية لاستخدام الصور والألوان والشعارات في المعارض والمطبوعات والواجهات'
              : 'Implementation guidelines and mockups across official publications, events, and public spaces'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {applicationImages.map((app, idx) => (
            <div
              key={idx}
              onClick={() =>
                setPreviewModal({
                  src: app.src,
                  title: isAr ? app.titleAr : app.titleEn,
                  format: 'Mockup',
                  desc: isAr ? app.titleAr : app.titleEn,
                  downloadUrl: app.src,
                })
              }
              className="rounded-3xl overflow-hidden bg-white dark:bg-[#1c1c1c] border border-gray-200 dark:border-gray-800 group shadow-sm hover:shadow-md transition space-y-3 cursor-pointer"
            >
              <div className="aspect-[4/3] bg-gray-100 dark:bg-black/40 overflow-hidden relative">
                <img
                  src={app.src}
                  alt={isAr ? app.titleAr : app.titleEn}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Maximize2 className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="p-5 pt-0">
                <h3 className="font-bold text-sm text-gray-900 dark:text-white">
                  {isAr ? app.titleAr : app.titleEn}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Image Preview Lightbox */}
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
