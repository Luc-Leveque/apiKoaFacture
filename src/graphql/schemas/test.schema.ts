import { gql } from 'apollo-server-koa';

export default gql`
    type Test {
        id: ID!
        firstName: String!
        lastName: String!
        email: String!
    }
    extend type Query {
        getTest:[Test]
    }
    extend type Mutation {
        createTest(firstName: String!, lastName:String!,email:String!):Test,
    }
`