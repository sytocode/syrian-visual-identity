import React from 'react';
import { ArrowUp, Share2, Heart, ExternalLink } from 'lucide-react';

interface FooterProps {
  lang: 'ar' | 'en';
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, setActiveTab }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#054239] text-[#edebe0] border-t border-[#002623] mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Col 1: Identity Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#b9a779] text-[#054239] flex items-center justify-center font-bold">
                <svg viewBox="0 0 100 100" className="w-7 h-7 fill-current">
                  <path d="M50 8 L62 38 L95 38 L68 58 L78 90 L50 70 L22 90 L32 58 L5 38 L38 38 Z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-tight text-white">
                  {lang === 'ar' ? 'الهوية البصرية السورية' : 'Syrian Visual Identity'}
                </h3>
                <p className="text-sm text-[#b9a779]">
                  {lang === 'ar' ? 'الجمهورية العربية السورية' : 'Syrian Arab Republic'}
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed max-w-md">
              {lang === 'ar'
                ? 'مبادرة وطنية توثيقية تهدف إلى حفظ وتيسير الوصول إلى مواد ومخرجات الهوية البصرية الرسمية لسوريا، وتوحيد الموارد الرقمية لخدمة المصممين والمطورين والمؤسسات.'
                : 'A cultural and public documentation initiative to preserve and grant universal access to Syria’s official visual identity guidelines, assets, and design systems.'}
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs text-gray-300">
              <span>{lang === 'ar' ? 'القنوات الرسمية:' : 'Official Accounts:'}</span>
              <a
                href="https://x.com/syr_republic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#b9a779] hover:underline"
              >
                X / Twitter (@syr_republic)
              </a>
              <span>•</span>
              <a
                href="https://instagram.com/syr.republic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#b9a779] hover:underline"
              >
                Instagram
              </a>
              <span>•</span>
              <a
                href="https://facebook.com/syr.republic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#b9a779] hover:underline"
              >
                Facebook
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-[#b9a779] uppercase tracking-wider">
              {lang === 'ar' ? 'أقسام الموقع' : 'Navigation'}
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <button onClick={() => { setActiveTab('home'); scrollToTop(); }} className="hover:text-white transition">
                  {lang === 'ar' ? 'الرئيسية' : 'Home'}
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('brand-story'); scrollToTop(); }} className="hover:text-white transition">
                  {lang === 'ar' ? 'قصة الهوية والرسالة' : 'Brand Story & Vision'}
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('brand-elements'); scrollToTop(); }} className="hover:text-white transition">
                  {lang === 'ar' ? 'عناصر الهوية والزخارف' : 'Brand Elements & Motifs'}
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('tools'); scrollToTop(); }} className="hover:text-white transition">
                  {lang === 'ar' ? 'الألوان والخطوط والأيقونات' : 'Colors, Fonts & Emblems'}
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('teams'); scrollToTop(); }} className="hover:text-white transition">
                  {lang === 'ar' ? 'فريق العمل والمبدعين' : 'The Creative Team'}
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('press'); scrollToTop(); }} className="hover:text-white transition">
                  {lang === 'ar' ? 'البيانات الصحفية' : 'Press Releases'}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Community & Preserved Resources */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-[#b9a779] uppercase tracking-wider">
              {lang === 'ar' ? 'موارد ومساهمات مجتمعية' : 'Community & Resources'}
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a
                  href="https://syrian.zone/syid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-white transition"
                >
                  <span>{lang === 'ar' ? 'بوابة Syrian Zone' : 'Syrian Zone Portal'}</span>
                  <ExternalLink className="w-3 h-3 text-[#b9a779]" />
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/walaa_akdesign"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-white transition"
                >
                  <span>{lang === 'ar' ? 'أيقونات المحافظات (ولاء)' : 'Governorate Icons (Walaa)'}</span>
                  <ExternalLink className="w-3 h-3 text-[#b9a779]" />
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/abd_hmh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-white transition"
                >
                  <span>{lang === 'ar' ? 'دليل العلم (عبدالرحمن حداد)' : 'Flag Manual (A. Haddad)'}</span>
                  <ExternalLink className="w-3 h-3 text-[#b9a779]" />
                </a>
              </li>
              <li>
                <a
                  href="https://iwantype.com/product/qomra/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-white transition"
                >
                  <span>{lang === 'ar' ? 'خط قمرة الرسمي (iWantype)' : 'Qomra Typeface (iWantype)'}</span>
                  <ExternalLink className="w-3 h-3 text-[#b9a779]" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#002623]/80 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>
            © 2026 {lang === 'ar' ? 'الجمهورية العربية السورية — تم إعادة البناء والتوثيق للنشر العام على GitHub Pages' : 'Syrian Arab Republic — Preserved & Hosted on GitHub Pages'}
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition active:scale-95"
          >
            <span>{lang === 'ar' ? 'للأعلى' : 'Back to top'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
