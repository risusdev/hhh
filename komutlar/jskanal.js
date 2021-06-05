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
let jskanal = message.guild.channels.cache.find(r => r.name === args.slice(0).join(' ')) || message.guild.channels.cache.find(r => r.id === args[0])
let kanal = await db.fetch(`kodJS.${message.guild.id}`)
  
  if (args[0] === "sıfırla" || args[0] === "kapat") {
    if(!kanal) return message.channel.send(`js kanal sistemini kapatmak için \`js kanalının\` seçili olması lazım örnek kullanım: \`r!js-kanal #kanal\``);
    
   db.delete(`kodJS.${message.guild.id}`)
  
   message.channel.send(`js kanalı başarıyla kapatıldı.`);
 
  
    return
  }
  
if (!jskanal) return message.channel.send(`Kullanım r!js-kanal #kanal`);
 

   db.set(`kodJS.${message.guild.id}`, jskanal.id)

 message.channel.send(`js kanalı ${jskanal} olarak ayarlandı\nSıfırlamak için r!js-kanal sıfırla`);





}

  
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [`js-kanal`,`jskanal`,`js-kanalayarla`],
  kategori: "js",
  permLevel: 0
};

module.exports.help = {
  name: `js-kanal-ayarla`,
  description: `Girince mesaj atılacak kanalını ayarlar`,
  usage: `hgbb-kanal`
};