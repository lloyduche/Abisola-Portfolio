/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // 60% — Swiss Cream (Dominant canvas, surfaces, light glass)
        swiss: {
          50: '#FAF9F7',
          100: '#F7F5F0', // Primary Base Canvas (60%)
          200: '#EFECE4', // Secondary Surface
          300: '#E5E1D5',
          400: '#D5CFC1',
          DEFAULT: '#F7F5F0',
          cream: '#F7F5F0',
          card: '#FCFBF9',
          surface: '#EFECE4',
          muted: '#7A766D',
        },
        // 30% — Petrol Ink (Structure, typography, cards, borders, depth)
        petrol: {
          50: '#F0F5F8',
          100: '#DDE8EE',
          200: '#BED4DE',
          300: '#92B6C7',
          400: '#5F92AB',
          500: '#3D728D',
          600: '#2A566E',
          700: '#18303D', // Classic Petrol (30% structural)
          800: '#13222B', // Dark Petrol Card
          900: '#0F1D24', // Deepest Petrol Ink for Headings
          950: '#091116',
          DEFAULT: '#18303D',
          ink: '#0F1D24',
          body: '#243A47',
          muted: '#59707E',
          border: 'rgba(24, 48, 61, 0.14)',
        },
        // 10% — Persimmon Spark (Buttons, active highlights, badges, sparks)
        persimmon: {
          50: '#FFF2EE',
          100: '#FFE2D8',
          200: '#FFC8B5',
          300: '#FFA487',
          400: '#FF7B54',
          500: '#FF5E36', // Persimmon Spark (10%)
          600: '#F24218',
          700: '#CC300D',
          800: '#A4270D',
          900: '#842410',
          DEFAULT: '#FF5E36',
          spark: '#FF5E36',
          vibrant: '#FF552E',
          glow: 'rgba(255, 94, 54, 0.38)',
        },
        // Legacy alias mappings
        custard: {
          DEFAULT: '#F7F5F0',
          silk: '#F7F5F0',
          card: '#FCFBF9',
          surface: '#EFECE4',
        },
        bordeaux: {
          DEFAULT: '#18303D',
          ink: '#0F1D24',
          body: '#243A47',
          muted: '#59707E',
        },
        sapphire: {
          DEFAULT: '#FF5E36',
          electric: '#FF5E36',
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
