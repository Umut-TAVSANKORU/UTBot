const Discord = require('discord.js')
const suggestSchema = require('../schemas/suggestSchema')

module.exports = {
    name: 'setsuggest',
    async run(message, args){
        await suggestSchema.findOneAndUpdate({
            _id: message.guild.id
        }, {
            _id: message.guild.id,
            channelID: message.channel.id
        }, {
            upsert: true
        })

        message.channel.send(`Soru kanalı bura olarak başarıyla ayarlandı.`)
    }
}