/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary-dark': '#12232E',
        'primary-light': '#007CC7',
        'accent-light': '#4DA8DA',
        'shadow-dark': '#203647',
        'light': '#EEFBFB',
        'dark': '#12232E',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'heading': ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
        'bounce-in': 'bounceIn 0.6s ease-out forwards',
        'pulse-glow': 'pulseGlow 2s infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(0, 124, 199, 0.4)',
        'glow-lg': '0 0 40px rgba(0, 124, 199, 0.6)',
      },
    },
  },
  plugins: [],
};