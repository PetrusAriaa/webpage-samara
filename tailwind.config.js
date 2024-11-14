const { nextui } = require("@nextui-org/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|dropdown|input|modal|navbar|ripple|spinner|menu|divider|popover).js"
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-jakarta)'],
        content: ['var(--font-trajan)'],
      },
      colors: {
        "blue-primary": "#1A3783",
        "blue-secondary": "#0071B7",
        "white-secondary": "#F8F8F8",
        "dark-primary": "#0A1124",
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
