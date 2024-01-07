/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        fredericka: "'Fredericka the Great', cursive",
        poppins: "'Poppins', sans-serif",
      },
      backgroundImage: {
        light: "url('/assets/background.png')",
        dark: "url('/assets/background_dark.png')",
        gifTool: "url('/assets/gif_tool.png')",
        travelling: "url('/assets/travelling.png')",
        dogctionary: "url('/assets/dogctionary.png')"
      },
    },
  },
  plugins: [],
};

