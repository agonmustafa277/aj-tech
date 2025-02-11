/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        animation: {
          draw: "draw 8s linear forwards",
        },
        keyframes: {
          draw: {
            from: { strokeDashoffset: "4500" },
            to: { strokeDashoffset: "0" },
          },
        },
      },
    },
    plugins: [],
  };
  