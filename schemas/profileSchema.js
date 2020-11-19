const mongoose = require('mongoose')
const reqString = {
    type: String,
    required: true
}
const profileSchema =mongoose.Schema({
    guildID: reqString,
    coins: {
        type: Number,
        required: true
    }
})

module.exports = ('profiles', profileSchema)