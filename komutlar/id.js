const Discord = require("discord.js");
const talkedRecently = new Set();
exports.run = async (client, message, args) => {

  if (talkedRecently.has(message.author.id)) {
           return message.channel.send("`3` Saniyede da Bir Kullanabilirsiniz - " + `<@${message.author.id}>`);
    } else {

         
        talkedRecently.add(message.author.id);
        setTimeout(() => {
      

          talkedRecently.delete(message.author.id);
        }, 3000);
    } 

  let kişi = message.mentions.members.first() || message.author;
  message.channel.send(`**İstediğiniz Kişinin ID Numarası:** **${kişi.id}**`);
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases:['id'],
  permlevel:0
}

exports.help = {
  name : "id",
  description:"Birisinin İD Sini Alırsınız",
  usage:"!id"
}