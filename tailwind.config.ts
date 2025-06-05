/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 30s linear infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
      },
      backgroundImage: {
        'grid-pattern': `
          linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
        `,
      },
      backgroundSize: {
        'grid': '30px 30px',
      },
    },
  },
  plugins: [],
}