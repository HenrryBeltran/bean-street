/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    fontFamily: {
      serif: ["Boska Variable", "serif"],
      sans: ["Poppins Variable", "sans-serif"],
    },
  },
  plugins: [],
};
