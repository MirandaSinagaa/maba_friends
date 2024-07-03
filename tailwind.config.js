/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primaryColor: '#4A90E2',
        secondaryColor: '#50E3C2',
        accentColor: '#F5A623',
        accentColorDark: '#D48818',
        backgroundColor: '#F4F4F4',
        textColor: '#333333',
      },
      fontFamily: {
        righteous: ['Righteous', 'cursive'], // Tambahkan font family baru
        roboto: ['Roboto', 'sans-serif'], // Tambahkan font family baru
        georgia: ['Georgia', 'serif'],
        akshar: ['Akshar', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
