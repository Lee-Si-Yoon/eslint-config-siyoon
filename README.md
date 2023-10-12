# Eslint + Prettier Config ver. siyoon

- [Local / Per Project Install](#local---per-project-install)
  - [Scripts](#scripts)
- [If you use TypeScript](#if-you-use-typescript)
  - [Better typing](#better-typing)
  - [Scripts](#scripts-1)
- [If you use React.js](#if-you-use-reactjs)
- [If you want to use Prettier](#if-you-want-to-use-prettier)
  - [Scripts](#scripts-2)
- [If you want to enable imports sorting](#if-you-want-to-enable-imports-sorting)
- [If you use VS Code](#if-you-use-vs-code)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>

---

## Local / Per Project Install

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

### Scripts

```json
{
  "scripts": {
    "lint": "eslint src .js",
    "lint:fix": "npm run lint -- --fix"
  }
}
```

---

## If you use TypeScript

Extend your tsconfig
First, extend your current config file tsconfig.json with this following snippet:

```json
{
  "extends": "eslint-config-siyoon/tsconfig.json"
}
```

Add the typescript eslint config
Then, add the TypeScript Eslint rules to your .eslintrc file:

```js
{
  extends: [
    'eslint-config-siyoon',
    'eslint-config-siyoon/typescript'
  ],
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname
  },
  root: true
}
```

or js version for .eslintrc.js file:

```js
/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: ['eslint-config-siyoon', 'eslint-config-siyoon/typescript'],
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  root: true,
};
```

### Better typing

TypeScript's built-in typings are not perfect. [ts-reset](https://www.totaltypescript.com/ts-reset) makes them better.

1. Create a reset.d.ts file in your project with these contents:

```js
// Do not add any other lines of code to this file!
import 'eslint-config-siyoon/reset.d';
```

2. Enjoy improved typings across your entire project.

### Scripts

```json
{
  "scripts": {
    "lint": "tsc --noEmit && eslint src .js,.jsx,.ts,.tsx",
    "lint:fix": "npm run lint -- --fix"
  }
}
```

remember if you use vite or swc they only transpiles the files and not check no types `tsc --noEmit`
refer to [vite](https://ko.vitejs.dev/guide/features.html#transpile-only)

---

## If you use React.js

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

---

## If you want to use Prettier

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

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "endOfLine": "auto",
  "arrowParens": "always"
  // printWidth: 80,
  // jsxSingleQuote: false,
  // bracketSameLine: false,
}


// below 3 options can be modified
```

### Scripts

Run Prettier all your files via

```json
{
  "scripts": {
    "pretty": "npx prettier . --write"
  }
}
```

---

## If you want to enable imports sorting

If you want to sort your imports using your alias at the same time from your jsonfig.json or tsconfig.json file.

```json
{
  "extends": ["eslint-config-siyoon", "eslint-config-siyoon/imports"]
}
```

---

## If you use VS Code

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
