const config = require('../config.json')

module.exports = {
    name: 'makenew',
    execute(message, args){
        if(message.member.hasPermission("MANAGE_CHANNELS")){
            if(!args[0]) return message.channel.send('Kanal ismi yok.Orijinal kanal ismi kullanılıyor'), message.guild.channels.create(config.forcommands.classicname, {type: 'text'})
            message.guild.channels.create(args.slice(0).join(" "), {type: 'text'}), message.channel.send('hazır, bakabilirsin')
        }else{
            message.channel.send('EEE şey biraz abartmadın mı?Önce bir "Kanalları yönetme" iznin olsaydı güzel olabilirdi.Yani.')
        }
    }
}