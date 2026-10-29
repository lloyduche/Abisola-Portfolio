/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bodoni Moda"', '"Playfair Display"', 'Georgia', 'serif'],
        serif:   ['"EB Garamond"', 'Georgia', 'serif'],
        hand:    ['"Caveat"', 'cursive'],
        mono:    ['"Courier Prime"', 'Courier', 'monospace'],
        body:    ['"Instrument Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
