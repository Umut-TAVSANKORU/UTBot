const Discord = require('discord.js')

module.exports = {
    name: 'kick',
    execute(message, args){
        let person = message.guild.member(message.mentions.users.first())
        let reason = ''

        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('bunun için iznin yok(Hata Kodu:`KICK0`)')
        if(message.member.hasPermission("KICK_MEMBERS")){
            if(!person) return message.channel.send('aradığınız kişiye şu anda ulaşılamıyor(Hata Kodu:`KICK1`)')
            if(person.hasPermission("ADMINISTRATOR")) return message.channel.send('Aradığınız kişi atılamaz(Hata Kodu:`KICK2`)')
            if(!person.id === message.author.id) return message.channel.send('Kendini atamazsın.(Hata Kodu:`KICK3`)')
            if(args[1]) reason = args.splice(1).join(" ")

            person.kick({
                reason: reason
            })

            const banEmbed = new Discord.MessageEmbed().setTitle(`***ATMA***`).addField('Atılma sebebi',`*${reason}*`,true).addField('Atan',message.author.tag,true).setColor('#000999').setTimestamp()

            if(!person.user.bot){
                message.channel.send(banEmbed)
            }
        }
    }
}