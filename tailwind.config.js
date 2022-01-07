module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      standard: ["'Open Sans'", "sans-serif"],
      brand: ["'Fira Sans'", "sans-serif"],
    },
    colors: {
      primary: "var(--primary)",
      secondary: "var(--secondary)",
      accent: "var(--accent)",
      background: "var(--background)",
      chrome: "var(--chrome)",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
