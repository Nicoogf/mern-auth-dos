import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    username: {
        type: String ,
        required : true ,
        unique: true,
        trim : true
    },
    password : { 
        type : String,
        required: true ,
        trim: true
    },
    cuentaBancaria:{
        type: Number,
        default : 0
    }
})