import mongoose from "mongoose";

class MongoService {

    public dbUri:string;

    constructor(dbUri:string){
        this.dbUri=dbUri
    }

    public connectDb(): void {
        mongoose.connect(this.dbUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then(
            () => {
                return console.log("db connected")
            },
            (err) => {
                console.log(err)
            }
        )
    }
}

export const mongoService: MongoService = new MongoService('mongodb+srv://luc-leveque:eDVgCGoKsVofYoHC@cluster0-a9mak.mongodb.net/playground') 