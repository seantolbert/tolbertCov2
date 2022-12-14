/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: "#e3e3e3",
        dark: "#2b2b2b",
      },
      boxShadow: {
        dark: "-9px 9px 18px #2d2d2d, 9px -9px 18px #616161",
        pressDark: "inset -9px 9px 18px #2d2d2d, inset 9px -9px 18px #616161",
        light: "-9px 9px 18px #9c9c9c, 9px -9px 18px #ffffff",
        pressLight: "inset -9px 9px 18px #9c9c9c, inset 9px -9px 18px #ffffff",
        ringGlow: "0px 0px 105px 45px rgba(252,211,77,0.9);"
      },
    },
  },
  plugins: [],
};
