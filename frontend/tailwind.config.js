/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "360px",
      md: "700px",
      lg: "976px", 
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        Cinzel: ["Cinzel"],
        Lato: ["Lato"],
        Poppins: ["Poppins"],
      },
      colors: {
        primarywhite: "#F8F8F8",
        softgray: "#EEEDF0",
        brown: "#7F3D28",
        black2: "#101010",
      },
    },
  },
  plugins: [],
};
