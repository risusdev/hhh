const Discord = require('discord.js');
const talkedRecently = new Set();

exports.run = (client, message, args) => {
  if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(' Bu komutu kullanmak için \`MESAJLARI_YÖNET\` yetkisine sahip olmalısın!')
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
  aliases: ['duyuru'],
  permLevel: 3
};

exports.help = {
  name: 'duyuru',
  description: '',
  usage: 'duyuru [mesaj]'
};