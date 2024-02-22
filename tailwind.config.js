/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    colors:{
      eco_dark_green: '#006C4F',
      black: '#000000',
      red: '#E4221E',
      white:'#FFF',
      black_light:'#E3E3E3F5',
    },
    borderRadius:{
      'b':'1.813rem',
      'lg':'0.875rem',
      'md':'0.063rem',
    },
    fontSize: {
      base: '0.617rem',
      title: '1.4rem',
    },
    boxShadow: {
      'shadow_btn': '0 4px 4px 0px rgba(0, 0, 0, 0.25)',
    },
    screens: {
      'sm': { 'min': '640px', 'max': '767px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }
      'md': { 'min': '768px', 'max': '1023px' },
      // => @media (min-width: 768px and max-width: 1023px) { ... }
      'lg': { 'min': '1024px', 'max': '1279px' },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }
      'xl': { 'min': '1280px', 'max': '1535px' },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }
      '2xl': { 'min': '1536px' },
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
}