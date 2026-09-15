import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Globe, Download } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  lang: 'ar' | 'en';
  setLang: (lang: 'ar' | 'en') => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  lang,
  setLang,
  darkMode,
  setDarkMode,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', labelAr: 'الرئيسية', labelEn: 'Home' },
    { id: 'brand-story', labelAr: 'قصة الهوية', labelEn: 'Brand Story' },
    { id: 'brand-elements', labelAr: 'عناصر الهوية', labelEn: 'Brand Elements' },
    { id: 'tools', labelAr: 'الأدوات والرموز', labelEn: 'Tools & Assets' },
    { id: 'teams', labelAr: 'فريق العمل', labelEn: 'The Team' },
    { id: 'downloads', labelAr: 'المكتبة الرقمية', labelEn: 'Downloads' },
    { id: 'ai-hub', labelAr: 'الذكاء الاصطناعي', labelEn: 'AI & Dev Hub' },
  ];

  const toggleLanguage = () => {
    setLang(lang === 'ar' ? 'en' : 'ar');
  };

  const toggleDark = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-hidden ${
        isScrolled
          ? 'bg-white/95 dark:bg-[#141414]/95 backdrop-blur-md shadow-md border-b border-gray-200/80 dark:border-white/10 py-3'
          : 'bg-white/70 dark:bg-[#141414]/70 backdrop-blur-md border-b border-gray-200/40 dark:border-white/5 py-4'
      }`}
    >
      {/* Subtle Syrian Heritage Pattern Overlay in Header */}
      <div 
        className={`absolute inset-0 pointer-events-none transition-opacity duration-500 overflow-hidden ${
          isScrolled ? 'opacity-[0.06] dark:opacity-[0.10]' : 'opacity-[0.035] dark:opacity-[0.06]'
        }`}
        style={{
          backgroundImage: `url(${getAssetUrl('/assets/media/42579150ef34db6fd8c2359eb9ba8363.jpg')})`,
          backgroundSize: '360px',
          backgroundRepeat: 'repeat',
          backgroundPosition: 'center',
          maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
        }}
      />
      {/* Decorative Gold Accent Line along bottom of navbar */}
      {isScrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#b9a779]/50 to-transparent pointer-events-none" />
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => {
            setActiveTab('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 text-right group transition-transform active:scale-95"
        >
          <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#054239] text-[#b9a779] shadow-sm group-hover:bg-[#428177] transition-colors">
            <svg viewBox="0 0 100 100" className="w-7 h-7 fill-current">
              <path d="M50 8 L62 38 L95 38 L68 58 L78 90 L50 70 L22 90 L32 58 L5 38 L38 38 Z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base md:text-lg tracking-tight text-gray-900 dark:text-white leading-tight">
              {lang === 'ar' ? 'الهوية البصرية' : 'Visual Identity'}
            </span>
            <span className="text-xs text-[#988561] font-medium tracking-wide">
              {lang === 'ar' ? 'الجمهورية العربية السورية' : 'Syrian Arab Republic'}
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`group relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 overflow-hidden ${
                  isActive
                    ? 'text-[#054239] dark:text-[#edebe0] bg-gray-100/80 dark:bg-white/10 font-bold'
                    : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50/60 dark:hover:bg-white/5'
                }`}
              >
                <span className="relative z-10">{lang === 'ar' ? item.labelAr : item.labelEn}</span>
                {/* Animated Underline: Draws from center outward on hover and stays solid when active */}
                <span
                  className={`absolute bottom-0.5 left-3 right-3 h-[2px] rounded-full transition-transform duration-300 ease-out origin-center ${
                    isActive
                      ? 'scale-x-100 bg-[#988561] opacity-100'
                      : 'scale-x-0 group-hover:scale-x-100 bg-[#988561] opacity-0 group-hover:opacity-100'
                  }`}
                />
              </button>
            );
          })}
        </nav>

        {/* Actions (Lang, Dark Mode, Quick Download) */}
        <div className="flex items-center gap-2">
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-gray-300 dark:border-gray-700 text-xs font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            title={lang === 'ar' ? 'Switch to English' : 'التحويل إلى العربية'}
          >
            <Globe className="w-3.5 h-3.5 text-[#988561]" />
            <span>{lang === 'ar' ? 'EN' : 'عربي'}</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleDark}
            className="p-2 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun className="w-4 h-4 text-[#b9a779]" /> : <Moon className="w-4 h-4 text-gray-600" />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-[#161616] border-b border-gray-200 dark:border-gray-800 px-4 pt-3 pb-6 space-y-1 shadow-xl">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`w-full text-right px-4 py-3 rounded-xl text-base font-medium transition ${
                  isActive
                    ? 'bg-[#054239] text-white font-bold'
                    : 'text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {lang === 'ar' ? item.labelAr : item.labelEn}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
