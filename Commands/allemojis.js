const Discord = require('discord.js')

module.exports = {
    name: "allemojis",
    description: "sunucunun tüm emojilerini görüntüleyin",
    execute(client, message, args){
        let Emojis = ""
        let AnimatedEmojis = ""
        let EmojiCount = 0
        let AnimatedEmoji = 0
        let FullEmojis = 0

        function EmojiGet(id, client){
            return client.emojis.cache.get(id).toString()
        }

        message.guild.emojis.cache.forEach((emoji) => {
            ++FullEmojis
            if (emoji.animated) {
                ++AnimatedEmoji
                AnimatedEmojis+=EmojiGet(emoji.id, client)
            } else {
                ++EmojiCount
                Emojis+=EmojiGet(emoji.id, client)
            }
        })

        const EmojiEmbed = new Discord.MessageEmbed().setTitle(`${message.guild.name} adlı sunucunun tüm emojileri`).setDescription(`${FullEmojis} içinden ${EmojiCount} tanesi normal ${AnimatedEmoji} tanesi animasyonlu emoji`).addFields({
            name: `Normal emojiler[${EmojiCount}]`,
            value: `(${Emojis})`
        },{
            name: `Animasyonlu emojiler[${AnimatedEmoji}]`,
            value: `{${AnimatedEmojis}}`
        }).setColor("RANDOM")

        message.channel.send(EmojiEmbed)
    }
}