import UserSchema from './user.schema'
import { SchemaLink } from 'apollo-link-schema'
import testSchema from './test.schema'

export default [
    UserSchema,
    testSchema
]
