import React, { useState } from 'react';
import { syriaMapProvinces, ProvincePath } from '../data/syriaMapPaths';
import { governorates, Governorate } from '../data/governoratesData';
import { MapPin, Info, Search, Sparkles, Navigation, Layers } from 'lucide-react';

interface DigitalMapProps {
  lang: 'ar' | 'en';
}

export const DigitalMap: React.FC<DigitalMapProps> = ({ lang }) => {
  const [selectedId, setSelectedId] = useState<string>('damascus');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const activeGov = governorates.find((g) => g.id === selectedId) || governorates[0];

  return (
    <div className="space-y-10">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#054239]/10 text-[#054239] dark:text-[#edebe0] text-xs font-semibold">
          <Layers className="w-3.5 h-3.5 text-[#988561]" />
          <span>{lang === 'ar' ? 'الخريطة التفاعلية' : 'Interactive Cartography'}</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          {lang === 'ar' ? 'خريطة سوريا الرقمية وتوزيع المحافظات' : 'Digital Map of Syria'}
        </h2>
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
          {lang === 'ar'
            ? 'خريطة متجهة تفاعلية مبنية على بيانات جغرافية دقيقة (GeoJSON)، تتيح استكشاف محافظات سوريا الـ 14 وربط كل محافظة بمعلمها الرمزي ضمن الهوية البصرية.'
            : 'Interactive precision vector map rendered from optimized GeoJSON boundaries, linking each of Syria’s 14 provinces to its signature landmark and cultural narrative.'}
        </p>
      </div>

      {/* Main Map Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Map Viewer (7 cols) */}
        <div className="lg:col-span-7 bg-white dark:bg-[#1c1c1c] border border-gray-200 dark:border-gray-800 rounded-3xl p-6 shadow-sm overflow-hidden flex flex-col items-center justify-center relative min-h-[440px]">
          {/* Province Selector Pills */}
          <div className="w-full flex flex-wrap gap-1.5 pb-4 mb-2 border-b border-gray-100 dark:border-gray-800 text-xs">
            {governorates.map((g) => {
              const isSelected = selectedId === g.id;
              return (
                <button
                  key={g.id}
                  onClick={() => setSelectedId(g.id)}
                  className={`px-2.5 py-1 rounded-lg transition font-medium text-xs ${
                    isSelected
                      ? 'bg-[#054239] text-white font-bold'
                      : 'bg-gray-50 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {lang === 'ar' ? g.nameAr : g.nameEn}
                </button>
              );
            })}
          </div>

          {/* SVG Map */}
          <div className="w-full max-w-[620px] aspect-[800/700] relative select-none">
            <svg
              viewBox="0 0 800 700"
              className="w-full h-full drop-shadow-sm transition-all"
            >
              {syriaMapProvinces.map((prov) => {
                const isSelected = selectedId === prov.id;
                const isHovered = hoveredId === prov.id;
                const gov = governorates.find((g) => g.id === prov.id);

                return (
                  <g key={prov.id}>
                    <path
                      d={prov.pathD}
                      onClick={() => setSelectedId(prov.id)}
                      onMouseEnter={() => setHoveredId(prov.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      className={`cursor-pointer transition-all duration-300 stroke-[1.5] ${
                        isSelected
                          ? 'fill-[#054239] stroke-[#988561] filter drop-shadow-md'
                          : isHovered
                          ? 'fill-[#428177] stroke-white'
                          : 'fill-[#edebe0] dark:fill-[#2d3131] stroke-white dark:stroke-[#161616] hover:fill-[#b9a779]'
                      }`}
                    />
                    {/* Province Label */}
                    <text
                      x={prov.center[0]}
                      y={prov.center[1]}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className={`pointer-events-none text-[11px] font-bold select-none transition-colors ${
                        isSelected
                          ? 'fill-white'
                          : isHovered
                          ? 'fill-white'
                          : 'fill-gray-700 dark:fill-gray-300'
                      }`}
                    >
                      {gov ? (lang === 'ar' ? gov.nameAr : gov.nameEn) : prov.geoName}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          <div className="mt-3 text-[11px] text-gray-400 flex items-center gap-2">
            <Info className="w-3.5 h-3.5 text-[#988561]" />
            <span>
              {lang === 'ar'
                ? 'انقر على أي محافظة على الخريطة لعرض تفاصيلها ومعلمها الرمزي'
                : 'Click any governorate on the map to inspect its details and emblem'}
            </span>
          </div>
        </div>

        {/* Right: Selected Province Detail Card (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white dark:bg-[#1c1c1c] border border-gray-200 dark:border-gray-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6 relative overflow-hidden">
            {/* Background Accent Gradient */}
            <div className="absolute top-0 right-0 left-0 h-2 bg-gradient-to-r from-[#054239] via-[#988561] to-[#6b1f2a]" />

            {/* Header with Title & Capital */}
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-semibold text-[#988561] uppercase tracking-wider block">
                  {lang === 'ar' ? 'محافظة سورية' : 'Syrian Governorate'}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-1">
                  {lang === 'ar' ? activeGov.nameAr : activeGov.nameEn}
                </h3>
              </div>

              {/* Landmark SVG Icon preview */}
              <div className="w-16 h-16 rounded-2xl bg-gray-50 dark:bg-black/30 border border-gray-100 dark:border-gray-800 p-2 flex items-center justify-center shadow-inner">
                <img
                  src={`/assets/icons/governorates/${activeGov.svgFile}`}
                  alt={activeGov.nameAr}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Landmark Box */}
            <div className="p-4 rounded-2xl bg-gray-50 dark:bg-black/30 border border-gray-100 dark:border-gray-800 space-y-1">
              <span className="text-[11px] text-gray-400 font-semibold block">
                {lang === 'ar' ? 'المعلم الرمزي المعتمد في الهوية:' : 'Official Identity Landmark:'}
              </span>
              <p className="text-base font-bold text-[#054239] dark:text-[#edebe0]">
                {lang === 'ar' ? activeGov.landmarkAr : activeGov.landmarkEn}
              </p>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                {lang === 'ar' ? 'عن المحافظة وأصالتها' : 'Historical Significance'}
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                {lang === 'ar' ? activeGov.descriptionAr : activeGov.descriptionEn}
              </p>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex gap-3">
              <a
                href={`/assets/icons/governorates/${activeGov.svgFile}`}
                download={`أيقونة_${activeGov.nameAr}.svg`}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#054239] hover:bg-[#428177] text-white text-xs font-bold transition shadow-sm"
              >
                <span>{lang === 'ar' ? 'تحميل أيقونة المعلم (SVG)' : 'Download Landmark SVG'}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
