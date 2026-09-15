import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { BrandStoryPage } from './pages/BrandStoryPage';
import { BrandElementsPage } from './pages/BrandElementsPage';
import { ToolsPage } from './pages/ToolsPage';
import { TeamsPage } from './pages/TeamsPage';
import { DownloadsPage } from './pages/DownloadsPage';
import { AIDevHubPage } from './pages/AIDevHubPage';

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
    <div className="min-h-screen bg-[#fdfbf7] dark:bg-[#141414] text-gray-900 dark:text-gray-100 font-sans selection:bg-[#054239] selection:text-white transition-colors duration-200">
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
      <main className="pt-20">
        {activeTab === 'home' && <HomePage lang={lang} setActiveTab={handleTabChange} />}
        {activeTab === 'brand-story' && <BrandStoryPage lang={lang} />}
        {activeTab === 'brand-elements' && <BrandElementsPage lang={lang} />}
        {activeTab === 'tools' && <ToolsPage lang={lang} />}
        {activeTab === 'teams' && <TeamsPage lang={lang} />}
        {activeTab === 'downloads' && <DownloadsPage lang={lang} />}
        {activeTab === 'ai-hub' && <AIDevHubPage lang={lang} />}
      </main>

      {/* Footer */}
      <Footer lang={lang} setActiveTab={handleTabChange} />
    </div>
  );
};

export default App;
