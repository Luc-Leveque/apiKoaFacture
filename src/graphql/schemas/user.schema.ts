import { gql } from 'apollo-server-koa';

export default gql`
    type User {
        id: ID!
        firstName: String!
        lastName: String!
        email: String!
    }
    type Query {
        getUsers:[User]
    }
    type Mutation {
        createUser(firstName: String!, lastName:String!,email:String!):User,
    }
`