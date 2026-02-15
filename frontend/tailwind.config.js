/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#421d53',
        'primary-light': '#b794f4',
        'surface-dark': '#1a0a2a',
        'surface-darker': '#0a0015',
        'accent-purple': '#b794f4',
        'accent-violet': '#7c3aed',
      },
      fontFamily: {
        'spline': ['"Spline Sans"', 'sans-serif'],
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        '3xl': '40px',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(183, 148, 244, 0.3)',
        'glow-lg': '0 0 30px rgba(183, 148, 244, 0.5)',
      }
    },
  },
  plugins: [],
}
