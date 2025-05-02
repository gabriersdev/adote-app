/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./node_modules/react-bootstrap/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textDecoration: "none",
    },
  },
  plugins: [],
};
