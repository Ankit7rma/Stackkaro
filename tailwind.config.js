/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        mediumslateblue: {
          100: "#0a56f1",
          200: "rgba(10, 86, 241, 0.5)",
        },
        darkslategray: {
          100: "#36454f",
          200: "rgba(54, 69, 79, 0.15)",
          300: "rgba(54, 69, 79, 0.25)",
        },
        sandybrown: {
          100: "#e68f50",
          200: "rgba(230, 143, 80, 0.75)",
        },
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        outfit: "Outfit",
        poppins: "Poppins",
      },
      borderRadius: {
        "6xl": "25px",
        "31xl": "50px",
      },
    },
    fontSize: {
      xl: "20px",
      "3xl": "22px",
      "16xl": "35px",
      "6xl": "25px",
      lg: "18px",
      "56xl": "75px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
