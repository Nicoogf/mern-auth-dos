import {z} from "zod"

export const registerSchema =  z.object({
    username: z.string({
        required_error:"El Usuario es requerido"
    }),
    password: z.string({
        required_error:"La contraseña es requerida"
    }).min(6 , {message : "La contraseñas deben tener al menos 6 caracteres"})
})