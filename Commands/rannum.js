module.exports = {
    name: 'rannum',
    execute(message, args){
        let howMany = args[1]
        let tenorthou = args[0]
        if(tenorthou === '10'){
            const random = Math.floor(Math.random() * 9) + 1
            const random2 = Math.floor(Math.random() * 9) + 1
            const random3 = Math.floor(Math.random() * 9) + 1

            if(howMany === '1'){
                message.channel.send(random)
            }else if(howMany === '2'){
                message.channel.send(`${random},${random2}`)
            }else if(howMany === '3'){
                message.channel.send(`${random},${random2},${random3}`)
            }else{
                message.channel.send(random)
            }
        }else if(tenorthou === '100'){
            const random = Math.floor(Math.random() * 99) + 1
            const random2 = Math.floor(Math.random() * 99) + 1
            const random3 = Math.floor(Math.random() * 99) + 1

            if(howMany === '1'){
                message.channel.send(random)
            }else if(howMany === '2'){
                message.channel.send(`${random},${random2}`)
            }else if(howMany === '3'){
                message.channel.send(`${random},${random2},${random3}`)
            }else{
                message.channel.send(random)
            }
        }else if(tenorthou === '1000'){
            const random = Math.floor(Math.random() * 999) + 1
            const random2 = Math.floor(Math.random() * 999) + 1
            const random3 = Math.floor(Math.random() * 999) + 1

            if(howMany === '1'){
                message.channel.send(random)
            }else if(howMany === '2'){
                message.channel.send(`${random},${random2}`)
            }else if(howMany === '3'){
                message.channel.send(`${random},${random2},${random3}`)
            }else{
                message.channel.send(random)
            }
        }else if(tenorthou === '1'){
            const random = Math.floor(Math.random() * 999999) + 1
            message.channel.send(random)
        }else if(tenorthou === '2'){
            const random = Math.floor(Math.random() * 999999) + 1
            const random2 = Math.floor(Math.random() * 999999) + 1
            message.channel.send(`${random},${random2}`)
        }else if(tenorthou === '3'){
            const random = Math.floor(Math.random() * 999999) + 1
            const random2 = Math.floor(Math.random() * 999999) + 1
            const random3 = Math.floor(Math.random() * 999999) + 1

            message.channel.send(`${random},${random2},${random3}`)
        }else{
            const random = Math.floor(Math.random() * 999999) + 1
            message.channel.send(random)
        }
    }
}
