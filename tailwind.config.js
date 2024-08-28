/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      backgroundColor: {
        Bgcolor: "#151937"
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}