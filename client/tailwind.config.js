/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        LightGrey:'#141313',
        customYellow:'#F7CC3E'
      }
    },
  },
  plugins: [],
}

