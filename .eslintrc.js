module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: ["react-app", "plugin:jsx-a11y/recommended"],
  plugins: ["jsx-a11y"]
}
