import mongoose from "mongoose"

interface Itest extends mongoose.Document { // à définir a part typé pour typescript
    email: string,
    firstName: String,
    lastName: String,
}

const testShema = new mongoose.Schema({
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
})

const Test = mongoose.model<Itest>('Test', testShema);

export default Test