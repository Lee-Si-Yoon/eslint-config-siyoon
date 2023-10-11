/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  rules: {
    // Disallow await inside of loops
    // https://eslint.org/docs/rules/no-await-in-loop
    'no-await-in-loop': 'error',

    // disallow use of constant expressions in conditions
    // https://eslint.org/docs/latest/rules/no-constant-condition
    'no-constant-condition': 'warn',

    // Disallow duplicate conditions in if-else-if chains
    // https://eslint.org/docs/rules/no-dupe-else-if
    'no-dupe-else-if': 'error',

    // disallow a duplicate case label.
    // https://eslint.org/docs/latest/rules/no-duplicate-case
    'no-duplicate-case': 'error',

    // disallow duplicate keys when creating object literals
    // https://eslint.org/docs/latest/rules/no-dupe-keys
    'no-dupe-keys': 'error',

    // disallow unnecessary semicolons
    // https://eslint.org/docs/latest/rules/no-extra-semi
    'no-extra-semi': 'error',
  },
};
