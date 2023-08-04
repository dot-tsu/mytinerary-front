/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {},
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytinerary: {
          primary: "#587478",

          secondary: "#D44949",

          accent: "#D95F5F",

          neutral: "#293C46",

          "base-100": "#D9D8D7",

          info: "#4261eb",

          success: "#4be2c6",

          warning: "#f3ad20",

          error: "#ef654d",
        },
      },
    ],
  },
};
