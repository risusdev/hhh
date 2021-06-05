const WestraDiscord = require('discord.js');
const WestraClient = new WestraDiscord.Client();
const cryptoconfig = require('../ayarlar.json');
let WestraPrefix = cryptoconfig.prefix
let rachegif = `https://cdn.discordapp.com/attachments/765879032457199617/810940610629337148/standard_37.gif`

const rache = new Set();
exports.run = (client, message, args, member) => {

  if (rache.has(message.author.id)) {
           return message.channel.send("`5` Saniyede da Bir Kullanabilirsiniz - " + `<@${message.author.id}>`);
    } else {
        rache.add(message.author.id);
        setTimeout(() => {
          rache.delete(message.author.id);
        }, 5000);// milisaniye cinsinden
    } 
 const WestraEmbed = new WestraDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Kayıt Sistemi Yardım Menüsü`)
 .setDescription(`<a:tickblack:793899913247326208>  **${WestraPrefix}alınacak-rol @rol** \n Kayıt edilen kişiden alınacak rolü ayarlar.
<a:tickblack:793899913247326208>  **${WestraPrefix}alınacak-rol sıfırla** \n Kayıt edilen kişiden alınacak rolü sıfırlar.
<a:tickblack:793899913247326208>  **${WestraPrefix}kayıt-kanal #kanal** \n Kayıtın yapılacağı kanalı belirlersiniz.
<a:tickblack:793899913247326208>  **${WestraPrefix}kayıt-kanal sıfırla** \n Kayıtın yapılacağı kanalı sıfırlarsınız.
<a:tickblack:793899913247326208>  **${WestraPrefix}kayıt-hg #kanal** \n Kayıt hoş geldin kanalını ayarlarsınız.
<a:tickblack:793899913247326208>  **${WestraPrefix}kayıt-hg sıfırla** \n Kayıt hoş geldin kanalını sıfırlarsınız.
<a:tickblack:793899913247326208>  **${WestraPrefix}kayıt-yetkili @rol** \n Kayıt edebilecek yetkiyi ayarlar.
<a:tickblack:793899913247326208>  **${WestraPrefix}kayıt-yetkili sıfırla** \n Kayıt edebilecek yetkiyi sıfırlar.
<a:tickblack:793899913247326208>  **${WestraPrefix}erkek-rol @rol** \n Kayıt edilince verilecek erkek rolü ayarlar.
<a:tickblack:793899913247326208>  **${WestraPrefix}erkek-rol sıfırla** \n Kayıt edilince verilecek erkek rolünü sıfırlar.
<a:tickblack:793899913247326208>  **${WestraPrefix}kız-rol @rol** \n Kayıt edilince verilecek kız rolü ayarlar.
<a:tickblack:793899913247326208>  **${WestraPrefix}kız-rol sıfırla** \n Kayıt edilince verilecek kız rolünü sıfırlar.
<a:tickblack:793899913247326208>  **${WestraPrefix}erkek @kullanıcı isim yaş** \n Erkekleri kayıt etmeye yarar.
<a:tickblack:793899913247326208>  **${WestraPrefix}kız @kullanıcı isim yaş** \n Kızları kayıt etmeye yarar.
<a:tickblack:793899913247326208>  **${WestraPrefix}tagerkek @kullanıcı tag isim yaş** \n Erkekleri Taglı kayıt etmeye yarar.
<a:tickblack:793899913247326208>  **${WestraPrefix}tagkız @kullanıcı tag isim yaş** \n Kızları Taglı kayıt etmeye yarar.
`)
 .setFooter(`Rache`)
 .setTimestamp()
 .setImage(rachegif)
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
  name: 'kayıtsistemi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};