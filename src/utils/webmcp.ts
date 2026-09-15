/**
 * Syrian Visual Identity - WebMCP (Web Model Context Protocol) Engine
 * Implements W3C WebML Model Context Protocol & window.syrianIdentityMCP
 * Enables AI coding agents and browser extensions to introspect identity assets,
 * brand rules, color systems, and vector geometries.
 */

import { brandPalettes } from '../data/colorsData';
import { governorates } from '../data/governoratesData';
import { governorateSvgs } from '../data/governorateSvgs';
import { getAssetUrl } from './assets';

export interface WebMCPTool {
  name: string;
  description: string;
  parameters: {
    type: 'object';
    properties: Record<string, any>;
    required?: string[];
  };
  handler: (args: any) => Promise<any> | any;
}

// Constitutional Syrian Flag SVG snippet (Ratio 3:2, Green / White / Black with 3 Red 5-pointed Stars)
export const SYRIAN_FLAG_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" width="100%" height="100%">
  <rect width="900" height="200" fill="#007A3D" />
  <rect y="200" width="900" height="200" fill="#FFFFFF" />
  <rect y="400" width="900" height="200" fill="#000000" />
  <g fill="#CE1126" transform="translate(0, 0)">
    <!-- Left Star (centered at 225, 300) -->
    <polygon points="225,260 236.7,296.2 274.9,296.2 244,318.6 255.8,354.8 225,332.4 194.2,354.8 206,318.6 175.1,296.2 213.3,296.2" />
    <!-- Center Star (centered at 450, 300) -->
    <polygon points="450,260 461.7,296.2 499.9,296.2 469,318.6 480.8,354.8 450,332.4 419.2,354.8 431,318.6 400.1,296.2 438.3,296.2" />
    <!-- Right Star (centered at 675, 300) -->
    <polygon points="675,260 686.7,296.2 724.9,296.2 694,318.6 705.8,354.8 675,332.4 644.2,354.8 656,318.6 625.1,296.2 663.3,296.2" />
  </g>
</svg>`;

// Syrian Visual Identity 8-pointed Emblem Vector SVG
export const SYRIAN_EMBLEM_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
  <defs>
    <linearGradient id="syriaGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#b9a779" />
      <stop offset="100%" stop-color="#988561" />
    </linearGradient>
    <linearGradient id="syriaForestGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#428177" />
      <stop offset="100%" stop-color="#054239" />
    </linearGradient>
  </defs>
  <!-- Umayyad 8-pointed star base -->
  <g transform="translate(200, 200)">
    <rect x="-100" y="-100" width="200" height="200" rx="16" fill="url(#syriaForestGrad)" />
    <rect x="-100" y="-100" width="200" height="200" rx="16" fill="none" stroke="url(#syriaGoldGrad)" stroke-width="6" transform="rotate(45)" />
    <circle r="46" fill="#fdfbf7" />
    <!-- Central Beating Heart representing Syria -->
    <path d="M0 -15 C -20 -35 -40 -10 -20 15 L 0 35 L 20 15 C 40 -10 20 -35 0 -15 Z" fill="#6b1f2a" />
    <circle cx="-3" cy="-5" r="3" fill="#ffffff" opacity="0.6" />
  </g>
</svg>`;

