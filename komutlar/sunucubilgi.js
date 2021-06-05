const Discord = require("discord.js");
const talkedRecently = new Set();

exports.run = (client, message) => {
  if (talkedRecently.has(message.author.id)) {
           return message.channel.send("`3` Saniyede da Bir Kullanabilirsiniz - " + `<@${message.author.id}>`);
    } else {

         
        talkedRecently.add(message.author.id);
        setTimeout(() => {
        

          talkedRecently.delete(message.author.id);
        }, 3000);
    } 
  let sunucu = new Discord.MessageEmbed()
    .setAuthor("Sunucu Bilgi", message.guild.iconURL())
    .setThumbnail(message.guild.iconURL())
  .setColor("RANDOM")
    .addField("Sunucu İsmi", message.guild.name)
    .addField("Sunucu İdsi", message.guild.id)
    .addField("Sunucu Bölgesi", message.guild.region)
    .addField(
      "Roller:",
      message.guild.roles.cache.map(role => role.name).join(", "),
      true
    )
    .addField("AFK kanalı:", `${message.guild.afkChannel}`, true)
    .addField("AFK zaman aşımı:", message.guild.afkTimeout, true)
    .addField("Oluşturma tarihi:", message.guild.createdAt, true)
    .setTimestamp()
    .setFooter("Sunucu Bilgi", message.guild.iconURL());
  return message.channel.send(sunucu);
};

module.exports.conf = {
  aliases: ["sunucubilgi"],
  permLevel: 0,
  enabled: true,
  guildOnly: true
};

module.exports.help = {
  name: "sunucu-bilgi",
  description: "",
  usage: "sunucu-bilgi"
};
