/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['"Crimson Text"', 'serif'],
        'sans': ['Montserrat', 'sans-serif'],
      },
      colors: {
        gray: {
          50: '#F9FAFB',
          400: '#9CA3AF',
          600: '#4B5563',
          900: '#111827'
        }
      }
    },
  },
} 