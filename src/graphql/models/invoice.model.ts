import mongoose from "mongoose"

interface Invoice extends mongoose.Document { 
    description: String,
    status: String,
    pdfLink: String
}

const invoiceSchema = new mongoose.Schema({
    description: {
        type: String,
        required : true
    },
    status: {
        type: String,
        required : true
    },
    pdfLink: {
        type: String,
    }
})

const Invoice = mongoose.model<Invoice>('InvoiceFactureKoa', invoiceSchema);

export default Invoice