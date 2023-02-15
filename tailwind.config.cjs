/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      brand: "#E46577",
      dark: "#072741",
      mid: "#2E618B",
      light: "#FDFDFD",
      break: "#73AB84",
      coffee: "#E57A44",
    },
    fontFamily: {
      sans: ["inter", "sans-serif"],
    },
    extend: {
      transitionDuration: {
        500: "500ms",
      },
    },
  },
  plugins: [],
};
