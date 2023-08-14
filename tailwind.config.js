/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ["'Outfit'", "sans-serif"],
      },
    },
  },
  plugins: [require("@sira-ui/tailwind")],
};
