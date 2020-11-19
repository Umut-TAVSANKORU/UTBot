module.exports = {
    name: 'deletec',
    execute(message, args){
        if(message.member.hasPermission("MANAGE_CHANNELS")){
            message.channel.delete()
            message.author.send('Silmek istediğin kanal silindi.')
        }
        else{message.channel.send('İzin yok izin yok kardeşim git bi izin al sonra gel öyle herkese izin verseydik adam olmazdık')}
    }
}