import React, { useState } from 'react';
import { FlagProportions } from '../components/FlagProportions';
import { FontStudio } from '../components/FontStudio';
import { GovernorateIcons } from '../components/GovernorateIcons';
import { DigitalMap } from '../components/DigitalMap';
import { Wrench, Shield, Type, MapPin, Layers } from 'lucide-react';

interface ToolsPageProps {
  lang: 'ar' | 'en';
}

export const ToolsPage: React.FC<ToolsPageProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const [selectedSubtool, setSelectedSubtool] = useState<'all' | 'flag' | 'fonts' | 'icons' | 'map'>('all');

  const toolTabs = [
    { id: 'all', labelAr: 'جميع الأدوات', labelEn: 'All Tools', icon: Wrench },
    { id: 'flag', labelAr: 'العلم السوري', labelEn: 'Syrian Flag', icon: Shield },
    { id: 'fonts', labelAr: 'الخطوط والطباعة', labelEn: 'Fonts & Type', icon: Type },
    { id: 'icons', labelAr: 'رموز المحافظات', labelEn: 'Province Icons', icon: MapPin },
    { id: 'map', labelAr: 'الخريطة الرقمية', labelEn: 'Digital Map', icon: Layers },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#054239]/10 dark:bg-white/10 text-[#054239] dark:text-[#edebe0] text-xs font-semibold">
          <Wrench className="w-4 h-4 text-[#988561]" />
          <span>{isAr ? 'الأدوات التفاعلية والموارد المدمجة' : 'Interactive Digital Tools & Assets'}</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          {isAr ? 'الأدوات والرموز الوطنية' : 'Tools, Assets & Map'}
        </h1>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          {isAr
            ? 'مجموعة منتقاة ومطوّرة من الأدوات الرقمية التفاعلية تدمج إرشادات العلم، مختبر تجربة الخط، أيقونات المحافظات الـ 14، والخريطة الرقمية لسوريا.'
            : 'Interactive design tools integrating official flag geometry, live Arabic typography sandbox, 14 provincial emblems, and interactive cartography.'}
        </p>

        {/* Sub-navigation Pills */}
        <div className="flex flex-wrap justify-center items-center gap-2 pt-4">
          {toolTabs.map((t) => {
            const Icon = t.icon;
            const isSelected = selectedSubtool === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setSelectedSubtool(t.id as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition ${
                  isSelected
                    ? 'bg-[#054239] text-white shadow-sm'
                    : 'bg-white dark:bg-[#1c1c1c] border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                <Icon className="w-3.5 h-3.5 text-[#988561]" />
                <span>{isAr ? t.labelAr : t.labelEn}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tool 1: Syrian Flag Proportions */}
      {(selectedSubtool === 'all' || selectedSubtool === 'flag') && (
        <section id="flag" className="scroll-mt-24">
          <FlagProportions lang={lang} />
        </section>
      )}

      {/* Tool 2: Fonts & Type Studio */}
      {(selectedSubtool === 'all' || selectedSubtool === 'fonts') && (
        <section id="fonts" className="scroll-mt-24 pt-8 border-t border-gray-200 dark:border-gray-800">
          <FontStudio lang={lang} />
        </section>
      )}

      {/* Tool 3: Governorate Icons */}
      {(selectedSubtool === 'all' || selectedSubtool === 'icons') && (
        <section id="icons" className="scroll-mt-24 pt-8 border-t border-gray-200 dark:border-gray-800">
          <GovernorateIcons lang={lang} />
        </section>
      )}

      {/* Tool 4: Digital Syria Map */}
      {(selectedSubtool === 'all' || selectedSubtool === 'map') && (
        <section id="map" className="scroll-mt-24 pt-8 border-t border-gray-200 dark:border-gray-800">
          <DigitalMap lang={lang} />
        </section>
      )}
    </div>
  );
};
