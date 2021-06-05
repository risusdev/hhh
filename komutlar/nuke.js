const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
message.channel.clone().then(knl => {
  let position = message.channel.position;
  knl.setPosition(position);
  message.channel.delete()

});

}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["nuke","nuk","nk"],
  permLevel: 3
};

exports.help = {
    name: 'nuke',
  description: 'belirtilen kanalı siler tekrar oluşturu işte',
  usage: 'nuke'
};
