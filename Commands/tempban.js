const Discord = require('discord.js')

module.exports = {
    name: 'tempban',
    execute(message, args){
        let person = message.guild.member(message.mentions.users.first())
        let reason = ''
        let time = Number(args[1])

        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('bunun için iznin yok(Hata Kodu:`TEMPBAN0`)')
        if(message.member.hasPermission("BAN_MEMBERS")){
            if(!person) return message.channel.send('aradığınız kişiye şu anda ulaşılamıyor(Hata Kodu:`TEMPBAN1`)')
            if(person.hasPermission("ADMINISTRATOR")) return message.channel.send('Aradığınız kişi banlanamaz(Hata Kodu:`TEMPBAN2`)')
            if(!person.id === message.author.id) return message.channel.send('Kendini banlayamazsın.(Hata Kodu:`TEMPBAN3`)')
            if(args[1]) reason = args.splice(2).join(" ")
            if(!time) return message.channel.send('bir süre belirtmeniz gerek(yazacağınız sayı güne eşittir)**Örnek:** *<U>komut @kişi 120 saçma şeyler yaptı*(Hata kodu:`TEMPBAN4`)')
            if(isNaN(time)) return message.channel.send(`${time} herhangi bir sayı değil.(Hata kodu:TEMPBAN5)`)
            if(isNaN(time)) time = parseFloat(args[1])

            person.ban({
                reason: reason,
                time: time
            })

            const tempBanEmbed = new Discord.MessageEmbed().setTitle(`***SÜRELİ BAN***`).addField('Banlanma sebebi',`*${reason}*`,true).addField('Banlayan',message.author.tag,true).addField('Banlanan',person,true).addField(`banlanma süresi`,`${time} gün`,true).setColor('#000999').setTimestamp()

            if(!person.user.bot){
                message.channel.send(tempBanEmbed)
            }
        }
    }
}