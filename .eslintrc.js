module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: "airbnb-base",
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    // eslint-disable-next-line quotes
    "no-console": "off",
    "class-methods-use-this": "off",
    "consistent-return": "off",
    camelcase: "off",
    "object-curly-newline": "off",
    "comma-dangle": "off",
    quotes: "off",
    "no-unused-vars": ["error", { argsIgnorePattern: "next" }],
    "import/no-extraneous-dependencies": "off",
  },
};
