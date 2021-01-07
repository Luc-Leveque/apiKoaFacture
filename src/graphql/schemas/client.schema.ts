import { gql } from 'apollo-server-koa';

export default gql`
    type Client {
        id: ID!
        name: String!
        siret: String!
        address: String!
        email: String!
        phoneNumber: String!
        logo: String!
    }
    extend type Query {
        getClients:[Client]
        getClientById(id:ID!):Client
    }
    extend type Mutation {
        createClient(
            name: String!,
            siret: String!,
            address: String!,
            email: String!,
            phoneNumber: String!,
            logo: String!
        ):Client,
        updateClient(
            name: String!,
            siret: String!,
            address: String!,
            email: String!,
            phoneNumber: String!,
            logo: String!
        ):Client,
        deleteClient(
            id : ID!
        ):Client,
    }
`