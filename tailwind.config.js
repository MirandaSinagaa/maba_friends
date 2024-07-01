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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
