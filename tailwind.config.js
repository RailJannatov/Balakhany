/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      container: {
        padding: "60px",
        screens: {
          sm: "600px",
          md: "728px",
          lg: "984px",
          xl: "1240px",
          "2xl": "1728px",
        },
      },
      spacing: {
        30: "30px",
      },
    },
  },
  plugins: [],
};
