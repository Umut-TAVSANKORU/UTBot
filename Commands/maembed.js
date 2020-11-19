const Discord = require('discord.js')

module.exports = {
    name: 'maembed',
    description: 'yurembed',
    execute(message, args){
        let one = args[0]
        let two = args[1]
        let three = args[2]
        let four = args[3]
        let five = args[4]

        const meinEmbed = new Discord.MessageEmbed().setTitle(one).setDescription(two).setThumbnail(three).setImage(four).setColor(five)

        message.channel.send('genelini biliyorsun, ama üçüncü değişken = minik yandak resim dördüncü değişken = aşağıdakı büyük resim')
        message.author.send(meinEmbed)
    }
}