const {Router} = require('express')
const {register, login, logout, profile, verifyToken} = require('../controllers/auth.controller')
const {autoRequired} = require('../middlewares/validateToken')
const {validateSchema} = require('../middlewares/validator.middleware')
const {registerSchema, loginSchema} = require('../schemas/auth.schema')


const router = Router()

// Rutas de login/registro
router.post('/register', validateSchema(registerSchema), register)
router.post('/login', validateSchema(loginSchema), login)
router.post('/logout', logout)

router.get('/verify', verifyToken)

router.get('/profile', autoRequired, profile)


module.exports = router 