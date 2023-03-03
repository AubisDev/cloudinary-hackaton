/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': "var(--openSans-font)",
      },
      dropShadow: {
        'bgrTitle': '3px 3px 0.15rem rgba(255,255,255,0.2)',
      }
    },
  },
  plugins: [],
};
