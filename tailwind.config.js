/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      theme: {
        // Customize your color theme here
        primary: '#3498db',
        secondary: '#2ecc71',
        // Add more custom colors as needed
      },
    },
  },
  plugins: [],
});