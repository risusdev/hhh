const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.channel.send(new Discord.MessageEmbed()
.setColor('#00001')
.setTitle('Rache Sunucu Tema Şablon Sistem')
.setDescription(`**Tüm şablonlar ${client.user.username}'a Aittir [Destek](https://discord.gg/mMMpTt5)**
İçerikler de birden fazla tema var.

\`r!j4j-tema\` 
**Hazır __join 4 join__ sunucu teması yollar**

\`r!public-tema\` 
**Hazır karışık __public__ sunucu teması yollar**

\`r!oyun-tema\` 
**Hazır __oyun__ sunucu teması yollar**

\`r!gif-tema\` 
**Hazır gif share sunucu teması yollar**



\`\`\`Farklı temalar için, Kendi sunucu şablonunuzu bize iletebilirsin!\`\`\``)
.setThumbnail('https://cdn.discordapp.com/avatars/763434923016192030/8736d9fcf785f62ae9b408df3ffbc5f5.png?size=1024'));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'sunucu-tema-sistem'
};