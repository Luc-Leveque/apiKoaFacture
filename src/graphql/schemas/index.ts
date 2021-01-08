import UserSchema from './user.schema'
import { SchemaLink } from 'apollo-link-schema'
import ClientSchema from './client.schema'
import InvoiceSchema from './invoice.schema'


export default [
    UserSchema,
    ClientSchema,
    InvoiceSchema
]
