const Discord = require("discord.js")

module.exports = {
    name: 'lastmessage',
    execute(message, args){
        let memr = message.mentions.users.first()
        if(memr.lastMessage == null){
            const Collector = new Discord.MessageCollector(message.guild, m => m.author.id === memr.id,{time: 10000})
            message.channel.send('Aradığınız kişinin mesajı bulunamadı.Aranıyor(10 saniye)')
            Collector.on('collect', m => {
                message.channel.send(`Yeni mesaj görüldü: ${m.content}`)
                Collector.stop("here it comes")
            })
        }else{
            if(!memr){
                message.channel.send('NANİ')
            }else{
                message.channel.send(`${memr.displayName} adlı ${message.guild.name} üyesinin son mesajı: "**${memr.lastMessage}**"`)
            }
        }
    }
}