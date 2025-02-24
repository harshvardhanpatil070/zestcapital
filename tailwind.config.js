/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0C056D",  // The blue color you want
        secondary: "#dedcff",
        accent: "#433bff",
        background: "#fbfbfe",
        text: "#050315",
      },
    },
  },
  plugins: [],
}