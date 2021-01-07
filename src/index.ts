import { app } from "./services/server.services"
import { mongoService } from "./services/mongoose.services"
import { GraphQLServer } from "graphql-yoga";
import {apolloServer} from "./graphql"

import "reflect-metadata";


apolloServer.applyMiddleware({app})
mongoService.connectDb()
app.startServer()
