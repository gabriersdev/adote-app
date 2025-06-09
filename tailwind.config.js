/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.{js,jsx,ts,tsx}",
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
