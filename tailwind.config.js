/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,}",
    "node_modules/flowbite-react/**/*.{js,jsx}",
  ],
  darkMode: "class", // class, 'media' or boolean
  theme: {
    extend: {
      /////
      /////
      /////
      colors: {
        primary: "#212121",
        primary_dark: "#0A5D60",
        secondary: "#253939",
        secondary_dark: "#CAE6E6",
        neutral: "#FFE046",
        text: "#F4F4F4",
        text_dark: "#32FFFF",
        bg: "#212121",
        bg_dark: "#101414",
        border: "",
        /////
        /////
        /////
        gray: {
          900: "#202225",
          800: "#2f3136",
          700: "#36393f",
          600: "#4f545c",
          400: "#d4d7dc",
          300: "#e3e5e8",
          200: "#ebedef",
          100: "#f2f3f5",
        },
      },
      spacing: {
        88: "22rem",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
}
