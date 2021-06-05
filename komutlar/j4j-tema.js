const  Discord = require("discord.js"); 
const talkedRecently = new Set();

exports.run = (client, message, args) => {
  if (talkedRecently.has(message.author.id)) {
            return message.channel.send("`3` Saniyede da Bir Kullanabilirsiniz - " + `<@${message.author.id}>`);
    } else {

         
        talkedRecently.add(message.author.id);
        setTimeout(() => {
    

          talkedRecently.delete(message.author.id);
        }, 3000);
    } 

  const davet = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("J4j Sunucu Şablonu")
  .setDescription("https://discord.new/p5cWAmc6G3Gr")
  message.channel.send(davet)
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'j4j-tema',
  description: '',
  usage: ''
};