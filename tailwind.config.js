/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif:   ['"EB Garamond"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        hand:    ['"Caveat"', 'cursive'],
        mono:    ['"Courier Prime"', 'Courier', 'monospace'],
        body:    ['"Instrument Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        paper:       'var(--paper)',
        'paper-leaf':'var(--paper-leaf)',
        'paper-aged':'var(--paper-aged)',
        ink:         'var(--ink)',
        'ink-muted': 'var(--ink-muted)',
        'ink-faint': 'var(--ink-faint)',
        redpencil:   'var(--red-pencil)',
        highlighter: 'var(--highlighter)',
        rule:        'var(--ink-rule)',
      },
    },
  },
  plugins: [],
};
