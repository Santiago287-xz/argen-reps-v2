/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      sm1: '0.8rem',
      sm: '0.9rem',
      base: '1.2rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {
      fontFamily: {
        Montserrat: "Montserrat",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
