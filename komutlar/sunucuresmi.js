const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const talkedRecently = new Set();
 
exports.run = (client, message, params) => {
  if (talkedRecently.has(message.author.id)) {
           return message.channel.send("`3` Saniyede da Bir Kullanabilirsiniz - " + `<@${message.author.id}>`);
    } else {

         
        talkedRecently.add(message.author.id);
        setTimeout(() => {
  

          talkedRecently.delete(message.author.id);
        }, 3000);
    } 
  
  const embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle(`${message.guild.name} Adlı Sunucunun Resmi`)
  .setImage(message.guild.iconURL())
  message.channel.send(embed)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
    aliases: ["sunucuresmi"],
}


exports.help = {
  name: 'sunucuresmi',
  description: 'Sunucuresmi.',
  usage: '!sunucuresmi',
};