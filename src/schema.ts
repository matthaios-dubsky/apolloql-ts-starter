import { gql } from 'apollo-server'

const typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    hello: String
  }
`
export { typeDefs }
