const mongoose  = require('mongoose')

const characterSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number,
    class: String,
    subClass: String
})

module.exports = mongoose.model('Character', characterSchema)