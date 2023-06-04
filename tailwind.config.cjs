/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        md: "834px",
      },
      colors: {
        beige: {
          100: "#f7f4f0",
          200: "#ede6dd",
          300: "#e3dacc",
          400: "#d9ceba",
          500: "#c9bea5",
          600: "#baae91",
          700: "#a19675",
          800: "#82754d",
          900: "#695e34",
        },
        brown: {
          100: "#e4e0e0",
          200: "#cac0c0",
          300: "#ada09f",
          400: "#8c807e",
          500: "#786a67",
          600: "#665754",
          700: "#4d403d",
          800: "#332926",
          900: "#1f1815",
        },
      },
    },
    fontFamily: {
      serif: ["Boska Variable", "serif"],
      sans: ["Poppins Variable", "sans-serif"],
    },
  },
  plugins: [],
};
