/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      height: (theme) => ({
        '500px': '500px',
        '400px': '400px',
        '30px': '30px',
        '45px': '45px',
        '100px': '100px',
        '95vh': '90vh',
        '5vh': '9vh',
      }),
      width: (theme) => ({
        '600px': '600px',
        '400px': '400px',
        '198px': '198px',
      }),
      fontFamily: (theme) => ({
        ubuntu: 'Montserrat',
      }),
      colors: {
        primary: '#ffdb18',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
