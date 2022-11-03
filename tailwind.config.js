/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      inset: {
        '18px': '18px',
        '5px': '5px',
        '50px': '50px',

      }
    },
  },
  plugins: [],
}
