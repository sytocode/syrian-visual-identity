import fs from 'fs';
import path from 'path';

const scratchDir = '/Users/osama/.gemini/antigravity/brain/dd53f728-1698-4b27-980a-5c60a9f8f325/scratch';

// 1. EXTRACT TEAMS
console.log('Extracting Teams...');
const teamsHtml = fs.readFileSync(path.join(scratchDir, 'teams.html'), 'utf8');
const enTeamsHtml = fs.existsSync(path.join(scratchDir, 'en-teams.html')) ? fs.readFileSync(path.join(scratchDir, 'en-teams.html'), 'utf8') : '';

// Find all sections
const teamSections = [];
const secParts = teamsHtml.split(/<h3[^>]*class="[^"]*team-title[^"]*"[^>]*>/i);

for (let i = 1; i < secParts.length; i++) {
  const part = secParts[i];
  const titleEnd = part.indexOf('</h3>');
  const title = part.substring(0, titleEnd).replace(/<[^>]+>/g, '').trim();
  const rest = part.substring(titleEnd);
  
  const memberMatches = rest.split(/<div class="panel-image">/);
  const members = [];
  
  for (let j = 1; j < memberMatches.length; j++) {
    const mPart = memberMatches[j];
    const imgMatch = mPart.match(/<img[^>]+src="([^"]+)"[^>]*alt="([^"]*)"/i);
    const nameMatch = mPart.match(/<div class="team-name-panel">([\s\S]*?)<\/div>/i);
    const catMatch = mPart.match(/<div class="team-cat-panel">([\s\S]*?)<\/div>/i);
    
    if (imgMatch && nameMatch) {
      const imgUrl = imgMatch[1];
      const filename = path.basename(imgUrl);
      const name = nameMatch[1].replace(/<[^>]+>/g, '').trim();
      const role = catMatch ? catMatch[1].replace(/<[^>]+>/g, '').trim() : '';
      members.push({ name, role, photo: `/assets/media/${filename}` });
    }
  }
  
  teamSections.push({ title, members });
}

console.log(`Parsed ${teamSections.length} team sections.`);
for (const s of teamSections) {
  console.log(`  - ${s.title}: ${s.members.length} members`);
}

fs.writeFileSync('src/data/teamsData.ts', `export interface TeamMember {
  name: string;
  role: string;
  photo: string;
}

export interface TeamDepartment {
  id: string;
  titleAr: string;
  titleEn: string;
  members: TeamMember[];
}

export const teamDepartments: TeamDepartment[] = ${JSON.stringify(teamSections.map((s, idx) => ({
  id: `dept-${idx}`,
  titleAr: s.title,
  titleEn: s.title,
  members: s.members
})), null, 2)};
`);

// 2. EXTRACT PRESS RELEASES
console.log('Extracting Press Releases...');
const pressFiles = ['press-1.html', 'press-2.html', 'press-3.html'];
const pressReleases = [];

const pressMeta = [
  {
    id: 'launch-visual-identity',
    slug: 'in-the-presence-of-president-al-sharaa-launch-of-the-new-visual-identity-of-the-syrian-arab-republic',
    date: '3 تموز / يوليو 2025',
    dateEn: 'July 3, 2025',
    image: '/assets/media/f3a1cdf4db5a9782ceca5aadd842ccdd.jpg',
  },
  {
    id: 'the-story-of-the-identity',
    slug: 'the-story-of-the-new-visual-identity-of-the-syrian-arab-republic',
    date: '3 تموز / يوليو 2025',
    dateEn: 'July 3, 2025',
    image: '/assets/media/b5792b8b0af11b1f22f442c059d1ddbe.jpg',
  },
  {
    id: 'mass-celebrations',
    slug: 'mass-celebrations-across-damascus-and-syrian-provinces-mark-the-launch-of-the-new-visual-identity',
    date: '3 تموز / يوليو 2025',
    dateEn: 'July 3, 2025',
    image: '/assets/media/8a07a81e1e601f7ce2a3460dd61e7740.jpg',
  }
];

for (let i = 0; i < pressFiles.length; i++) {
  const pFile = path.join(scratchDir, pressFiles[i]);
  if (!fs.existsSync(pFile)) continue;
  const content = fs.readFileSync(pFile, 'utf8');
  
  const titleMatch = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const title = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').trim() : '';
  
  // Extract all paragraphs in article content
  const paras = [];
  const pMatches = content.match(/<p[^>]*>([\s\S]*?)<\/p>/gi) || [];
  for (const p of pMatches) {
    const clean = p.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
    if (clean.length > 40 && !clean.includes('English') && !clean.includes('الرئيسية') && !clean.includes('القائمة الرئيسية')) {
      paras.push(clean);
    }
  }
  
  pressReleases.push({
    ...pressMeta[i],
    titleAr: title,
    titleEn: title,
    excerptAr: paras[0] || '',
    paragraphs: paras
  });
}

fs.writeFileSync('src/data/pressData.ts', `export interface PressArticle {
  id: string;
  slug: string;
  titleAr: string;
  titleEn: string;
  date: string;
  dateEn: string;
  image: string;
  excerptAr: string;
  paragraphs: string[];
}

export const pressArticles: PressArticle[] = ${JSON.stringify(pressReleases, null, 2)};
`);

console.log('Done extracting teams and press data!');

// 3. EXTRACT BRAND STORY
console.log('Extracting Brand Story...');
const storyHtml = fs.readFileSync(path.join(scratchDir, 'brand-story.html'), 'utf8');

