const Discord = require('discord.js')
const ytdl = require('ytdl-core')



module.exports = {
    name: 'play',
    async run(message, args){
        let tag = args[0]
        const endEmbed = new Discord.MessageEmbed().setTitle('Dinleme partisi sona erdi').setDescription('Umarım eğlenmişsinizdir').setFooter('Ceviz Ağacı[1987](Cem Karaca,Nazım Hikmet Ran){5:49}').setColor('#000999')
        const playEr = new Discord.MessageEmbed().setTitle('Şarkı başlıyor').setDescription('Şurayada minik bir not:UTBot youtube linkinin bir çoğunu alır.\n\nSiz sadece watch=v sonrasında gelen kısmı yazmalısınız.').setColor('#000999')
        const errorEmbed = new Discord.MessageEmbed().setTitle('Hatalı kullanım').setDescription('Öncelikle ses odasına girmen gerek').setColor("RED")

        if(!message.member.voice.channel){
            message.channel.send(errorEmbed)
        }else{ 
            const connection = await message.member.voice.channel.join()
            const dispatcher = connection.play(ytdl(`https://www.youtube.com/watch?v=${tag}`, {filter: 'audioonly'}), {
                volume: 0.5
            })
            message.channel.send(playEr)
            dispatcher.on('finish', () => {
                message.channel.send(endEmbed)
            })
            dispatcher.destroy()
        }
    }
}