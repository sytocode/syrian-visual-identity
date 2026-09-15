import React from 'react';
import { strategicObjectives, targetAudiences, voiceAttributes } from '../data/brandStoryData';
import { Sparkles, Target, Users, Megaphone, Compass, CheckCircle } from 'lucide-react';

interface BrandStoryPageProps {
  lang: 'ar' | 'en';
}

export const BrandStoryPage: React.FC<BrandStoryPageProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  const whySyriaPoints = [
    {
      problem: isAr ? 'لم يكن لديها هوية بصرية واضحة' : 'Lacked a cohesive visual identity',
      solution: isAr ? 'بناء نظام بصري حديث وراسخ يعبر عن وحدة الأرض والشعب' : 'Crafting a unified modern visual system representing all Syrians'
    },
    {
      problem: isAr ? 'لم يكن لديها شخصية مميزة ورسائل وطنية مستقلة' : 'Absence of distinct national voice',
      solution: isAr ? 'صياغة رسائل فخر وأمل تبرز الثراء الحضاري والتاريخي' : 'Articulating inspiring messages of pride, hope, and cultural depth'
    },
    {
      problem: isAr ? 'كانت هوية البلد ممهورة ظلماً وعدواناً باسم عائلة مجرمة' : 'Hijacked national identity by a tyrannical regime',
      solution: isAr ? 'استرداد الهوية السورية الحرة وإعادتها لأصحابها الحقيقيين: الشعب السوري' : 'Reclaiming Syrian identity and restoring it to its rightful owners: the Syrian people'
    },
    {
      problem: isAr ? 'بدون نبرة صوت محددة، وإنما متلونة ومشتتة' : 'Fragmented and inconsistent tone of voice',
      solution: isAr ? 'تحديد نبرة صوت واثقة، ملهمة، دافئة، جامعة للشمل' : 'Establishing a confident, warm, forward-looking, and inclusive tone'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#054239]/10 dark:bg-white/10 text-[#054239] dark:text-[#edebe0] text-xs font-semibold">
          <Sparkles className="w-4 h-4 text-[#988561]" />
          <span>{isAr ? 'الرؤية والرسالة والاستراتيجية' : 'Vision, Mission & Strategic Pillars'}</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          {isAr ? 'قصة الهوية السورية' : 'The Syrian Brand Story'}
        </h1>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          {isAr
            ? 'ليست مجرد شعار ورسومات، بل هي ميثاق وطني يربط التاريخ بالمستقبل، ويجسد عهد النهوض والكرامة لكل السوريين.'
            : 'Far more than a logo and typography, it is a national covenant bridging civilizational heritage with a future of dignity and collective rebirth.'}
        </p>
      </div>

      {/* Brand Positioning: جامعة الشمل */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#054239] to-[#002623] text-white shadow-xl space-y-6 relative overflow-hidden">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#b9a779]">
            {isAr ? 'تموضع العلامة الوطنية' : 'National Brand Positioning'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            {isAr ? 'سوريا: جامعة الشمل' : 'Syria: The Unifier'}
          </h2>
          <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
            {isAr
              ? 'نسعى من خلال مفهومنا الذي يتمحور حول المركزية إلى "أنسنة" سوريا وجعل سرديتها مؤثرة. يربط هذا المفهوم خصائص سوريا وأهدافها المستقبلية بمفاهيم عاطفية وعالمية القيمة مثل التراث والابتكار والمجتمع، والتي تجد صدى عميقاً لدى الشرائح المستهدفة محلياً وعالمياً. وهذا القلب ينبض بكل إنسان ينتمي إلى سوريا ولأجله يستمر بنبضه!'
              : 'Our positioning humanizes the Syrian narrative. It anchors Syria’s identity in enduring universal values: Heritage, Innovation, and Community. This pulse beats for every human being belonging to Syria.'}
          </p>

          <div className="pt-4 flex flex-wrap gap-2 text-xs font-bold text-[#edebe0]">
            {(isAr
              ? ['رابطة', 'موثوقة', 'عصرية', 'غنية', 'متنوعة', 'ذات رؤية', 'مبتكرة', 'متجددة', 'قائدة التحول']
              : ['Unifying', 'Authentic', 'Modern', 'Cultured', 'Diverse', 'Visionary', 'Innovative', 'Renewed', 'Transformative']
            ).map((trait) => (
              <span
                key={trait}
                className="px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-xs"
              >
                {trait}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 8 Strategic Objectives */}
      <div className="space-y-8">
        <div className="flex items-center gap-3 border-b border-gray-200 dark:border-gray-800 pb-4">
          <Target className="w-6 h-6 text-[#988561]" />
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {isAr ? 'الأهداف الاستراتيجية الثمانية' : '8 Strategic Objectives'}
            </h2>
            <p className="text-xs text-gray-500">
              {isAr ? 'الركائز التنموية والثقافية التي تستند إليها الهوية الجديدة' : 'Core developmental and cultural pillars'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {strategicObjectives.map((obj) => (
            <div
              key={obj.num}
              className="p-6 rounded-2xl bg-white dark:bg-[#1c1c1c] border border-gray-200 dark:border-gray-800 shadow-xs hover:shadow-md transition space-y-3"
            >
              <span className="text-2xl font-extrabold text-[#988561] font-mono block">
                {obj.num}
              </span>
              <h3 className="font-bold text-base text-gray-900 dark:text-white">
                {isAr ? obj.titleAr : obj.titleEn}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                {isAr ? obj.descAr : obj.descEn}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Syria Needed a New Identity */}
      <div className="space-y-8">
        <div className="flex items-center gap-3 border-b border-gray-200 dark:border-gray-800 pb-4">
          <Compass className="w-6 h-6 text-[#988561]" />
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {isAr ? 'لماذا احتاجت سوريا إلى هوية بصرية جديدة؟' : 'Why Syria Needed a New Visual Identity'}
            </h2>
            <p className="text-xs text-gray-500">
              {isAr ? 'التحول من واقع التشويه والتشتت إلى صرح وطني جامع' : 'The paradigm shift from monopolized imagery to inclusive national identity'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whySyriaPoints.map((p, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-gray-800 space-y-4"
            >
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-950 text-red-600 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  ✕
                </span>
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  {p.problem}
                </p>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-gray-200 dark:border-gray-800">
                <span className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  ✓
                </span>
                <p className="text-sm font-bold text-[#054239] dark:text-[#edebe0]">
                  {p.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 6 Target Audiences */}
      <div className="space-y-8">
        <div className="flex items-center gap-3 border-b border-gray-200 dark:border-gray-800 pb-4">
          <Users className="w-6 h-6 text-[#988561]" />
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {isAr ? 'الشرائح المستهدفة' : 'Target Audiences'}
            </h2>
            <p className="text-xs text-gray-500">
              {isAr ? 'لمن تتحدث الهوية السورية؟' : 'Who does the Syrian identity speak to?'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {targetAudiences.map((aud) => (
            <div
              key={aud.id}
              className="p-6 rounded-2xl bg-white dark:bg-[#1c1c1c] border border-gray-200 dark:border-gray-800 shadow-xs space-y-2"
            >
              <h3 className="font-bold text-base text-[#054239] dark:text-[#b9a779]">
                {isAr ? aud.titleAr : aud.titleEn}
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                {isAr ? aud.descAr : aud.descEn}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Tone of Voice Attributes */}
      <div className="space-y-8">
        <div className="flex items-center gap-3 border-b border-gray-200 dark:border-gray-800 pb-4">
          <Megaphone className="w-6 h-6 text-[#988561]" />
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {isAr ? 'سمات نبرة صوت سوريا' : 'Tone of Voice Attributes'}
            </h2>
            <p className="text-xs text-gray-500">
              {isAr ? 'النبرة الوطنية المعتمدة في الخطاب والتواصل' : 'The guiding principles of Syrian national communication'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {voiceAttributes.map((v) => (
            <div
              key={v.nameAr}
              className="p-5 rounded-2xl bg-white dark:bg-[#1c1c1c] border border-gray-200 dark:border-gray-800 text-center space-y-2"
            >
              <span className="text-lg font-extrabold text-[#054239] dark:text-white block">
                {isAr ? v.nameAr : v.nameEn}
              </span>
              <p className="text-xs text-gray-500 leading-relaxed">
                {isAr ? v.descAr : v.descEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
