const {z} = require('zod')

const registerSchema = z.object({
    username: z.string({
        required_error: 'Usuario requerido'
    }),
    email: z.string({
        required_error: "Email requerido"
    }).email({
        message: "Email invalido"
    }),
    password: z.string({
        required_error: "Contraseña requerida"
    }).min(6, "La contraseña debe de tener al menos 6 caracteres")
})

const loginSchema = z.object({
    email: z.string({
        required_error: "Email requerido"
    }).email({
        message: "Email invalido"
    }),
    password: z.string({
        required_error: "Contraseña requerida"
    }).min(6, "La contraseña debe de tener al menos 6 caracteres")
})

module.exports = {registerSchema, loginSchema}