/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  rules: {
    // enforce or disallow variable initializations at definition
    "init-declarations": "off",

    // Prefer object shorthands for properties.
    // Ref: https://eslint.org/docs/rules/object-shorthand
    "object-shorthand": [2, "properties"],

    // disallow shadowing of names such as arguments
    // https://eslint.org/docs/latest/rules/no-shadow-restricted-names
    "no-shadow-restricted-names": "error",

    // disallow use of undeclared variables unless mentioned in a /*global */ block
    // https://eslint.org/docs/latest/rules/no-undef
    "no-undef": "error",

    // disallow use of undefined when initializing variables
    // https://eslint.org/docs/latest/rules/no-undef-init
    "no-undef-init": "error",

    // Most common naming that is not always understandable
    "id-denylist": [
      "error",
      "err",
      "cb",
      "arr",
      "acc",
      "idx",
      "res",
      "val",
      "obj",
      "el",
      "elem",
      "req",
    ],

    // disallow declaration of variables that are not used in the code
    "no-unused-vars": [
      "error",
      { vars: "all", args: "after-used", ignoreRestSiblings: true },
    ],

    // disallow use of variables before they are defined
    "no-use-before-define": [
      "error",
      { functions: true, classes: true, variables: true },
    ],
  },
};
