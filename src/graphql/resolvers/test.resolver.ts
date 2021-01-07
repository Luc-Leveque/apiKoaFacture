import { argsToArgsConfig } from "graphql/type/definition";
import Test from "../models/test.model";

export default {
    Query: {
        getTest: async () => {
            try {
                return await Test.find()
            } catch (error) {
                throw new Error(error)
            }
        }
    },
    Mutation: {
        createTest: async (args: any) => {
            try {
                return Test.create({
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

