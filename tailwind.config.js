module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        draw: {
          from: { strokeDashoffset: "4500" },
          to: { strokeDashoffset: "0" },
        },
      },
      animation: {
        draw: "draw 8s linear forwards",
      },
    },
  },
};
