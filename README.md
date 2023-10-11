### Local / Per Project Install

If you don't already have a package.json file, create one with npm init.

Then we need to install the config:

```bash
npm i -D eslint-config-siyoon
```

Create a .eslintrc file in the root of your project's directory (it should live where package.json does). Your .eslintrc file should look like this:

Extends your config with the minimal base of eslint-config-siyoon config :

```json
{
  "extends": ["eslint-config-siyoon"]
}
```

or js version for .eslintrc.js file:

```js
/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: ['eslint-config-siyoon'],
};
```

### Better typing

TypeScript's built-in typings are not perfect. viclafouch-reset makes them better.

1. Create a reset.d.ts file in your project with these contents:

```js
// Do not add any other lines of code to this file!
import 'eslint-config-siyoon/reset.d';
```

2. Enjoy improved typings across your entire project.

### Scripts

You can add two scripts to your package.json to lint and/or fix your code:

```json
{
  "scripts": {
    "lint": "tsc --noEmit && eslint . --ext .js,.jsx,.ts,.tsx",
    "lint:fix": "npm run lint -- --fix"
  }
}
```

### If you use React.js

You can also add additional rules for only React.js ecosystem (without Next.js).

```json
{
  "extends": [
    "eslint-config-siyoon",
    "eslint-config-siyoon/react",
    "eslint-config-siyoon/hooks"
  ]
}
```

### If you want to use Prettier

Be sure to add the prettier config at the end of your extends array.

```json
{
  "extends": [
    "eslint-config-siyoon",
    "eslint-config-siyoon/react",
    "eslint-config-siyoon/hooks",
    "eslint-config-siyoon/prettier" // be sure to be the last
  ]
}
```

and create `prettierrc.config.js` in project root

```js
/**
 *@type {import("prettier").Config}
 */
const config = {
  semi: true,
  singleQuote: true,
  // printWidth: 80,
  tabWidth: 2,
  // jsxSingleQuote: false,
  trailingComma: 'es5',
  endOfLine: 'auto',
  // bracketSameLine: false,
  arrowParens: 'always',
};

module.exports = config;
```

### If you use VS Code

Once you have done. You probably want your editor to lint and fix for you.

1. Install the [ESLint package](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. Now we need to setup some VS Code settings. Create a .vscode folder at your root project, and create a settings.json file in this folder. Then, add this little config:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```
