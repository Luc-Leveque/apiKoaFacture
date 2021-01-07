import Client from "../models/client.model";
import Koa from "koa"

export default {
    Query: {
        getClients: async () => {
            try {
                return await Client.find()
            } catch (error) {
                throw new Error(error)
            }
        },
        getClientById: async (parents:any, args: any, ctx:Koa.Context) => {
            try {
                return await Client.findById(args.id)
            } catch (error) {
                throw new Error(error)
            }
        }
    },
    Mutation: {
        createClient: async (parents:any ,args: any) => {
            try {
                return await Client.create({
                    name:args.name,
                    siret:args.siret,
                    email:args.email,
                    address:args.address,
                    phoneNumber: args.phoneNumber,
                    logo : args.logo
                })
            } catch (error) {
                throw new Error(error)
            }
        },
        updateClient: async (parents:any , args: any) => {
            try {
                return Client.findByIdAndUpdate(
                args.id,
                {
                    name:args.name,
                    siret:args.siret,
                    email:args.email,
                    address:args.address,
                    phoneNumber: args.phoneNumber,
                    logo : args.logo
                })
            } catch (error) {
                throw new Error(error)
            }
        },
        deleteClient: async (parents:any, args: any) => {
            try {
                return await Client.findByIdAndDelete(args.id)
            } catch (error) {
                throw new Error(error)
            }
        },
    }
}

