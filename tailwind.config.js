/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary': 'blue',
        'secondary': '#505673',
      },
      borderRadius: {
        'sm': '3px',
      },
      fontSize: {
        'xs': '14px',
        'sm': '15px',
        'lg': '18px',
        'xl': '22px',
        '2xl': '28px',
        '3xl': '36px',
        '4xl': '44px',
      },
    },
  },
  plugins: [],
}
