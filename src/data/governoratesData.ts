export interface Governorate {
  id: string;
  nameAr: string;
  nameEn: string;
  landmarkAr: string;
  landmarkEn: string;
  descriptionAr: string;
  descriptionEn: string;
  svgFile: string;
  capital: string;
}

export const governorates: Governorate[] = [
  {
    id: 'damascus',
    nameAr: 'دمشق',
    nameEn: 'Damascus',
    landmarkAr: 'السيف الدمشقي',
    landmarkEn: 'Damascene Sword',
    descriptionAr: 'عاصمة الجمهورية العربية السورية، أقدم عاصمة مأهولة في التاريخ، ورمز العزة والصمود والحضارة الأموية.',
    descriptionEn: 'The capital of Syria, the oldest continuously inhabited capital in the world, embodying resilience and rich heritage.',
    svgFile: 'damascus-sword.svg',
    capital: 'دمشق'
  },
  {
    id: 'rif-dimashq',
    nameAr: 'ريف دمشق',
    nameEn: 'Rif Dimashq',
    landmarkAr: 'غوطة ريف دمشق',
    landmarkEn: 'Ghouta of Rif Dimashq',
    descriptionAr: 'واحة الخضرة الخصبة والقرى الجبلية والآثار العريقة المحيطة بدمشق الفيحاء.',
    descriptionEn: 'The fertile agricultural oasis, mountainous retreats, and ancient monasteries embracing Damascus.',
    svgFile: 'rif-dimashq-ghouta.svg',
    capital: 'دوما'
  },
  {
    id: 'aleppo',
    nameAr: 'حلب',
    nameEn: 'Aleppo',
    landmarkAr: 'قلعة حلب',
    landmarkEn: 'Aleppo Citadel',
    descriptionAr: 'عاصمة الشمال وقلب التجارة والصناعة والفن الأصيل، وحصن الصمود الشامخ عبر العصور.',
    descriptionEn: 'Northern capital, epicenter of commerce, gastronomy, music, and home to the majestic medieval citadel.',
    svgFile: 'aleppo-citadel.svg',
    capital: 'حلب'
  },
  {
    id: 'homs',
    nameAr: 'حمص',
    nameEn: 'Homs',
    landmarkAr: 'ساعة حمص',
    landmarkEn: 'Homs Clock Tower',
    descriptionAr: 'قلب سوريا النابض وملتقى الطرق التاريخية، مدينة ابن الوليد ومهد التسامح ودفء الأرواح.',
    descriptionEn: 'The geographical heart of Syria connecting all regions, noted for its welcoming spirit and historic landmarks.',
    svgFile: 'homs-clock.svg',
    capital: 'حمص'
  },
  {
    id: 'hama',
    nameAr: 'حماة',
    nameEn: 'Hama',
    landmarkAr: 'نواعير حماة',
    landmarkEn: 'Norias of Hama',
    descriptionAr: 'مدينة أبي الفداء على نهر العاصي، حيث تدور النواعير الخشبية الأثرية لحن الخلود منذ آلاف السنين.',
    descriptionEn: 'The city of Abu al-Fida on the Orontes River, famed for its ancient colossal wooden waterwheels.',
    svgFile: 'hama-norias.svg',
    capital: 'حماة'
  },
  {
    id: 'latakia',
    nameAr: 'اللاذقية',
    nameEn: 'Latakia',
    landmarkAr: 'قوس النصر',
    landmarkEn: 'Triumph Arch',
    descriptionAr: 'عروس الساحل وميناء سوريا الرئيسي، ملتقى الجبل الأشم بالبحر المتوسط وأرض أوغاريت مهد الأبجدية.',
    descriptionEn: 'Principal Mediterranean seaport, home of ancient Ugarit where the world’s first alphabet was born.',
    svgFile: 'latakia-triumph-arch.svg',
    capital: 'اللاذقية'
  },
  {
    id: 'tartus',
    nameAr: 'طرطوس',
    nameEn: 'Tartus',
    landmarkAr: 'جزيرة أرواد',
    landmarkEn: 'Arwad Island',
    descriptionAr: 'الساحل الجنوبي وجزيرة أرواد الفينيقية الشامخة في عرض البحر، وحصون الفرسان والمرافئ الهادئة.',
    descriptionEn: 'Coastal gem featuring the historic Phoenician island of Arwad and picturesque Mediterranean shores.',
    svgFile: 'tartous-arwad.svg',
    capital: 'طرطوس'
  },
  {
    id: 'idlib',
    nameAr: 'إدلب',
    nameEn: 'Idlib',
    landmarkAr: 'رويحة إدلب (المدن المنسية)',
    landmarkEn: 'Ruweiha (Dead Cities)',
    descriptionAr: 'الخضراء الغناء بملايين أشجار الزيتون، وحاضنة مئات المدن الأثرية والبيزنطية الفريدة.',
    descriptionEn: 'The green expanse of endless olive groves and the UNESCO-listed ancient villages of Northern Syria.',
    svgFile: 'idlib-ruweiha.svg',
    capital: 'إدلب'
  },
  {
    id: 'deir-ez-zor',
    nameAr: 'دير الزور',
    nameEn: 'Deir ez-Zor',
    landmarkAr: 'الجسر المعلق',
    landmarkEn: 'Suspension Bridge',
    descriptionAr: 'عروس الفرات وأرض الكرم والفروسية، ينساب النهر العظيم في وجدان أهلها ليروي التاريخ.',
    descriptionEn: 'Euphrates jewel known for generous hospitality, riverfront life, and the iconic historic suspension bridge.',
    svgFile: 'deir-ez-zor-bridge.svg',
    capital: 'دير الزور'
  },
  {
    id: 'raqqa',
    nameAr: 'الرقة',
    nameEn: 'Raqqa',
    landmarkAr: 'بوابة بغداد والرافقة',
    landmarkEn: 'Baghdad Gate & Raqqa',
    descriptionAr: 'عاصمة الرشيد التاريخية على الفرات العظيم، ورمز النهضة والأمل المستعاد.',
    descriptionEn: 'Abbasid historic capital of Harun al-Rashid along the Euphrates, a symbol of resilience and renewal.',
    svgFile: 'raqqa-baghdad-gate.svg',
    capital: 'الرقة'
  },
  {
    id: 'hasakah',
    nameAr: 'الحسكة',
    nameEn: 'Al-Hasakah',
    landmarkAr: 'جسر عين ديوار',
    landmarkEn: 'Ain Diwar Bridge',
    descriptionAr: 'الجزيرة السورية الخصبة، سلة خبز الوطن وتنوع الثقافات ومجرى نهري الخابور ودجلة.',
    descriptionEn: 'The fertile Jazira plains, breadbasket of Syria, rich in mosaic cultural diversity and ancient mounds.',
    svgFile: 'hasakah-ain-diwar.svg',
    capital: 'الحسكة'
  },
  {
    id: 'daraa',
    nameAr: 'درعا',
    nameEn: 'Daraa',
    landmarkAr: 'المسجد العمري وسهل حوران',
    landmarkEn: 'Omari Mosque & Hauran Plains',
    descriptionAr: 'أرض حوران والسهول الذهبية ومسرح بصرى الشام العظيم، مهد الأحرار وعنوان الكرم.',
    descriptionEn: 'Historic plains of Hauran, home to Bosra’s Roman theater and deep-rooted traditions of nobility.',
    svgFile: 'daraa-omari-mosque.svg',
    capital: 'درعا'
  },
  {
    id: 'sweida',
    nameAr: 'السويداء',
    nameEn: 'As-Suwayda',
    landmarkAr: 'قنوات السويداء',
    landmarkEn: 'Qanawat of As-Suwayda',
    descriptionAr: 'جبل العرب الأشم، أعمدة قنوات الرومانية، ومدرجات البازلت الأسود ونخوة الكرامة.',
    descriptionEn: 'Jabal al-Arab volcanic peaks, black basalt Roman architecture, ancient vineyards, and proud traditions.',
    svgFile: 'sweida-qanawat.svg',
    capital: 'السويداء'
  },
  {
    id: 'quneitra',
    nameAr: 'القنيطرة',
    nameEn: 'Quneitra',
    landmarkAr: 'بيت صيدا والجولان العربي السوري',
    landmarkEn: 'Beit Saida & Golan',
    descriptionAr: 'بوابة الجولان العربي السوري المحتل، الصامدة في وجه الرياح والشاهدة على الحق الذي لا يضيع.',
    descriptionEn: 'Gateway to the Syrian Arab Golan, an eternal testament to steadfastness, identity, and justice.',
    svgFile: 'quneitra-beit-saida.svg',
    capital: 'القنيطرة'
  }
];

export const iconColorThemes = [
  { id: 'classic', nameAr: 'كلاسيكي', nameEn: 'Classic', primary: '#04018c', bg: '#ffffff' },
  { id: 'forest', nameAr: 'أخضر غابي', nameEn: 'Forest', primary: '#054239', bg: '#edebe0' },
  { id: 'wheat', nameAr: 'قمح ذهبي', nameEn: 'Golden Wheat', primary: '#988561', bg: '#fdfbf7' },
  { id: 'umber', nameAr: 'عنبري دمشقي', nameEn: 'Deep Umber', primary: '#6b1f2a', bg: '#fdf8f8' },
  { id: 'charcoal', nameAr: 'فحمي داكن', nameEn: 'Charcoal', primary: '#161616', bg: '#ffffff' }
];
