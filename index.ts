import express from 'express'
import { ApolloServer } from 'apollo-server-express'
// import depthLimit from 'graphql-depth-limit' // TODO: Why this doesn't work?
// import cors from 'cors'
// import compression from 'compression'

import { typeDefs } from './src/schema'
import { resolvers } from './src/resolvers'
import { logger } from './src/logger'

const app = express()
const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
  // validationRules: [depthLimit(7)],
})

// app.use('*', cors())
// app.use(compression())
server.applyMiddleware({ app, path: '/graphql' })

// basic old fashion REST route
app.get('/', (req, res) => res.send('Hello World!'))

app.listen({ port: 4000 }, () =>
  logger.info(`\n🚀      GraphQL is now running on http://localhost:4000/graphql`),
)

// Ref: https://itnext.io/google-cloud-functions-node-js-and-express-aea4a2a9ba3a
// Make sure the entry point of the cloud function is app!
// NOTE: if so, both ql and express can work together!!!
export { app }
