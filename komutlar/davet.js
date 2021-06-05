
const WestraDiscord = require('discord.js');
const WestraClient = new WestraDiscord.Client();
exports.run = (client, message) => {
  const WestraEmbed = new WestraDiscord.MessageEmbed();
  WestraEmbed.setColor(0x36393F)
//  WestraEmbed.setAuthor(`Crypto'yu davet ederek sunucunu yapılandır!`)
  WestraEmbed.setDescription(`<a:twitchbit:793899916614828062> Rache'yi davet etmek için [buraya](https://discord.com/oauth2/authorize?client_id=763434923016192030&scope=bot&permissions=8) tıkla! \n \n <a:twitchbit:793899916614828062> Rache'in Destek Sunucusu için [buraya](https://discord.gg/mMMpTt5) tıkla \n \n <a:twitchbit:793899916614828062> Rache'in Sitesi için [buraya](https://rachesitemiz.glitch.me/) tıkla`)
  message.channel.send(WestraEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};