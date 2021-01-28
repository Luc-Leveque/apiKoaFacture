import { gql } from 'apollo-server-koa';

export default gql`
    type User {
        id: ID!
        firstName: String!
        lastName: String!
        email: String!
        societe: String!
        codePostal: String!
        ville: String!
        adresse: String!
    }
    type Query {
        getUsers:[User]
    }
    type Mutation {
        createUser(
            firstName: String!,
            lastName:String!,
            email:String!,
            societe: String!,
            codePostal:String!,
            ville:String!,
            adresse:String!
        ):User,
        updateUser(
            id : ID!,
            firstName: String!,
            lastName:String!,
            email:String!,
            societe: String!,
            codePostal:String!,
            ville:String!,
            adresse:String!
        ):User,
    }
`