import { gql } from 'apollo-server-koa';

export default gql`
    type Invoice {
        id: ID!
        description: String!
        status: String!
        pdf: String
    }
    extend type Query {
        getInvoices:[Invoice]
        getInvoiceById(id:ID!):Invoice
    }
    extend type Mutation {
        createInvoice(
            idClient: ID!
            description: String!
            status: String!
            pdf: String
        ):Invoice,
        updateInvoice(
            description: String!
            status: String!
            pdf: String
        ):Invoice,
        deleteInvoice(
            id : ID!
        ):Invoice,
    }
`