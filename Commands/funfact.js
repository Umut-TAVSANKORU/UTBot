const Discord = require('discord.js')
const funfact = require('../funfacts.json')
const filter = response => {
    return item.answer.some(answer => answer.toLowerCase() === response.content.toLowerCase())
}

module.exports = {
    name: 'funfact',
    execute(message, args){
        const item = funfact[Math.floor(Math.random() * funfact.length)]
        message.channel.send(item.question).then(() => {
            message.channel.awaitMessages(filter, {max: 1, time: 15000, errors: ['time']}).then((collected) => {
                message.channel.send('tmm')
            }).catch((collected) => {
                message.channel.send('Kimse cevap veremedi galiba?')
            })
        })
    }
}