/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['DynaPuff', 'cursive'],
        body:    ['Instrument Sans', 'sans-serif'],
        hand:    ['Caveat', 'cursive'],
        serif:   ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        ink:    'var(--ink)',
        accent: 'var(--accent)',
        pink:   'var(--pink)',
        bg:     'var(--bg)',
        card:   'var(--bg-card)',
        dark:   'var(--bg-dark)',
        ribbon: 'var(--ribbon)',
        muted:  'var(--ink-muted)',
        border: 'var(--border)',
      },
      animation: {
        wiggle:  'wiggle 3s ease-in-out infinite',
        drift:   'drift 8s ease-in-out infinite',
        blink:   'blink 1s step-end infinite',
      },
      keyframes: {
        wiggle: {
          '0%,100%': { transform: 'rotate(4deg)'  },
          '50%':     { transform: 'rotate(-4deg) scale(1.04)' },
        },
        drift: {
          '0%,100%': { transform: 'translateY(0) rotate(0)' },
          '50%':     { transform: 'translateY(-18px) rotate(6deg)' },
        },
        blink: {
          '0%,100%': { opacity: '1' },
          '50%':     { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
