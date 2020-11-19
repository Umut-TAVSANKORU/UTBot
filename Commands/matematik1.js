const Discord = require('discord.js');

const MathsQuestion1 = new Discord.MessageEmbed().setTitle('(145/5+1)x4').setColor('#FEFEFF');

const MathsA1 = new Discord.MessageEmbed().setTitle('A) 90').setColor('#000000');

const MathsB1 = new Discord.MessageEmbed().setTitle('B) 120').setColor('#000FFF');

const MathsC1 = new Discord.MessageEmbed().setTitle('C) 40').setColor('#FF2E00');

const MathsD1 = new Discord.MessageEmbed().setTitle('D) 39').setColor('#00FF36');

module.exports = {
    name: 'matematik1',
    description: '1 numaralı matematik sorusu',
    execute(message, args){
        message.channel.send(MathsQuestion1)
        message.channel.send(MathsA1)
        message.channel.send(MathsB1)
        message.channel.send(MathsC1)
        message.channel.send(MathsD1)
    }
}