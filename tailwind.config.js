/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}', './components/**/*.{html,js}', './'],
  theme: {
    extend: {
      boxShadow: {
        'img-1': '-100px 0px 60px -95px rgba(237, 34, 255, 1)',
        'img-2': '100px 0px 60px -95px rgba(13, 79, 255, 0.7)',
        'img-3': '-100px 0px 60px -95px rgba(74, 199, 250, 1)',
      },
 
    }
  },
  plugins: [],
};
