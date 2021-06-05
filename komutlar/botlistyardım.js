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
 .setAuthor(`${client.user.username} | Kullanıcı Yardım Menüsü`)
 .setDescription(`
<a:tik:782527242097917963>  **${racheprefix}onayla <sahipid> <botid>** \n-> Botu Onaylarsınız
<a:tik:782527242097917963>  **${racheprefix}reddet<botsahip id> <nedeni>** \n-> Botu Reddedersiniz
<a:tik:782527242097917963>  **${racheprefix}botekle-kanal #kanal** \n->  Botların Eklenebileceği Kanalı Ayarlar
<a:tik:782527242097917963>  **${racheprefix}botekle-kanal kapat** \n-> Botların Eklenebileceği Kanalı Kapatır
<a:tik:782527242097917963>  **${racheprefix}log-kanal #kanal** \n-> Botların Kabul Red Loglarının Gideceği Kanalı Ayarlar
<a:tik:782527242097917963>  **${racheprefix}log-kanal sıfırla** \n-> Red Kabul Kanalını Kapatır
<a:tik:782527242097917963>  **${racheprefix}botlist-yetkili-rol @rol** \n-> Kabul Red Yapacak Yetkili Rolü Ayarlarsınız
<a:tik:782527242097917963>  **${racheprefix}botlist-yetkili-rol sıfırla** \n-> Yetkili Rolünü Sıfırlar
<a:tik:782527242097917963>  **${racheprefix}yetkili-log #kanal** \n-> Gelen Başvuruların Bilgilerini Belirlediğiniz Kanala Atar
<a:tik:782527242097917963>  **${racheprefix}yetkili-log sıfırla** \n->  Bilgilerini Belirlediğiniz Kanalı Kapatır
<a:tik:782527242097917963>  **${racheprefix}botlist-kapat** \n->  Botlist Sistemini Kapatır
<a:tik:782527242097917963>  **${racheprefix}botekle <id> <prefix>** \n->  Bot Başvuru Kanalında Bot Eklemenizi Sağlar

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
  kategori: "botlist",
  permLevel: 0
};

exports.help = {
  name: 'botlist',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};