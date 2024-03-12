/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        "phind-gray": "#171719",
        "royal-blue": "#1C317E",
        "ga-peach": "#F2B299",
        "phind-gray-accent": "#2A2A2D",
      },
    },
  },
  plugins: [],
}

