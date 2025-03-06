/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      titleone: ["sans", "serif"],
      title: ["Protest Guerrilla", "serif"],
    },
    extend: {
      backgroundImage: {
        'vector': "url('../src/assets/Vector 1.svg')",
      },
    },
  },
  plugins: [],
};
