module.exports = {
    name: 'calculat',
    execute(message, args){
        let Firstnumber = Number(args[0])
        let method = args[1]
        let Secondnumber = Number(args[2])

        const operations = ['+', '-', 'x', '/', '%', '/%'];

        if(!operations.includes(method)) return message.reply('hesaplama yaparken yöntemleri kullanmayı unutma')

        if(isNaN(Firstnumber)) return message.reply('seçtiğin ilk sayı bir `sayı` değil.burada harfler değil sayılar kullanılıyor sözelci!')

        if(isNaN(Secondnumber)) return message.reply('seçtiğin ikinci sayı bir `sayı` değil.burada harfler değil sayılar kullanılıyor sözelci!')

        if (method === '+'){
            let Lastnumber = Firstnumber + Secondnumber
            message.channel.send(`${Firstnumber} + ${Secondnumber} = ${Lastnumber}`)
        }

        if (method === '-'){
            let Lastnumber = Firstnumber - Secondnumber
            message.channel.send(`${Firstnumber} - ${Secondnumber} = ${Lastnumber}`)
        }

        if (method === 'x'){
            let Lastnumber = Firstnumber * Secondnumber
            message.channel.send(`${Firstnumber} x ${Secondnumber} = ${Lastnumber}`)
        }

        if (method === '/'){
            let Lastnumber = Firstnumber / Secondnumber
            if(Secondnumber == 0){
                message.channel.send('e bu çalışmaz.:infinity:')
            }
            if(Secondnumber != 0){
                message.channel.send(`${Firstnumber} / ${Secondnumber} = ${Lastnumber}`)
            }
        }

        if (method === '%'){
            let Lastnumber = Firstnumber % Secondnumber
            message.channel.send(`${Firstnumber} % ${Secondnumber} = ${Lastnumber}`)
        }

        if (method === '/%'){
            let Lastnumber = Firstnumber / Secondnumber
            let nothingbutLast = Firstnumber % Secondnumber
            message.channel.send(`${Firstnumber} / ${Secondnumber} = ${Lastnumber}`)
            message.channel.send(`${Firstnumber} % ${Secondnumber} = ${nothingbutLast}`)
        }
    }
}