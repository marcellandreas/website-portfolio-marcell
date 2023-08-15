/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        black: "#000",
        primary: {
          100: "#13FF00",
          200: "#202020",
          300: "#3F3F3F",
          400: "#E2E2E2",
          500: "#8F8F8F",
        },
      },
    },
  },
  plugins: [],
};
