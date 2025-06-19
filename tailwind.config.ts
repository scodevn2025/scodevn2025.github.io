import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        cyber: ['Orbitron', 'sans-serif'],
      },
      colors: {
        neon: {
          pink: '#FF00CC',
          blue: '#00F0FF',
          purple: '#A020F0',
          yellow: '#F8FF00',
          green: '#39FF14',
        },
        background: '#0f051d',
        card: '#1a103d',
      },
      boxShadow: {
        neon: '0 0 8px #00F0FF, 0 0 16px #FF00CC',
      },
    },
  },
  plugins: [],
};

export default config; 