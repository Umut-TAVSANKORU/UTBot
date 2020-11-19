const Discord = require('discord.js')
const { version } = require('../package.json')

module.exports = {
    name: 'test',
    description: 'hello main',
    execute(message, args, client){
        let testMessage = args.splice(0).join(" ")
        if(!testMessage){
            const testEmbed = new Discord.MessageEmbed().setTitle('test çalışıyor').setDescription(`${message.author.displayName} tarafından test`).setColor("RANDOM").setThumbnail(message.author.displayAvatarURL()).setFooter(`${message.author.tag} UTBot ${version}`)
            message.channel.send(testEmbed)
        }else{
            message.channel.send(`UTBot versiyon ${version}.Cevap pingi: ${Date.now() - message.createdTimestamp} API pingi: ${Math.round(client.ws.ping)}`).then(() => {
                message.channel.send(`Test mesajı: ${testMessage}`)
            })
        }
    }
}