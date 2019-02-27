# stylelint-config-good-scss

[![NPM](https://nodei.co/npm/stylelint-config-good-scss.png)](https://nodei.co/npm/stylelint-config-good-scss/)

## features

* Extends [`stylelint-config-recommended`](https://github.com/stylelint/stylelint-config-recommended).
* Extends [`stylelint-config-recess-order`](https://github.com/stormwarning/stylelint-config-recess-order).
* SCSS syntax support.

## installation

```bash
npm install stylelint stylelint-config-good-scss --save-dev
```

```bath
yarn add --dev stylelint stylelint-config-good-scss 
```

## Usage

You create stylelint.config.js in the project root.
And a nice idea to write the task in package.json.

### basic

#### stylelint.config.js

```js
module.exports = {
  extends: ['stylelint-config-good-scss'],
  rules: {
    // your rule
  }
}
```

#### package.json

```js
{
  "scripts": {
    "lintcss": "stylelint --fix ./**/*.vue ./**/*.scss"
  }
}
```

### with nuxt and prettier

```bath
yarn add --dev stylelint stylelint-config-good-scss prettier-stylelint stylelint-webpack-plugin 
```

```js
module.exports = {
  extends: [
    'stylelint-config-good-scss',
    './node_modules/prettier-stylelint/config.js'
  ]
}
```
#### nuxt.config.js

```js
module.exports = {
  build: {
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.plugins.push(
          new StylelintPlugin({
            files: ['**/*.vue']
          })
        )
      }
    }
  }
}
```
