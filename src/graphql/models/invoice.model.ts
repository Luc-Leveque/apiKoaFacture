import mongoose from "mongoose"

interface Invoice extends mongoose.Document {
    description: String,
    status: String,
    date: String,
    products: [{
        title: String,
        qte: String,
        price: String
    }]
}

const ProductSchema = new mongoose.Schema({
    description: {
        type: String
    },
    title: {
        type: String
    },
    qte: {
        type: Number
    },
    price: {
        type: Number
    }
});

const invoiceSchema = new mongoose.Schema({
    description: {
        type: String,
        required : true
    },
    status: {
        type: String,
        required : true
    },
    date: {
        type: String,
        required : true
    },
    products: {
        type: [ProductSchema]
    }
})

const Invoice = mongoose.model<Invoice>('InvoiceFactureKoa', invoiceSchema);

export default Invoice