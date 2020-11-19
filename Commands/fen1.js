const Discord = require('discord.js')

const ScienceQuestion1 = new Discord.MessageEmbed().setTitle('1.Kraterler 2.Evreler 3.Hep aynı yüzün görülmesi')
.setDescription('Bunların hangisi veya hangileri ayın hareketleri sonucu oluşur?')
.setColor('#FEFEFF')

const ScienceA1 = new Discord.MessageEmbed().setTitle('A)Yanlız 1').setColor('#000000')

const ScienceB1 = new Discord.MessageEmbed().setTitle('B)1 ve 3').setColor('#000FFF')

const ScienceC1 = new Discord.MessageEmbed().setTitle('C)Yanlız 3').setColor('#FF2E00')

const ScienceD1 = new Discord.MessageEmbed().setTitle('D)2 ve 3').setColor('00FF36')

module.exports = {
    name: 'fen1',
    description: '1 numaralı fen sorusu',
    execute(message, args){
        message.channel.send(ScienceQuestion1)
        message.channel.send(ScienceA1)
        message.channel.send(ScienceB1)
        message.channel.send(ScienceC1)
        message.channel.send(ScienceD1)
    }
}