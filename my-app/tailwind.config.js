/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: {
          900: "#191919",
          800: "#212121",
          700: "#3A3A3A",
        },
        gold: {
          500: "#C5A47E",
          400: "#D4B692",
        },
        platinum: {
          300: "#E5E5E5",
          400: "#F5F5F5",
        }
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
      },
      animation: {
        "fade-in-down": "fadeInDown 0.5s ease-out",
      },
      keyframes: {
        fadeInDown: {
          "0%": { opacity: 0, transform: "translateY(-20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
