const Discord = require("discord.js");
const db = require("quick.db");
const rache = new Set();
module.exports.run = async (bot, message, args) => {

  if (rache.has(message.author.id)) {
           return message.channel.send("`5` Saniyede da Bir Kullanabilirsiniz - " + `<@${message.author.id}>`);
    } else {
        rache.add(message.author.id);
        setTimeout(() => {
          rache.delete(message.author.id);
        }, 5000);// milisaniye cinsinden
    } 
let bug = args.join(" ").slice(0);
  let log = bot.channels.cache.get(db.fetch(`önerilogkanalcodeming_${message.guild.id}`))
 let id = db.fetch(`önerikanalcodeming_${message.guild.id}`)

  if(message.channel.id !== id) return message.channel.send("Bu komutu sadece öneri kanalında kullanabilirsin Ayarlı Deilse r!öneri-log-ayarla #kanal , r!öneri-kanal-ayarla #kanalismi")//dene

if(!bug) return message.channel.send(":x: Öneriyi Yazmadın Dostum !")
let user = message.author.username;
let guild = message.guild.name;
let guildid = message.guild.id;
let kanal = message.channel.name; //nasıl la ?
  let kanalid = message.channel.id;
//burda naptın şimdi ?
let embed = new Discord.MessageEmbed()
.setTitle("Öneri Bildirisi")
.setDescription("**Rache**")
.addField("Öneri", bug)
.addField("Öneri Gönderen", user)
.addField("Kanal", kanal,)
.addField("Kanal ID", kanalid)
.setColor("RED")
  const embed2 = new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription(
      `:thumbsup:  ${message.author.username} :thumbsup: , öneri bildiriminizi yetkililere ilettim. Geri dönüş yapılacaktır.`)
    message.channel.send(embed2)
log.send(embed).then(message => {
message.react('✔')
message.react('❌')
  });
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['öner'],
  permLevel: 0  
};
exports.help = {
  name: 'öneri',
  description: 'Bildiri.',
  usage: '!öneri <öneriniz>'
}