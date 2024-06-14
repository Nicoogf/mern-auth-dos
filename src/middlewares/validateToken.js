import jwt from "jsonwebtoken" ;
import { TOKEN_SECRET } from "../config.js";

export const authRequired = ( req ,res, next) => {
    const { token } = req.cookies
    if(!token) return res.status(401).json({message : "Usuario no autorizado, no se encontro token"})

        jwt.verify( token , TOKEN_SECRET , (err , user) => {
            //Va a devolver los datos del usuario guardados en el token en caso de que sean validos
            if(err) return res.status(403).json({message: "El token es invalido"})
            req.user = user ;
        next() ;
        })
}