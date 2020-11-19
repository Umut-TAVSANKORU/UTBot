const Discord = require('discord.js') 

module.exports = {
    name: 'card',
    description: 'kart',
    execute(message, args){
        let person = message.guild.member(message.mentions.users.first())

        if(isNaN(person)){
            const cardEmbed = new Discord.MessageEmbed().setTitle(message.author.displayName).setDescription(message.author.tag).setThumbnail(message.author.displayAvatarURL({dynamic: true, size: 114})).setColor('#000999')
            message.channel.send(cardEmbed)
        }

        const cardmembaEmbed = new Discord.MessageEmbed().setTitle(person.user.displayName).setDescription(person.user.tag).setThumbnail(person.user.displayAvatarURL({dynamic: true, size: 114})).setColor('#000999')

        message.channel.send(cardmembaEmbed)
    }
}