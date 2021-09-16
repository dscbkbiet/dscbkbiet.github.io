//prettier-ignore
module.exports = {
  mode: 'jit',
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    //prettier-ignore
    extend: {
      fontFamily:{
        'google':["google"]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
