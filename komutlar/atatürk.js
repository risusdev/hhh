const Discord = require('discord.js');
const talkedRecently = new Set();

exports.run = async(client, message) => {
  if (talkedRecently.has(message.author.id)) {
           return message.channel.send("`3` Saniyede da Bir Kullanabilirsiniz - " + `<@${message.author.id}>`);
    } else {

         
        talkedRecently.add(message.author.id);
        setTimeout(() => {
      

          talkedRecently.delete(message.author.id);
        }, 3000);
    } 
     
      const vatan = new Discord.MessageEmbed()
    .setAuthor('Mustafa Kemal Atatürkü Anıyoruz.')
    .setColor(3447003)
        .setImage(`https://i.hizliresim.com/8CIYMl.gif`)
    return message.channel.send(vatan);
    
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
//KobsCode
exports.help = {
  name: 'atatürk',
  description: '',
  usage: ''
};