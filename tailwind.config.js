module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        theme: {
          darkBeauBlue: "#719FCD",
          beauBlue: "#BAD7F2",
          lightBeauBlue: "#E6F3FF",
          magicMint: "#BAF2D8",
          celadon: "#BAF1BB",
          gray: "#555",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
