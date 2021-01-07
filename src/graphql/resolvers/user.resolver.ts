import { argsToArgsConfig } from "graphql/type/definition";
import Koa from "koa"
import User from "../models/user.model";

export default {
    Query: {
        getUsers: async () => {
            try {
                return await User.find()
            } catch (error) {
                throw new Error(error)
            }
        }
    },
    Mutation: {
        createUser: async (parents:any , args: any) => {
            try {
                return await User.create({
                    firstName:args.firstName,
                    lastName:args.lastName,
                    email:args.email,
                })
            } catch (error) {
                throw new Error(error)
            }
        }
    }
}


