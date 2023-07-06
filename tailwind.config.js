/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#9671FF",
        grey: "#97999B",
        "purple-grey": "#BBB5D8",
        "main-black": "#2E2E2E",
        error: "#E33473",
      },
      screens: {
        xs: { min: "340px", max: "376px" },
        xxs: {min: '320px', max: '340px'}
      },
    },
  },
  plugins: [],
};
