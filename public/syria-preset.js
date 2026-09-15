/**
 * Syrian Visual Identity - Tailwind CSS Preset
 * Usage in tailwind.config.js:
 * presets: [require('./syria-preset.js')]
 */

module.exports = {
  theme: {
    extend: {
      colors: {
        syria: {
          forest: {
            DEFAULT: '#054239',
            light: '#428177',
            dark: '#002623',
          },
          wheat: {
            DEFAULT: '#b9a779',
            muted: '#988561',
            cream: '#edebe0',
          },
          gold: {
            DEFAULT: '#b9a779',
            dark: '#988561',
          },
          umber: {
            DEFAULT: '#6b1f2a',
            deep: '#4a151e',
            dark: '#260f14',
          },
          charcoal: {
            DEFAULT: '#161616',
            surface: '#1c1c1c',
            text: '#3d3a3b',
          },
          flag: {
            green: '#007A3D',
            white: '#FFFFFF',
            black: '#000000',
            red: '#CE1126',
          }
        }
      },
      fontFamily: {
        hayyakum: ['HayyakumAllah', 'sans-serif'],
        qomra: ['Qomra', 'sans-serif'],
      }
    }
  }
};
