const Discord = require("discord.js")

module.exports = {
    name: 'renamechannel',
    execute(message, args){
        if(message.member.hasPermissions("MANAGE_CHANNELS")){
            let Name = args[0]

            const renameEmbed = new Discord.MessageEmbed().setTitle(`${message.author.displayName} bu kanalın ismini değiştirdi`).setDescription(`Kanalın yeni ismi:${message.channel.name}`).setColor('#000999').setTimestamp()
    
            message.channel.setName(Name)
            message.channel.send(renameEmbed)
        }
    }
}