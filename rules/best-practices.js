/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  env: {
    browser: true,
  },
  rules: {
    // enforces return statements in callbacks of array's methods
    // https://eslint.org/docs/rules/array-callback-return
    "array-callback-return": ["error", { allowImplicit: true }],

    // require return statements to either always or never specify values
    // https://eslint.org/docs/rules/consistent-return
    "consistent-return": "error",

    // require default case in switch statements
    // https://eslint.org/docs/rules/default-case
    "default-case": ["error", { commentPattern: "^no default$" }],

    // Enforce default clauses in switch statements to be last
    // https://eslint.org/docs/rules/default-case-last
    "default-case-last": "error",

    // https://eslint.org/docs/rules/default-param-last
    "default-param-last": "error",

    // encourages use of dot notation whenever possible
    // https://eslint.org/docs/rules/dot-notation
    "dot-notation": ["error", { allowKeywords: true }],

    // enforces consistent newlines before or after dots
    // https://eslint.org/docs/rules/dot-location
    "dot-location": ["error", "property"],

    // make sure for-in loops have an if statement
    // https://eslint.org/docs/rules/guard-for-in
    "guard-for-in": "error",

    // Disallow returning value in constructor
    // https://eslint.org/docs/rules/no-constructor-return
    "no-constructor-return": "error",

    // disallow empty functions, except for standalone funcs/arrows
    // https://eslint.org/docs/rules/no-empty-function
    "no-empty-function": [
      "error",
      {
        allow: ["arrowFunctions", "functions", "methods"],
      },
    ],

    // disallow empty destructuring patterns
    // https://eslint.org/docs/rules/no-empty-pattern
    "no-empty-pattern": "error",

    // disallow comparisons to null without a type-checking operator
    // https://eslint.org/docs/rules/no-eq-null
    "no-eq-null": "off",

    // disallow fallthrough of case statements
    // https://eslint.org/docs/rules/no-fallthrough
    "no-fallthrough": "error",

    // disallow the use of leading or trailing decimal points in numeric literals
    // https://eslint.org/docs/rules/no-floating-decimal
    "no-floating-decimal": "error",

    // disallow unnecessary nested blocks
    // https://eslint.org/docs/rules/no-lone-blocks
    "no-lone-blocks": "error",

    // disallow use of multiple spaces
    // https://eslint.org/docs/rules/no-multi-spaces
    "no-multi-spaces": [
      "error",
      {
        ignoreEOLComments: false,
      },
    ],

    // disallow use of multiline strings
    // https://eslint.org/docs/rules/no-multi-str
    "no-multi-str": "error",

    // disallow comparisons where both sides are exactly the same
    // https://eslint.org/docs/rules/no-self-compare
    "no-self-compare": "error",

    // restrict what can be thrown as an exception
    // https://eslint.org/docs/rules/no-throw-literal
    "no-throw-literal": "error",
  },
};
