/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  rules: {
    // It will not check empty lines before the first member and after the last member
    // https://eslint.org/docs/latest/rules/lines-between-class-members
    "lines-between-class-members": ["error", "always"],

    // https://eslint.org/docs/latest/rules/padding-line-between-statements
    "padding-line-between-statements": [
      2,
      // We always want a blank line before a `return` statement or a multi-line
      // block.
      {
        blankLine: "always",
        prev: "*",
        next: ["return", "multiline-block-like"],
      },
      // We always want a blank line after a multi-line block.
      { blankLine: "always", prev: "multiline-block-like", next: "*" },
    ],
  },
};
