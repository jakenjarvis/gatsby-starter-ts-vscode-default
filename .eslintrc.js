module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  extends: [
    "eslint:recommended",
    //"plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "react-app",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    //"plugin:jest/recommended", // When using jest
    //"react-app/jest", // When using jest
  ],
  plugins: [
    "@typescript-eslint",
    //"jest" // When using jest
  ],
};
