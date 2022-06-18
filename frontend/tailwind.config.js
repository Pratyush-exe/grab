/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      height: theme => ({
        "500px": "500px"
      }),
      width: theme => ({
        "600px": "600px",
        "400px": "400px"
      }),
      fontFamily: theme => ({
        "ubuntu": "Montserrat"
      })
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
};
