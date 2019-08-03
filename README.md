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

  ```javascript
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.mjs', '.gql', '.graphql'],
  },
  ```

  and in _rules_

  ```javascript
  {
    // fixes https://github.com/graphql/graphql-js/issues/1272
    test: /\.mjs$/,
    include: /node_modules/,
    type: 'javascript/auto',
  },
  ```

- `esModuleInterop: true` in `tsconfig.ts` is needed for _Express_.
- Make sure in `webpack.config.js` you have `target: 'node'`.

- for some reason, `graphql-depth-limit` doesn't work in gcp functions. Also, CORs and Compression not needed in GCP since as google cloud API handles those first before hit the function's endpoint.

## Deploy to Google Cloud Function

```sh
$ gcloud functions deploy my-starter-function --runtime nodejs8 --trigger-http --entry-point app
API [cloudfunctions.googleapis.com] not enabled on project [XXX]. Would you like to enable and retry (this will take a few minutes)? (y/N)? y

Enabling service [cloudfunctions.googleapis.com] on project [XXX]...
Waiting for async operation operations/acf.dfd60e52-7969-4b69-acd4-c34ab816a51e to complete...
Operation finished successfully. The following command can describe the Operation details:
gcloud services operations describe operations/tmo-acf.dfd60e52-7969-4b69-acd4-c34ab816a51e
API [cloudfunctions.googleapis.com] not enabled on project [XXX]. Would you like to enable and retry (this will take a few minutes)? (y/N)? y
```

## Reference

- [Using ESLint and Prettier in a TypeScript Project](https://dev.to/robertcoopercode/using-eslint-and-prettier-in-a-typescript-project-53jb)
- [Webpack with Typescript](https://webpack.js.org/guides/typescript/)
- [Unit Testing with Typescript and Jest](https://dev.to/muhajirdev/unit-testing-with-typescript-and-jest-2gln)
- [type-graphql](https://github.com/19majkel94/type-graphql)
- [typeorm](https://github.com/typeorm/typeorm)
- [typedi](https://github.com/typestack/typedi)
- [Apollo Server with Express Integration](https://github.com/apollographql/apollo-server)
- [Setting up Express, Apollo and creating a simple GraphQL API](https://medium.com/@th.guibert/basic-apollo-express-graphql-api-with-typescript-2ee021dea2c)
- [Ramda](https://ramdajs.com/)
