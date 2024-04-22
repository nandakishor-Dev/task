/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#efedf4",
        cardColor:"#f5f5f4"
      },
      height: {
        130: "70dvh",
        135: "85dvh",
      },
      width: {
        90:"22rem",
        100: "26rem",
      },
      fontSize:{
        md:"16px"
      }
    },
  },
  plugins: [],
};
