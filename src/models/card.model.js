import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
    empresa :{
        type:String,
        required:true
    },
    tipo:{
        type:String,
        default: "debito"
    },
    fondos:{
        type: Number,
        default: 200000
    }
})

export default mongoose.model("Card" , cardSchema) ;