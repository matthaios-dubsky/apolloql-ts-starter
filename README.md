# A simple ts starter kit with Apollo server

Includes:

- eslint,
- prettier,
- webpack,
- jest,
- typedi,
- typeorm,
- type-graphql, and
- ramda

## Note:

- [eslint version 6 doesn't seem to play nice with everyone else, so version 5 is used](https://github.com/typescript-eslint/typescript-eslint/issues/641).
- for using _winston logger_, `import { createLogger, format, transports } from 'winston'` doesn't seems to work, so `const winston = require('winston')` used instead.
- also for _winston logger_, there is a [strange issue](https://github.com/webpack-contrib/css-loader/issues/447) with webpack and node `fs` module, a hack is included in the `webpack.config.js` file: `node: { fs: 'empty' }`.
- On module, in `tsconfig.ts`, use `"module": "commonjs"`, and for modules like _winston_, import with `import * as winston from 'winston'`.
- A few quirks on `graphql` in `webpack.config.ts`, make sure:
  ```
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.mjs', '.gql', '.graphql'],
  },
  ```
  and in _rules_
  ```
  {
    // fixes https://github.com/graphql/graphql-js/issues/1272
    test: /\.mjs$/,
    include: /node_modules/,
    type: 'javascript/auto',
  },
  ```
- `esModuleInterop: true` in `tsconfig.ts` is needed for _Express_.

# Reference:

- [Using ESLint and Prettier in a TypeScript Project](https://dev.to/robertcoopercode/using-eslint-and-prettier-in-a-typescript-project-53jb)
- [Webpack with Typescript](https://webpack.js.org/guides/typescript/)
- [Unit Testing with Typescript and Jest](https://dev.to/muhajirdev/unit-testing-with-typescript-and-jest-2gln)
- [type-graphql](https://github.com/19majkel94/type-graphql)
- [typeorm](https://github.com/typeorm/typeorm)
- [typedi](https://github.com/typestack/typedi)
- [Apollo Server with Express Integration](https://github.com/apollographql/apollo-server)
- [Ramda](https://ramdajs.com/)
