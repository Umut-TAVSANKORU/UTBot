module.exports = {
    name: 'advancelog',
    execute(message, args){
        let usr = message.mentions.users.first()

        if(!usr){
            message.channel.send(usr.info)
        }else{
            message.channel.send(message.author.info)
        }
    }
}