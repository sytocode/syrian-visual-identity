import React from 'react';
import { pressArticles } from '../data/pressData';
import { ArrowLeft, ArrowRight, Sparkles, BookOpen, Layers, MapPin, Compass, ShieldCheck } from 'lucide-react';

interface HomePageProps {
  lang: 'ar' | 'en';
  setActiveTab: (tab: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ lang, setActiveTab }) => {
  const isAr = lang === 'ar';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center text-center px-4 pt-20 pb-12 overflow-hidden">
        {/* Subtle geometric background overlay */}
        <div className="absolute inset-0 bg-radial from-[#054239]/5 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-4xl mx-auto space-y-8 relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#054239]/10 dark:bg-white/10 text-[#054239] dark:text-[#edebe0] text-xs md:text-sm font-semibold border border-[#054239]/20 dark:border-white/20">
            <Sparkles className="w-4 h-4 text-[#988561]" />
            <span>
              {isAr
                ? 'الهوية البصرية الرسمية للجمهورية العربية السورية'
                : 'Official Visual Identity of the Syrian Arab Republic'}
            </span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-[1.15]">
            <span className="block">{isAr ? 'انتماءٌ راسخ' : 'Steadfast Belonging'}</span>
            <span className="block text-[#054239] dark:text-[#edebe0] mt-2">
              {isAr ? 'يتجاوز الحدود' : 'Beyond Borders'}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed font-normal">
            {isAr
              ? 'نشكّل التراث والابتكار وروح المجتمع، فنصوغها معاً لنزرع الفخر ونبني مستقبلاً مزدهراً يركّز على كل السوريين.'
              : 'Shaping heritage, innovation, and community spirit to cultivate pride and build a prosperous, human-centered future for all Syrians.'}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => setActiveTab('brand-story')}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-[#054239] hover:bg-[#428177] text-white font-bold text-sm shadow-md hover:shadow-lg transition active:scale-95"
            >
              <span>{isAr ? 'اكتشف قصة الهوية' : 'Discover Brand Story'}</span>
              <ArrowIcon className="w-4 h-4" />
            </button>

            <button
              onClick={() => setActiveTab('tools')}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-white dark:bg-[#1f1f1f] border border-gray-300 dark:border-gray-700 hover:border-[#988561] text-gray-800 dark:text-gray-200 font-bold text-sm transition active:scale-95 shadow-xs"
            >
              <span>{isAr ? 'الأدوات والرموز والعلم' : 'Tools & Flag Guide'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Philosophy Pillars Section: سوريا هي القلب & قصتنا إلى العالم */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Card 1: سوريا هي القلب */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#1c1c1c] border border-gray-200 dark:border-gray-800 shadow-sm space-y-4 relative overflow-hidden">
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
          <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#1c1c1c] border border-gray-200 dark:border-gray-800 shadow-sm space-y-4 relative overflow-hidden">
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

      {/* Highlight Showcase Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            {isAr ? 'استكشف محاور الهوية والموارد' : 'Explore Identity Pillars & Assets'}
          </h2>
          <p className="text-sm text-gray-500">
            {isAr ? 'مجموعة متكاملة تجمع بين الدليل الإرشادي والأدوات الرقمية المفتوحة' : 'Integrated design manual and open-access interactive digital tools'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Brand Story */}
          <div
            onClick={() => setActiveTab('brand-story')}
            className="group cursor-pointer rounded-3xl p-6 bg-white dark:bg-[#1c1c1c] border border-gray-200 dark:border-gray-800 hover:border-[#988561] transition-all hover:shadow-lg space-y-4"
          >
            <div className="h-44 rounded-2xl bg-gradient-to-br from-[#054239] to-[#428177] flex items-center justify-center text-white p-6 relative overflow-hidden">
              <span className="text-4xl font-extrabold text-[#edebe0] drop-shadow-sm font-sans">
                {isAr ? 'قصة الهوية' : 'Brand Story'}
              </span>
            </div>
            <h3 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-[#054239] dark:group-hover:text-[#b9a779] transition">
              {isAr ? 'الرؤية، الأهداف والتموضع' : 'Vision, Goals & Positioning'}
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
              {isAr
                ? 'الأسس الفلسفية والاستراتيجية الثمانية التي صُممت عليها الهوية الجامعة لكافة أطياف الشعب السوري.'
                : 'The 8 strategic pillars and philosophical foundation designed to represent Syria globally.'}
            </p>
          </div>

          {/* Card 2: Brand Elements */}
          <div
            onClick={() => setActiveTab('brand-elements')}
            className="group cursor-pointer rounded-3xl p-6 bg-white dark:bg-[#1c1c1c] border border-gray-200 dark:border-gray-800 hover:border-[#988561] transition-all hover:shadow-lg space-y-4"
          >
            <div className="h-44 rounded-2xl bg-gradient-to-br from-[#988561] to-[#b9a779] flex items-center justify-center text-white p-6 relative overflow-hidden">
              <span className="text-4xl font-extrabold text-[#054239] drop-shadow-sm font-sans">
                {isAr ? 'عناصر الهوية' : 'Elements'}
              </span>
            </div>
            <h3 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-[#054239] dark:group-hover:text-[#b9a779] transition">
              {isAr ? 'الشعار، الألوان والزخارف' : 'Logo, Colors & Motifs'}
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
              {isAr
                ? 'تشريح معاني الرموز، أنظمة الألوان الرسمية، الزخارف السورية التقليدية، وتطبيقات المعارض والمطبوعات.'
                : 'Deconstruction of symbol meaning, color system specs, and authentic cultural patterns.'}
            </p>
          </div>

          {/* Card 3: Interactive Tools & Assets */}
          <div
            onClick={() => setActiveTab('tools')}
            className="group cursor-pointer rounded-3xl p-6 bg-white dark:bg-[#1c1c1c] border border-gray-200 dark:border-gray-800 hover:border-[#988561] transition-all hover:shadow-lg space-y-4"
          >
            <div className="h-44 rounded-2xl bg-gradient-to-br from-[#6b1f2a] to-[#ce1126] flex items-center justify-center text-white p-6 relative overflow-hidden">
              <span className="text-4xl font-extrabold text-[#edebe0] drop-shadow-sm font-sans">
                {isAr ? 'أدوات وموارد' : 'Tools & Map'}
              </span>
            </div>
            <h3 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-[#054239] dark:group-hover:text-[#b9a779] transition">
              {isAr ? 'العلم، الخطوط، الخريطة والأيقونات' : 'Flag Specs, Fonts, Map & Icons'}
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
              {isAr
                ? 'مختبر تجربة الخط، النسب الهندسية للعلم السوري، أيقونات المحافظات الـ 14، والخريطة الرقمية التفاعلية.'
                : 'Flag proportion blueprints, live typography studio, 14 governorate landmarks, and digital map.'}
            </p>
          </div>
        </div>
      </section>

      {/* Latest Press Highlights Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-200 dark:border-gray-800 pb-4">
          <div>
            <span className="text-xs font-bold text-[#988561] uppercase tracking-wider block">
              {isAr ? '/ كن على اطلاع' : '/ Stay Informed'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-1">
              {isAr ? 'الإعلام والصحافة' : 'Media & Press Releases'}
            </h2>
          </div>
          <button
            onClick={() => setActiveTab('press')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#054239] dark:text-[#b9a779] hover:underline"
          >
            <span>{isAr ? 'عرض جميع البيانات الصحفية' : 'View all releases'}</span>
            <ArrowIcon className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pressArticles.map((article) => (
            <article
              key={article.id}
              onClick={() => setActiveTab('press')}
              className="cursor-pointer group bg-white dark:bg-[#1c1c1c] border border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition space-y-4 flex flex-col justify-between p-6"
            >
              <div className="space-y-3">
                <span className="text-xs font-mono text-gray-400 block">{article.date}</span>
                <h3 className="font-bold text-base text-gray-900 dark:text-white group-hover:text-[#054239] dark:group-hover:text-[#b9a779] transition leading-snug">
                  {article.titleAr}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-3 leading-relaxed">
                  {article.excerptAr}
                </p>
              </div>

              <div className="pt-2 flex items-center gap-1 text-xs font-bold text-[#988561] group-hover:underline">
                <span>{isAr ? 'اقرأ البيان كاملاً' : 'Read full release'}</span>
                <ArrowIcon className="w-3.5 h-3.5" />
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};
