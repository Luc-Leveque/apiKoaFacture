import { argsToArgsConfig } from "graphql/type/definition";
import Koa from "koa"
import User from "../models/user.model";

export default {
    Query: {
        getUser: async (parents:any, args: any, ctx:Koa.Context) => {
            try {
                return await User.findById(args.id)
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
                    societe:args.societe,
                    codePostal:args.codePostal,
                    ville:args.ville,
                    adresse:args.adresse,
                })
            } catch (error) {
                throw new Error(error)
            }
        },
        updateUser: async (parents:any , args: any) => {
            try {
                return User.findByIdAndUpdate(
                args.id,
                {
                    firstName:args.firstName,
                    lastName:args.lastName,
                    email:args.email,
                    societe:args.societe,
                    codePostal:args.codePostal,
                    ville:args.ville,
                    adresse:args.adresse,
                })
            } catch (error) {
                throw new Error(error)
            }
        },
    }
}


