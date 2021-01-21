import mongoose from "mongoose"

interface Iclient extends mongoose.Document { 
    name: String,
    siret: String,
    address: String,
    email: String,
    phoneNumber: String,
    idInvoice:[{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'InvoiceFactureKoa'
    }]
}

const clientSchema = new mongoose.Schema({
    name: {
        type: String,
        required : true
    },
    address: {
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
    idInvoice: [{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'InvoiceFactureKoa',
        default: []
    }]
})

const Client = mongoose.model<Iclient>('ClientsFactureKoa', clientSchema);

export default Client