const Discord = require('discord.js')

const TPEmbed = new Discord.MessageEmbed().setTitle('Al sana cevapların')
.setDescription('Bu türkçenin paragraf sorusunun cevabı')
.setColor('#EE3131')
.attachFiles('./txtfiles/türkçeparagraf.txt')

const S1Embed = new Discord.MessageEmbed().setTitle('Umarım doğrudur.')
.setDescription('Bu da sosyal')
.setColor('#FF2E00')
.attachFiles('./txtfiles/sosyal1.txt')

const M1Embed = new Discord.MessageEmbed().setTitle('Hazırlan, çünkü geliyor!')
.setDescription('bu matematik olsa gerek')
.setColor('#000FFF')
.attachFiles('./txtfiles/matematik1.txt')

const F1Embed = new Discord.MessageEmbed().setTitle('Bitti mi? Hayır!')
.setDescription('Bu da fen dersinin 1 numaralı sorusunun cevabı')
.setColor('#00FF36')
.attachFiles('./txtfiles/fen1.txt')

const AllEmbed = new Discord.MessageEmbed().setTitle('son olarak dosya boyutunu küçültüp kullanışlı hale getirdim.')
.setDescription('Hepsi bir arada!Hemde daha anlaşılır bir halde elinin içinde ayrıca boyutu da düşürülmüş.nasıl?')
.setColor('#FEFEFF')
.attachFiles('./txtfiles/cevapkey.txt')

module.exports = {
    name: 'cevaps',
    execute(message, args){
        message.channel.send(TPEmbed)
        message.channel.send(S1Embed)
        message.channel.send(M1Embed)
        message.channel.send(F1Embed)
        message.channel.send(AllEmbed)
    }
}