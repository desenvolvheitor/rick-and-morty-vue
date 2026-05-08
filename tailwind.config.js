/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
      },
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        tertiary: 'var(--tertiary-color)',
        quaternary: 'var(--quaternary-color)',
        alive: 'var(--alive-color)',
        dead: 'var(--dead-color)',
        unknown: 'var(--unknown-color)',
        'main-text': 'var(--text-color)',
        'sec-text': 'var(--sec-text-color)',
      },
      borderRadius: {
        card: 'var(--card-radius)',
      }
    },
  },
  plugins: [],
};
