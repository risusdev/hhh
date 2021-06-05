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
    if (!mesaj) return message.reply('Bana Birşeyler Yazdırmalısın');
    const embed = new Discord.MessageEmbed()
    .setColor(0xD97634)
    .setDescription(`**${mesaj}**`)
    .setFooter(`${message.author.tag}`, message.author.avatarURL())
    return message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yaz'],
  permLevel: 3
};

exports.help = {
  name: 'yaz',
  description: '',
  usage: 'yaz [mesaj]'
};