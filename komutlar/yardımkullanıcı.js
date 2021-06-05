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
<a:tik:782527242097917963>  **${racheprefix}avatar** \n-> Etiketlediğiniz Kişinin Avatarını Gösterir
<a:tik:782527242097917963>  **${racheprefix}yetkilerim** \n-> Yetkilerini görürsün
<a:tik:782527242097917963>  **${racheprefix}profil** \n->  Profilini görürsün
<a:tik:782527242097917963>  **${racheprefix}sunucuresmi** \n-> Sunucu resmini gösterir
<a:tik:782527242097917963>  **${racheprefix}ping** \n-> Botun Pingine Bakarsın
<a:tik:782527242097917963>  **${racheprefix}id** \n-> Birisinin id'sine Bakarsın
<a:tik:782527242097917963>  **${racheprefix}botbilgi** \n-> Bot istatistiklerini görürsünüz
<a:tik:782527242097917963>  **${racheprefix}davet** \n-> Botun Davet Linkini Atar
<a:tik:782527242097917963>  **${racheprefix}bug-bildir** \n-> Yazdığınız bug'u yapımcılarıma bildirir
<a:tik:782527242097917963>  **${racheprefix}atatürk** \n->   Dene ve gör... (1881-1938)

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
  kategori: "kullanici",
  permLevel: 0
};

exports.help = {
  name: 'kullanıcı',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};