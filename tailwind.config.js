/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2px",
          lg: "24px",
          xl: "32px",
          "2xl": "46px",
        },
        screens: {
          sm: "600px",
          md: "728px",
          lg: "984px",
          xl: "1240px",
          "2xl": "1700px",
        },
      },
      spacing: {
        30: "30px",
      },
    },
    screens: {
      sm: { min: "340px", max: "567px" },
      md: { min: "567px", max: "768px" },
      lg: { min: "768px", max: "1024px" },
      xl: { min: "1024px", max: "1280px" },
      "2xl": { min: "1280px" },
    },
  },
  plugins: [],
};
