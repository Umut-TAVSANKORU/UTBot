const mongo = require('../mongo')
const mongoose = require('mongoose')
const msSchema = require('../schemas/msSchema')

module.exports = (client) => {
    client.on('message', async(message) => {
        await mongo().then(async(mongoose) => {
            try{
                await msSchema.findOneAndUpdate({
                    _id: message.author.id,
                },{
                    $inc: {
                        'messageCount': 1
                    }
                },{
                    upsert: true
                }).execute()
            }finally{
                mongoose.connection.close()
            }
        })
    })
}