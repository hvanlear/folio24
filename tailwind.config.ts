const defaultTheme = require("tailwindcss/defaultTheme");

const svgToDataUri = require("mini-svg-data-uri");

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        "2xl": "1536px",
        "3xl": "1800px",
      },
      backgroundColor: {
        "black-2": "#212529",
      },
      color: {
        "custom-green-1": "rgba(0, 255, 174, 0.572)",
      },
      padding: {
        "96": "24rem",
        "120": "30rem",
      },
      fontSize: {
        "10xl": "10rem",
        "20xl": "20rem",
        "30xl": "clamp(5rem, 20vw, 20rem)",
        "h1-clamp": "clamp(5rem, 15vw, 15rem)",
        "h1.5-clamp": "clamp(2rem, 15vw, 8rem)",
        "h2-clamp": "clamp(2rem, 4.5vw, 6rem)",
        "h3-clamp": "clamp(1.5rem, 2vw, 4rem)",
        "h4-clamp": "clamp(1rem, 2.5vw, 4rem)",
        "h5-clamp": "clamp(1rem, 2.5vw, 1.3rem)",
        "small-clamp": "clamp(.8rem, 2vw, 1rem)",
        "ticker-clamp": "clamp(6rem, 4vw, 9.5rem)",
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", '"Times New Roman"', "Times", "serif"],
      },
      lineHeight: {
        none: "0.7",
      },
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },
    },
  },
  compilerOptions: {
    forceConsistentCasingInFileNames: true,
  },
  variants: {
    extend: {
      alignItems: ["responsive", "3xl"],
    },
  },
  plugins: [
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
