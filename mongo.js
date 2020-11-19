const mongoose = require('mongoose')
const config = require('./config.json')
const local = config.Utconfig.LocalHost

module.exports = async() => {
    await mongoose.connect(local, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    return mongoose
}