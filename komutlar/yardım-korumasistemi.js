const WestraDiscord = require('discord.js');
const WestraClient = new WestraDiscord.Client();
const cryptoconfig = require('../ayarlar.json');
let WestraPrefix = cryptoconfig.prefix
let WestraGif = `https://cdn.discordapp.com/attachments/765879032457199617/810940610629337148/standard_37.gif`

const Spectrum = new Set();
exports.run = (client, message, args, member) => {

  if (Spectrum.has(message.author.id)) {
           return message.channel.send("`5` Saniyede da Bir Kullanabilirsiniz - " + `<@${message.author.id}>`);
    } else {
        Spectrum.add(message.author.id);
        setTimeout(() => {
          Spectrum.delete(message.author.id);
        }, 5000);// milisaniye cinsinden
    } 
 const WestraEmbed = new WestraDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Koruma Sistemi Yardım Menüsü`)
 .setDescription(`
<a:tickblack:793899913247326208>  **${WestraPrefix}ban-koruma #kanal** \n-> Ban koruma sistemini açar.
<a:tickblack:793899913247326208>  **${WestraPrefix}ban-koruma-sıfırla** \n-> Ban koruma sistemini sıfırlar.
<a:tickblack:793899913247326208>  **${WestraPrefix}kanal-koruma #kanal** \n-> Kanal koruma sistemini açar.
<a:tickblack:793899913247326208>  **${WestraPrefix}kanal-koruma-sıfırla** \n-> Kanal koruma sistemini sıfırlar.
<a:tickblack:793899913247326208>  **${WestraPrefix}rol-koruma #kanal** \n-> Rol koruma sistemini açar.
<a:tickblack:793899913247326208>  **${WestraPrefix}rol-koruma-sıfırla** \n-> Rol koruma sistemini sıfırlar.
<a:tickblack:793899913247326208>  **${WestraPrefix}spam-koruma** \n-> Spam koruma sistemini açar.
<a:tickblack:793899913247326208>  **${WestraPrefix}spam-koruma-kapat** \n-> Spam koruma sistemini kapatır.
<a:tickblack:793899913247326208>  **${WestraPrefix}reklamlog** \n-> Reklam Logu Ayarlar.
<a:tickblack:793899913247326208>  **${WestraPrefix}reklamengel** \n-> Reklam Engeli Açar/Kapar.
<a:tickblack:793899913247326208>  **${WestraPrefix}küfürlog** \n-> Küfür Logu Ayarlar.
<a:tickblack:793899913247326208>  **${WestraPrefix}küfürengel** \n-> Küfür Engeli Açar/Kapar.`)
 .setFooter(`Rache`)
 .setTimestamp()
 .setImage(WestraGif)
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
  name: 'korumasistemi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};