/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'sy-darkgreen': {
          DEFAULT: '#054239',
          light: '#428177',
          dark: '#002623',
        },
        'sy-gold': {
          DEFAULT: '#988561',
          light: '#b9a779',
          pale: '#edebe0',
          dark: '#705c36'
        },
        'sy-red': {
          DEFAULT: '#6b1f2a',
          dark: '#4a151e',
          deep: '#260f14',
          flag: '#ce1126'
        },
        'sy-black': '#161616',
        'sy-charcoal': '#3d3a3b',
      },
      fontFamily: {
        sans: ['HayyakumAllah', 'IBM Plex Sans Arabic', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['HayyakumAllah', 'IBM Plex Sans Arabic', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
