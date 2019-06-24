# A simple ts starter kit
Includes eslint, prettier, webpack, and jest  

## Note:
- [eslint version 6 doesn't seem to play nice with everyone else, so version 5 is used](https://github.com/typescript-eslint/typescript-eslint/issues/641).
- for using *winston logger*, `import { createLogger, format, transports } from 'winston'` doesn't seems to work, so `const winston = require('winston')` used instead.
- also for *winston logger*, there is a [strange issue](https://github.com/webpack-contrib/css-loader/issues/447) with webpack and node `fs` module, a hack is included in the `webpack.config.js` file: `node: { fs: 'empty' }`.

# Reference:
- [Using ESLint and Prettier in a TypeScript Project](https://dev.to/robertcoopercode/using-eslint-and-prettier-in-a-typescript-project-53jb)
- [Webpack with Typescript](https://webpack.js.org/guides/typescript/)
- [Unit Testing with Typescript and Jest](https://dev.to/muhajirdev/unit-testing-with-typescript-and-jest-2gln)