const mongoose = require('mongoose')

const connectDB = async () => {

    try {
        await mongoose.connect('mongodb://127.0.0.1/merndb')
        console.log('>> connect a mongodb')
    } catch (error) {
        console.log(error)
    }
}

module.exports = {connectDB}