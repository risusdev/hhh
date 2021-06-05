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
 .setAuthor(`${client.user.username} | Eğlence Yardım Menüsü`)
 .setDescription(`
<a:tik:782527242097917963>  **${racheprefix}mcskin** \n-> İsmin Minecraft Skinini Göster
<a:tik:782527242097917963>  **${racheprefix}fbi ** \n-> Fbi Gifi
<a:tik:782527242097917963>  **${racheprefix}düello** \n->  Düello Atarsın
<a:tik:782527242097917963>  **${racheprefix}yaz** \n-> Embedli Yazı Yazdırma

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
  kategori: "eğlen",
  permLevel: 0
};

exports.help = {
  name: 'eğlence',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};