/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: ['prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: true,
        singleQuote: true,
        // printWidth: 80,
        tabWidth: 2,
        // jsxSingleQuote: false,
        trailingComma: 'es5',
        endOfLine: 'auto',
        // bracketSameLine: false,
        arrowParens: 'always',
      },
    ],
  },
};
