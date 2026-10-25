/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        theme: {
          bg: 'var(--color-bg)',
          card: 'var(--color-card)',
          ink: 'var(--color-ink)',
          muted: 'var(--color-muted)',
          accent: 'var(--color-accent)',
          ribbon: 'var(--color-ribbon)',
          secondary: 'var(--color-secondary)',
          darkBg: 'var(--color-dark-bg)',
          darkInk: 'var(--color-dark-ink)',
          border: 'var(--color-border)',
        },
      },
      fontFamily: {
        display: ['DynaPuff', 'cursive'],
        body: ['Instrument Sans', 'sans-serif'],
        hand: ['Caveat', 'cursive'],
      },
      animation: {
        wiggle: 'wiggle 2.8s ease-in-out infinite',
        drift: 'drift 10s linear infinite',
        shine: 'shine 4.5s 2s infinite',
        marquee: 'marquee 28s linear infinite',
        'marquee-rev': 'marquee-rev 32s linear infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(5deg)' },
          '50%': { transform: 'rotate(-5deg) scale(1.04)' },
        },
        drift: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-24px) rotate(8deg)' },
        },
        shine: {
          '0%, 70%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-rev': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
};
