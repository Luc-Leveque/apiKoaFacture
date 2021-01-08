import mongoose from "mongoose"

interface Iuser extends mongoose.Document { // à définir a part typé pour typescript
    email: string,
    firstName: String,
    lastName: String,
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
})

const User = mongoose.model<Iuser>('UserFactureKoa', userSchema);

export default User