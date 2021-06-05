const discord = require('discord.js')
const db = require('megadb')
const ms = require('parse-ms')
let server = new db.crearDB('server')
let cooldown = 8.64e+7 
exports.run = async(client, message, args) => {

      if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bu Komudu Kullanabilmek İçin **`Yönetici`** Yetkisine Sahip Olmalısın!')
  let zaman = await server.get(`sunucutanit.${message.guild.id}`)
      
      if (zaman !== null && cooldown - (Date.now() - zaman) > 0) {
        let süre = ms(cooldown - (Date.now() - zaman))
      message.channel.send(`Sunucunu **${süre.hours}** Saat **${süre.minutes}** Dakika Sonra Tanıtabilirsin! "Kod Yapımcısı Code World Uzman Kod Ekibi Ve Bay İlbeycik#0001"`)
return;
      } else { 

      }  

let kanal = 'Kanal ID'

    const codeworld = await client.channels.cache.get(message.channel.id).createInvite({ maxAge: 0})

const embed = new discord.MessageEmbed()
.setColor('RANDOM')
.setDescription('Sunucu tanıt kullandınız 24 saat sonra tekrar kullanabilirsin . \n\n Sunucunuz [Destek](https://765490015014486016) Sunucumuzda Paylaşıldı!')
message.channel.send(embed)
  const sunucutanıtıldı = new discord.MessageEmbed()
.setAuthor(message.author.username, message.author.avatarURL({dynamic: true, format : "png"}))
.setTitle(`Sunucu Tanıt Sistemi!`)
.setColor('GREEN')
.addField(`Sunucunun İsmi;`, `**${message.guild.name}**`)
.addField(`Sunucudaki Kullanıcı Sayısı;`, `**${message.guild.memberCount}**`)
.addField('Sunucu ID',`**${message.guild.id}**`)
.addField(`Sunucuyu Tanıtan Kullanıcı;`, `${message.author} (${message.author.id})`)
.addField(`Sunucunun Sahibi;`, `${message.guild.owner} (${message.guild.owner.id})`)
.addField(`Sunucunun Davet Linki;`, `${codeworld.url}`)
.addField(`Kod YapımcıSI !`, `SamiPvP#0001 Ve Rache Kod Ekibidir !`, true)
.setThumbnail(`${client.user.avatarURL()}`)
client.channels.cache.get(kanal).send(sunucutanıtıldı)

        server.set(`sunucutanit.${message.guild.id}`, Date.now())

}
exports.conf = {

  aliases: ['sunucu-tanıt']
}
exports.help = {
  name: 'sunucutanıt'
}