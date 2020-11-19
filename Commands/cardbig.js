const Discord = require('discord.js')

module.exports = {
    name: 'cardbig',
    description: 'kartbüyük',
    execute(message, args){
        const member = message.author.id

        const cardbigEmbed = new Discord.MessageEmbed().setTitle(message.member.displayName).setDescription(message.author.tag).setImage(message.author.displayAvatarURL()).setColor('#000999')

        message.channel.send(cardbigEmbed)
    }
}