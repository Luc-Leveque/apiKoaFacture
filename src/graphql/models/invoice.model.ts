import mongoose from "mongoose"

interface Invoice extends mongoose.Document { 
    status: String,
    date: String,
    products: [{
        title: String,
        qte: String,
        price: String
    }]
}

const ProductSchema = new mongoose.Schema({ 
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