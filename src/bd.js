import mongoose from "mongoose";

export const ConnectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/nueva-data-base") 
        console.log(">>>> Conexion exitosa a la base de datos")
    } catch (error) {
        console.log( error )
    }    
}