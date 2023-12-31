/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        Space: ['Space Grotesk', 'sans-serif'],
        Orbitron: ['Orbitron', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

