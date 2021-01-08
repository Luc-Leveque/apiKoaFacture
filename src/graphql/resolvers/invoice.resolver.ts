import Invoice from "../models/invoice.model";
import Koa from "koa"
import Client from "../models/client.model";

export default {
    Query: {
        getInvoices: async () => {
            try {
                return await Invoice.find()
            } catch (error) {
                throw new Error(error)
            }
        },
        getInvoiceById: async (parents:any, args: any) => {
            try {
                return await Invoice.findById(args.id)
            } catch (error) {
                throw new Error(error)
            }
        }
    },
    Mutation: {
        createInvoice: async (parents:any ,args: any) => {
            try {
                let invoice = new Invoice({
                    description:args.description,
                    status:args.status
                })
                await Client.findById(args.idClient).populate('ClientsFactureKoa').
                exec(function (err, client) {
                    if (err) throw err;
                    if (!client) throw "Not Found";
                    client.idInvoice.push(invoice._id); 
                    client.save();
                });
                return await invoice.save()
            } catch (error) {
                throw new Error(error)
            }
        },
        updateInvoice: async (parents:any , args: any) => {
            try {
                return Invoice.findByIdAndUpdate(
                args.id,
                {
                    description:args.description,
                    status:args.status,
                    pdfLink:args.pdfLink
                })
            } catch (error) {
                throw new Error(error)
            }
        },
        deleteInvoice: async (parents:any, args: any) => {
            try {
                return await Invoice.findByIdAndDelete(args.id)
            } catch (error) {
                throw new Error(error)
            }
        },
    }
}

