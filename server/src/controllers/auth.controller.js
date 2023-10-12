const User = require('../models/user.model')
const bcrypt = require('bcryptjs')
const {createAccessToken} = require('../libs/jwt')
const jwt = require('jsonwebtoken')
const {TOKEN_SECRET} = require('../config')


const register = async (req, res) => {
    const {username, email, password} = req.body

    try {

        const userFound = await User.findOne({email})
 
        if(userFound) return res.status(400).json(["El email ya existe"])

        const hashs = await bcrypt.hash(password, 10)
        
        const newUser = new User({
            username,
            email,
            password: hashs
        })
    
        const userSave = await newUser.save()

        const token = await createAccessToken({id: userSave._id})

        res.cookie("token", token)
        res.json({
            id: userSave._id,
            username: userSave.username,
            email: userSave.email,
            createAt: userSave.createdAt,
            updatedAt: userSave.updatedAt
        })

    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

const login = async (req, res) => {
    const {email, password} = req.body

    try {

        const userFound = await User.findOne({email})

        if (!userFound) return res.status(400).json({message: "Usuario no encontrado"})

        const isMatch = await bcrypt.compare(password, userFound.password)

        if (!isMatch) return res.status(400).json(["Usuario o contaseña no valido"])

        const token = await createAccessToken({id: userFound._id})

        res.cookie("token", token)
        res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
            createAt: userFound.createdAt,
            updatedAt: userFound.updatedAt
        })

    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

const logout = (req, res) => {
    res.cookie('token', '', {
        expires: new Date(0)
    });
    return res.sendStatus(200)
}

const profile = async (req, res) => {

    try {
        
        const userFound = await User.findById(req.user.id)

        if (!userFound) return res.status(400).json({message: "Usuario no encontrado"})

        return res.status(200).json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
            createdAt: userFound.createdAt,
            updatedAt: userFound.updatedAt
        })
        
    } catch (error) {
        return res.status(500).json({message: "Error"})
    }
}

const verifyToken = async (req, res) => {
    const {token} = req.cookies

    if (!token) return res.status(401).json({message: "Acceso denegado"})

    jwt.verify(token, TOKEN_SECRET, async (err, user) => {
        if (err) return res.status(401).json({message: "Acceso denegado"})

        const userFound = await User.findById(user.id)

        if (!userFound) return res.status(401).json({message: "Acceso denegado"})

        return res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email
        })
    })
}

module.exports = {
    register, 
    login,
    logout,
    profile,
    verifyToken
}