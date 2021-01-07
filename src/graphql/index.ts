import { ApolloServer } from 'apollo-server-koa'
import { Schema } from 'mongoose'

import schema from "./schemas/index"
import resolvers from "./resolvers/index"


export const apolloServer = new ApolloServer({
    typeDefs: schema,
    resolvers
})