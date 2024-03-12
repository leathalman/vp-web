/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'phind-gray': '#171719',
        'royal-blue': '#1C317E',
        'ga-peach': '#F2B299',
        'phind-gray-accent': '#2A2A2D',
      },
    },
  },
  plugins: [],
}

