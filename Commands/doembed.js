const Discord = require("discord.js")

module.exports = {
    name: 'doembed',
    description: 'yöntem iki',
    execute(message, args){
        let up = args[0]
        let down = args[1]
        let left = args[2]
        let right = args[3]

        const urEmbed = new Discord.MessageEmbed().setTitle(up).setDescription(down).setImage(left).setColor(right)

        message.channel.send('geldi sanırım')
        message.author.send(urEmbed)
    }
}