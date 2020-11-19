const Discord = require('discord.js');

const EnglishEmbed = new Discord.MessageEmbed().setTitle('Nurfer Tavşankoru İngilizce Öğretmeni').setURL('https://www.youtube.com/channel/UCeOCa-comESpScdTWbelmuQ').setColor('#EE3131');

module.exports = {
    name: 'ingilizce',
    description: 'ingilizce severem',
    execute(message, args){
        message.channel.send(EnglishEmbed)
    }
}