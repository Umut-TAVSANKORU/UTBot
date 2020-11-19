const Discord = require('discord.js')

module.exports = {
    name: 'kdv',
    description: 'vergi kınk',
    execute(message, args){
        let normalprice = Number(args[0])
        let kdv = Number(args[1])

        const kdvMaths = normalprice / 100 * kdv + normalprice
        const kdvEmbed = new Discord.MessageEmbed().setTitle(`kdvli fiyat: ${kdvMaths}`)
        .setDescription(`*normal fiyat:* **${normalprice}** *formül:* **${normalprice} / 100 x ${kdv} + ${normalprice}**`)

        message.author.send(kdvEmbed)
        message.channel.send(`*vergili fiyat:* **${kdvMaths}** *normal fiyat:* **${normalprice}**`)
    }
}