import mongoose from "mongoose"

interface Iclient extends mongoose.Document { 
    name: String,
    siret: String,
    address: String,
    email: String,
    phoneNumber: String,
    logo: String
}

const testShema = new mongoose.Schema({
    name: {
        type: String,
        required : true
    },
    siret: {
        type: String,
        required : true
    },
    email: {
        type: String,
        required : true
    },
    phoneNumber: {
        type: String,
        required : true
    },
    logo: {
        type: String,
        required : true
    },
})

const Client = mongoose.model<Iclient>('ClientFactureKoa', testShema);

export default Client