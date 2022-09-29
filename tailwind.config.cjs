/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: "#e3e3e3",
        dark: "#474747",
      },
      boxShadow: {
        dark: "-9px 9px 18px #2d2d2d, 9px -9px 18px #616161",
        pressDark: "inset -9px 9px 18px #2d2d2d, inset 9px -9px 18px #616161",
        light: "-9px 9px 18px #9c9c9c, 9px -9px 18px #ffffff",
        pressLight: "inset -9px 9px 18px #9c9c9c, inset 9px -9px 18px #ffffff",
      },
    },
  },
  plugins: [],
};
