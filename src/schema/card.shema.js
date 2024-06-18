import { z } from "zod"

export const validateCardSchema = z.object({
    empresa: z.string({required_error: "Ingresar nombre para identificar la Tarjeta"})
})