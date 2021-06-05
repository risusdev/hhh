const RacheDiscord = require('discord.js');
const RacheClient = new RacheDiscord.Client();
const ayarlar = require('../ayarlar.json');
let racheprefix = ayarlar.prefix
let rachegif = `https://cdn.discordapp.com/attachments/765879032457199617/810940610629337148/standard_37.gif`

const rachee = new Set();
exports.run = (client, message, args, member) => {

  if (rachee.has(message.author.id)) {
           return message.channel.send("`5` Saniyede da Bir Kullanabilirsiniz - " + `<@${message.author.id}>`);
    } else {
        rachee.add(message.author.id);
        setTimeout(() => {
       
          rachee.delete(message.author.id);
        }, 5000);// milisaniye cinsinden
    } 
 const RacheEmbed = new RacheDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Kod Sistemi Yardım Menüsü`)
 .setDescription(`
<a:tik:782527242097917963>  **${racheprefix}kodsistem aç/kapat** \n-> Kod Sistemini Açarsınız
<a:tik:782527242097917963>  **${racheprefix}kodyetkili-rol-ayarla @rol** \n-> Kod Paylaşımcı Rolü
<a:tik:782527242097917963>  **${racheprefix}altyapı-kanal kategoriid** \n-> Altyapıların Paylaşılacağı Kategori
<a:tik:782527242097917963>  **${racheprefix}kodlog #kanal** \n->  Kodlog Kanalı
<a:tik:782527242097917963>  **${racheprefix}js-kanal kategoriid** \n-> Js Kodlarının Paylaşılacağı Kategoriyi Ayarlar
<a:tik:782527242097917963>  **${racheprefix}jsp-kanal kategoriid** \n-> Jsplus Kodlarının Paylaşılacağı Kategoriyi Ayarlar
<a:tik:782527242097917963>  **${racheprefix}altyapı kodismi kodlink kodmainlink** \n-> Altyapı Paylaşır
<a:tik:782527242097917963>  **${racheprefix}js kodismi kodlinki kodmainlink** \n-> Js kod paylaşır
<a:tik:782527242097917963>  **${racheprefix}jsp kodismi kodlinki kodmainlink** \n-> Jsp Kod Paylaşır

`)
 .setFooter(`Rache`)
 .setTimestamp()
 .setImage(rachegif)
 message.channel.send(RacheEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "kodpaylaşma",
  permLevel: 0
};

exports.help = {
  name: 'kodyardım',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};