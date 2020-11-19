const Discord = require('discord.js')

const SocialQuestion1 = new Discord.MessageEmbed().setTitle('1.Arkadaşlık 2.Çocukluk 3.Ablalık 4.Dedelik')
.setDescription('Hangisi aile içinde alınabilecek bir rol değildir?')
.setColor('#FEFEFF')

const SocialA1 = new Discord.MessageEmbed().setTitle('A)1').setColor('#000000')

const SocialB1 = new Discord.MessageEmbed().setTitle('B)2').setColor('#000FFF')

const SocialC1 = new Discord.MessageEmbed().setTitle('C)3').setColor('#FF2E00')

const SocialD1 = new Discord.MessageEmbed().setTitle('D)4').setColor('#00FF36')

module.exports = {
    name: 'sosyal1',
    description: '1 numaralı sosyal sorusu',
    execute(message, args){
        message.channel.send(SocialQuestion1)
        message.channel.send(SocialA1)
        message.channel.send(SocialB1)
        message.channel.send(SocialC1)
        message.channel.send(SocialD1)
    }
}