const mongoose = require('mongoose')

const questionScheme = new mongoose.Schema({
    question:String
})

const questionModel = mongoose.model('questions',questionScheme)

module.exports = questionModel