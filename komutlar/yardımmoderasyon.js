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
 .setAuthor(`${client.user.username} | Moderasyon Yardım Menüsü`)
 .setDescription(`
<a:tik:782527242097917963>  **${racheprefix}öneri** \n->  Ayarlanabilir Öneri Sistemi
<a:tik:782527242097917963>  **${racheprefix}sil** \n-> Yazdığınız miktarda mesajı siler
<a:tik:782527242097917963>  **${racheprefix}otorol** \n->  OtoRol Sistemi
<a:tik:782527242097917963>  **${racheprefix}sayaç** \n-> Sayaç Sistemi
<a:tik:782527242097917963>  **${racheprefix}ban** \n-> Etiketlediğiniz kişiyi banlarsınız
<a:tik:782527242097917963>  **${racheprefix}kick** \n-> Etiketlediğiniz kişiyi atarsınız
<a:tik:782527242097917963>  **${racheprefix}duyuru** \n-> Bota duyuru yaptırırsınız
<a:tik:782527242097917963>  **${racheprefix}reklam** \n-> Reklam engel sistemi açarsınız
<a:tik:782527242097917963>  **${racheprefix}slowmode** \n-> Yavaş modu ayarlarsınız
<a:tik:782527242097917963>  **${racheprefix}unban** \n->  Birisinin banını açarsınız
<a:tik:782527242097917963>  **${racheprefix}sa-as** \n->  Sa-as Sistemi
<a:tik:782527242097917963>  **${racheprefix}sunucubilgi** \n->  Sunucu bilgilerini gösterir
<a:tik:782527242097917963>  **${racheprefix}üyedurum** \n->  Üyelerin durumlarını gösterir
<a:tik:782527242097917963>  **${racheprefix}say** \n->  Sunucunun Genel Durumunu Gösterir
<a:tik:782527242097917963>  **${racheprefix}sunucutanıt** \n->  Destek Sunucusunda Sunucunuz Tanıtılır
<a:tik:782527242097917963>  **${racheprefix}abone** \n->  Abone-Rol-Verme-Sistemi
<a:tik:782527242097917963>  **${racheprefix}asil** \n->  Abone-Rol-Alma
<a:tik:782527242097917963>  **${racheprefix}sunucu-tema-sistem** \n->  Sunucu İçin Şablon Sistemi
<a:tik:782527242097917963>  **${racheprefix}kurallar** \n->  Sizin Webhookunuzla Kuralları Atar
<a:tik:782527242097917963>  **${racheprefix}ppgif** \n->  Sunucuda PP Değiştiren Olursa Belirli Kanala Atar
<a:tik:782527242097917963>  **${racheprefix}modlog** \n->  Moderasyon Logları
<a:tik:782527242097917963>  **${racheprefix}gç-ayarla** \n->  Resimli-Hg-Bb Kanal Ayarlar
<a:tik:782527242097917963>  **${racheprefix}gç-sıfırla** \n->  Resimli-Hg-Bb Kanal Sıfırlar
<a:tik:782527242097917963>  **${racheprefix}prefix** \n->  Sunucu İçin Prefixi Ayarlar
<a:tik:782527242097917963>  **${racheprefix}rgüvenlik** \n->  Resimli Güvenlik Ayarlar
<a:tik:782527242097917963>  **${racheprefix}rgüvenlik sıfırla** \n->  Resimli Güvenlik Sıfırlar

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
  kategori: "mod",
  permLevel: 0
};

exports.help = {
  name: 'moderasyon',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};