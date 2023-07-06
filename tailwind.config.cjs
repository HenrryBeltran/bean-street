const plugin = require("tailwindcss/plugin");
const headlessui = require("@headlessui/tailwindcss")({ prefix: "ui" });

/** @type {import('tailwindcss').Config} */
(
  module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
      extend: {
        screens: {
          md: "834px",
          "3xl": "1920px",
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
        boxShadow: {
          "3xl": "0px 22px 70px 4px rgba(0, 0, 0, 0.3)",
        },
      },
      fontFamily: {
        serif: ["Boska Variable", "serif"],
        sans: ["Poppins Variable", "sans-serif"],
      },
    },
    plugins: [
      headlessui,
      plugin(function ({ addUtilities }) {
        addUtilities({
          ".tap-highlight-transparent": {
            "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
          },
        });
      }),
    ],
  }
);
