/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc7fb',
          400: '#38a8f6',
          500: '#0e8ce6',
          600: '#026fc4',
          700: '#03589f',
          800: '#074b83',
          900: '#0c3f6e',
          950: '#082849',
        },
        jamovi: {
          purple: '#6b3ba6',
          darkPurple: '#4c267a',
          lightPurple: '#f4f0fa',
          accent: '#ff8a00'
        }
      },
      fontFamily: {
        sans: ['Prompt', 'Sarabun', 'sans-serif'],
        display: ['Kanit', 'sans-serif'],
        serif: ['TH Sarabun PSK', 'serif']
      }
    },
  },
  plugins: [],
}
