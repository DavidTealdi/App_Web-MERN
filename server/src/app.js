const express = require('express')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const authRouter = require('./routes/auth.routes')
const taskRouter = require('./routes/tasks.routes')

const app = express()

app.use(cors({
    origin: 'http://localhost:5173'
}))
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())

app.use('/api', authRouter)
app.use('/api', taskRouter)

module.exports = app