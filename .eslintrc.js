module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  // parserOptions: { sourceType: "module" },
  extends: ["esnext", "plugin:react/recommended"],
  plugins: ["react"],
  rules: {
    "no-console": "off"
  }
};
