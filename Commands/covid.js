const fetch = require("node-fetch")
const Discord = require("discord.js")
const transAPI = require("@k3rn31p4nic/google-translate-api")

module.exports = {
    name: "covid",
    description: "korona virüsün ne kadar yükseldiğini görün",
    async execute(message, args){
        let counters = args.join(" ")
        const countertoenglish = await transAPI(counters, {from: "tr", to: "en"})
        if(!counters){
            fetch("https://covid19.mathdro.id/api")
            .then(response => response.json())
            .then(data => {
                let cases = data.confirmed.value.toLocaleString()
                let recovers = data.recovered.value.toLocaleString()
                let death = data.deaths.value.toLocaleString()

                const WorldWideCovidEMBED = new Discord.MessageEmbed().setTitle("Dünyada korona virüs").setDescription("Bilgiler bana ait değildir").setColor("#000999").addFields({
                    name: "Vaka sayısı(Doğrulanmış)",
                    value: cases,
                    inline: true
                },{
                    name: "İyileşenler",
                    value: recovers,
                    inline: true
                },{
                    name: "Ölenler",
                    value: death,
                    inline: true
                })

                message.channel.send(WorldWideCovidEMBED)
            })
        }else{
            fetch(`https://covid19.mathdro.id/api/countries/${countertoenglish.text}`)
            .then(response => response.json())
            .then(data => {
                let cases = data.confirmed.value.toLocaleString()
                let recovers = data.recovered.value.toLocaleString()
                let death = data.deaths.value.toLocaleString()

                const CovidEmbed = new Discord.MessageEmbed().setTitle(`${counters} ülkesi için korona`).setColor("#000999").setDescription("Bilgiler bana ait değildir").addFields({
                    name: "Vaka sayısı(Doğrulanmış)",
                    value: cases,
                    inline: true
                },{
                    name: "İyileşenler",
                    value: recovers,
                    inline: true
                },{
                    name: "Ölenler",
                    value: death,
                    inline: true
                })

                message.channel.send(CovidEmbed)
            }).catch(err => {
                message.channel.send(`Girdiğiniz "~~${counters}~~" bir ülke veya geçerli bir ülke değil.Doğru yazdığınızdan emin olup tekrar deneyin`)
            })
        }
    }
}