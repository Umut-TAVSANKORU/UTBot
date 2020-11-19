const Discord = require('discord.js')

module.exports = {
    name: 'whois',
    async run(message, args){
        let mentionedUser = message.mentions.users.first()

        if(!mentionedUser){
            const uEmbed = new Discord.MessageEmbed().setTitle(`Senin hakkında bilgi ${message.member.displayName}`).setColor('#000999').setThumbnail(message.author.displayAvatarURL()).setDescription(message.author.id).addFields({
                name: 'Aslında:',
                value: message.author.tag,
                inline: true
            },{
                name: 'Sunucuya katıldın:',
                value: new Date(message.member.joinedTimestamp).toLocaleDateString(),
                inline: true
            },{
                name: 'Discord seni gördü:',
                value: new Date(message.author.createdTimestamp).toLocaleDateString(),
                inline: true
            })

            message.channel.send(uEmbed)
            return
        }
        let memberName = client.users.cache.get(mentionedUser.id)

        const whoEmbed = new Discord.MessageEmbed().setTitle(`İşte ${memberName.displayName}`).setThumbnail(mentionedUser.displayAvatarURL()).setDescription(`Eğer ihtiyacın varsa ID'si: ${mentionedUser.id}`).setColor('#000999').addFields({
            name: 'Tamamıyla:',
            value: mentionedUser.tag,
            inline: true
        },{
            name: 'Bot mu:',
            value: mentionedUser.bot,
            inline: true
        },{
            name: 'Sunucuya katıldı:',
            value: new Date(mentionedUser.joinedTimestamp).toLocaleDateString(),
            inline: true
        },{
            name: 'Discord hesabını oluşturdu:',
            value: new Date(mentionedUser.createdTimestamp).toLocaleDateString(),
            inline: true
        })

        message.channel.send(whoEmbed)
    }
}