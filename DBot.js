const fs = require('fs')
const Discord = require('discord.js')
const client = new Discord.Client()
const Data = require('./config.json');
const mongo = require('./mongo');
const packageInfo = require('./package.json')
let thesourcevote = 0

function closeClient(client, whiteID, message, args){
  let whyClose = args.splice(0).join(" ")
  if(message.author.id = whiteID){
    message.channel.send(`Bot ${client.uptime / 1000} saniye sonra kapatılıyor.`).then(() => {
      console.log(`Bot closed(${whyClose}) after ${client.uptime / 1000} seconds runtime.`)
        client.destroy()
    })
  }else{
    message.channel.send('Bot sadece beyaz listede olan kişi tarafından kapatılabilir.')
  }
}function restartClient(client, whiteID, message, config){
  if(message.author.id === whiteID){
    message.channel.send('Bot yeniden başlatılıyor...').then(() => {
      console.log(`restarting the bot after ${client.uptime / 1000} seconds`)
        client.destroy()
          client.login(config.token).then(() => {
            console.log('Bot restarted!')
            message.channel.send('Bot yeniden başlatıldı!')
          })
    })
  }else{
    message.channel.send('Bot sadece beyaz listede olan kişi tarafından yeniden başlatılabilir.')
  }
}

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', async(ready) => {
  console.log(`Hello world(UTBot version ${packageInfo.version})`)

  await mongo().then(mongoose => {
    try{
      console.log('connected succesfully to mongo local')
    }finally{
      mongoose.connection.close()
    }
  })
})

client.on('voiceStateUpdate', (oldState, newState) => {
  const logChannel = newState.guild.channels.cache.get('743196613882675253')
  try{
    logChannel.send(`${newState.member.displayName} ${newState.channel.name} kanalına katıldı.`)
  }catch(err){
    logChannel.send(`${oldState.member.displayName} ${newState.channel.name} kanalına katıldı.`)
  }
})

client.on('message', message => {
  try{
    if(!message.content.startsWith(Data.prefix)) return
    if(message.author.bot) return message.channel.send('Ben botlara cevap vermiyorum karşim')
    if(!message.guild) return message.channel.send('Sadece sunucudan gelen mesajlara yanıt verebiliyorum, bi sunucuya gitsen?')
    
    const args = message.content.slice(Data.prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    if(command === 'test'){
      client.commands.get('test').execute(message, args, client);
    }else if(command === 'at'){
      client.commands.get('kick').execute(message, args)
    }else if(command === 'sban'){
      client.commands.get('tempban').execute(message, args)
    }else if(command === 'hesapla'){
      client.commands.get('calculat').execute(message, args)
    }else if(command === 'sosyal1'){
    client.commands.get('sosyal1').execute(message, args)
    }else if(command === 'fen1'){
      client.commands.get('fen1').execute(message, args)
    }else if(command === 'matematik1'){
      client.commands.get('matematik1').execute(message, args)
    }else if(command === 'türkçeparagraf'){
      client.commands.get('türkçeparagraf').execute(message, args)
    }else if(command === '-embed'){
      client.commands.get('myembed').execute(message, args)
    }else if(command === '+embed'){
      client.commands.get('doembed').execute(message, args)
    }else if(command === 'embed'){
      client.commands.get('myembed').execute(message, args)
    }else if(command === 'reban'){
      client.commands.get('unban').execute(message, args)
    }else if(command === 'canım'){
      client.commands.get('goddes').execute(message, args)
    }else if(command === 'vergi%'){
      client.commands.get('kdv').execute(message, args)
    }else if(command === 'cevaplar'){
      client.commands.get('cevaps').execute(message, args)
    }else if(command === 'isimlendir'){
      client.commands.get('renamechannel').execute(message, args)
    }else if(command === 'yeniyazı'){
      client.commands.get('makenew').execute(message, args)
    }else if(command === 'yenises'){
      client.commands.get('makevoice').execute(message, args)
    }else if(command === 'rastgele'){
      client.commands.get('rannum').execute(message, args)
    }else if(command === 'ban'){
      client.commands.get('ban').execute(message, args)
    }else if(command === 'kur'){
      client.commands.get('doviz').run(message, args)
    }else if(command === 'oynat'){
      client.commands.get('play').run(message, args)
    }else if(command === 'kimo'){
      client.commands.get('whois').run(message, args)
    }else if(command === 'sonmesaj'){
      client.commands.get('lastmessage').execute(message, args)
    }else if(command === 'parçala'){
      closeClient(client, "573555440936288277", message, args)
    }else if(command === 'yenile'){
      restartClient(client, "573555440936288277", message, Data)
    }else if(command === 'bilgi'){
      client.commands.get('appinfo').execute(message, args)
    }else if(command === 'source+'){
      ++thesourcevote
        message.channel.send(`UTBot source açıklığına oy verdiğiniz için teşekkürler.Şu anda: ${thesourcevote}`)
    }else if(command === 'source-'){
      --thesourcevote
        message.channel.send(`UTBot source gizliliğine oy verdiğiniz için teşekkürler.Şu anda: ${thesourcevote}`)
    }else if(command === 'source'){
      if(thesourcevote >= 20){
        message.channel.send(`Yaşasın! UTBot source gizli değil!\nlink: https://github.com/Umut-TAVSANKORU/UTBot-Discord.js-`)
      }else{
        message.channel.send(`Henüz UTBot source herkese açık değil.<U>source+ yazıp açıklığına oy vermeyi unutmadın di mi?\nŞu anda: ${thesourcevote}`)
      }
    }else if(command === 'emojiler'){
      client.commands.get('allemojis').execute(client, message, args)
    }else if(command === 'gtranslate'){
      client.commands.get('translate').run(message, args)
    }else if(command === "korona"){
      client.commands.get("covid").execute(message, args)
    }
    
  }catch(error){
    console.error(`error at runtime: ${error}`)
    client.users.cache.get('573555440936288277').send("Hata  ```"+ error +"```")
  }
});

client.login(Data.token)