import React, { useState } from 'react';
import { 
  Bot, 
  Code, 
  Copy, 
  Check, 
  ExternalLink, 
  Sparkles, 
  FileCode, 
  Palette, 
  BookOpen, 
  Layers
} from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

interface AIDevHubPageProps {
  lang: 'ar' | 'en';
}

export const AIDevHubPage: React.FC<AIDevHubPageProps> = ({ lang }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [activeSnippetTab, setActiveSnippetTab] = useState<'tailwind' | 'css' | 'tokens' | 'reactFlag' | 'reactEmblem'>('tailwind');

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const tailwindSnippet = `// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        syria: {
          forest: '#054239',
          'forest-light': '#428177',
          'forest-dark': '#002623',
          gold: '#b9a779',
          'gold-muted': '#988561',
          cream: '#edebe0',
          umber: '#6b1f2a',
          charcoal: '#161616',
          canvas: '#fdfbf7',
        }
      },
      fontFamily: {
        hayyakum: ['HayyakumAllah', 'system-ui', 'sans-serif'],
      }
    }
  }
};`;

  const cssSnippet = `/* import in your main CSS or HTML <link> */
@import url('https://sytocode.github.io/syrian-visual-identity/tokens.css');

/* Available classes: */
.bg-syria-forest       { background-color: var(--syria-forest-main); }
.text-syria-forest     { color: var(--syria-forest-main); }
.bg-syria-gold         { background-color: var(--syria-wheat-main); }
.border-syria-gold     { border-color: var(--syria-wheat-main); }
.font-hayyakum         { font-family: var(--font-syria-arabic); }`;

  const dtcgSnippet = `{
  "$name": "Syrian Visual Identity Tokens",
  "color": {
    "primary": {
      "forest": {
        "main": { "$value": "#054239", "$type": "color" },
        "light": { "$value": "#428177", "$type": "color" }
      }
    },
    "secondary": {
      "gold": { "$value": "#b9a779", "$type": "color" }
    }
  }
}`;

  const reactFlagSnippet = `// SyrianFlag.tsx
export const SyrianFlag: React.FC<{ className?: string }> = ({ className = "w-48 h-32" }) => (
  <svg viewBox="0 0 900 600" className={className}>
    <rect width="900" height="200" fill="#007A3D" />
    <rect y="200" width="900" height="200" fill="#FFFFFF" />
    <rect y="400" width="900" height="200" fill="#000000" />
    <g fill="#CE1126">
      <polygon points="225,260 236.7,296.2 274.9,296.2 244,318.6 255.8,354.8 225,332.4 194.2,354.8 206,318.6 175.1,296.2 213.3,296.2" />
      <polygon points="450,260 461.7,296.2 499.9,296.2 469,318.6 480.8,354.8 450,332.4 419.2,354.8 431,318.6 400.1,296.2 438.3,296.2" />
      <polygon points="675,260 686.7,296.2 724.9,296.2 694,318.6 705.8,354.8 675,332.4 644.2,354.8 656,318.6 625.1,296.2 663.3,296.2" />
    </g>
  </svg>
);`;

  const reactEmblemSnippet = `// SyrianEmblemBadge.tsx
export const SyrianEmblemBadge: React.FC<{ size?: number }> = ({ size = 64 }) => (
  <div style={{ width: size, height: size }} className="rounded-2xl bg-[#054239] p-3 shadow-md flex items-center justify-center">
    <img 
      src="https://sytocode.github.io/syrian-visual-identity/assets/logo-white.svg" 
      alt="Syrian Visual Identity Emblem" 
      className="w-full h-full object-contain" 
    />
  </div>
);`;

  const aiPrompts = [
    {
      id: 'prompt-navbar',
      titleAr: 'ترويسة موقع حكومي / مؤسسي',
      titleEn: 'Official Government Navbar',
      descAr: 'طلب لتوليد ناف بار متجاوب يلتزم بألوان الهوية والشعار وعلم سوريا',
      descEn: 'Generate a responsive navbar with official forest green, gold accents, and emblem',
      prompt: `قم بإنشاء مكون شريط علوي (Navbar) متجاوب باللغة العربية لموقع رسمي سوري باستخدام React و Tailwind CSS.
يجب الالتزام بالمعايير الرسمية للهوية البصرية السورية:
- اللون الأساسي: الأخضر الغابي #054239 مع لمسات ذهبية #b9a779.
- الخلفية عند التمرير: خلفية شبه شفافة مع تأثير blur بلون #054239/90 أو أبيض دافئ #fdfbf7.
- الشعار: تضمين شعار الهوية البصرية من الرابط https://sytocode.github.io/syrian-visual-identity/assets/logo.svg
- الخط: خط 'HayyakumAllah' أو خط عربي حديث أنيق.
- اتجاه الصفحة: dir="rtl".`
    },
    {
      id: 'prompt-tailwind',
      titleAr: 'تهيئة Tailwind CSS بالهوية السورية',
      titleEn: 'Tailwind CSS Theme Setup',
      descAr: 'برومبت لإعداد باليت الألوان السورية كاملة في مشروعك',
      descEn: 'Configure complete Syrian visual identity color tokens in Tailwind',
      prompt: `قم بتحديث ملف tailwind.config.js لمشروعي لإضافة نظام ألوان الهوية البصرية السورية الرسمية:
Primary Forest:
  - forest: '#054239'
  - forest-light: '#428177'
  - forest-dark: '#002623'
Secondary Golden Wheat:
  - gold: '#b9a779'
  - gold-muted: '#988561'
  - cream: '#edebe0'
Accent:
  - umber: '#6b1f2a'
Canvas & Text:
  - canvas: '#fdfbf7'
  - charcoal: '#161616'
Constitutional Flag:
  - flag-green: '#007a3d'
  - flag-white: '#ffffff'
  - flag-black: '#000000'
  - flag-star: '#ce1126'
يرجى توفير فئات الألوان وطرق تطبيقها في المكونات.`
    },
    {
      id: 'prompt-flag',
      titleAr: 'رسم علم الجمهورية السورية بـ SVG متطابق',
      titleEn: 'Strict Syrian Flag SVG (3:2)',
      descAr: 'رسم كود متجاوب دقيق رياضياً للعلم الوطني والنجوم الثلاث',
      descEn: 'Generate mathematically precise Syrian Flag SVG with 3 stars',
      prompt: `اكتب مكون React متجاوب يرسم علم الجمهورية العربية السورية باستخدام كود SVG نقي.
الشروط الدستورية الإلزامية:
- النسبة: تماماً 3:2 (مثال: viewBox="0 0 900 600").
- الشريط العلوي: أخضر (#007a3d).
- الشريط الأوسط: أبيض (#ffffff).
- الشريط السفلي: أسود (#000000).
- النجوم: بالضبط ثلاث نجوم خماسية حمراء (#ce1126) موزعة بالتساوي أفقياً في الشريط الأبيض عند 25% و 50% و 75% من العرض مع توجيه الرأس للأعلى.`
    },
    {
      id: 'prompt-governorate',
      titleAr: 'بطاقة عرض محافظة ورمزها المعماري',
      titleEn: 'Governorate Heritage Card',
      descAr: 'توليد بطاقة لعرض معالم المحافظات الـ 14 مع رمزها',
      descEn: 'Card displaying governorate history and architectural vector symbol',
      prompt: `اصنع بطاقة تفاعلية لمحافظة سورية (مثل دمشق أو حلب أو حمص) باستخدام Tailwind CSS.
يجب أن تتضمن:
1. عنوان المحافظة واللقب التاريخي.
2. الرمز المعماري الخاص بالهوية البصرية (SVG).
3. نبذة تاريخية، ودرجات ألوان مستوحاة من القمح الذهبي #b9a779 والأخضر الغابي #054239.
4. تأثيرات تفاعلية أنيقة عند مرور الفأرة (Hover lift and soft gold border glow).`
    }
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#054239] via-[#04332c] to-[#002623] text-white p-8 sm:p-14 shadow-2xl border border-[#b9a779]/30">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#b9a779]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#428177]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#b9a779]/20 border border-[#b9a779]/40 text-[#b9a779] text-xs font-semibold tracking-wide uppercase">
            <Bot className="w-4 h-4" />
            <span>{lang === 'ar' ? 'بوابة المطورين والذكاء الاصطناعي' : 'AI & Developer Hub'}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight font-serif">
            {lang === 'ar'
              ? 'تضمين الهوية البصرية في مشاريعك البرمجية والذكاء الاصطناعي'
              : 'Empowering Developers & AI with Syrian Identity'}
          </h1>

          <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
            {lang === 'ar'
              ? 'كل ما يحتاجه المبرمج ونماذج الذكاء الاصطناعي (Cursor, Claude Code, GitHub Copilot, Windsurf) لإنتاج تصاميم ومواقع تلتزم التزاماً مطلقاً بالهوية البصرية الرسمية لسوريا عبر رموز التصميم وقوالب الأكواد الجاهزة.'
              : 'Equip your workflow and AI assistants with exact color palettes, geometries, and design tokens for the Syrian Visual Identity.'}
          </p>

          {/* Quick Access Pills */}
          <div className="flex flex-wrap items-center gap-3 pt-4">
            <a
              href="https://github.com/sytocode/syrian-visual-identity/blob/main/DESIGN.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#b9a779] hover:bg-[#edebe0] text-[#054239] text-xs font-bold shadow-md transition-all"
            >
              <BookOpen className="w-4 h-4" />
              <span>DESIGN.md (دليل التصميم الشامل)</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>

            <a
              href="https://sytocode.github.io/syrian-visual-identity/llms.txt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-medium backdrop-blur-sm transition-all"
            >
              <FileCode className="w-4 h-4 text-[#b9a779]" />
              <span>llms.txt</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>

            <a
              href="https://sytocode.github.io/syrian-visual-identity/tokens.css"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-medium backdrop-blur-sm transition-all"
            >
              <Palette className="w-4 h-4 text-[#b9a779]" />
              <span>tokens.css</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>

            <a
              href="https://sytocode.github.io/syrian-visual-identity/syria-preset.js"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-medium backdrop-blur-sm transition-all"
            >
              <Layers className="w-4 h-4 text-[#b9a779]" />
              <span>syria-preset.js</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 1: Design Tokens & Components Snippets */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-[#054239] dark:text-[#b9a779] text-sm font-bold uppercase tracking-wider mb-1">
              <Code className="w-4 h-4" />
              <span>{lang === 'ar' ? 'رموز التصميم والمكونات' : 'Tokens & React Snippets'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">
              {lang === 'ar' ? 'نماذج برمجية جاهزة للدمج الفوري' : 'Plug-and-Play Code Snippets'}
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2 bg-gray-100 dark:bg-[#202020] p-1.5 rounded-2xl border border-gray-200 dark:border-white/10">
            <button
              onClick={() => setActiveSnippetTab('tailwind')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeSnippetTab === 'tailwind'
                  ? 'bg-[#054239] text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Tailwind Config
            </button>
            <button
              onClick={() => setActiveSnippetTab('css')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeSnippetTab === 'css'
                  ? 'bg-[#054239] text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              tokens.css
            </button>
            <button
              onClick={() => setActiveSnippetTab('tokens')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeSnippetTab === 'tokens'
                  ? 'bg-[#054239] text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              tokens.json (DTCG)
            </button>
            <button
              onClick={() => setActiveSnippetTab('reactFlag')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeSnippetTab === 'reactFlag'
                  ? 'bg-[#054239] text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              &lt;SyrianFlag /&gt;
            </button>
            <button
              onClick={() => setActiveSnippetTab('reactEmblem')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeSnippetTab === 'reactEmblem'
                  ? 'bg-[#054239] text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              &lt;SyrianEmblem /&gt;
            </button>
          </div>
        </div>

        <div className="relative rounded-2xl bg-[#111615] text-gray-200 border border-gray-800 shadow-xl overflow-hidden">
          <div className="flex items-center justify-between px-6 py-3 bg-[#181f1e] border-b border-gray-800 text-xs">
            <span className="font-mono text-gray-400">
              {activeSnippetTab === 'tailwind' && 'tailwind.config.js'}
              {activeSnippetTab === 'css' && 'styles.css'}
              {activeSnippetTab === 'tokens' && 'tokens.json'}
              {activeSnippetTab === 'reactFlag' && 'SyrianFlag.tsx'}
              {activeSnippetTab === 'reactEmblem' && 'SyrianEmblemBadge.tsx'}
            </span>

            <button
              onClick={() => {
                const code =
                  activeSnippetTab === 'tailwind' ? tailwindSnippet :
                  activeSnippetTab === 'css' ? cssSnippet :
                  activeSnippetTab === 'tokens' ? dtcgSnippet :
                  activeSnippetTab === 'reactFlag' ? reactFlagSnippet : reactEmblemSnippet;
                handleCopy(code, 'snippet-code');
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all text-xs"
            >
              {copiedKey === 'snippet-code' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-400" />
                  <span>{lang === 'ar' ? 'تم النسخ!' : 'Copied!'}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>{lang === 'ar' ? 'نسخ الكود' : 'Copy Code'}</span>
                </>
              )}
            </button>
          </div>

          <pre className="p-6 text-xs sm:text-sm font-mono overflow-x-auto leading-relaxed max-h-96">
            <code>
              {activeSnippetTab === 'tailwind' && tailwindSnippet}
              {activeSnippetTab === 'css' && cssSnippet}
              {activeSnippetTab === 'tokens' && dtcgSnippet}
              {activeSnippetTab === 'reactFlag' && reactFlagSnippet}
              {activeSnippetTab === 'reactEmblem' && reactEmblemSnippet}
            </code>
          </pre>
        </div>
      </section>

      {/* SECTION 2: AI Prompts Cookbook */}
      <section className="space-y-6">
        <div>
          <div className="flex items-center gap-2 text-[#054239] dark:text-[#b9a779] text-sm font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4" />
            <span>{lang === 'ar' ? 'بنك الأوامر للذكاء الاصطناعي' : 'AI Prompt Cookbook'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold">
            {lang === 'ar' ? 'أوامر جاهزة للإلصاق في ChatGPT و Claude و Cursor' : 'Copy-Paste Prompts for AI'}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 max-w-2xl">
            {lang === 'ar'
              ? 'انسخ هذه الأوامر المصاغة بعناية وضعها في محادثتك مع نماذج الذكاء الاصطناعي لتحصل فوراً على مكونات متطابقة مع المعايير.'
              : 'Pre-engineered prompts calibrated to yield fully compliant UI components from any LLM.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aiPrompts.map((p) => (
            <div
              key={p.id}
              className="flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-white/10 shadow-sm hover:shadow-md transition-all"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-gray-900 dark:text-white">
                    {lang === 'ar' ? p.titleAr : p.titleEn}
                  </h3>
                  <span className="text-[11px] px-2 py-0.5 rounded-md bg-[#054239]/10 text-[#054239] dark:bg-[#b9a779]/20 dark:text-[#b9a779] font-medium">
                    Prompt
                  </span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {lang === 'ar' ? p.descAr : p.descEn}
                </p>
                <div className="mt-3 p-3 rounded-xl bg-gray-50 dark:bg-[#121212] border border-gray-200 dark:border-gray-800 text-xs text-gray-700 dark:text-gray-300 font-mono whitespace-pre-wrap max-h-36 overflow-y-auto">
                  {p.prompt}
                </div>
              </div>

              <div className="pt-4 mt-2 border-t border-gray-100 dark:border-gray-800 flex justify-end">
                <button
                  onClick={() => handleCopy(p.prompt, p.id)}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#054239] hover:bg-[#002623] text-white text-xs font-semibold transition-all shadow-sm"
                >
                  {copiedKey === p.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-300" />
                      <span>{lang === 'ar' ? 'تم نسخ الأمر!' : 'Prompt Copied!'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{lang === 'ar' ? 'نسخ الأمر للـ AI' : 'Copy Prompt for AI'}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
