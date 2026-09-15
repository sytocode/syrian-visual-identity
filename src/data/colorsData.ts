export interface ColorInfo {
  hex: string;
  hsl: string;
  cmyk: string;
  oklch: string;
  textColor: 'white' | 'black';
  nameAr?: string;
  nameEn?: string;
}

export interface PaletteGroup {
  id: string;
  nameEn: string;
  nameAr: string;
  descriptionAr: string;
  descriptionEn: string;
  colors: ColorInfo[];
}

export const brandPalettes: PaletteGroup[] = [
  {
    id: 'forest',
    nameEn: 'Forest (الأخضر الغابي)',
    nameAr: 'الأخضر الغابي (Forest)',
    descriptionAr: 'يرمز إلى الطبيعة والخصوبة والتجدد والأمل في مستقبل سوريا الأخضر.',
    descriptionEn: 'Symbolizes nature, fertility, renewal, and hope for a vibrant Syrian future.',
    colors: [
      {
        hex: '#428177',
        hsl: 'hsl(171 32% 38%)',
        cmyk: 'C76% M32% Y54% K10%',
        oklch: 'oklch(0.536 0.061 189.6)',
        textColor: 'white',
        nameAr: 'أخضر مائل (Teal Sage)',
        nameEn: 'Teal Sage'
      },
      {
        hex: '#054239',
        hsl: 'hsl(171 86% 14%)',
        cmyk: 'C89% M49% Y70% K50%',
        oklch: 'oklch(0.334 0.057 186.2)',
        textColor: 'white',
        nameAr: 'أخضر عميق (Deep Forest)',
        nameEn: 'Deep Forest'
      },
      {
        hex: '#002623',
        hsl: 'hsl(173 100% 7%)',
        cmyk: 'C87% M59% Y68% K71%',
        oklch: 'oklch(0.208 0.038 184.5)',
        textColor: 'white',
        nameAr: 'أخضر غامق جداً (Midnight Pine)',
        nameEn: 'Midnight Pine'
      }
    ]
  },
  {
    id: 'golden-wheat',
    nameEn: 'Golden Wheat (قمح ذهبي)',
    nameAr: 'قمح ذهبي (Golden Wheat)',
    descriptionAr: 'مستوحى من سنابل القمح وحضارة حوران والجزيرة وأصالة الأرض.',
    descriptionEn: 'Inspired by golden wheat fields, fertile plains, and ancient agricultural heritage.',
    colors: [
      {
        hex: '#edebe0',
        hsl: 'hsl(49 26% 90%)',
        cmyk: 'C6% M9% Y19% K0%',
        oklch: 'oklch(0.938 0.010 95.8)',
        textColor: 'black',
        nameAr: 'رملي فاتح (Sand Linen)',
        nameEn: 'Sand Linen'
      },
      {
        hex: '#b9a779',
        hsl: 'hsl(43 32% 60%)',
        cmyk: 'C20% M29% Y52% K7%',
        oklch: 'oklch(0.722 0.063 88.5)',
        textColor: 'black',
        nameAr: 'ذهبي معتدل (Muted Gold)',
        nameEn: 'Muted Gold'
      },
      {
        hex: '#988561',
        hsl: 'hsl(40 22% 49%)',
        cmyk: 'C39% M46% Y67% K20%',
        oklch: 'oklch(0.598 0.058 87.2)',
        textColor: 'white',
        nameAr: 'قمحي غني (Rich Wheat)',
        nameEn: 'Rich Wheat'
      }
    ]
  },
  {
    id: 'deep-umber',
    nameEn: 'Deep Umber (عنبري وأحمر دمشقي)',
    nameAr: 'عنبري وأحمر دمشقي (Deep Umber)',
    descriptionAr: 'يستحضر الحجارة البازلتية، الفخار السوري، والعراقة التاريخية.',
    descriptionEn: 'Evokes ancient stone, Syrian pottery, warm earth, and steadfast historical depth.',
    colors: [
      {
        hex: '#6b1f2a',
        hsl: 'hsl(351 55% 27%)',
        cmyk: 'C35% M92% Y72% K46%',
        oklch: 'oklch(0.354 0.108 20.7)',
        textColor: 'white',
        nameAr: 'قرميدي عميق (Crimson Earth)',
        nameEn: 'Crimson Earth'
      },
      {
        hex: '#4a151e',
        hsl: 'hsl(350 56% 19%)',
        cmyk: 'C44% M86% Y68% K65%',
        oklch: 'oklch(0.279 0.083 19.5)',
        textColor: 'white',
        nameAr: 'عنابي داكن (Dark Maroon)',
        nameEn: 'Dark Maroon'
      },
      {
        hex: '#260f14',
        hsl: 'hsl(348 43% 10%)',
        cmyk: 'C60% M75% Y64% K79%',
        oklch: 'oklch(0.183 0.039 18.2)',
        textColor: 'white',
        nameAr: 'أسود محمر (Ebony Umber)',
        nameEn: 'Ebony Umber'
      }
    ]
  },
  {
    id: 'charcoal',
    nameEn: 'Charcoal & Off-White (فحمي وأبيض ناصع)',
    nameAr: 'فحمي وأبيض ناصع (Charcoal & White)',
    descriptionAr: 'الألوان الأساسية للنصوص والتباين ووضوح الخطوط والعناصر التيبوغرافية.',
    descriptionEn: 'Foundational tones for typography, high contrast, and crisp digital legibility.',
    colors: [
      {
        hex: '#ffffff',
        hsl: 'hsl(0 0% 100%)',
        cmyk: 'C0% M0% Y0% K0%',
        oklch: 'oklch(1 0 0)',
        textColor: 'black',
        nameAr: 'أبيض ناصع (Pure White)',
        nameEn: 'Pure White'
      },
      {
        hex: '#3d3a3b',
        hsl: 'hsl(340 3% 24%)',
        cmyk: 'C67% M53% Y60% K50%',
        oklch: 'oklch(0.344 0.005 348.0)',
        textColor: 'white',
        nameAr: 'رمادي حجري (Slate Grey)',
        nameEn: 'Slate Grey'
      },
      {
        hex: '#161616',
        hsl: 'hsl(0 0% 9%)',
        cmyk: 'C73% M67% Y65% K80%',
        oklch: 'oklch(0.185 0 0)',
        textColor: 'white',
        nameAr: 'فحمي ملكي (Charcoal Black)',
        nameEn: 'Charcoal Black'
      }
    ]
  }
];

export const flagColors = {
  green: '#007a3d',
  white: '#ffffff',
  black: '#161616',
  red: '#ce1126'
};
