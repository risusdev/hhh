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
 .setAuthor(`${client.user.username} | Geliştirici Yardım Menüsü`)
 .setDescription(`
<a:tik:782527242097917963>  **${racheprefix}kod-çevir** \n-> V11 Kodunuzu V12Ye Çevirir
<a:tik:782527242097917963>  **${racheprefix}çevrilenkod** \n-> Çevirilen Toplam Kodu Görürsünüz
<a:tik:782527242097917963>  **[Botlist Sunucumuz](https://discord.gg/mMMpTt5)** \n-> Botlist Sunucumuzda Botunuza İstatistik Kasabilirsiniz
<a:tik:782527242097917963>  **[Botlist2 Sunucumuz](https://discord.gg/36hAyHevQQ)** \n-> Diğer Botlist Sunucumuzda Botunuza İstatistik Kasabilirsiniz
<a:tik:782527242097917963>  **[Kod Sunucumuz](https://discord.gg/mMMpTt5)** \n->  Botunuz İçin Kod, Sistemler 
\n \n• [Botlist](https://discord.gg/mMMpTt5)• [Botlist2](https://discord.gg/36hAyHevQQ) • [Kod](https://discord.gg/mMMpTt5)



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
  kategori: "geliştirici",
  permLevel: 0
};

exports.help = {
  name: 'geliştirici',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};