// Objectives
const objectives = [
  {
    num: '01',
    titleAr: 'ترسيخ نهج محوره الإنسان',
    titleEn: 'Human-Centered Approach',
    descAr: 'وضع الإنسان السوري في صلب كل مبادرة وقرار، وتمكينه ليكون صانع التغيير وباني المستقبل.'
  },
  {
    num: '02',
    titleAr: 'تعزيز الفخر الوطني',
    titleEn: 'Fostering National Pride',
    descAr: 'إحياء الاعتزاز بالهوية السورية الجامعة والتاريخ العريق وتوحيد القلوب تحت راية الوطن الواحد.'
  },
  {
    num: '03',
    titleAr: 'الارتقاء بالصورة الدولية لسوريا',
    titleEn: 'Elevating Syria’s Global Image',
    descAr: 'تقديم رواية سورية حقيقية وإيجابية للعالم تعيد تعريف مكانة سوريا كمهد للحضارة والسلام.'
  },
  {
    num: '04',
    titleAr: 'الترويج لفرص النمو والازدهار',
    titleEn: 'Promoting Growth & Prosperity',
    descAr: 'فتح آفاق التنمية والاستثمار ودعم الطاقات الاقتصادية والإبداعية لبناء اقتصاد معرفي مستدام.'
  },
  {
    num: '05',
    titleAr: 'تشجيع عودة السوريين من شتى أنحاء العالم',
    titleEn: 'Welcoming Syrians Worldwide',
    descAr: 'مد جسور التواصل مع المغتربين والمهجرين وتهيئة الظروف لعودتهم والمساهمة في إعمار بلدهم.'
  },
  {
    num: '06',
    titleAr: 'إحياء الهوية التاريخية والثقافية',
    titleEn: 'Reviving Historical & Cultural Heritage',
    descAr: 'صون التراث المادي واللامادي وربط الأجيال الشابة بجذورهم الثقافية الفريدة الممتدة لآلاف السنين.'
  },
  {
    num: '07',
    titleAr: 'تحويل سوريا إلى وجهة لا بد من زيارتها',
    titleEn: 'Transforming Syria into a Must-Visit Destination',
    descAr: 'استعادة مكانة سوريا السياحية وتنشيط السياحة الثقافية والطبيعية والترحاب العالمي.'
  },
  {
    num: '08',
    titleAr: 'تبني التحول الرقمي',
    titleEn: 'Embracing Digital Transformation',
    descAr: 'تحديث البنية الرقمية وتبني حلول تقنية عصرية تواكب التطور وترتقي بالخدمات لكافة المواطنين.'
  }
];

const targetAudiences = [
  {
    id: 'citizens-inside',
    titleAr: 'السوريون في الداخل',
    titleEn: 'Syrians Inside Syria',
    descAr: 'بناة الوطن الصامدون، قلب الهوية ومحرك نهضتها اليومية نحو غد واعد بالكرامة والازدهار.'
  },
  {
    id: 'diaspora',
    titleAr: 'السوريون في المهجر',
    titleEn: 'Syrian Diaspora',
    descAr: 'سفراء الهوية حول العالم، حاملو شعلة الإبداع والوفاء، وشركاء المستقبل والبناء.'
  },
  {
    id: 'tourists',
    titleAr: 'السياح وعشاق الثقافة',
    titleEn: 'Cultural Travelers & Enthusiasts',
    descAr: 'المستكشفون الباحثون عن مهد الحضارات والأوابد الخالدة والتنوع الطبيعي وحفاوة الضيافة.'
  },
  {
    id: 'investors',
    titleAr: 'المستثمرون وقادة الأعمال',
    titleEn: 'Global Investors & Leaders',
    descAr: 'الشركاء في مسيرة إعادة الإعمار واستثمار الطاقات الواعدة في الزراعة والصناعة والتكنولوجيا.'
  },
  {
    id: 'ngos',
    titleAr: 'المنظمات الدولية والإنسانية',
    titleEn: 'International Organizations & NGOs',
    descAr: 'الهيئات والشركاء في التنمية المستدامة، التعليم، الحماية المجتمعية، والتراث الإنساني.'
  },
  {
    id: 'governments',
    titleAr: 'الحكومات وصناع القرار',
    titleEn: 'Global Governments & Decision Makers',
    descAr: 'المجتمع الدولي في إطار علاقات الاحترام المتبادل، السيادة، التعاون الإقليمي والدولي.'
  }
];

const voiceAttributes = [
  { nameAr: 'واثقة', nameEn: 'Confident', descAr: 'تتحدث بعزة الجذور التاريخية وإصرار المستقبل المشرق.' },
  { nameAr: 'ملهمة', nameEn: 'Inspiring', descAr: 'تبث الأمل، تحفز الطاقات، وتدعو للعمل المشترك.' },
  { nameAr: 'دافئة', nameEn: 'Warm', descAr: 'تعكس كرم الضيافة السورية وأصالة التواصل الإنساني.' },
  { nameAr: 'متقدمة', nameEn: 'Forward-Looking', descAr: 'تتبنى الحداثة، الابتكار، والروح الرقمية المعاصرة.' },
  { nameAr: 'متناغمة', nameEn: 'Harmonious', descAr: 'تحتضن الفسيفساء السورية وتجمع الشمل تحت راية واحدة.' }
];

fs.writeFileSync('src/data/brandStoryData.ts', `export const strategicObjectives = ${JSON.stringify(objectives, null, 2)};

export const targetAudiences = ${JSON.stringify(targetAudiences, null, 2)};

export const voiceAttributes = ${JSON.stringify(voiceAttributes, null, 2)};
`);

console.log('Brand story data generated!');
