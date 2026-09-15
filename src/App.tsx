import React, { useState, useEffect, Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { getAssetUrl } from './utils/assets';

// Route-level code splitting for maximum performance and instant FCP
const HomePage = React.lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const BrandStoryPage = React.lazy(() => import('./pages/BrandStoryPage').then(m => ({ default: m.BrandStoryPage })));
const BrandElementsPage = React.lazy(() => import('./pages/BrandElementsPage').then(m => ({ default: m.BrandElementsPage })));
const ToolsPage = React.lazy(() => import('./pages/ToolsPage').then(m => ({ default: m.ToolsPage })));
const TeamsPage = React.lazy(() => import('./pages/TeamsPage').then(m => ({ default: m.TeamsPage })));
const DownloadsPage = React.lazy(() => import('./pages/DownloadsPage').then(m => ({ default: m.DownloadsPage })));
const AIDevHubPage = React.lazy(() => import('./pages/AIDevHubPage').then(m => ({ default: m.AIDevHubPage })));

const BrandedLoader: React.FC<{ lang: 'ar' | 'en' }> = ({ lang }) => (
  <div className="min-h-[55vh] flex flex-col items-center justify-center space-y-4 py-24">
    <div className="relative w-16 h-16 flex items-center justify-center">
      <div className="absolute inset-0 rounded-2xl bg-[#054239]/10 dark:bg-white/5 animate-ping opacity-60" />
      <div className="w-14 h-14 rounded-2xl bg-[#054239] text-[#b9a779] flex items-center justify-center shadow-lg border border-[#b9a779]/30 animate-pulse">
        <svg viewBox="0 0 100 100" className="w-8 h-8 fill-current">
          <path d="M50 8 L62 38 L95 38 L68 58 L78 90 L50 70 L22 90 L32 58 L5 38 L38 38 Z" />
        </svg>
      </div>
    </div>
    <p className="text-xs font-semibold tracking-wider text-[#988561] animate-pulse">
      {lang === 'ar' ? 'جارٍ التحميل...' : 'Loading...'}
    </p>
  </div>
);

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [lang, setLang] = useState<'ar' | 'en'>(() => {
    const storedLang = localStorage.getItem('sy_lang');
    if (storedLang === 'ar' || storedLang === 'en') {
      return storedLang;
    }
    const urlParams = new URLSearchParams(window.location.search);
    const queryLang = urlParams.get('lang');
    if (queryLang === 'ar' || queryLang === 'en') {
      return queryLang;
    }
    return 'ar';
  });
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // Sync dark mode class
  useEffect(() => {
    const isDarkStored = localStorage.getItem('sy_theme') === 'dark';
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialDark = isDarkStored || (localStorage.getItem('sy_theme') === null && prefersDark);
    setDarkMode(initialDark);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('sy_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('sy_theme', 'light');
    }
  }, [darkMode]);

  // Sync RTL / LTR direction and persist language
  useEffect(() => {
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);
    localStorage.setItem('sy_lang', lang);
  }, [lang]);

  // Listen to hash changes for deep linking
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'brand-story', 'brand-elements', 'tools', 'teams', 'downloads', 'ai-hub'].includes(hash)) {
        setActiveTab(hash);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    window.location.hash = tab;
  };

  return (
    <div className="min-h-screen bg-[#fdfbf7] dark:bg-[#141414] text-gray-900 dark:text-gray-100 font-sans selection:bg-[#054239] selection:text-white transition-colors duration-200 relative overflow-x-hidden">
      {/* Subtle Ambient Syrian Heritage Pattern Overlay for All Pages */}
      <div
        className="fixed top-0 left-0 right-0 h-[600px] pointer-events-none z-0 opacity-[0.04] dark:opacity-[0.07] transition-opacity duration-300"
        style={{
          backgroundImage: `url(${getAssetUrl('/assets/media/42579150ef34db6fd8c2359eb9ba8363.jpg')})`,
          backgroundSize: '480px',
          backgroundRepeat: 'repeat',
          backgroundPosition: 'top center',
          maskImage: 'linear-gradient(to bottom, black 25%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 25%, transparent 100%)',
        }}
      />

      {/* Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        lang={lang}
        setLang={setLang}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Main Page Content */}
      <main className="pt-20 relative z-10">
        <Suspense fallback={<BrandedLoader lang={lang} />}>
          <div key={activeTab} className="animate-fadeIn">
            {activeTab === 'home' && <HomePage lang={lang} setActiveTab={handleTabChange} />}
            {activeTab === 'brand-story' && <BrandStoryPage lang={lang} />}
            {activeTab === 'brand-elements' && <BrandElementsPage lang={lang} />}
            {activeTab === 'tools' && <ToolsPage lang={lang} />}
            {activeTab === 'teams' && <TeamsPage lang={lang} />}
            {activeTab === 'downloads' && <DownloadsPage lang={lang} />}
            {activeTab === 'ai-hub' && <AIDevHubPage lang={lang} />}
          </div>
        </Suspense>
      </main>

      {/* Footer */}
      <Footer lang={lang} setActiveTab={handleTabChange} />
    </div>
  );
};

export default App;
