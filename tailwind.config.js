/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#FBF7F0",
          soft: "#F6EFE3",
        },
        sage: {
          50: "#F1F4F0",
          100: "#E1E9DF",
          200: "#C4D3C0",
          300: "#A3BB9C",
          400: "#87A67E",
          500: "#6E8F64",
          600: "#57734F",
          700: "#455C3F",
          800: "#374A33",
          900: "#2C3B29",
        },
        terracotta: {
          50: "#FBF0EB",
          100: "#F4DBCE",
          200: "#E9B79D",
          300: "#DC9573",
          400: "#CD7C54",
          500: "#BC6640",
          600: "#9F5334",
          700: "#7E422A",
          800: "#5F3220",
          900: "#452418",
        },
        charcoal: {
          DEFAULT: "#2A2823",
          soft: "#4A4740",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [],
};