export const webMCPTools: WebMCPTool[] = [
  {
    name: 'get_color_palette',
    description: 'Returns the Syrian Visual Identity official color palette with HEX, RGB, CMYK, OKLCH, and usage guidelines.',
    parameters: {
      type: 'object',
      properties: {
        category: {
          type: 'string',
          enum: ['all', 'forest', 'wheat', 'umber', 'flag', 'neutral'],
          default: 'all',
          description: 'Color category to filter by'
        }
      }
    },
    handler: (args?: { category?: string }) => {
      const cat = (args?.category || 'all').toLowerCase();
      
      const flagColors = {
        name: 'Constitutional Flag Colors',
        colors: [
          { name: 'Syrian Flag Green', hex: '#007A3D', pantone: '355 C', ral: '6024', usage: 'Top flag stripe' },
          { name: 'Syrian Flag White', hex: '#FFFFFF', pantone: 'Safe White', usage: 'Middle flag stripe' },
          { name: 'Syrian Flag Black', hex: '#000000', pantone: 'Process Black', usage: 'Bottom flag stripe' },
          { name: 'Syrian Flag Stars Red', hex: '#CE1126', pantone: '485 C', ral: '3020', usage: 'Three five-pointed stars' }
        ]
      };

      const neutrals = {
        name: 'Neutrals & Canvas',
        colors: [
          { name: 'Parchment Canvas Light', hex: '#FDFBF7', usage: 'Primary page background' },
          { name: 'Card Surface White', hex: '#FFFFFF', usage: 'Card surfaces in light mode' },
          { name: 'Charcoal Body Text', hex: '#161616', usage: 'Primary typography' },
          { name: 'Muted Text Secondary', hex: '#3D3A3B', usage: 'Secondary descriptions' },
          { name: 'Divider Border', hex: '#E5E0D8', usage: 'Card and container borders' }
        ]
      };

      if (cat === 'flag') return flagColors;
      if (cat === 'neutral') return neutrals;
      if (cat === 'forest' || cat === 'wheat' || cat === 'golden-wheat' || cat === 'umber') {
        const found = brandPalettes.filter(p => p.id.includes(cat) || p.nameEn.toLowerCase().includes(cat));
        return { palettes: found };
      }

      return {
        brandPalettes,
        flagColors,
        neutrals,
        cssVariablesUrl: 'https://sytocode.github.io/syrian-visual-identity/tokens.css',
        tokensJsonUrl: 'https://sytocode.github.io/syrian-visual-identity/tokens.json'
      };
    }
  },

  {
    name: 'get_logo',
    description: 'Returns Syrian visual identity emblem vectors, asset URLs, safety clearances, and inline SVG.',
    parameters: {
      type: 'object',
      properties: {
        variant: {
          type: 'string',
          enum: ['primary', 'horizontal', 'vertical', 'monochrome-white', 'monochrome-dark'],
          default: 'primary'
        },
        format: {
          type: 'string',
          enum: ['url', 'svg', 'both'],
          default: 'both'
        }
      }
    },
    handler: (args?: { variant?: string; format?: string }) => {
      const variant = args?.variant || 'primary';
      const format = args?.format || 'both';
      const baseUrl = 'https://sytocode.github.io/syrian-visual-identity';

      const result: any = {
        variant,
        brandTitleAr: 'الهوية البصرية السورية',
        brandTitleEn: 'Syrian Visual Identity',
        aspectRatio: '1:1',
        safeMargin: 'Minimum 20% clear space padding on all 4 sides',
        prohibitedModifications: [
          'Do NOT stretch, skew, or rotate the emblem non-orthogonally',
          'Do NOT alter the primary Forest Green (#054239) or Golden Wheat (#B9A779) shades',
          'Do NOT place on busy low-contrast photographic backgrounds without a backing badge'
        ]
      };

      if (format === 'url' || format === 'both') {
        result.assets = {
          svg: `${baseUrl}/assets/logo.svg`,
          png: `${baseUrl}/assets/logo.png`,
          monochromeWhiteSvg: `${baseUrl}/assets/logo-white.svg`
        };
      }

      if (format === 'svg' || format === 'both') {
        result.inlineSvg = SYRIAN_EMBLEM_SVG;
      }

      return result;
    }
  },

  {
    name: 'get_flag_specs',
    description: 'Returns Syrian constitutional flag dimensions (3:2 ratio), color pantones, star geometry, and inline SVG.',
    parameters: {
      type: 'object',
      properties: {
        include_svg: {
          type: 'boolean',
          default: true
        }
      }
    },
    handler: (args?: { include_svg?: boolean }) => {
      const includeSvg = args?.include_svg !== false;
      return {
        ratio: '3:2 (Width : Height)',
        proportions: {
          topStripe: { color: 'Green (#007A3D)', height: '1/3 of total height (33.33%)' },
          middleStripe: { color: 'White (#FFFFFF)', height: '1/3 of total height (33.33%)' },
          bottomStripe: { color: 'Black (#000000)', height: '1/3 of total height (33.33%)' }
        },
        stars: {
          count: 3,
          color: 'Red (#CE1126)',
          shape: 'Five-pointed symmetrical stars with top vertex pointing vertically upright',
          placement: 'Equally spaced horizontally along the center of the white middle band at 25%, 50%, and 75% width'
        },
        svg: includeSvg ? SYRIAN_FLAG_SVG : undefined
      };
    }
  },

  {
    name: 'get_governorate_landmark',
    description: 'Returns architectural emblem, historic landmark details, and vector SVG for any of the 14 Syrian governorates.',
    parameters: {
      type: 'object',
      properties: {
        governorate: {
          type: 'string',
          description: 'Name of the governorate in Arabic or English (e.g. دمشق, Damascus, حلب, Aleppo, حمص, Homs, اللاذقية, Latakia)'
        }
      },
      required: ['governorate']
    },
    handler: (args: { governorate: string }) => {
      if (!args || !args.governorate) {
        return {
          error: 'Please provide a governorate name.',
          availableGovernorates: governorates.map(g => `${g.nameAr} (${g.nameEn})`)
        };
      }

      const q = args.governorate.trim().toLowerCase();
      const match = governorates.find(g =>
        g.id.toLowerCase() === q ||
        g.nameAr.includes(q) ||
        g.nameEn.toLowerCase().includes(q) ||
        g.landmarkAr.includes(q) ||
        g.landmarkEn.toLowerCase().includes(q)
      );

      if (!match) {
        return {
          error: `Governorate '${args.governorate}' not found.`,
          availableGovernorates: governorates.map(g => `${g.nameAr} (${g.nameEn})`)
        };
      }

      const svgContent = governorateSvgs[match.svgFile] || '';
      return {
        id: match.id,
        nameAr: match.nameAr,
        nameEn: match.nameEn,
        capital: match.capital,
        landmarkAr: match.landmarkAr,
        landmarkEn: match.landmarkEn,
        descriptionAr: match.descriptionAr,
        descriptionEn: match.descriptionEn,
        svgFile: match.svgFile,
        directSvgUrl: getAssetUrl(`/assets/governorates/${match.svgFile}`),
        inlineSvg: svgContent
      };
    }
  },

  {
    name: 'get_brand_rules',
    description: 'Returns Syrian visual identity dos and donts regarding colors, typography, safe margins, and flag etiquette.',
    parameters: {
      type: 'object',
      properties: {
        topic: {
          type: 'string',
          enum: ['all', 'flag', 'emblem', 'typography', 'colors'],
          default: 'all'
        }
      }
    },
    handler: (args?: { topic?: string }) => {
      const topic = args?.topic || 'all';

      const rules: any = {
        flag: [
          'The national flag MUST strictly follow the 3:2 ratio.',
          'The stars MUST be 3 five-pointed red stars pointing upwards.',
          'Colors must be Green (#007A3D), White (#FFFFFF), Black (#000000), and Red (#CE1126).'
        ],
        emblem: [
          'Maintain a minimum clear space padding equal to 20% of the emblem width.',
          'Do not skew, horizontally compress, or rotate at arbitrary angles.',
          'Ensure high contrast when placing the emblem on photographic backgrounds.'
        ],
        typography: [
          'Primary Arabic headline typeface is HayyakumAllah (حيّاكم الله).',
          'For web body text, pair with clean geometric sans-serif (e.g. system-ui, Segoe UI, Noto Sans Arabic).',
          'Maintain appropriate line heights (1.5 - 1.8) for optimal Arabic glyph rendering.'
        ],
        colors: [
          'Forest Green (#054239) is the primary dominant brand color.',
          'Golden Wheat (#B9A779) is the secondary accent and highlight color.',
          'Do not substitute generic bright emerald greens for official Forest Green.'
        ]
      };

      if (topic !== 'all' && rules[topic]) {
        return { topic, rules: rules[topic] };
      }
      return rules;
    }
  }
];

