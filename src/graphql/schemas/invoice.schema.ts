import { gql } from 'apollo-server-koa';

export default gql`
    type Product {
        title: String
        qte: Int
        price: Int
    }
    type Invoice {
        id: ID!
        status: String!
        products: [Product!]!
        date : String!
    }
    input InvoiceInput{
        title: String!
        qte: Int!,
        price: Int!
    }
    extend type Query {
        getInvoices:[Invoice]
        getInvoiceById(id:ID!):Invoice
    }
    extend type Mutation {
        createInvoice(
            idClient: ID!
            status: String!
            data: [InvoiceInput!]!
            date : String!
        ):Invoice,
        updateInvoice(
            idInvoice: ID!
            status: String!
            data: [InvoiceInput!]!
            date : String!
        ):Invoice,
        deleteInvoice(
            id : ID!
        ):Invoice,
    }
`