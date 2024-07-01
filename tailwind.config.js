module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  extend: {
    height: {
      "calc-full-minus-4rem": "calc(100% - 4rem)",
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        "::-webkit-scrollbar": {
          "background-color": "transparent",
          width: "11px",
        },
        "::-webkit-scrollbar-track": {
          background: "#ed695550",
          "box-shadow": "inset 0 0 2px #585858",
        },
        "::-webkit-scrollbar-thumb": {
          background: "#ed6955",
          "border-radius": "20px",
        },
      });
    },
  ],
};
