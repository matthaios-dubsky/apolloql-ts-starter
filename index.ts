import { ApolloServer, gql } from 'apollo-server'

import { logger } from './src/logger'

logger.info('welcome to my typescript start kit!')
// The GraphQL schema
const typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    hello: String
  }
`

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: () => 'world',
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
})

server.listen().then(({ url }) => {
  logger.info(`🚀 Server ready at ${url}`)
})
