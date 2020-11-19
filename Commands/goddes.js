const Discord = require('discord.js')

module.exports = {
    name: 'goddes',
    description: 'sdjflajskldfklasdfjşsaldjfşlskdfjlasdşkf',
    execute(message, args){
        let perNam = args[0]

        const Message_Embed = new Discord.MessageEmbed().setTitle(`canım ${perNam},`)
        .setDescription('bunu bir hediye olarak kabul eder misin?')
        .setColor('#6EF0FF')
        .setThumbnail("https://cdn.discordapp.com/attachments/757556023228760084/765885515182374912/kalp.png")

        if(perNam == 'UTBot'){
            message.channel.send('ay çok naziksin...')
        }
        if(perNam != 'UTBot'){
            message.author.send(Message_Embed)
            message.channel.send('ekran fotosunu alıp sevdiğin kişiye atabilirsin')
        }
    }
}