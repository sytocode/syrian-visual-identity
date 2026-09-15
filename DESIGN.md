# Syrian Visual Identity — Official Design System (DESIGN.md)
# الدليل الإرشادي الشامل للهوية البصرية — الجمهورية العربية السورية

> **Version**: 1.0.0  
> **Authority**: Syrian Arab Republic (الجمهورية العربية السورية)  
> **Repository**: [https://github.com/sytocode/syrian-visual-identity](https://github.com/sytocode/syrian-visual-identity)  
> **Public Portal**: [https://sytocode.github.io/syrian-visual-identity/](https://sytocode.github.io/syrian-visual-identity/)  
> **License**: Creative Commons Attribution 4.0 International (CC-BY-4.0)

---

## 📑 Table of Contents (فهرس المحتويات)
1. [Brand Philosophy & Mission (فلسفة الهوية والرسالة)](#1-brand-philosophy--mission)
2. [Emblem Anatomy & Geometry (هندسة وبناء الشعار)](#2-emblem-anatomy--geometry)
3. [Constitutional Syrian Flag Standards (معايير العلم الدستوري)](#3-constitutional-syrian-flag-standards)
4. [Master Color System & Accessibility (نظام الألوان الشامل والتباين)](#4-master-color-system--accessibility)
5. [Typography & Calligraphy (التايبوغرافي والخطوط)](#5-typography--calligraphy)
6. [Architectural Heritage Patterns (الأنماط والزخارف التراثية)](#6-architectural-heritage-patterns)
7. [14 Governorate Architectural Emblems (رموز ومعالم المحافظات)](#7-14-governorate-architectural-emblems)
8. [Design Tokens & Engineering Presets (رموز التصميم والبرمجة)](#8-design-tokens--engineering-presets)
9. [Component Guidelines & Do's & Don'ts (معايير المكونات والمحظورات)](#9-component-guidelines--dos--donts)

---

## 1. Brand Philosophy & Mission

### 1.1 Brand Positioning: جامعة الشمل (The Unifier)
The Syrian Visual Identity represents an ancient nation reborn through dignified unity, cultural reconciliation, and universal belonging. It transcends divisions and honors over four millennia of civilization, craftsmanship, and resilience.

- **Official Title**: Syrian Arab Republic (الجمهورية العربية السورية)
- **National Slogan**: *انتماءٌ راسخ يتجاوز الحدود* (Steadfast Belonging Beyond Borders)
- **Core Positioning**: *سوريا: جامعة الشمل* (Syria: The Unifier)
- **Central Concept**: *سوريا هي القلب* (Syria is the Heart) — geographically and culturally at the crossroads of the Mediterranean, Mesopotamia, the Levant, and the Arab world.

### 1.2 Strategic Pillars
1. **Human-Centered Approach**: Elevating the Syrian citizen, human dignity, and heritage above transient political regimes.
2. **National Pride & Diaspora Inclusion**: Engaging 10+ million Syrians abroad with an open, modern visual identity.
3. **Harmonious Diversity**: Unifying mountain peaks, coastal olive groves, the Euphrates basin, and historic desert trade routes into a cohesive palette.
4. **Digital & Global Standard**: Creating a world-class vector and tokenized design system ready for web, mobile, AI coding agents, and physical civic infrastructure.

---

## 2. Emblem Anatomy & Geometry

The official emblem combines mathematical Islamic geometry with modern organic warmth.

```
       ▲ Top Star Point (Umayyad Symmetry)
    ┌───┴───┐
 ◄──┤   ♥   ├──► 8-Pointed Outer Star
    └───┬───┘    Central Beating Heart (Red Umber)
        ▼ Converging Paths & Lines
```

### 2.1 Symbolic Components
1. **The Eight-Pointed Geometric Star (النجمة الثمانية)**:
   - Rooted in Syrian, Umayyad, and Levantine mosaic traditions.
   - Formed by two overlapping squares rotated at 45 degrees, expressing balance, justice, and order.
2. **The Central Beating Heart (القلب النابض في المركز)**:
   - Nested inside the star's central circle.
   - Colored in Deep Damascene Umber (`#6B1F2A`).
   - Represents Syria as the emotional and cultural core of the Levant.
3. **Converging Paths (تلاقي المسارات والألوان)**:
   - Fine geometric linework that draws inward from the eight outer vertices toward the core.
   - Symbolizes the return and meeting of all Syrians regardless of geography.

### 2.2 Clear Space & Margin Protection
- **Safe Clearance Zone**: The emblem must be surrounded by a minimum buffer zone of **$X$**, where $X = 20\%$ of the total width/height of the emblem.
- No typography, interface buttons, or competing graphic elements may infringe upon this clearance buffer.

```
┌────────────────────────┐
│        [ X margin ]    │
│    ┌──────────────┐    │
│    │              │    │
│[X] │    EMBLEM    │ [X]│
│    │              │    │
│    └──────────────┘    │
│        [ X margin ]    │
└────────────────────────┘
```

### 2.3 Minimum Reproduction Sizes
- **Digital / Web**: Minimum $32 \times 32\text{ px}$ (for app icons and badges: minimum $48 \times 48\text{ px}$).
- **Print**: Minimum $15\text{ mm}$ width for the icon mark; minimum $25\text{ mm}$ width for the full horizontal lockup.

### 2.4 Official Lockup Configurations
- **Primary Horizontal**: Emblem mark positioned to the right of Arabic text (or left of English text) with baseline vertical centering.
- **Vertical / Centered**: Emblem positioned directly above centered typography, ideal for banners, certificates, and diplomatic covers.
- **Emblem Mark Only**: Standalone circular/square badge for digital UI avatars, favicons, and app icons.

---

## 3. Constitutional Syrian Flag Standards

The Flag of the Syrian Arab Republic is a constitutional symbol whose mathematical construction is strictly regulated.

```
┌─────────────────────────────────────────────────────────────┐
│  GREEN STRIPE (#007A3D)                          [1/3 H]    │
├─────────────────────────────────────────────────────────────┤
│  WHITE STRIPE (#FFFFFF) with 3 RED STARS (#CE1126) [1/3 H]  │
│         ★ (25%)             ★ (50%)             ★ (75%)     │
├─────────────────────────────────────────────────────────────┤
│  BLACK STRIPE (#000000)                          [1/3 H]    │
└─────────────────────────────────────────────────────────────┘
  ◄────────────────────────── 3 W ──────────────────────────►
```

### 3.1 Dimensions & Proportions
- **Aspect Ratio**: Exactly **3:2** (Width to Height).
- **Horizontal Stripes**: Three equal horizontal stripes, each occupying exactly **$1/3$** of the total vertical height ($33.33\%$).
  - **Top Stripe**: Syrian Green (`#007A3D`).
  - **Middle Stripe**: Syrian White (`#FFFFFF`).
  - **Bottom Stripe**: Syrian Black (`#000000`).

### 3.2 The Three Red Stars
- **Count**: Exactly **3** five-pointed symmetrical stars.
- **Color**: Constitutional Red (`#CE1126`).
- **Placement**:
  - Centered vertically along the horizontal midline of the white stripe ($Y = 50\%$ of flag height).
  - Positioned along the horizontal axis at:
    - First Star: **$25\%$** of flag width ($X = 0.25 W$).
    - Second (Center) Star: **$50\%$** of flag width ($X = 0.50 W$).
    - Third Star: **$75\%$** of flag width ($X = 0.75 W$).
- **Orientation**: One vertex of each star points **strictly vertical upright** ($90^\circ$ toward the green stripe). Stars must **never** be tilted or rotated.

### 3.3 Flag Vector SVG Specification
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" width="100%" height="100%">
  <rect width="900" height="200" fill="#007A3D" />
  <rect y="200" width="900" height="200" fill="#FFFFFF" />
  <rect y="400" width="900" height="200" fill="#000000" />
  <g fill="#CE1126">
    <!-- Star 1: X=225, Y=300 -->
    <polygon points="225,260 236.7,296.2 274.9,296.2 244,318.6 255.8,354.8 225,332.4 194.2,354.8 206,318.6 175.1,296.2 213.3,296.2" />
    <!-- Star 2: X=450, Y=300 -->
    <polygon points="450,260 461.7,296.2 499.9,296.2 469,318.6 480.8,354.8 450,332.4 419.2,354.8 431,318.6 400.1,296.2 438.3,296.2" />
    <!-- Star 3: X=675, Y=300 -->
    <polygon points="675,260 686.7,296.2 724.9,296.2 694,318.6 705.8,354.8 675,332.4 644.2,354.8 656,318.6 625.1,296.2 663.3,296.2" />
  </g>
</svg>
```

---

## 4. Master Color System & Accessibility

The palette is derived directly from Syrian topography, natural pigments, olive groves, wheat fields, and Levantine architectural masonry.

### 4.1 Primary Brand Palette: Forest Green (الأخضر الغابي)
Represents life, fertility, the Barada valley, and enduring renewal.

| Token | HEX | RGB | CMYK | OKLCH | Pantone | Role |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `syria-forest-main` | `#054239` | `5, 66, 57` | `89, 49, 70, 50` | `oklch(0.334 0.057 186.2)` | 567 C | Primary brand backdrop, buttons, navbars |
| `syria-forest-light` | `#428177` | `66, 129, 119` | `76, 32, 54, 10` | `oklch(0.536 0.061 189.6)` | 5483 C | Hover states, secondary borders |
| `syria-forest-dark` | `#002623` | `0, 38, 35` | `87, 59, 68, 71` | `oklch(0.208 0.038 184.5)` | 560 C | Deep headers, footers, dark backgrounds |

### 4.2 Secondary Brand Palette: Golden Wheat (القمح الذهبي)
Symbolizes historical harvest, sunlit Levantine plains, and cultural nobility.

| Token | HEX | RGB | CMYK | OKLCH | Pantone | Role |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `syria-wheat-main` | `#B9A779` | `185, 167, 121` | `28, 28, 62, 1` | `oklch(0.722 0.069 88.5)` | 7502 C | Badges, gold accents, active tab borders |
| `syria-wheat-muted` | `#988561` | `152, 133, 97` | `37, 39, 70, 11` | `oklch(0.609 0.061 85.9)` | 7504 C | Subtitles, icon fills, secondary text |
| `syria-wheat-cream` | `#EDEBE0` | `237, 235, 224` | `6, 5, 12, 0` | `oklch(0.933 0.015 97.3)` | 7527 C | Warm cards, subtle tag backgrounds |

### 4.3 Accent Palette: Deep Umber (العنبري الدمشقي)
Drawn from Damascus brocade textiles, Roman brick, and ancient pottery.

| Token | HEX | RGB | CMYK | OKLCH | Role |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `syria-umber-base` | `#6B1F2A` | `107, 31, 42` | `35, 93, 73, 44` | `oklch(0.352 0.117 19.3)` | Center heart emblem, notifications, seal accents |
| `syria-umber-deep` | `#4A151E` | `74, 21, 30` | `41, 95, 71, 62` | `oklch(0.269 0.089 19.4)` | High-contrast accent on dark surfaces |
| `syria-umber-dark` | `#260F14` | `38, 15, 20` | `57, 85, 72, 80` | `oklch(0.181 0.046 19.5)` | Deep shadow borders |

### 4.4 Constitutional Flag Colors
| Name | HEX | RGB | CMYK | Standard Reference |
| :--- | :--- | :--- | :--- | :--- |
| **Flag Green** | `#007A3D` | `0, 122, 61` | `100, 0, 86, 20` | Pantone 355 C / RAL 6024 |
| **Flag White** | `#FFFFFF` | `255, 255, 255` | `0, 0, 0, 0` | Safe White |
| **Flag Black** | `#000000` | `0, 0, 0` | `0, 0, 0, 100` | Process Black |
| **Flag Stars Red** | `#CE1126` | `206, 17, 38` | `0, 100, 81, 4` | Pantone 485 C / RAL 3020 |

### 4.5 Neutral Canvas & Dark Mode Matrix
| Surface / Role | Light Mode | Dark Mode | Contrast vs Text |
| :--- | :--- | :--- | :--- |
| **Canvas Background** | `#FDFBF7` (Parchment) | `#141414` (Deep Charcoal) | $> 14:1$ (AAA Pass) |
| **Surface Card** | `#FFFFFF` | `#1C1C1C` | $> 12:1$ (AAA Pass) |
| **Text Primary** | `#161616` | `#FDFBF7` | $> 14:1$ (AAA Pass) |
| **Text Secondary** | `#3D3A3B` | `#EDEBE0` | $> 7:1$ (AA Pass) |
| **Border / Divider** | `#E5E0D8` | `#2E2E2E` | Structural non-text |

---

## 5. Typography & Calligraphy

Typography bridges millennia of Syrian epigraphy with contemporary digital clarity.

```
  ┌────────────────────────────────────────────────────────┐
  │  حيّاكم الله — Hayyakum Allah (Primary Arabic Headline)│
  │  قمرة — Qomra (Official Identity & Editorial Text)     │
  │  system-ui, Segoe UI (Clean Digital Web Hierarchy)     │
  └────────────────────────────────────────────────────────┘
```

### 5.1 Primary Display Typeface: حيّاكم الله (Hayyakum Allah)
- **Classification**: Contemporary Geometric Kufic with classical proportions.
- **Origin**: Syrian national initiative typeface.
- **Embedded Weights**:
  - `Light (300)`: Subtitles, elegant captions, quotes.
  - `Regular (400)`: Secondary headers, navigation labels.
  - `Medium (500)`: Standard UI buttons, card titles.
  - `Bold (700)`: Main hero headers, page titles, institutional signage.
- **Web Font Assets**: Pre-bundled at `/assets/fonts/HayyakumAllah-{Weight}.woff2`.

### 5.2 Official Identity Font: قمرة (Qomra)
- **Designer**: iWantype Studio.
- **Usage**: Official editorial publications, identity body text, state certificates.
- **Characteristics**: Distinctive diamond diacritic dots, fluid baseline ligature handling.

### 5.3 Typographic Scale & Line Heights
Arabic glyphs with ascenders and descenders require generous vertical line-heights to prevent collision and preserve legibility:

| Level | Size (Desktop) | Size (Mobile) | Line Height | Weight | Font Family |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display H1** | $48\text{ px}$ ($3\text{ rem}$) | $32\text{ px}$ ($2\text{ rem}$) | $1.25$ | Bold (700) | `HayyakumAllah` |
| **Section H2** | $32\text{ px}$ ($2\text{ rem}$) | $24\text{ px}$ ($1.5\text{ rem}$) | $1.35$ | Bold (700) | `HayyakumAllah` |
| **Card H3** | $20\text{ px}$ ($1.25\text{ rem}$) | $18\text{ px}$ ($1.125\text{ rem}$) | $1.4$ | Medium (500) | `HayyakumAllah` |
| **Body Lead** | $18\text{ px}$ ($1.125\text{ rem}$) | $16\text{ px}$ ($1\text{ rem}$) | $1.7$ | Regular (400) | `system-ui, Segoe UI` |
| **Body Text** | $15\text{ px}$ ($0.9375\text{ rem}$) | $14\text{ px}$ ($0.875\text{ rem}$) | $1.65$ | Regular (400) | `system-ui, Segoe UI` |
| **Caption / Tag** | $12\text{ px}$ ($0.75\text{ rem}$) | $11\text{ px}$ ($0.6875\text{ rem}$) | $1.5$ | Medium (500) | `system-ui, Segoe UI` |

---

## 6. Architectural Heritage Patterns

The visual identity incorporates four official geometric patterns derived from Syrian monuments:

1. **Umayyad Geometric Motif (النمط الهندسي الأموي)**:
   - Inspired by the open courtyards and stone lattices of the Umayyad Mosque in Damascus.
   - Characterized by alternating 8-fold star intersections and continuous interlaced borders.
   - Primary usage: Institutional letterheads, subtle page backgrounds, decorative header borders.
2. **Damascene Octagonal Symmetry (التناظر النجمي الدمشقي)**:
   - Derived from Damascene ajami wooden ceilings and mother-of-pearl marquetry.
   - Rotational octagonal radial symmetry.
   - Primary usage: Badges, cultural certificates, event invitations.
3. **Aleppo Citadel Merlon & Ramparts (تسنيم قلاع حلب)**:
   - Derived from the crenelated stone battlements and monumental gateway of Aleppo Citadel.
   - Angular stepped chevron rhythms.
   - Primary usage: Divider bands, footer crown borders, structural banners.
4. **Levantine Floral Arabesque (الزخرفة النباتية الشامية)**:
   - Stylized olive branch, jasmine, and acanthus leaf vines.
   - Continuous organic growth reflecting community endurance.

---

## 7. 14 Governorate Architectural Emblems

Created by Syrian designer **Walaa** (`@walaa_akdesign`), each of Syria's 14 governorates is represented by an official architectural emblem:

| Governorate | Arabic | Architectural Landmark | Historical Symbolism | Vector File |
| :--- | :--- | :--- | :--- | :--- |
| **Damascus** | دمشق | Damascene Sword (السيف الدمشقي) | Ancient capital, Umayyad glory, steadfast pride | `damascus-sword.svg` |
| **Rif Dimashq** | ريف دمشق | Ghouta of Rif Dimashq (الغوطة) | Fertile green oasis, historic mountain monasteries | `rif-dimashq-ghouta.svg` |
| **Aleppo** | حلب | Aleppo Citadel (قلعة حلب) | Impregnable medieval fortress, Silk Road hub | `aleppo-citadel.svg` |
| **Homs** | حمص | Homs Clock Tower (ساعة حمص الجديدة) | Geographical heart of Syria, crossroads of trade | `homs-clock.svg` |
| **Hama** | حماة | Norias of Hama (نواعير حماة) | Ancient water-lifting wooden wheels on the Orontes | `hama-norias.svg` |
| **Latakia** | اللاذقية | Triumphal Arch of Septimius Severus | Mediterranean gateway, Phoenician and Roman port | `latakia-arch.svg` |
| **Tartus** | طرطوس | Arwad Island Fortress (جزيرة أرواد) | Syria's historic inhabited island and maritime cradle | `tartus-arwad.svg` |
| **Idlib** | إدلب | Ruweiha / Dead Cities (رويحة والمدن المنسية) | Byzantine basilicas and ancient olive-oil heritage | `idlib-ruweiha.svg` |
| **Deir ez-Zor** | دير الزور | Suspension Bridge (الجسر المعلق) | Iconic French-mandate suspension span over the Euphrates | `deir-ez-zor-bridge.svg` |
| **Raqqa** | الرقة | Baghdad Gate (باب بغداد) | Abbasid brick gateway, ancient city walls | `raqqa-baghdad-gate.svg` |
| **Hasakah** | الحسكة | Ain Diwar Bridge (جسر عين ديوار) | Roman stone bridge at the Tigris tripoint boundary | `hasakah-bridge.svg` |
| **Daraa** | درعا | Al-Omari Mosque (المسجد العمري) | Early Islamic architecture in the fertile Hauran plain | `daraa-omari-mosque.svg` |
| **As-Suwayda** | السويداء | Qanawat Roman Temples (معابد قنوات) | Basalt colonnades of Dionysus in Mount Arab | `suwayda-qanawat.svg` |
| **Quneitra** | القنيطرة | Beit Saida / Golan Heights (بيت صيدا) | The Golan heights, Syrian resilience and memory | `quneitra-saida.svg` |

---

## 8. Design Tokens & Engineering Presets

### 8.1 CSS Custom Properties (`tokens.css`)
```css
:root {
  /* Primary */
  --syria-forest-main: #054239;
  --syria-forest-light: #428177;
  --syria-forest-dark: #002623;

  /* Secondary */
  --syria-wheat-main: #b9a779;
  --syria-wheat-muted: #988561;
  --syria-wheat-cream: #edebe0;

  /* Accent */
  --syria-umber-base: #6b1f2a;
  --syria-umber-deep: #4a151e;

  /* Constitutional Flag */
  --syria-flag-green: #007a3d;
  --syria-flag-white: #ffffff;
  --syria-flag-black: #000000;
  --syria-flag-red-star: #ce1126;

  /* Surfaces */
  --syria-surface-canvas: #fdfbf7;
  --syria-surface-card: #ffffff;
  --syria-text-primary: #161616;
  --syria-text-secondary: #3d3a3b;
  --syria-border: #e5e0d8;

  /* Typography */
  --font-syria-arabic: 'HayyakumAllah', system-ui, -apple-system, sans-serif;
}
```

### 8.2 Tailwind CSS Configuration (`syria-preset.js`)
```javascript
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
          flag: {
            green: '#007a3d',
            white: '#ffffff',
            black: '#000000',
            red: '#ce1126',
          }
        }
      },
      fontFamily: {
        hayyakum: ['HayyakumAllah', 'system-ui', 'sans-serif'],
      }
    }
  }
};
```

---

## 9. Component Guidelines & Do's & Don'ts

### 9.1 Buttons & Interactive Controls
- **Primary Action**: Solid `bg-[#054239]` text `#ffffff` with hover `bg-[#002623]` or subtle gold border `border-[#b9a779]/40`.
- **Secondary Action**: Warm parchment `bg-[#edebe0]` text `#054239` with hover `bg-white`.
- **Accent Badge**: Subtle gold fill `bg-[#b9a779]/20` with text `#b9a779` or `#988561`.
- **Corner Radius**: Standardized at `rounded-xl` ($12\text{ px}$) or `rounded-2xl` ($16\text{ px}$). Circular buttons for icon actions only.

### 9.2 RTL (Right-to-Left) Layout Rules
- The primary language of the identity is **Arabic** (`dir="rtl"`).
- In Arabic mode:
  - Navigation starts from the right; institutional emblem is anchored on the top-right.
  - Icons that indicate forward direction (arrows, chevrons) must mirror along the horizontal axis.
  - Symmetrical emblems (star, heart, flag) must maintain correct orientation without inadvertent flipping.

### 9.3 Prohibited Usages (ممارسات محظورة)

```
  [ ❌ PROHIBITED ]                             [ ✅ CORRECT ]
  • Distorting or non-uniform scaling           • Proportional 1:1 scaling
  • Replacing Forest Green with bright neon      • Official #054239 Forest Green
  • Tilting the Syrian Flag stars               • Upright pointing star vertices
  • Placing emblem on low-contrast images        • Using backing card or white badge
  • Altering the 3:2 flag ratio to 2:1 or 1:1   • Constitutional strict 3:2 ratio
```

1. **NO Geometric Distortion**: Never stretch, squeeze, skew, or rotate the emblem non-orthogonally.
2. **NO Arbitrary Color Replacement**: Do not substitute bright emerald greens (`#00FF00`) or saturated lemon yellows for the official Forest Green and Golden Wheat.
3. **NO Flag Alteration**: The Syrian flag must always maintain its 3:2 ratio and three upright five-pointed red stars centered horizontally in the white stripe.
4. **NO Low-Contrast Overlays**: Do not position the dark green emblem over busy photographic backgrounds without a protective badge or contrast backing.

---

## 10. Summary & Digital Distribution

The complete package containing 125 original vector assets, scalable SVG emblems, color guides, and fonts is freely distributed:

- **Web Portal**: [https://sytocode.github.io/syrian-visual-identity/](https://sytocode.github.io/syrian-visual-identity/)
- **Full LLM Spec**: [https://sytocode.github.io/syrian-visual-identity/llms-full.txt](https://sytocode.github.io/syrian-visual-identity/llms-full.txt)
- **Design Tokens (CSS)**: [https://sytocode.github.io/syrian-visual-identity/tokens.css](https://sytocode.github.io/syrian-visual-identity/tokens.css)
- **Design Tokens (JSON)**: [https://sytocode.github.io/syrian-visual-identity/tokens.json](https://sytocode.github.io/syrian-visual-identity/tokens.json)
- **Tailwind Preset**: [https://sytocode.github.io/syrian-visual-identity/syria-preset.js](https://sytocode.github.io/syrian-visual-identity/syria-preset.js)

*حُفظت هذه الهوية ووثّقت لتبقى إرثاً وطنياً حياً متاحاً للجميع.*
