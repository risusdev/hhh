const  Discord = require("discord.js"); 
const talkedRecently = new Set();

exports.run = (client, message, args) => {
  if (talkedRecently.has(message.author.id)) {
           return message.channel.send("`3` Saniye de Bir Kullanabilirsiniz - " + message.author.tag);
    } else {

         
        talkedRecently.add(message.author.id);
        setTimeout(() => {


          talkedRecently.delete(message.author.id);
        }, 3000);
    } 

  const davet = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("Public Sunucu Şablonu")
  .setDescription("https://discord.new/ECCJMfVb5JTm")
  message.channel.send(davet)
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'public-tema',
  description: '',
  usage: ''
};