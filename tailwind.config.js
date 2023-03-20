/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "1rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      textColor: {
        skin: {
          base: "var( --color-dark)",
          muted: "var(--color-backgroud)",
          red: "var(--color9)",
          grey: "var(--color7)",
          yello: "var(--color8)",
          green: "var(--color6)",
          inverted: "var(--color-primary)",
        },
      },
      backgroundColor: {
        skin: {
          greadient: "var(--color-greadient)",
          backgroud: "var(--color-backgroud)",
          primary: "var(--color-primary)",
          secondary: "var(--color-secondary)",
          dark: "var(--color-dark)",
          color2: "var(--color2)",
          color4: "var(--color4)",
          color5: "var(--color5)",
          color6: "var(--color6)",
          color7: "var(--color7)",
          color8: "var(--color8)",
          color9: "var(--color9)",
        },
      },
      borderColor: {
        skin: {
          primary: "var(--color-backgroud)",
          color7: "var(--color7)",
          sky: "var(--color-primary)",
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
};
