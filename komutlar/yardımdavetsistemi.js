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
 .setAuthor(`${client.user.username} | Davet Sistemi Yardım Menüsü`)
 .setDescription(`
<a:tik:782527242097917963>  **${racheprefix}davet-kanal** \n-> Sunucunuzda Kaç Kişinin Ne Kadar Daveti Olduğunu Gösteren Kanalı Ayarlar
<a:tik:782527242097917963>  **${racheprefix}davet-kanal-sıfırla** \n-> Sunucunuzda Kaç Kişinin Ne Kadar Daveti Olduğunu Gösteren Kanalı Sıfırlar
<a:tik:782527242097917963>  **${racheprefix}davet-ekle** \n-> Etiketlediğiniz Kişiye İstediğiniz Davet Miktarını Eklersiniz
<a:tik:782527242097917963>  **${racheprefix}davetlerim** \n-> Sunucuda Kaç Davetiniz Olduğunu Gösterir
<a:tik:782527242097917963>  **${racheprefix}rütbe-ekle** \n-> Sunucunuzda Davet Sayısına Göre Rol Verme Sistemine Rol Ekler
<a:tik:782527242097917963>  **${racheprefix}rütbe-sil** \n-> Sunucunuzda Davet Sayısına Göre Rol Verme Sisteminden Rol Siler
<a:tik:782527242097917963>  **${racheprefix}rütbe-liste** \n-> Eklediğiniz Rütbeleri Gösterir
<a:tik:782527242097917963>  **${racheprefix}invite @kullanıcı** \n-> Etiketlenen Kullanıcının Davet Sayısı
<a:tik:782527242097917963>  **${racheprefix}davet-sıfırla** \n-> Tüm Kullanıcıların Davetlerini Sıfırlar
<a:tik:782527242097917963>  **${racheprefix}davet-sıralama** \n-> Tüm Kullanıcıların Davetlerini Sıralar

`)
 .setFooter(`Rache`)
 .setTimestamp()
 .setImage(rachegif)
 message.channel.send(RacheEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["invitesistemi"],
  kategori: "logo",
  permLevel: 0
};

exports.help = {
  name: 'davetsistemi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};