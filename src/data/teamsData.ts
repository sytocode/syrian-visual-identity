export interface TeamMember {
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

export const teamDepartments: TeamDepartment[] = [
  {
    "id": "dept-0",
    "titleAr": "إدارة الفريق",
    "titleEn": "إدارة الفريق",
    "members": [
      {
        "name": "وسيم قدورة",
        "role": "وسيم قدورة",
        "photo": "/assets/media/8325e2e8367418e3aa8ae96cca2b7ed0.png"
      },
      {
        "name": "محمد سلواية",
        "role": "محمد سلواية",
        "photo": "/assets/media/c997601e2d73ce5929f9e7bf35bed054.png"
      },
      {
        "name": "علي حلاق",
        "role": "علي حلاق",
        "photo": "/assets/media/46f4c824a2963d91c398c5b5af5a049f.png"
      }
    ]
  },
  {
    "id": "dept-1",
    "titleAr": "فريق البحث والتحليل",
    "titleEn": "فريق البحث والتحليل",
    "members": [
      {
        "name": "هلا قصقص",
        "role": "Digital Experience Architect",
        "photo": "/assets/media/cdb384ae0a0ca556e6399c5f21f3e101.png"
      },
      {
        "name": "أحمد استانبولّو",
        "role": "أحمد استانبولّو",
        "photo": "/assets/media/4b1545fbd0c086b960f6f5ec16591a12.png"
      },
      {
        "name": "مجاب ستوت",
        "role": "مجاب ستوت",
        "photo": "/assets/media/a8f3438345412edf1af693c0386c9cdf.png"
      },
      {
        "name": "عبدالكريم القادري",
        "role": "Abdalkarem Alkadri",
        "photo": "/assets/media/b42364b76c2ea0e1f6ce395180abc00e.png"
      },
      {
        "name": "محمد طعمه",
        "role": "Mohammad Toumh",
        "photo": "/assets/media/94995a90aeae572beaa65a7b3d1ca6eb.png"
      },
      {
        "name": "يارا الوفائي",
        "role": "Yara Alwafai",
        "photo": "/assets/media/892f6579f5a6ae82bde688f0690d9762.png"
      }
    ]
  },
  {
    "id": "dept-2",
    "titleAr": "فريق استراتيجية العلامة والمحتوى",
    "titleEn": "فريق استراتيجية العلامة والمحتوى",
    "members": [
      {
        "name": "حسام مبارك",
        "role": "حسام مبارك",
        "photo": "/assets/media/b14e11a660e57c727d5745358474de81.png"
      },
      {
        "name": "فراس حمادة",
        "role": "فراس حمادة",
        "photo": "/assets/media/a3e35b8c68ce65eb08ddeaba818b3dfa.png"
      },
      {
        "name": "آية مفتي",
        "role": "آية مفتي",
        "photo": "/assets/media/f6b5772006217aef47ed1fe8bf27e669.png"
      },
      {
        "name": "أسامة حاتم",
        "role": "أسامة حاتم",
        "photo": "/assets/media/ff3f4012d4a90be4ca114e3f5e99bf5f.png"
      },
      {
        "name": "مصطفى قر",
        "role": "مصطفى قر",
        "photo": "/assets/media/e48b6519a069358608e01839fed600b5.png"
      },
      {
        "name": "عبدالرزاق عكرمة",
        "role": "عبدالرزاق عكرمة",
        "photo": "/assets/media/cfa397589259cf86f0502f0eeea977e5.png"
      }
    ]
  },
  {
    "id": "dept-3",
    "titleAr": "فريق التصميم والإبداع",
    "titleEn": "فريق التصميم والإبداع",
    "members": [
      {
        "name": "أنس حسناوي",
        "role": "Anas Hasnawi",
        "photo": "/assets/media/4b383d6bba31a1c4d6ef9e845e39413a.png"
      },
      {
        "name": "أنس الجبّان",
        "role": "أنس الجبّان",
        "photo": "/assets/media/4ff65d83b545e8562ece063272d585c3.png"
      },
      {
        "name": "لبنى عبدالمجيد",
        "role": "لبنى عبدالمجيد",
        "photo": "/assets/media/5e265a0111a06b2b4d03df50a4956070.png"
      },
      {
        "name": "اسماعيل وانلي",
        "role": "اسماعيل وانلي",
        "photo": "/assets/media/a1e3ea118d4205ae0a39a1194531b72d.png"
      },
      {
        "name": "حمزة عثمان",
        "role": "حمزة عثمان",
        "photo": "/assets/media/6bc5a0f1b30fb38fd3d5b985bed15e18.png"
      },
      {
        "name": "فراس حجَّار",
        "role": "فراس حجَّار",
        "photo": "/assets/media/083cfe8b6f4c800b07a6a21f51ad8f5f.png"
      },
      {
        "name": "عبدالغفور المرزوق",
        "role": "عبدالغفور المرزوق",
        "photo": "/assets/media/e48017279d56aa8bc3fecc1de75ef71f.png"
      },
      {
        "name": "عروة أمين",
        "role": "عروة أمين",
        "photo": "/assets/media/bfaa3c922329c520bcfb8e8a7d942437.png"
      },
      {
        "name": "مهند الرحمة",
        "role": "مهند الرحمة",
        "photo": "/assets/media/b8406f5218bc7e42fe0453ca508e8904.png"
      },
      {
        "name": "نور السوادي",
        "role": "نور السوادي",
        "photo": "/assets/media/db6d3395b21e6812a6a1725007d26bcb.png"
      },
      {
        "name": "يسر قباني",
        "role": "يسر قباني",
        "photo": "/assets/media/0f7f7132d6c5bb4e8a02f7a9b9aa8eb4.jpg"
      },
      {
        "name": "يوسف محلول",
        "role": "يوسف محلول",
        "photo": "/assets/media/0b7c3520eed7b7a68d69522c0b1030bb.png"
      }
    ]
  },
  {
    "id": "dept-4",
    "titleAr": "فريق الخط العربي والتايبوغرافي",
    "titleEn": "فريق الخط العربي والتايبوغرافي",
    "members": [
      {
        "name": "نضال ابراهيم آغا",
        "role": "نضال ابراهيم آغا",
        "photo": "/assets/media/a431b5769ffc1447801806b5e11693e3.png"
      },
      {
        "name": "مؤمل عكرمة",
        "role": "مؤمل عكرمة",
        "photo": "/assets/media/74a5df3ca3425943f9b81dd64209dff0.png"
      },
      {
        "name": "نور طليمات",
        "role": "نور طليمات",
        "photo": "/assets/media/2d302a59409578a924ba86ec9979b26c.png"
      }
    ]
  },
  {
    "id": "dept-5",
    "titleAr": "فريق الثري دي",
    "titleEn": "فريق الثري دي",
    "members": [
      {
        "name": "أندريه لحام",
        "role": "أندريه لحام",
        "photo": "/assets/media/69ad21ae0b8fcbc4d0fb45d3679ed387.png"
      },
      {
        "name": "عبدالله سلواية",
        "role": "عبدالله سلواية",
        "photo": "/assets/media/f956d976c09471c5a7c63a9e1eb5f227.png"
      }
    ]
  },
  {
    "id": "dept-6",
    "titleAr": "فريق الموشن والفيلم",
    "titleEn": "فريق الموشن والفيلم",
    "members": [
      {
        "name": "عمار دعيمس",
        "role": "عمار دعيمس",
        "photo": "/assets/media/2d9d6d421db029f5763778fe49461424.png"
      },
      {
        "name": "معاذ حمامي",
        "role": "معاذ حمامي",
        "photo": "/assets/media/ccf3d5a4139dc41cb41394ccb5b445d2.jpg"
      },
      {
        "name": "مالك حمامي",
        "role": "مالك حمامي",
        "photo": "/assets/media/f4f8a76360dfb75d22897171136717b0.jpg"
      },
      {
        "name": "عبادة حمامي",
        "role": "عبادة حمامي",
        "photo": "/assets/media/fa8dce33cc22229588c8dc8bfc871d3c.jpg"
      },
      {
        "name": "مجد حمامي",
        "role": "مجد حمامي",
        "photo": "/assets/media/44d59410f940f2f8dc44a0a33287c511.jpg"
      }
    ]
  },
  {
    "id": "dept-7",
    "titleAr": "فريق البرمجة",
    "titleEn": "فريق البرمجة",
    "members": [
      {
        "name": "محمد جركس",
        "role": "Mohammed Jarkas",
        "photo": "/assets/media/31c4fdf5d62f733379a978006092a597.png"
      },
      {
        "name": "محمد الباش",
        "role": "Mohammed Al Bash",
        "photo": "/assets/media/280ef4637a6848113cc00efdbaccad7c.png"
      },
      {
        "name": "أحمد طالو العلبي",
        "role": "أحمد طالو العلبي",
        "photo": "/assets/media/1c3148ad6721ae4a161c1c1f196ef077.jpg"
      }
    ]
  },
  {
    "id": "dept-8",
    "titleAr": "الصوت و التعليق الصوتي",
    "titleEn": "الصوت و التعليق الصوتي",
    "members": [
      {
        "name": "مهند المنصور",
        "role": "مهند المنصور",
        "photo": "/assets/media/89133bc23984286b11b0502ffee6d1e5.jpg"
      },
      {
        "name": "دياب ميقري",
        "role": "دياب ميقري",
        "photo": "/assets/media/78458a48b976bedf2be41d3049503de0.jpg"
      }
    ]
  }
];
