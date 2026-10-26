/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        body:    ['Instrument Sans', 'sans-serif'],
        serif:   ['Playfair Display', 'Georgia', 'serif'],
        mono:    ['Space Grotesk', 'monospace'],
      },
      colors: {
        ink:     'var(--ink)',
        accent:  'var(--accent)',
        accent2: 'var(--accent2)',
        bg:      'var(--bg)',
        card:    'var(--bg-card)',
        dark:    'var(--bg-dark)',
        subtle:  'var(--bg-subtle)',
        muted:   'var(--ink-muted)',
        border:  'var(--border)',
      },
    },
  },
  plugins: [],
};
