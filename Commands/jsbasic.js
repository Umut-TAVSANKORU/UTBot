const Discord = require('discord.js')

const basicCodeEmbed1 = new Discord.MessageEmbed().setTitle('Kolay kodlama dersi')
.setDescription('Başlamadan önce yapmanız gereken şeyler var.')
.addFields({
    name: 'node.js sitesie gidin',
    description: 'node.js bilgisayarınıza indirip kurun',
    inline: false
},
{
    name: 'istediğiniz bir kodlama programını yükleyin',
    description: 'herhangi birsini bilmiorsanız **visual studio code** doğru bir seçim olacaktır.',
    inline:false
},
{
    name: 'artık programları kurduk',
    description: 'bir klasör oluşturuyoruz.onu açıp klasör yolunun olduğu bölümü silip **cmd** yazıyoruz.siyah bir program çıkmalı.biz buna komut istemcisi deriz',
    inline:false
},{
    name: 'şimdi buraya **npm init** yazıyoruz ve entera basıyoruz.',
    description: 'burada ayarlamamız gereken birşey yok, ama isterseniz name = proje adı,description = açıklama,main = ana dosyamızın adı,author = yazpan kişinin ismi',
    inline:false
},{
    name: 'artık hazır gibi görünüyoruz.ama henüz değiliz.',
    description: 'komut istemcimizi kapatmadan önce **npm i discord.js** yazıyoruz',
    inline:false
},
{
    name: 'klasörümüzü visual studio code ile açıyoruz',
    description: 've ana dosyamıza gidiyoruz.dosya bir .js olması gerek',
    inline:false
},
{
    name: 'şimdi yazmamız gereken şeyler var',
    description: 'bu listeyi aşağıda bulabilirsiniz',
    inline:false
},
{
    name: 'üst kısımdaki terminal öğesini buluyoruz',
    description: 'ona tıklayıp açılan kısımdan new terminal diyoruz',
    inline: false
},
{
    name: 've son olarak **node .** yazıyoruz',
    description: 'eğer olduysa,bir satır görünecek, ve bu bizim ayarladığımız açılış satırı olacak',
    inline:false
})

const basikjsAtt = new Discord.MessageAttachment('./txtfiles/yazılması-gerekenler.js')

module.exports = {
    name: 'jsbasic',
    description: 'get javascripted lol',
    execute(message, args){
        message.channel.send('kodlama derslerine hoşgeldiniz')
        message.channel.send('discord developer portala girip uygulama oluşturup yeni bir bot açıyoruz')
        message.channel.send(basicCodeEmbed1)
        message.channel.send(basikjsAtt)
    }
}