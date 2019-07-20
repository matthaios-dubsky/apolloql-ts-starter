# A simple ts starter kit

Includes eslint, prettier, webpack, and jest

## Note:

- [eslint version 6 doesn't seem to play nice with everyone else, so version 5 is used](https://github.com/typescript-eslint/typescript-eslint/issues/641).
- for using _winston logger_, `import { createLogger, format, transports } from 'winston'` doesn't seems to work, so `const winston = require('winston')` used instead.
- also for _winston logger_, there is a [strange issue](https://github.com/webpack-contrib/css-loader/issues/447) with webpack and node `fs` module, a hack is included in the `webpack.config.js` file: `node: { fs: 'empty' }`.
- On module, in `tsconfig.ts`, use `"module": "commonjs"`, and for modules like _winston_, import with `import * as winston from 'winston'`.
- adds [io-ts](https://github.com/gcanti/io-ts), which requires [fp-ts](https://github.com/gcanti/fp-ts). It is a bit redundant since [Rambda](https://ramdajs.com/) is already here. Well, at least you have a choice.

# Reference:

- [Using ESLint and Prettier in a TypeScript Project](https://dev.to/robertcoopercode/using-eslint-and-prettier-in-a-typescript-project-53jb)
- [Webpack with Typescript](https://webpack.js.org/guides/typescript/)
- [Unit Testing with Typescript and Jest](https://dev.to/muhajirdev/unit-testing-with-typescript-and-jest-2gln)
