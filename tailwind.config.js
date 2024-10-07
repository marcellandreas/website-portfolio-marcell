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
          600: "#252525",
          700: "#161616",
        },
      },
      fontSize: {
        "desktop-h1": ["67px", { lineHeight: "120%", fontWeight: "600" }],
        "desktop-h2": ["50px", { lineHeight: "120%", fontWeight: "600" }],
        "desktop-h3": ["38px", { lineHeight: "120%", fontWeight: "500" }],
        "desktop-h4": ["28px", { lineHeight: "120%", fontWeight: "500" }],
        "desktop-h5": ["21px", { lineHeight: "120%", fontWeight: "500" }],
        "desktop-h6": ["16px", { lineHeight: "120%", fontWeight: "500" }],
        "mobile-h1": ["40px", { lineHeight: "120%", fontWeight: "600" }],
        "mobile-h2": ["34px", { lineHeight: "120%", fontWeight: "600" }],
        "mobile-h3": ["26px", { lineHeight: "120%", fontWeight: "500" }],
        "mobile-h4": ["22px", { lineHeight: "120%", fontWeight: "500" }],
        "mobile-h5": ["18px", { lineHeight: "120%", fontWeight: "500" }],
        "mobile-h6": ["16px", { lineHeight: "100%", fontWeight: "500" }],
      },
    },
  },
  plugins: [],
};
