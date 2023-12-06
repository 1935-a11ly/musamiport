/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 30s linear infinite',
      }
    },
  },
  plugins: [
    require("tw-elements-react/dist/plugin.cjs"),
    require("daisyui"),
  ],
}