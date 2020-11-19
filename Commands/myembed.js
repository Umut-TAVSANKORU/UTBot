const Discord = require('discord.js')

module.exports = {
    name: 'myembed',
    description: 'senin embedin',
    execute(message, args){
        let title = args[0]
        let description = args[1]
        let thumbnail = args[2]
        let color = args[3]
        
        const yourEmbed = new Discord.MessageEmbed().setTitle(title).setDescription(description).setThumbnail(thumbnail).setColor(color)

        message.channel.send('özelden gelmiş olsa gerek! bu arada başlık = ilk değişken açıklama = ikinci değişken resim = üçüncü değişken(link olarak atman gerek) renk = dördüncü değişken(başındaki # işareti dahil hex kodu olarak atman gerek)')
        message.author.send(yourEmbed)
    }
}