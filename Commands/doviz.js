const Discord = require('discord.js')
const dovz = require('tcmb-doviz')
const Kur = new dovz()
const config = require('../config.json')

module.exports = {
    name: 'doviz',
    async run (message, args){
        let curType = args[0]
        let howMany = Number(args[1])
        if(!isNaN(howMany)){
            if(curType === 'USD'){
                const res = await Kur.getKur("USD")
                const tarih = await Kur.guncelTarih()
                const curEmbed = new Discord.MessageEmbed().setTitle(res.isim).setDescription(`Bilgiler TCMB'den alınmaktadır.Şu andaki kur tarihi:${tarih}`).setColor('#000999').setURL(config.forcommands.TCMBURL).addField('Alış', res.alis * howMany, true).addField('Satış', res.satis * howMany, true).addField('Birim Kodu', res.kod, true)
    
                message.channel.send(curEmbed)
            }else if(curType === 'EUR'){
                const res = await Kur.getKur("EUR")
                const tarih = await Kur.guncelTarih()
                const curEmbed = new Discord.MessageEmbed().setTitle(res.isim).setDescription(`Bilgiler TCMB'den alınmaktadır.Şu andaki kur tarihi:${tarih}`).setColor('#000999').setURL(config.forcommands.TCMBURL).addField('Alış', res.alis * howMany, true).addField('Satış', res.satis * howMany, true).addField('Birim Kodu', res.kod, true)
    
                message.channel.send(curEmbed)
            }else if(curType === 'AUD'){
                const res = await Kur.getKur("AUD")
                const tarih = await Kur.guncelTarih()
                const curEmbed = new Discord.MessageEmbed().setTitle(res.isim).setDescription(`Bilgiler TCMB'den alınmaktadır.Şu andaki kur tarihi:${tarih}`).setColor('#000999').setURL(config.forcommands.TCMBURL).addField('Alış', res.alis * howMany, true).addField('Satış', res.satis * howMany, true).addField('Birim Kodu', res.kod, true)
    
                message.channel.send(curEmbed)
            }else if(curType === 'DKK'){
                const res = await Kur.getKur("DKK")
                const tarih = await Kur.guncelTarih()
                const curEmbed = new Discord.MessageEmbed().setTitle(res.isim).setDescription(`Bilgiler TCMB'den alınmaktadır.Şu andaki kur tarihi:${tarih}`).setColor('#000999').setURL(config.forcommands.TCMBURL).addField('Alış', res.alis * howMany, true).addField('Satış', res.satis * howMany, true).addField('Birim Kodu', res.kod, true)
    
                message.channel.send(curEmbed)
            }else if(curType === 'GBP'){
                const res = await Kur.getKur("GBP")
                const tarih = await Kur.guncelTarih()
                const curEmbed = new Discord.MessageEmbed().setTitle(res.isim).setDescription(`Bilgiler TCMB'den alınmaktadır.Şu andaki kur tarihi:${tarih}`).setColor('#000999').setURL(config.forcommands.TCMBURL).addField('Alış', res.alis * howMany, true).addField('Satış', res.satis * howMany, true).addField('Birim Kodu', res.kod, true)
    
                message.channel.send(curEmbed)
            }else if(curType === 'CHF'){
                const res = await Kur.getKur("CHF")
                const tarih = await Kur.guncelTarih()
                const curEmbed = new Discord.MessageEmbed().setTitle(res.isim).setDescription(`Bilgiler TCMB'den alınmaktadır.Şu andaki kur tarihi:${tarih}`).setColor('#000999').setURL(config.forcommands.TCMBURL).addField('Alış', res.alis * howMany, true).addField('Satış', res.satis * howMany, true).addField('Birim Kodu', res.kod, true)
    
                message.channel.send(curEmbed)
            }else if(curType === 'SEK'){
                const res = await Kur.getKur("SEK")
                const tarih = await Kur.guncelTarih()
                const curEmbed = new Discord.MessageEmbed().setTitle(res.isim).setDescription(`Bilgiler TCMB'den alınmaktadır.Şu andaki kur tarihi:${tarih}`).setColor('#000999').setURL(config.forcommands.TCMBURL).addField('Alış', res.alis * howMany, true).addField('Satış', res.satis * howMany, true).addField('Birim Kodu', res.kod, true)
    
                message.channel.send(curEmbed)
            }else if(curType === 'CAD'){
                const res = await Kur.getKur("CAD")
                const tarih = await Kur.guncelTarih()
                const curEmbed = new Discord.MessageEmbed().setTitle(res.isim).setDescription(`Bilgiler TCMB'den alınmaktadır.Şu andaki kur tarihi:${tarih}`).setColor('#000999').setURL(config.forcommands.TCMBURL).addField('Alış', res.alis * howMany, true).addField('Satış', res.satis * howMany, true).addField('Birim Kodu', res.kod, true)
    
                message.channel.send(curEmbed)
            }else if(curType === 'KWD'){
                const res = await Kur.getKur("KWD")
                const tarih = await Kur.guncelTarih()
                const curEmbed = new Discord.MessageEmbed().setTitle(res.isim).setDescription(`Bilgiler TCMB'den alınmaktadır.Şu andaki kur tarihi:${tarih}`).setColor('#000999').setURL(config.forcommands.TCMBURL).addField('Alış', res.alis * howMany, true).addField('Satış', res.satis * howMany, true).addField('Birim Kodu', res.kod, true)
    
                message.channel.send(curEmbed)
            }else if(curType === 'NOK'){
                const res = await Kur.getKur("NOK")
                const tarih = await Kur.guncelTarih()
                const curEmbed = new Discord.MessageEmbed().setTitle(res.isim).setDescription(`Bilgiler TCMB'den alınmaktadır.Şu andaki kur tarihi:${tarih}`).setColor('#000999').setURL(config.forcommands.TCMBURL).addField('Alış', res.alis * howMany, true).addField('Satış', res.satis * howMany, true).addField('Birim Kodu', res.kod, true)
    
                message.channel.send(curEmbed)
            }else if(curType === 'JPY'){
                const res = await Kur.getKur("JPY")
                const tarih = await Kur.guncelTarih()
                const curEmbed = new Discord.MessageEmbed().setTitle(res.isim).setDescription(`Bilgiler TCMB'den alınmaktadır.Şu andaki kur tarihi:${tarih}`).setColor('#000999').setURL(config.forcommands.TCMBURL).addField('Alış', res.alis * howMany, true).addField('Satış', res.satis * howMany, true).addField('Birim Kodu', res.kod, true)
    
                message.channel.send(curEmbed)
            }else if(curType === 'SAR'){
                const res = await Kur.getKur("SAR")
                const tarih = await Kur.guncelTarih()
                const curEmbed = new Discord.MessageEmbed().setTitle(res.isim).setDescription(`Bilgiler TCMB'den alınmaktadır.Şu andaki kur tarihi:${tarih}`).setColor('#000999').setURL(config.forcommands.TCMBURL).addField('Alış', res.alis * howMany, true).addField('Satış', res.satis * howMany, true).addField('Birim Kodu', res.kod, true)
    
                message.channel.send(curEmbed)
            }else if(curType === 'BGN'){
                const res = await Kur.getKur("BGN")
                const tarih = await Kur.guncelTarih()
                const curEmbed = new Discord.MessageEmbed().setTitle(res.isim).setDescription(`Bilgiler TCMB'den alınmaktadır.Şu andaki kur tarihi:${tarih}`).setColor('#000999').setURL(config.forcommands.TCMBURL).addField('Alış', res.alis * howMany, true).addField('Satış', res.satis * howMany, true).addField('Birim Kodu', res.kod, true)
    
                message.channel.send(curEmbed)
            }else if(curType === 'RON'){
                const res = await Kur.getKur("RON")
                const tarih = await Kur.guncelTarih()
                const curEmbed = new Discord.MessageEmbed().setTitle(res.isim).setDescription(`Bilgiler TCMB'den alınmaktadır.Şu andaki kur tarihi:${tarih}`).setColor('#000999').setURL(config.forcommands.TCMBURL).addField('Alış', res.alis * howMany, true).addField('Satış', res.satis * howMany, true).addField('Birim Kodu', res.kod, true)
    
                message.channel.send(curEmbed)
            }else if(curType === 'RUB'){
                const res = await Kur.getKur("RUB")
                const tarih = await Kur.guncelTarih()
                const curEmbed = new Discord.MessageEmbed().setTitle(res.isim).setDescription(`Bilgiler TCMB'den alınmaktadır.Şu andaki kur tarihi:${tarih}`).setColor('#000999').setURL(config.forcommands.TCMBURL).addField('Alış', res.alis * howMany, true).addField('Satış', res.satis * howMany, true).addField('Birim Kodu', res.kod, true)
    
                message.channel.send(curEmbed)
            }else if(curType === 'CNY'){
                const res = await Kur.getKur("CNY")
                const tarih = await Kur.guncelTarih()
                const curEmbed = new Discord.MessageEmbed().setTitle(res.isim).setDescription(`Bilgiler TCMB'den alınmaktadır.Şu andaki kur tarihi:${tarih}`).setColor('#000999').setURL(config.forcommands.TCMBURL).addField('Alış', res.alis * howMany, true).addField('Satış', res.satis * howMany, true).addField('Birim Kodu', res.kod, true)
    
                message.channel.send(curEmbed)
            }else if(curType === 'PKR'){
                const res = await Kur.getKur("PKR")
                const tarih = await Kur.guncelTarih()
                const curEmbed = new Discord.MessageEmbed().setTitle(res.isim).setDescription(`Bilgiler TCMB'den alınmaktadır.Şu andaki kur tarihi:${tarih}`).setColor('#000999').setURL(config.forcommands.TCMBURL).addField('Alış', res.alis * howMany, true).addField('Satış', res.satis * howMany, true).addField('Birim Kodu', res.kod, true)
    
                message.channel.send(curEmbed)
            }else if(curType === 'QAR'){
                const res = await Kur.getKur("QAR")
                const tarih = await Kur.guncelTarih()
                const curEmbed = new Discord.MessageEmbed().setTitle(res.isim).setDescription(`Bilgiler TCMB'den alınmaktadır.Şu andaki kur tarihi:${tarih}`).setColor('#000999').setURL(config.forcommands.TCMBURL).addField('Alış', res.alis * howMany, true).addField('Satış', res.satis * howMany, true).addField('Birim Kodu', res.kod, true)
    
                message.channel.send(curEmbed)
            }
        }else if(isNaN(howMany)){
            if(curType === 'USD'){
                const res = await Kur.getKur("USD")
                const tarih = await Kur.guncelTarih()
                const curEmbed = new Discord.MessageEmbed().setTitle(res.isim).setDescription(`Bilgiler TCMB'den alınmaktadır.Şu andaki kur tarihi:${tarih}`).setColor('#000999').setURL(config.forcommands.TCMBURL).addField('Alış', res.alis, true).addField('Satış', res.satis, true).addField('Birim Kodu', res.kod, true)
    
                message.channel.send(curEmbed)
            }else if(curType === 'EUR'){
                const res = await Kur.getKur("EUR")
                const tarih = await Kur.guncelTarih()
                const curEmbed = new Discord.MessageEmbed().setTitle(res.isim).setDescription(`Bilgiler TCMB'den alınmaktadır.Şu andaki kur tarihi:${tarih}`).setColor('#000999').setURL(config.forcommands.TCMBURL).addField('Alış', res.alis, true).addField('Satış', res.satis, true).addField('Birim Kodu', res.kod, true)
    
                message.channel.send(curEmbed)
            }else if(curType === 'AUD'){
                const res = await Kur.getKur("AUD")
                const tarih = await Kur.guncelTarih()
                const curEmbed = new Discord.MessageEmbed().setTitle(res.isim).setDescription(`Bilgiler TCMB'den alınmaktadır.Şu andaki kur tarihi:${tarih}`).setColor('#000999').setURL(config.forcommands.TCMBURL).addField('Alış', res.alis, true).addField('Satış', res.satis, true).addField('Birim Kodu', res.kod, true)
    
                message.channel.send(curEmbed)
            }else if(curType === 'DKK'){
                const res = await Kur.getKur("DKK")
                const tarih = await Kur.guncelTarih()
                const curEmbed = new Discord.MessageEmbed().setTitle(res.isim).setDescription(`Bilgiler TCMB'den alınmaktadır.Şu andaki kur tarihi:${tarih}`).setColor('#000999').setURL(config.forcommands.TCMBURL).addField('Alış', res.alis, true).addField('Satış', res.satis, true).addField('Birim Kodu', res.kod, true)
    
                message.channel.send(curEmbed)
            }else if(curType === 'GBP'){
                const res = await Kur.getKur("GBP")
                const tarih = await Kur.guncelTarih()
                const curEmbed = new Discord.MessageEmbed().setTitle(res.isim).setDescription(`Bilgiler TCMB'den alınmaktadır.Şu andaki kur tarihi:${tarih}`).setColor('#000999').setURL(config.forcommands.TCMBURL).addField('Alış', res.alis, true).addField('Satış', res.satis, true).addField('Birim Kodu', res.kod, true)
    
                message.channel.send(curEmbed)
            }else if(curType === 'CHF'){
                const res = await Kur.getKur("CHF")
                const tarih = await Kur.guncelTarih()
                const curEmbed = new Discord.MessageEmbed().setTitle(res.isim).setDescription(`Bilgiler TCMB'den alınmaktadır.Şu andaki kur tarihi:${tarih}`).setColor('#000999').setURL(config.forcommands.TCMBURL).addField('Alış', res.alis, true).addField('Satış', res.satis, true).addField('Birim Kodu', res.kod, true)
    
                message.channel.send(curEmbed)
            }else if(curType === 'SEK'){
                const res = await Kur.getKur("SEK")
                const tarih = await Kur.guncelTarih()
                const curEmbed = new Discord.MessageEmbed().setTitle(res.isim).setDescription(`Bilgiler TCMB'den alınmaktadır.Şu andaki kur tarihi:${tarih}`).setColor('#000999').setURL(config.forcommands.TCMBURL).addField('Alış', res.alis, true).addField('Satış', res.satis, true).addField('Birim Kodu', res.kod, true)
    
                message.channel.send(curEmbed)
            }else if(curType === 'CAD'){
                const res = await Kur.getKur("CAD")
                const tarih = await Kur.guncelTarih()
                const curEmbed = new Discord.MessageEmbed().setTitle(res.isim).setDescription(`Bilgiler TCMB'den alınmaktadır.Şu andaki kur tarihi:${tarih}`).setColor('#000999').setURL(config.forcommands.TCMBURL).addField('Alış', res.alis, true).addField('Satış', res.satis, true).addField('Birim Kodu', res.kod, true)
    
                message.channel.send(curEmbed)
            }else if(curType === 'KWD'){
                const res = await Kur.getKur("KWD")
                const tarih = await Kur.guncelTarih()
                const curEmbed = new Discord.MessageEmbed().setTitle(res.isim).setDescription(`Bilgiler TCMB'den alınmaktadır.Şu andaki kur tarihi:${tarih}`).setColor('#000999').setURL(config.forcommands.TCMBURL).addField('Alış', res.alis, true).addField('Satış', res.satis , true).addField('Birim Kodu', res.kod, true)
    
                message.channel.send(curEmbed)
            }else if(curType === 'NOK'){
                const res = await Kur.getKur("NOK")
                const tarih = await Kur.guncelTarih()
                const curEmbed = new Discord.MessageEmbed().setTitle(res.isim).setDescription(`Bilgiler TCMB'den alınmaktadır.Şu andaki kur tarihi:${tarih}`).setColor('#000999').setURL(config.forcommands.TCMBURL).addField('Alış', res.alis, true).addField('Satış', res.satis, true).addField('Birim Kodu', res.kod, true)
    
                message.channel.send(curEmbed)
            }else if(curType === 'JPY'){
                const res = await Kur.getKur("JPY")
                const tarih = await Kur.guncelTarih()
                const curEmbed = new Discord.MessageEmbed().setTitle(res.isim).setDescription(`Bilgiler TCMB'den alınmaktadır.Şu andaki kur tarihi:${tarih}`).setColor('#000999').setURL(config.forcommands.TCMBURL).addField('Alış', res.alis, true).addField('Satış', res.satis, true).addField('Birim Kodu', res.kod, true)
    
                message.channel.send(curEmbed)
            }else if(curType === 'SAR'){
                const res = await Kur.getKur("SAR")
                const tarih = await Kur.guncelTarih()
                const curEmbed = new Discord.MessageEmbed().setTitle(res.isim).setDescription(`Bilgiler TCMB'den alınmaktadır.Şu andaki kur tarihi:${tarih}`).setColor('#000999').setURL(config.forcommands.TCMBURL).addField('Alış', res.alis, true).addField('Satış', res.satis, true).addField('Birim Kodu', res.kod, true)
    
                message.channel.send(curEmbed)
            }else if(curType === 'BGN'){
                const res = await Kur.getKur("BGN")
                const tarih = await Kur.guncelTarih()
                const curEmbed = new Discord.MessageEmbed().setTitle(res.isim).setDescription(`Bilgiler TCMB'den alınmaktadır.Şu andaki kur tarihi:${tarih}`).setColor('#000999').setURL(config.forcommands.TCMBURL).addField('Alış', res.alis, true).addField('Satış', res.satis, true).addField('Birim Kodu', res.kod, true)
    
                message.channel.send(curEmbed)
            }else if(curType === 'RON'){
                const res = await Kur.getKur("RON")
                const tarih = await Kur.guncelTarih()
                const curEmbed = new Discord.MessageEmbed().setTitle(res.isim).setDescription(`Bilgiler TCMB'den alınmaktadır.Şu andaki kur tarihi:${tarih}`).setColor('#000999').setURL(config.forcommands.TCMBURL).addField('Alış', res.alis, true).addField('Satış', res.satis, true).addField('Birim Kodu', res.kod, true)
    
                message.channel.send(curEmbed)
            }else if(curType === 'RUB'){
                const res = await Kur.getKur("RUB")
                const tarih = await Kur.guncelTarih()
                const curEmbed = new Discord.MessageEmbed().setTitle(res.isim).setDescription(`Bilgiler TCMB'den alınmaktadır.Şu andaki kur tarihi:${tarih}`).setColor('#000999').setURL(config.forcommands.TCMBURL).addField('Alış', res.alis, true).addField('Satış', res.satis, true).addField('Birim Kodu', res.kod, true)
    
                message.channel.send(curEmbed)
            }else if(curType === 'CNY'){
                const res = await Kur.getKur("CNY")
                const tarih = await Kur.guncelTarih()
                const curEmbed = new Discord.MessageEmbed().setTitle(res.isim).setDescription(`Bilgiler TCMB'den alınmaktadır.Şu andaki kur tarihi:${tarih}`).setColor('#000999').setURL(config.forcommands.TCMBURL).addField('Alış', res.alis, true).addField('Satış', res.satis, true).addField('Birim Kodu', res.kod, true)
    
                message.channel.send(curEmbed)
            }else if(curType === 'PKR'){
                const res = await Kur.getKur("PKR")
                const tarih = await Kur.guncelTarih()
                const curEmbed = new Discord.MessageEmbed().setTitle(res.isim).setDescription(`Bilgiler TCMB'den alınmaktadır.Şu andaki kur tarihi:${tarih}`).setColor('#000999').setURL(config.forcommands.TCMBURL).addField('Alış', res.alis, true).addField('Satış', res.satis, true).addField('Birim Kodu', res.kod, true)
    
                message.channel.send(curEmbed)
            }else if(curType === 'QAR'){
                const res = await Kur.getKur("QAR")
                const tarih = await Kur.guncelTarih()
                const curEmbed = new Discord.MessageEmbed().setTitle(res.isim).setDescription(`Bilgiler TCMB'den alınmaktadır.Şu andaki kur tarihi:${tarih}`).setColor('#000999').setURL(config.forcommands.TCMBURL).addField('Alış', res.alis, true).addField('Satış', res.satis, true).addField('Birim Kodu', res.kod, true)
    
                message.channel.send(curEmbed)
            }
        }
    }
}