/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        burgundy: {
          DEFAULT: '#4A0E1C',
          dark: '#340611',
          light: '#6B172E',
        },
        cream: {
          DEFAULT: '#FAF4EC',
          dark: '#F0E7DB',
          light: '#FDFBF7',
        },
        rose: {
          dusty: '#D995A9',
          light: '#EBC3CF',
        },
        gold: {
          warm: '#E5B86B',
          light: '#F2D399',
        },
        plum: {
          DEFAULT: '#38272D',
          muted: '#614B52',
          faint: '#8F777F',
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
