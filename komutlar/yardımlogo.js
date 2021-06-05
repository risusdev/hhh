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
 .setAuthor(`${client.user.username} | Logo Yardım Menüsü`)
 .setDescription(`
<a:tik:782527242097917963>  **${racheprefix}dinamik** \n-> Dinamik logo oluşturur
<a:tik:782527242097917963>  **${racheprefix}altın** \n-> Altın logo oluşturur
<a:tik:782527242097917963>  **${racheprefix}banner** \n-> Banner logo oluşturur
<a:tik:782527242097917963>  **${racheprefix}basit** \n-> Basit logo oluşturur
<a:tik:782527242097917963>  **${racheprefix}elmas** \n-> Elmas logo oluşturur
<a:tik:782527242097917963>  **${racheprefix}sarı** \n-> Sarı logo oluşturur
<a:tik:782527242097917963>  **${racheprefix}neonmavi** \n-> Neon mavi logo oluşturur
<a:tik:782527242097917963>  **${racheprefix}kalın** \n-> Kalın logo oluşturur
<a:tik:782527242097917963>  **${racheprefix}anime** \n-> Anime yazı tipinde logo oluşturur
<a:tik:782527242097917963>  **${racheprefix}habbo** \n-> Habbo yazı tipinde logo oluşturur
<a:tik:782527242097917963>  **${racheprefix}arrow** \n-> Ok işaretli logo oluşturur
<a:tik:782527242097917963>  **${racheprefix}green** \n-> Yeşil logo oluşturur
<a:tik:782527242097917963>  **${racheprefix}alev** \n-> Alevli logo oluşturur
<a:tik:782527242097917963>  **${racheprefix}red** \n-> Kırmızı logo oluşturur

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
  kategori: "logo",
  permLevel: 0
};

exports.help = {
  name: 'logo',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};