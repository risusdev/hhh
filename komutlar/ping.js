const Discord = require('discord.js')
const talkedRecently = new Set();
 
exports.run = async (client ,message, args) =>{
  if (talkedRecently.has(message.author.id)) {
           return message.channel.send("`3` Saniye de Bir Kullanabilirsiniz - " + message.author.tag);
    } else {

         
        talkedRecently.add(message.author.id);
        setTimeout(() => {
      

          talkedRecently.delete(message.author.id);
        }, 3000);
    } 

  
  const embed = new Discord.MessageEmbed()
  .setTitle("<a:twitchbit:793899916614828062> Pingim <a:twitchbit:793899916614828062>")
  .setColor("RANDOM")
  .setDescription(`${client.ws.ping} ms <a:twitchbit:793899916614828062>`)
  message.channel.send(embed)
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['ping'],
 permLevel: 0
};
 
exports.help = {
 name: 'ping',
 description: 'Botun Pingine Bakarsın',
 usage: '!ping'
};
 