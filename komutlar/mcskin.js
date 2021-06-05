const Discord = require('discord.js');
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

 let mesaj = args.slice(0).join(' ');
 let member = message.mentions.members.first();
 let body = 'https://mc-heads.net/body/' + mesaj
 if (mesaj.length < 1) return message.channel.send('skin adı gir')
 if (mesaj == member) {
   message.channel.send('skin adı belirt')
 } else {
 const mcbody = new Discord.MessageEmbed()
   .setColor('BLUE')
   .setImage(body)

 message.channel.send(mcbody);
 }
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["mccilt"],
  permLevel: 0
};

exports.help = {
  name: "mcskin"
};