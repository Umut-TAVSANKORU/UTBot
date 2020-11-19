module.exports = {
    name: 'ecobase',
    execute(message, args){
        let target = message.mentions.users.first() || message.author

        const targetID = target.id
    }
}