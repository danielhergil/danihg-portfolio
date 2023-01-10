/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        chivo: ["var(--font-chivo)"],
      },
      keyframes: {
        navbarMobile: {
          "0%": { opacity: "0", transform: "rotateX(-90deg)" },
          "50%": { transform: "rotateX(-20deg)" },
          "100%": { opacity: "1", transform: "rotateX(0deg)" },
        },
        appearOnScroll: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        }
      },
      animation: {
        navbarMobile1: "navbarMobile 0.3s ease-in-out",
        navbarMobile2: "navbarMobile 0.8s ease-in-out",
        navbarMobile3: "navbarMobile 1.3s ease-in-out",
        appearOnScroll: "appearOnScroll 3s ease-in-out",
      },
    },
    colors: {
      charcoal: "#264653ff",
      "persian-green": "#2a4e5eff",
      "persian-green-2": "#3b85a4ff",
      "persian-green-3": "#2c576b",
      "maize-crayola": "#e9c46aff",
      "sandy-brown": "#f4a261ff",
      "burnt-sienna": "#e76f51ff",
      white: "#ffffffff",
    },
  },
  plugins: [],
};
