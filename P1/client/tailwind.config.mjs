/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: { min: "320px", max: "767px" },
      // => @media (min-width: 320px and max-width: 767px) { ... }

      tablet: { min: "768px", max: "1279px" },
      // => @media (min-width: 768px and max-width: 1279px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      red: "#FC4747",
      black: "#10141E",
      gray: "#5A698F",
      "dark-blue": "#161D2F",
      white: "#FFFFFF",
    },
    extend: {},
  },
  plugins: [],
};
