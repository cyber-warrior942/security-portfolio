import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#ffffff',
          100: '#f8f9fa',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#0d1525',
          600: '#0a1018',
          700: '#070b12',
          800: '#05080d',
          900: '#020304',
          950: '#010101'
        },
      },
      backgroundColor: {
        'primary': 'var(--bg-primary)',
        'primary-dark': 'var(--bg-primary-dark)'
      },
      textColor: {
        'primary': 'var(--text-primary)',
        'primary-dark': 'var(--text-primary-dark)'
      },
    },
  },
  plugins: [],
};

export default config; 