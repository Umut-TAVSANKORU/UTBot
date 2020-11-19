const Discord = require('discord.js');

const TurkishQuestionP = new Discord.MessageEmbed().setTitle('(...)Onun durumuna üzülerek onu yanına aldı ve eve götürdü. Kediye şefkatle yaklaşıp durumuna baktı.(...)')
.setDescription('BU PARAGRAFTAKİ DUYGU NEDİR?')
.setColor('#FEFEFF');

const TurkishAP = new Discord.MessageEmbed().setTitle('A)ŞeFkAt').setColor('#000009');

const TurkishBP = new Discord.MessageEmbed().setTitle('B)Mutluluk').setColor('#000FFF');

const TurkishCP = new Discord.MessageEmbed().setTitle('C)Sevgi').setColor('#FF2E00');

const TurkishDP = new Discord.MessageEmbed().setTitle('D)Umut').setColor('#00FF36');

module.exports = {
    name: 'türkçeparagraf',
    description: 'türkçe paragraf sorusu',
    execute(message, args){
        message.channel.send(TurkishQuestionP)
        message.channel.send(TurkishAP)
        message.channel.send(TurkishBP)
        message.channel.send(TurkishCP)
        message.channel.send(TurkishDP)
        message.channel.send('sorunun cevabını <U>cevaplar yazarak bulabilirsiniz.')
    }
}