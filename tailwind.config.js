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
        subtitle: '#aeb1bf',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1200px',
        xl: '1440px',
      },
    },
  },
  plugins: [],
}

