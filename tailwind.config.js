/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", "Roboto Mono", "sans-serif"],
        serif: ["Sniglet", "serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
