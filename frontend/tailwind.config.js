/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Cinzel: ["Cinzel"],
        Lato: ["Lato"],
      },
      colors: {
        primarywhite: "#F8F8F8",
        softgray: "#EEEDF0",
        brown: "#7F3D28",
        black2 :"#101010"
      },
    },
  },
  plugins: [],
};
