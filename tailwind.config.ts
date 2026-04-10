/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: '#0a0a0a',
          900: '#111111',
          800: '#121212',
          700: '#161616',
          600: '#1c1c1c',
          500: '#222222',
          400: '#2a2a2a',
          300: '#333333',
        },
        gold: {
          DEFAULT: '#e8a020',
          light: '#f5b942',
          dark: '#c4851a',
          muted: 'rgba(232,160,32,0.15)',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 30s linear infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      backgroundImage: {
        'grid-pattern': `linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)`,
        'gold-gradient': 'linear-gradient(135deg, #e8a020 0%, #f5b942 100%)',
      },
      backgroundSize: { 'grid': '40px 40px' },
      boxShadow: {
        'gold': '0 0 30px rgba(232,160,32,0.2)',
        'gold-lg': '0 20px 60px rgba(232,160,32,0.15)',
      },
    },
  },
  plugins: [],
}