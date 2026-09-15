import React, { useState } from 'react';
import { teamDepartments, TeamDepartment } from '../data/teamsData';
import { Users, Search, Award } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

interface TeamsPageProps {
  lang: 'ar' | 'en';
}

export const TeamsPage: React.FC<TeamsPageProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState<string>('all');

  const filteredDepartments = teamDepartments
    .map((dept) => {
      const filteredMembers = dept.members.filter((m) => {
        const q = searchTerm.toLowerCase().trim();
        return m.name.toLowerCase().includes(q) || m.role.toLowerCase().includes(q);
      });
      return {
        ...dept,
        members: filteredMembers,
      };
    })
    .filter((dept) => {
      if (selectedDept !== 'all' && dept.id !== selectedDept) return false;
      return dept.members.length > 0;
    });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#054239]/10 dark:bg-white/10 text-[#054239] dark:text-[#edebe0] text-xs font-semibold">
          <Award className="w-4 h-4 text-[#988561]" />
          <span>{isAr ? 'صناع الهوية والمبدعون' : 'The Creative Minds Behind The Identity'}</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          {isAr ? 'فريق العمل الوطني' : 'The Team'}
        </h1>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          {isAr
            ? 'تكريم وتقدير لكل من شارك في صياغة ورسم وبرمجة وإخراج الهوية البصرية للجمهورية العربية السورية عبر مختلف الفرق والتخصصات.'
            : 'Tribute to the researchers, strategists, designers, calligraphers, engineers, and animators who shaped Syria’s visual identity.'}
        </p>

        {/* Search & Department Filters */}
        <div className="pt-6 max-w-xl mx-auto space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 text-gray-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={isAr ? 'ابحث عن عضو أو دور في الفريق...' : 'Search team member or role...'}
              className="w-full pr-10 pl-4 py-2.5 rounded-2xl bg-white dark:bg-[#1c1c1c] border border-gray-200 dark:border-gray-800 text-xs text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#988561] shadow-xs"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-1.5 text-xs">
            <button
              onClick={() => setSelectedDept('all')}
              className={`px-3 py-1.5 rounded-xl font-medium transition ${
                selectedDept === 'all'
                  ? 'bg-[#054239] text-white font-bold'
                  : 'bg-white dark:bg-[#1c1c1c] text-gray-600 dark:text-gray-400 hover:bg-gray-100'
              }`}
            >
              {isAr ? 'جميع الفرق' : 'All Departments'}
            </button>
            {teamDepartments.map((d) => (
              <button
                key={d.id}
                onClick={() => setSelectedDept(d.id)}
                className={`px-3 py-1.5 rounded-xl font-medium transition ${
                  selectedDept === d.id
                    ? 'bg-[#054239] text-white font-bold'
                    : 'bg-white dark:bg-[#1c1c1c] text-gray-600 dark:text-gray-400 hover:bg-gray-100'
                }`}
              >
                {isAr ? d.titleAr : d.titleEn}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Departments Listing */}
      <div className="space-y-16">
        {filteredDepartments.map((dept) => (
          <div key={dept.id} className="space-y-6">
            <div className="border-b border-gray-200 dark:border-gray-800 pb-3 flex items-center justify-between">
              <h2 className="text-xl sm:text-2xl font-bold text-[#054239] dark:text-[#edebe0]">
                {isAr ? dept.titleAr : dept.titleEn}
              </h2>
              <span className="text-xs font-mono text-gray-400">
                {dept.members.length} {isAr ? 'أعضاء' : 'members'}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {dept.members.map((member, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-[#1c1c1c] border border-gray-200 dark:border-gray-800 rounded-2xl p-4 flex flex-col items-center text-center shadow-xs hover:shadow-md transition space-y-3 group"
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-gray-100 dark:bg-black/30 flex items-center justify-center relative border border-gray-100 dark:border-gray-800">
                    <img
                      src={getAssetUrl(member.photo)}
                      alt={member.name}
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        // Fallback avatar if photo failed
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 flex items-center justify-center font-bold text-[#988561] text-lg bg-gray-100 dark:bg-gray-800 -z-10">
                      {member.name.charAt(0)}
                    </div>
                  </div>

                  <div className="space-y-1 w-full">
                    <h4 className="font-bold text-sm text-gray-900 dark:text-white truncate">
                      {member.name}
                    </h4>
                    {member.role && (
                      <p className="text-[11px] text-[#988561] line-clamp-1">
                        {member.role}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
