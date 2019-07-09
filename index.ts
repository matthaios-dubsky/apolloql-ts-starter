import { ApolloServer } from 'apollo-server'
import { typeDefs } from './src/schema'
import { resolvers } from './src/resolvers'
import { logger } from './src/logger'

logger.info('welcome to my typescript start kit!')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
})

server.listen().then(({ url }) => {
  logger.info(`🚀 Server ready at ${url}`)
})
