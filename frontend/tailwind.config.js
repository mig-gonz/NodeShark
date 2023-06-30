/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/Components/Login.js", "./src/Components/Register.js", "./src/Pages/Homepage.jsx", "./src/Pages/User.jsx", "./src/App.js"],
  mode: "jit",
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

