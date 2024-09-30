/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        tablet: '810px',
        mobile: '390px',
        max: '2500px',
      },
      backgroundImage: {
        'dashed-line':
          'repeating-linear-gradient(to right, transparent, transparent 10px, #A0AEC0 10px, #A0AEC0 20px)'
      }
    }
  },
  plugins: []
};
