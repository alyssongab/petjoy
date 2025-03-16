
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'petbrown': '#613E0D',
      },
      screens: {
        'wider': '1440px',
        // => @media (min-width: 1440px) { ... }
        // telas mais largas
      }
    },
  },
  plugins: [],
}