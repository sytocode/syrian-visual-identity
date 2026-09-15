import React, { useState } from 'react';
import { pressArticles, PressArticle } from '../data/pressData';
import { Newspaper, Calendar, ArrowLeft, ArrowRight, Share2, Mail, ExternalLink } from 'lucide-react';

interface PressPageProps {
  lang: 'ar' | 'en';
}

export const PressPage: React.FC<PressPageProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const [selectedArticle, setSelectedArticle] = useState<PressArticle | null>(pressArticles[0]);
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#054239]/10 dark:bg-white/10 text-[#054239] dark:text-[#edebe0] text-xs font-semibold">
          <Newspaper className="w-4 h-4 text-[#988561]" />
          <span>{isAr ? 'البيانات والأخبار الرسمية' : 'Official Press Archive'}</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          {isAr ? 'المركز الإعلامي والصحافة' : 'Media & Press Center'}
        </h1>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          {isAr
            ? 'الأرشيف الصحفي والإخباري الكامل لفعاليات إطلاق الهوية البصرية للجمهورية العربية السورية، والبيانات والخطب الرسمية.'
            : 'Archived press statements, speeches, and reportage covering the launch of Syria’s new visual identity.'}
        </p>
      </div>

      {/* Main Container: Articles List on Left/Top, Full Reader on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Articles Sidebar (4 cols) */}
        <div className="lg:col-span-4 space-y-4">
          <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider px-1">
            {isAr ? 'البيانات الصحفية المحفوظة' : 'Archived Press Releases'}
          </h2>

          <div className="space-y-3">
            {pressArticles.map((article) => {
              const isSelected = selectedArticle?.id === article.id;
              return (
                <div
                  key={article.id}
                  onClick={() => setSelectedArticle(article)}
                  className={`p-5 rounded-2xl cursor-pointer transition border space-y-2.5 ${
                    isSelected
                      ? 'bg-white dark:bg-[#1f1f1f] border-[#054239] dark:border-[#edebe0] shadow-md ring-1 ring-[#054239]'
                      : 'bg-white/60 dark:bg-[#1c1c1c]/60 border-gray-200 dark:border-gray-800 hover:bg-white dark:hover:bg-[#1c1c1c]'
                  }`}
                >
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-[#988561]" />
                    <span>{article.date}</span>
                  </div>

                  <h3 className="font-bold text-sm text-gray-900 dark:text-white leading-snug">
                    {article.titleAr}
                  </h3>

                  <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                    {article.excerptAr}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Media Contact Card */}
          <div className="p-6 rounded-2xl bg-gray-50 dark:bg-black/30 border border-gray-200 dark:border-gray-800 space-y-3">
            <h3 className="font-bold text-sm text-gray-900 dark:text-white">
              {isAr ? 'استفسارات وسائل الإعلام' : 'Media Inquiries'}
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              {isAr
                ? 'لطلب المقابلات أو الحصول على حزم الصور عالية الدقة للاستخدام التلفزيوني والصحفي، يرجى مراجعة المكتبة الرقمية أو التواصل عبر القنوات الرسمية.'
                : 'For high-res broadcasting packages and press kit queries, explore the downloads vault or reach out via official channels.'}
            </p>
            <div className="pt-2 text-xs font-semibold text-[#054239] dark:text-[#edebe0]">
              <a href="https://x.com/syr_republic" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                <span>@syr_republic</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Article Reader (8 cols) */}
        <div className="lg:col-span-8 bg-white dark:bg-[#1c1c1c] border border-gray-200 dark:border-gray-800 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
          {selectedArticle ? (
            <article className="space-y-6">
              {/* Meta Header */}
              <div className="space-y-3 border-b border-gray-100 dark:border-gray-800 pb-6">
                <div className="flex items-center gap-2 text-xs font-mono text-[#988561]">
                  <Calendar className="w-4 h-4" />
                  <span>{selectedArticle.date}</span>
                  <span>•</span>
                  <span>{isAr ? 'قصر الشعب، دمشق' : 'People’s Palace, Damascus'}</span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
                  {selectedArticle.titleAr}
                </h1>
              </div>

              {/* Body Paragraphs */}
              <div className="space-y-5 text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                {selectedArticle.paragraphs.map((p, idx) => (
                  <p key={idx} className="indent-2">
                    {p}
                  </p>
                ))}
              </div>
            </article>
          ) : (
            <div className="text-center py-20 text-gray-400">
              {isAr ? 'اختر بياناً صحفياً لقراءته' : 'Select a press release to read'}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
