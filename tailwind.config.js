const { nextui } = require("@nextui-org/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|navbar|ripple|spinner).js"
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-trajan)'],
        sans: ['var(--font-jakarta)'],
      },
      colors: {
        "blue-primary": "#1A3783",
        "blue-secondary": "#0071B7",
        "white-secondary": "#EFEFEF",
        "dark-primary": "#0A1124",
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
