const Discord = require(`discord.js`);
const db = require(`quick.db`)


exports.run = async (bot, message, args) => {

    const yetki = new Discord.MessageEmbed()
    .setAuthor(bot.avatarURL)
    .setColor("RANDOM")
    .setDescription(`Bu komutu kullanabilmek için Sunucuyu Yönet yetkisine sahip olmalısın!`)
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(yetki)
  let sistem = db.fetch(`kodsistemi.${message.guild.id}`)
  const acikdegil = new Discord.MessageEmbed()
  .setAuthor(bot.avatarURL)
  .setColor("RANDOM")
  .setDescription(`Bu komutu kullanabilmek için kod sistemini açman gerekiyor! r!kod-sistemi aç`)
if(!sistem) return message.channel.send(acikdegil)
let altyapıkanal = message.guild.channels.cache.find(r => r.name === args.slice(0).join(' ')) || message.guild.channels.cache.find(r => r.id === args[0])
let kanal = await db.fetch(`kodALT.${message.guild.id}`)
  
  if (args[0] === "sıfırla" || args[0] === "kapat") {
    if(!kanal) return message.channel.send(`altyapı kanal sistemini kapatmak için \`altyapı kanalının\` seçili olması lazım örnek kullanım: \`r!altyapı-kanal #kanal\``);
    
   db.delete(`kodALT.${message.guild.id}`)
  
   message.channel.send(`altyapı kanalı başarıyla kapatıldı.`);
 
  
    return
  }
  
if (!altyapıkanal) return message.channel.send(`Kullanım r!altyapı-kanal #kanal`);
 

   db.set(`kodALT.${message.guild.id}`, altyapıkanal.id)

 message.channel.send(`altyapı kanalı ${altyapıkanal} olarak ayarlandı\nSıfırlamak için r!altyapı-kanal sıfırla`);





}

  
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [`altyapı-kanal`,`altyapıkanal`,`altyapı-kanalayarla`],
  kategori: "altyapı",
  permLevel: 0
};

module.exports.help = {
  name: `altyapı-kanal-ayarla`,
  description: `Girince mesaj atılacak kanalını ayarlar`,
  usage: `hgbb-kanal`
};