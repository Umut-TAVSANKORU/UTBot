const translateAPI = require("@k3rn31p4nic/google-translate-api")
const Discord = require("discord.js")

module.exports = {
    name: 'translate',
    description: 'Yazdıklarınızı çevirmek için discord\'tan çıkmanıza gerek yok',
    async run(message, args){
        let fromThis = args[0]
        let toThis = args[1]
        let Iwilltranslatethis = args.splice(2).join(" ")
        
        if(!fromThis){
            message.channel.send('İlk dili girin.(Örnek: `<U>gtranslate tr(bu dilden çevrilir) en(bu dile çevrilir) merhaba arkadaşlar(o 2 dilden sonra gelen herşey çevrilicektir.) `)')
        }else if(!toThis){
            message.channel.send('ikinci dili gir.')
        }else if(!Iwilltranslatethis){
            message.channel.send('Çevrilecek yazıyı girin.')
        }else{
            const resulation = await translateAPI(Iwilltranslatethis, {from: fromThis, to: toThis})
            const translateEmbed = new Discord.MessageEmbed().setTitle('Google çeviri sonuçları').setDescription('Google çeviri sonuçlarına sadece kelime çevirmiyorsanız lütfen güvenmeyin.').setColor("RANDOM").setTimestamp().addFields({
                name: `Çevrilen(${fromThis})`,
                value: Iwilltranslatethis,
                inline: true
            },{
                name: `Çeviri(${toThis})`,
                value: resulation.text,
                inline: true
            })

            message.channel.send(translateEmbed)
        }
    }
}