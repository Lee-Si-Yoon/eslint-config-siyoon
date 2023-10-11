/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: ["prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        semi: false,
        printWidth: 80,
        tabWidth: 2,
        jsxSingleQuote: false,
        trailingComma: "always-multiline",
        endOfLine: "auto",
        bracketSameLine: false,
        arrowParens: "always",
      },
    ],
  },
};
