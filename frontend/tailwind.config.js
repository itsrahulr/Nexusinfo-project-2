/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      bg: "#FFF5EE",
      h1: "#3A0C04",
      buttonbg: "#D47023",
      para: "#963D03",
    },
    fontFamily: {
      gs: ["General sans"],
      pop: ["Poppins"], // corrected capitalization
    },

    extend: {},
  },
  plugins: [],
};
