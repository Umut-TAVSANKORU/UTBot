const Discord = require('discord.js')

module.exports = {
    name: 'ban',
    execute(message, args){
        let person = message.guild.member(message.mentions.users.first())
        let reason = ''

        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('bunun için iznin yok(Hata Kodu:`BAN0`)')
        if(message.member.hasPermission("BAN_MEMBERS")){
            if(!person) return message.channel.send('aradığınız kişiye şu anda ulaşılamıyor(Hata Kodu:`BAN1`)')
            if(person.hasPermission("ADMINISTRATOR")) return message.channel.send('Aradığınız kişi banlanamaz(Hata Kodu:`BAN2`)')
            if(!person.id === message.author.id) return message.channel.send('Kendini banlayamazsın.(Hata Kodu:`BAN3`)')
            if(args[1]) reason = args.splice(1).join(" ")
            if(!time) return message.channel.send('bir süre belirtmeniz gerek(yazacağınız sayı güne eşittir)**Örnek:** *<U>komut @kişi 120 saçma şeyler yaptı*(Hata kodu:`BAN4`)')
            if(person.bot) return message.channel.send('botları banlayamazsın')
            if(message.author.bot) return message.channel.send('Botlar banlayamaz')
            person.ban({
                reason: reason,
            })

            const banEmbed = new Discord.MessageEmbed().setTitle(`***BAN***`).addField('Banlanma sebebi',`*${reason}*`,true).addField('Banlayan',message.author.tag,true).addField('Banlanan',person,true).setColor('#000999').setTimestamp()

            message.channel.send(banEmbed)
        }
    }
}