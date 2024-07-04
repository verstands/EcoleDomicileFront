/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "blue-1" : "#877EFF",
        "dark-1" : "#09090A"
      }
    },
    darkMode: ['class']
  },
  plugins: [],
}