/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#efedf4",
      },
      height: {
        130: "70dvh",
        135: "85dvh",
      },
      width: {
        100: "26rem",
      },
    },
  },
  plugins: [],
};