/**
 * Initializes WebMCP registry in browser environment:
 * 1. navigator.modelContext (W3C standard WebMCP)
 * 2. window.syrianIdentityMCP fallback for direct script integration
 */
export const initWebMCP = () => {
  if (typeof window === 'undefined') return;

  const mcpInterface = {
    version: '1.0.0',
    specification: 'WebMCP W3C WebML CG',
    listTools: () => {
      return webMCPTools.map(t => ({
        name: t.name,
        description: t.description,
        parameters: t.parameters
      }));
    },
    callTool: async (name: string, args: any = {}) => {
      const tool = webMCPTools.find(t => t.name === name);
      if (!tool) {
        throw new Error(`WebMCP tool '${name}' not found.`);
      }
      return await tool.handler(args);
    }
  };

  // 1. Expose on global window object
  (window as any).syrianIdentityMCP = mcpInterface;

  // 2. Register on navigator.modelContext if supported by browser/agent
  const nav = navigator as any;
  if (nav && nav.modelContext && typeof nav.modelContext.registerTool === 'function') {
    try {
      webMCPTools.forEach(tool => {
        nav.modelContext.registerTool({
          name: tool.name,
          description: tool.description,
          parameters: tool.parameters,
          execute: async (args: any) => tool.handler(args)
        });
      });
      console.info('[WebMCP] Registered 5 tools on navigator.modelContext');
    } catch (err) {
      console.warn('[WebMCP] navigator.modelContext registration note:', err);
    }
  }

  // 3. Dispatch ready event for extensions / agents
  window.dispatchEvent(new CustomEvent('webmcp:ready', { detail: mcpInterface }));
};
