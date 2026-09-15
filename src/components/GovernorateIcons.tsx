import React, { useState, useEffect } from 'react';
import { governorates, iconColorThemes, Governorate } from '../data/governoratesData';
import { Download, Search, MapPin, ExternalLink, Sparkles, Check } from 'lucide-react';

interface GovernorateIconsProps {
  lang: 'ar' | 'en';
}

export const GovernorateIcons: React.FC<GovernorateIconsProps> = ({ lang }) => {
  const [selectedTheme, setSelectedTheme] = useState(iconColorThemes[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const [svgContents, setSvgContents] = useState<Record<string, string>>({});
  const [selectedGov, setSelectedGov] = useState<Governorate | null>(null);

  // Load all 14 SVGs locally
  useEffect(() => {
    const loadSvgs = async () => {
      const map: Record<string, string> = {};
      await Promise.all(
        governorates.map(async (g) => {
          try {
            const res = await fetch(`/assets/icons/governorates/${g.svgFile}`);
            if (res.ok) {
              const text = await res.text();
              map[g.svgFile] = text;
            }
          } catch (e) {
            console.warn('Failed to load SVG for', g.id);
          }
        })
      );
      setSvgContents(map);
    };
    loadSvgs();
  }, []);

  // Filter governorates
  const filtered = governorates.filter((g) => {
    const q = searchTerm.toLowerCase().trim();
    return (
      g.nameAr.includes(q) ||
      g.nameEn.toLowerCase().includes(q) ||
      g.landmarkAr.includes(q) ||
      g.landmarkEn.toLowerCase().includes(q)
    );
  });

  // Re-color SVG according to theme
  const getThemedSvg = (rawSvg: string, theme: typeof iconColorThemes[0]) => {
    if (!rawSvg) return '';
    // Replace standard stroke/fill in icon
    let updated = rawSvg.replace(/#04018c/gi, theme.primary);
    updated = updated.replace(/fill:\s*#(?:fff|ffffff)/gi, `fill: ${theme.bg}`);
    updated = updated.replace(/fill="#(?:fff|ffffff)"/gi, `fill="${theme.bg}"`);
    return updated;
  };

  const downloadSvg = (g: Governorate) => {
    const raw = svgContents[g.svgFile];
    if (!raw) return;
    const content = getThemedSvg(raw, selectedTheme);
    const blob = new Blob([content], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `أيقونة_${g.nameAr}_${selectedTheme.nameAr}.svg`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-10">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#054239]/10 text-[#054239] dark:text-[#edebe0] text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-[#988561]" />
          <span>{lang === 'ar' ? 'رموز المحافظات الـ 14' : 'The 14 Governorate Emblems'}</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          {lang === 'ar' ? 'أيقونات المعالم السورية' : 'Syrian Provincial Landmarks'}
        </h2>
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
          {lang === 'ar'
            ? 'تصميم وإبداع: الفنانة ولاء (@walaa_akdesign). مجموعة بصرية تجسد المعلم التراثي الأبرز لكل محافظة من المحافظات الـ 14 بأسلوب متناغم مع الهوية البصرية. يمكنك تبديل لوحة الألوان وتنزيل الرموز كملفات SVG مفتوحة.'
            : 'Designed by Walaa (@walaa_akdesign). A harmonious visual series capturing the signature cultural landmark of every Syrian province. Supports dynamic palette switching and direct SVG download.'}
        </p>
      </div>

      {/* Control Bar: Theme Switcher & Search */}
      <div className="bg-white dark:bg-[#1c1c1c] border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-5 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Search */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-gray-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={lang === 'ar' ? 'ابحث عن محافظة أو معلم...' : 'Search province or landmark...'}
            className="w-full pr-10 pl-4 py-2 rounded-xl text-xs bg-gray-50 dark:bg-black/30 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#988561]"
          />
        </div>

        {/* Theme Pills */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
          <span className="text-xs font-semibold text-gray-500 whitespace-nowrap">
            {lang === 'ar' ? 'اللون:' : 'Palette:'}
          </span>
          {iconColorThemes.map((t) => {
            const isSelected = selectedTheme.id === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setSelectedTheme(t)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium transition border ${
                  isSelected
                    ? 'border-[#054239] dark:border-[#edebe0] bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white font-bold'
                    : 'border-transparent text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5'
                }`}
              >
                <span
                  className="w-3.5 h-3.5 rounded-full border border-black/10 flex-shrink-0"
                  style={{ backgroundColor: t.primary }}
                />
                <span>{lang === 'ar' ? t.nameAr : t.nameEn}</span>
              </button>
            );
          })}
        </div>

        {/* Google Drive Full Archive Link */}
        <a
          href="https://drive.google.com/drive/folders/1rRpQ98QKB_hnTofuN7zTVdk0YpH73CLL"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-xs font-semibold text-gray-800 dark:text-gray-200 transition whitespace-nowrap"
        >
          <span>{lang === 'ar' ? 'حزمة Drive الكاملة' : 'Drive Bundle'}</span>
          <ExternalLink className="w-3 h-3 text-[#988561]" />
        </a>
      </div>

      {/* Grid of 14 Emblems */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 sm:gap-6">
        {filtered.map((g) => {
          const rawSvg = svgContents[g.svgFile] || '';
          const themed = getThemedSvg(rawSvg, selectedTheme);

          return (
            <div
              key={g.id}
              className="bg-white dark:bg-[#1c1c1c] border border-gray-200 dark:border-gray-800/80 rounded-2xl p-4 flex flex-col items-center text-center group hover:shadow-md transition-all relative overflow-hidden"
            >
              {/* SVG Display */}
              <div
                className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center p-2 rounded-xl transition-transform group-hover:scale-105"
                dangerouslySetInnerHTML={{
                  __html: themed || `<img src="/assets/icons/governorates/${g.svgFile}" alt="${g.nameAr}" class="w-full h-full object-contain" />`,
                }}
              />

              {/* Title & Landmark */}
              <div className="mt-3 space-y-0.5 w-full">
                <h4 className="font-bold text-sm text-gray-900 dark:text-white truncate">
                  {lang === 'ar' ? g.nameAr : g.nameEn}
                </h4>
                <p className="text-[11px] text-[#988561] font-medium truncate">
                  {lang === 'ar' ? g.landmarkAr : g.landmarkEn}
                </p>
              </div>

              {/* Action: Quick Download */}
              <button
                onClick={() => downloadSvg(g)}
                className="mt-3 w-full inline-flex items-center justify-center gap-1 py-1.5 px-2 rounded-lg bg-gray-50 dark:bg-black/30 hover:bg-[#054239] hover:text-white dark:hover:bg-[#054239] text-[11px] font-semibold text-gray-600 dark:text-gray-300 transition"
                title={`Download ${g.nameAr} SVG`}
              >
                <Download className="w-3 h-3" />
                <span>SVG</span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
