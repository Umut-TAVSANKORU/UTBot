const Discord = require('discord.js')

module.exports = {
    name: 'unban',
    execute(message, args){
        let ide = args[0]
        let reason = ''
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('bunun için iznin yok(Hata Kodu:`UNBAN0`)')
        if(message.member.hasPermission("ADMINISTRATOR")){
            if(!ide) return message.channel.send('aradığınız kişiye şu anda ulaşılamıyor(Hata Kodu:`UNBAN1`)')
            if(!ide === message.author.id) return message.channel.send('Sen banlı değilsin.(Hata Kodu:`UNBAN3`)')
            if(args[1]) reason = args.splice(1).join(" ")

            message.guild.members.unban(ide)


            const unBanEmbed = new Discord.MessageEmbed().setTitle(`***BAN KALDIRMA***`).addField('Ban kaldırma sebebi',`*${reason}*`,true).addField('Ban kaldıran',message.author.tag,true).addField('Banı kaldırılan', `<@${ide}>`,true).setColor('#000999').setTimestamp()

            if(!ide.bot){
                message.channel.send(unBanEmbed)
            }
        }
    }
}