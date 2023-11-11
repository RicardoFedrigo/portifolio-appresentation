/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#243c5a",
      },
    },
  },
  darkMode: "class",
  plugins: [require("flowbite/plugin"), require("tw-elements-react/dist/plugin.cjs")],
}
