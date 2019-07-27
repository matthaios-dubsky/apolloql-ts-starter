import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import depthLimit from 'graphql-depth-limit'
import { createServer } from 'http'
import cors from 'cors'
import compression from 'compression'

import { typeDefs } from './src/schema'
import { resolvers } from './src/resolvers'
import { logger } from './src/logger'

const app = express()
const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
  validationRules: [depthLimit(7)],
})
app.use('*', cors())
app.use(compression())
server.applyMiddleware({ app, path: '/graphql' })
const httpServer = createServer(app)

// basic old fashion REST route
app.get('/', (req, res) => res.send('Hello World!'))

httpServer.listen({ port: 4000 }, () =>
  logger.info(`\n🚀      GraphQL is now running on http://localhost:4000/graphql`),
)
