const mongoose = require('mongoose')
const reqstring = {
    type: String,
    required: true
}
const suggestSchema = mongoose.Schema({
    _id: reqstring,
    channelID: reqstring
})

module.exports = mongoose.model('suggesteds', suggestSchema)