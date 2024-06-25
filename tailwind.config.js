module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  extend: {
    height: {
      "calc-full-minus-4rem": "calc(100% - 4rem)",
    },
    animation: {
      roll: "roll 199.86678536727527s infinite linear",
      pulse: "pulse 7.980692062650936s infinite",
    },
    keyframes: {
      roll: {
        "0%": { transform: "rotate(0deg)" },
        "100%": { transform: "rotate(360deg)" },
      },
      pulse: {
        "0%, 100%": { opacity: 1 },
        "50%": { opacity: 0.5 },
      },
    },
  },
  plugins: [],
};
