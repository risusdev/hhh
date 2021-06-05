const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../bot.js')
 
exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":x:  Bu komutu kullanabilmek için **yönetici** yetkisine sahip olmalısın.")
  
  const sayacsayi = await db.fetch(`sayac_${message.guild.id}`);
  const sayackanal = message.mentions.channels.first()

      
  if(args[0] !== "ayarla" && args[0] !== "sıfırla") return message.channel.send(":x:  Yanlış Kullanım Lütfen **ayarla** veya **sıfırla** yaz.")
    if(args[0] === "sıfırla") {
    if(!sayacsayi) {
      message.channel.send(`:x:  | **Ayarlanmayan şeyi sıfırlayamazsın.**`)
return
    }
    
    db.delete(`sayac_${message.guild.id}`)
    db.delete(`sayacK_${message.guild.id}`)
    message.channel.send(`:white_check_mark:  | **Sayaç başarıyla sıfırlandı.**`)
    return
  }
  
  if(args[0] === "ayarla") {
  if(isNaN(args[1])) {
    message.channel.send(`<a:B_Ileri:763772437703426080> | **Bir sayı yazmalısın.**`)
    return
  }
  
  if(!sayackanal) {
   await message.channel.send(`<a:B_Ileri:763772437703426080> | **Sayaç kanalını etiketlemelisin.**`)
  return
  }
  
  

  

 
        if(args[1] <= message.guild.memberCount) {
                message.channel.send(`<a:B_Ileri:763772437703426080> | **Sunucudaki kullanıcı sayısından** (${message.guild.memberCount}) **daha yüksek bir değer girmelisin.**`)
                return
        }
  
  db.set(`sayac_${message.guild.id}`, args[1])
  db.set(`sayacK_${message.guild.id}`, sayackanal.id)
  
  message.channel.send(`:white_check_mark:  | **Sayaç** \`${args[1]}\`, **sayaç kanalı** ${sayackanal} **olarak ayarlandı.**`)
}
}
 
exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: ['sayac'],
        permLevel: 0
}
 
exports.help = {
        name: 'sayaç',
        description: 'Sayacı ayarlar.',
        usage: 'sayaç <sayı> <#kanal> / sıfırla'
}