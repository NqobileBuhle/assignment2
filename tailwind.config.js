/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
                 'onlyMurder': "url('../assets/onlyMurder.png')",
    },
  },
  plugins: [],
  }

}