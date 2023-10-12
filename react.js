/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: ['./rules/react.js', './rules/react-hooks.js'].map(require.resolve),
  rules: {},
};
