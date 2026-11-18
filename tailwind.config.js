/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // 60% — Custard Silk (Dominant canvas, surfaces, light glass)
        custard: {
          50: '#FFFCF7',
          100: '#FFF9EE',
          200: '#FAF3E3', // Primary Base Canvas (60%)
          300: '#F5ECE0', // Secondary Silk Surface
          400: '#EBDDBF',
          500: '#DFCFA8',
          DEFAULT: '#FAF3E3',
          silk: '#FAF3E3',
          card: '#FFFDF9',
          surface: '#F5ECE0',
          muted: '#857567',
        },
        // 30% — Bordeaux Lacquer (Structure, typography, cards, borders, accents)
        bordeaux: {
          50: '#FDF2F4',
          100: '#F8DCE2',
          200: '#EEBDC8',
          300: '#DE93A4',
          400: '#BD506B',
          500: '#942642',
          600: '#71152D',
          700: '#4A0E1C', // Classic Bordeaux Lacquer (30%)
          800: '#380A15', // Rich Lacquer Card
          900: '#2A050F', // Deepest Lacquer Ink for Headings
          950: '#1A0309',
          DEFAULT: '#4A0E1C',
          lacquer: '#380A15',
          ink: '#2A050F',
          body: '#3E131C',
          muted: '#6E3844',
          border: 'rgba(74, 14, 28, 0.14)',
        },
        // 10% — Electric Sapphire (Primary buttons, logo, interactive highlights)
        sapphire: {
          50: '#EEF4FF',
          100: '#E0EBFF',
          200: '#C7DAFE',
          300: '#9EBEFD',
          400: '#6998FA',
          500: '#3B73F6',
          600: '#1D53EC',
          700: '#0D5BEB', // Electric Sapphire (10%)
          800: '#0848C4', // Deep Sapphire Gradient Start
          900: '#063697',
          950: '#031F5C',
          DEFAULT: '#0D5BEB',
          electric: '#0D5BEB',
          vibrant: '#0052FF',
          glow: 'rgba(13, 91, 235, 0.38)',
        },
        // Legacy compatibility mappings
        burgundy: {
          DEFAULT: '#4A0E1C',
          dark: '#2A050F',
          light: '#6F162D',
        },
        cream: {
          DEFAULT: '#FAF3E3',
          dark: '#F5ECE0',
          light: '#FFFDF9',
        },
      },
      fontFamily: {
        headline: ['"Fraunces"', 'Georgia', 'serif'],
        display: ['"Fraunces"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        hand: ['"Caveat"', 'cursive'],
      },
    },
  },
  plugins: [],
};
