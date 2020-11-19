const mongoose = require('mongoose')
const msSchema = {
    _id: {
        type: String,
        required: true
    },
    messageCount: {
        type: Number,
        required: true
    }
}

module.exports = mongoose.model('message counts', msSchema)