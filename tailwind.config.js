module.exports = {
  mode: "jit",
  purge: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/Components/**/*.{js,ts,jsx,tsx}","./src/styles/**/*.{css}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      hp: "300px",
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
    fontSize: {
      xsm: ".5rem",
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    extend: {
      backgroundImage: {
        watermarks: "url('/public/Image/watermark.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
