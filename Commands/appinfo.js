const Discord = require('discord.js')
const packageInfo = require('../package.json')

module.exports = {
    name: 'appinfo',
    execute(message, args){
        const infEmbed = new Discord.MessageEmbed().setTitle(packageInfo.name).setAuthor(packageInfo.author).setColor("RANDOM").setDescription(packageInfo.description).setFooter(`Lisans: ${packageInfo.license}`)
        message.channel.send(infEmbed)
    }
}