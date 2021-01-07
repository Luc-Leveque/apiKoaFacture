"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoService = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
class MongoService {
    constructor(dbUri) {
        this.dbUri = dbUri;
    }
    connectDb() {
        mongoose_1.default.connect(this.dbUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then(() => {
            return console.log("db connected");
        }, (err) => {
            console.log(err);
        });
    }
}
exports.mongoService = new MongoService('mongodb+srv://luc-leveque:eDVgCGoKsVofYoHC@cluster0-a9mak.mongodb.net/playground');
//# sourceMappingURL=mongoose.services.js.map