const Discord = require("discord.js");

const talkedRecently = new Set();
exports.run = (client, message) => {
  if (talkedRecently.has(message.author.id)) {
        return message.channel.send("`5` Saniyede da Bir Kullanabilirsiniz - " + `<@${message.author.id}>`);
    } else {

         
        talkedRecently.add(message.author.id);
        setTimeout(() => {


          talkedRecently.delete(message.author.id);
        }, 3000);
    } 
  let üye = new Discord.MessageEmbed()
    .setAuthor("Üyedurum")
    .setColor("RED")
   .addField("**Toplam Kullanıcı**",message.guild.memberCount )
    .addField("**Çevrimiçi Kullanıcılar**",message.guild.members.cache.filter(o => o.presence.status === 'online').size)
  .addField("**Boşta Kullanıcılar**",message.guild.members.cache.filter(o => o.presence.status === 'idle').size)
.addField("**Rahatsız Etmeyindeki Kullanıcılar**",message.guild.members.cache.filter(o => o.presence.status === 'dnd').size)
.addField("**Çevrimdışı Kullanıcılar**",message.guild.members.cache.filter(o => o.presence.status === 'offline').size)

    .setTimestamp()
  return message.channel.send(üye);
};

module.exports.conf = {
  aliases: ["üyedurum"],
  permLevel: 0,
  enabled: true,
  guildOnly: true
};

module.exports.help = {
  name: "üyedurum",
  description: "",
  usage: ""
};
