/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textShadow: {
        outline:
          "2px 2px 0px black, -2px -2px 0px black, -2px 2px 0px black, 2px -2px 0px black",
      },
    },
  },
  plugins: [],
};
