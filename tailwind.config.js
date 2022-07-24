/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },

      xl: { max: "1279px" },

      lg: { max: "700px" },

      md: { max: "450px" },

      sm: { max: "300px" },
    },
    extend: {
      colors: {
        primary: "rgb(253, 162, 20)",
        primaryLight: "rgb(255, 184, 74)",

        secondary: "rgb(21, 41, 56)",
        secondaryLight: "rgb(48, 72, 89)",

        customBlue: "rgb(99, 149, 184)",
        customBlue2: "rgb(113, 145, 165)",

        cutstomGrey1: "rgb(90, 104, 115)",
        customGrey2: "rgb(188, 206, 217)",

        neutral: "rgb(242, 242, 242)",
        neutral2: "rgb(252, 252, 252)",
      },
    },
  },
  plugins: [],
};
