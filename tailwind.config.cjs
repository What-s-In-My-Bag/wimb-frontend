/** @type {import('tailwindcss').Config} */

const config = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],

  theme: {
    extend: {
      colors: {
        darkerblue: "#0A4D68",
        darkblue: "#088395",
        lightblue: "#05BFDB",
        greenprincipal: "#00FFCA",
        superdarkblue: "#001117",
      },
      fontFamily: {
        principal: "'Inter', sans-serif",
      },
    },
  },

  plugins: [require("flowbite/plugin")],
  darkMode: "class",
};

module.exports = config;
