import React from 'react';
import { ArrowUp, Share2, Heart, ExternalLink, Github } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

interface FooterProps {
  lang: 'ar' | 'en';
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, setActiveTab }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#054239] text-[#edebe0] border-t border-[#002623] mt-14 relative overflow-hidden">
      {/* Syrian Heritage Pattern Backdrop Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.12] bg-center mix-blend-screen"
        style={{
          backgroundImage: `url(${getAssetUrl('/assets/media/25741af0874cd5aaa825b5f1b68c2463.jpg')})`,
          backgroundSize: '420px',
          backgroundRepeat: 'repeat',
          maskImage: 'linear-gradient(to bottom, black 30%, rgba(0,0,0,0.4) 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 30%, rgba(0,0,0,0.4) 100%)',
        }}
      />
      {/* Decorative Golden Crest Border at top of footer */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#b9a779]/60 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Col 1: Identity & Official Channels (Span 6) */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#b9a779] text-[#054239] flex items-center justify-center font-bold shadow-sm">
                <svg viewBox="0 0 100 100" className="w-6 h-6 fill-current">
                  <path d="M50 8 L62 38 L95 38 L68 58 L78 90 L50 70 L22 90 L32 58 L5 38 L38 38 Z" />
                </svg>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold tracking-tight text-white leading-tight">
                  {lang === 'ar' ? 'الهوية البصرية السورية' : 'Syrian Visual Identity'}
                </h3>
                <p className="text-xs text-[#b9a779]">
                  {lang === 'ar' ? 'الجمهورية العربية السورية' : 'Syrian Arab Republic'}
                </p>
              </div>
            </div>

            <p className="text-xs text-gray-300 leading-relaxed max-w-md">
              {lang === 'ar'
                ? 'المستودع الرقمي التوثيقي المعتمد لحفظ وتيسير الوصول إلى أدلة ومتجهات ونظم الهوية البصرية الرسمية للجمهورية العربية السورية.'
                : 'The official digital archive preserving and granting open access to Syria’s sovereign visual identity standards, vector assets, and design systems.'}
            </p>

            <div className="flex flex-wrap items-center gap-3 text-xs text-gray-300 pt-1">
              <span className="text-gray-400">{lang === 'ar' ? 'القنوات الرسمية:' : 'Official:'}</span>
              <a
                href="https://x.com/syr_republic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#b9a779] hover:underline"
              >
                X / Twitter
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

          {/* Col 2: Essential Sections (Span 3) */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="text-xs font-bold text-[#b9a779] uppercase tracking-wider">
              {lang === 'ar' ? 'أبرز المراجع' : 'Key References'}
            </h4>
            <ul className="space-y-1.5 text-xs text-gray-300">
              <li>
                <button
                  onClick={() => { setActiveTab('brand-story'); scrollToTop(); }}
                  className="hover:text-white transition"
                >
                  {lang === 'ar' ? 'فلسفة ورسالة الهوية' : 'Brand Story & Vision'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('brand-elements'); scrollToTop(); }}
                  className="hover:text-white transition"
                >
                  {lang === 'ar' ? 'الرمز والزخارف التراثية' : 'Emblem & Heritage Motifs'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('downloads'); scrollToTop(); }}
                  className="hover:text-white transition"
                >
                  {lang === 'ar' ? 'خزنة الملفات والمتجهات' : 'Digital Assets Vault'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('ai-hub'); scrollToTop(); }}
                  className="hover:text-white transition text-[#b9a779] font-medium"
                >
                  {lang === 'ar' ? 'بوابة المطورين والـ AI' : 'Developer & AI Hub'}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Machine & AI Specifications (Span 3) */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="text-xs font-bold text-[#b9a779] uppercase tracking-wider">
              {lang === 'ar' ? 'معايير الذكاء الاصطناعي' : 'Machine & AI Specs'}
            </h4>
            <ul className="space-y-1.5 text-xs text-gray-300">
              <li>
                <a
                  href="https://sytocode.github.io/syrian-visual-identity/llms.txt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition"
                >
                  <span className="text-[#b9a779] font-mono font-bold text-[11px]">llms.txt</span>
                  <span>{lang === 'ar' ? 'ملف سياق الـ LLM' : 'LLM Specification'}</span>
                  <ExternalLink className="w-2.5 h-2.5 text-gray-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://sytocode.github.io/syrian-visual-identity/mcp.json"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition"
                >
                  <span className="text-[#b9a779] font-mono font-bold text-[11px]">WebMCP</span>
                  <span>{lang === 'ar' ? 'بروتوكول الأدوات الذكية' : 'Tool Protocol'}</span>
                  <ExternalLink className="w-2.5 h-2.5 text-gray-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://sytocode.github.io/syrian-visual-identity/DESIGN.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition"
                >
                  <span className="text-[#b9a779] font-mono font-bold text-[11px]">DESIGN.md</span>
                  <span>{lang === 'ar' ? 'مواصفات نظام التصميم' : 'Design Tokens'}</span>
                  <ExternalLink className="w-2.5 h-2.5 text-gray-400" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Compact Bottom Bar */}
        <div className="border-t border-[#002623]/80 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div className="flex items-center gap-3">
            <p>
              © 2026 {lang === 'ar' ? 'الجمهورية العربية السورية — الهوية البصرية الرسمية' : 'Syrian Arab Republic — Official Visual Identity'}
            </p>
            <a
              href="https://github.com/sytocode/syrian-visual-identity"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white transition-colors p-1"
              title="GitHub"
              aria-label="GitHub Repository"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white transition active:scale-95 text-xs"
          >
            <span>{lang === 'ar' ? 'للأعلى' : 'Back to top'}</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
};
