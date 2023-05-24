/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#080808',
        secondary: '#121319',
        grey: '#232531',
        accent: '#5466fe',
        
      }
    },
  },
  plugins: [],
}

