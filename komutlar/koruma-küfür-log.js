  exports.run = (client, message) => {
        let db = require("quick.db")
        let Discord = require("discord.js")
    let küfür = db.fetch(`küfür.${message.guild.id}.durum`)
  const member3 = new Discord.MessageEmbed()
     .setColor(0x36393F)
.setDescription(`<a:twitchbit:793899916614828062> **HATA** <a:twitchbit:793899916614828062> - Bu sunucuda yetkili değilsin.`)
        if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send(member3)
    const member = new Discord.MessageEmbed()
     .setColor(0x36393F)
.setDescription(`<a:twitchbit:793899916614828062> **HATA** <a:twitchbit:793899916614828062> - Bir kanal etiketle.`)
      if(küfür) {
        let kanal = message.mentions.channels.first()
        if(!kanal) return message.channel.send(member)
      db.set(`küfür.${message.guild.id}.kanal`,kanal.id)
      message.channel.send(`<a:twitchbit:793899916614828062> **Başarılı ile küfür log kanalı ayarlandı.** `).then(l => {
      l.delete({timeout: 5000})
    })
    }else{
     message.channel.send(`<a:twitchbit:793899916614828062> **Küfür engel açık değil.**`).then(l => {
      l.delete({timeout: 5000})
    })
    }
    }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["küfür-log"],
  permLevel: 0
};

exports.help = {
  name: 'küfürlog',
  description: 'WESTRA',
  usage: 'WESTRA'
}