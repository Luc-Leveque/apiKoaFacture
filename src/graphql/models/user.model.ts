import mongoose from "mongoose"

interface Iuser extends mongoose.Document { // à définir a part typé pour typescript
    email: string,
    firstName: String,
    lastName: String,
    societe: String,
    codePostal: String,
    ville: String,
    adresse: String
}

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required : true
    },
    lastName: {
        type: String,
        required : true
    },
    email: {
        type: String,
        required : true
    },
    societe: {
        type: String,
        required : true
    },
    codePostal: {
        type: String,
        required : true
    },
    ville: {
        type: String,
        required : true
    },
    adresse: {
        type: String,
        required : true
    },
})

const User = mongoose.model<Iuser>('UserFactureKoa', userSchema);

export default User