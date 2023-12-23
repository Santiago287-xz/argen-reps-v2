import keepPreset from "keep-react/preset";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}","node_modules/keep-react/**/*.{js,jsx,ts,tsx}"],
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
  presets: [keepPreset],
  plugins: [require("tailwind-scrollbar")],
};
