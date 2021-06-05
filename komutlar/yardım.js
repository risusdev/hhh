const Discord = require('discord.js')
const client = new Discord.Client()
const db = require('quick.db')
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
const yardım = new Discord.MessageEmbed()
  .setAuthor(`Rache Yardım Menüsü`, client.user.avatarURL())
  .setColor("0x36393F")
  .setThumbnail(client.user.avatarURL())
  .setDescription(`•  Prefixim: **r!**\n • Dilim: **TR** :flag_tr:\n • Üyelik durumu: ${db.has(`üyelikk_${message.author.id}`, "üyelik") ? `**Gold üye!**` : `**Normal üye!**`}`)
  .addField(" • Kategoriler:", `<a:twitchbit:793899916614828062> • [r!eğlence](https://discord.gg/mMMpTt5): **Eğlence yardım menüsünü gösterir.**\n <a:twitchbit:793899916614828062> • [r!kullanıcı](https://discord.gg/mMMpTt5): **Kullanıcı yardım menüsünü gösterir.**\n <a:twitchbit:793899916614828062> • [r!moderasyon](https://discord.gg/mMMpTt5): **Moderasyon yardım menüsünü gösterir.**\n <a:twitchbit:793899916614828062> • [r!kayıtsistemi](https://discord.gg/dn7J8vDJ3V): ** Kayıt sistemi yardım menüsünü gösterir.**\n <a:twitchbit:793899916614828062> • [r!botlist](https://discord.gg/mMMpTt5): ** Botlist Sistemini Yardım Menüsü Ve Komutlarını Gösterir.** \n <a:twitchbit:793899916614828062> • [r!logo](https://discord.gg/mMMpTt5): ** Logo sistemi yardım menüsünü gösterir.**\n <a:twitchbit:793899916614828062> • [r!davetsistemi](https://discord.gg/mMMpTt5): **Davet Sistemi yardım menüsünü gösterir.**\n <a:twitchbit:793899916614828062> • [r!geliştirici](https://discord.gg/mMMpTt5): ** Geliştirici Yardım Menüsü**`)
  .addField(" • Kategoriler:", ` <a:twitchbit:793899916614828062> • [r!kodyardım](https://discord.gg/mMMpTt5): **Kod Sistemi Yardım menüsünü gösterir.**`)
  .addField("• Yeni Güncellemeler", `<a:twitchbit:793899916614828062> • [r!korumasistemi](https://discord.gg/mMMpTt5): **Koruma Sistemi yardım menüsünü gösterir.**`)
  .addField(" • Güncellemele Notları:", "**Güncelleme v1.0:** Kayıt Sistem ve Botlist Eklendi Ve Güncellendi!")
  .addField(" • Linkler:", "• [Davet Et](https://discord.com/oauth2/authorize?client_id=763434923016192030&scope=bot&permissions=8) • [Destek Sunucusu](https://discord.gg/mMMpTt5) •")
  .setImage("https://cdn.discordapp.com/attachments/765879032457199617/810940610629337148/standard_37.gif")
.setFooter("Rache", message.author.avatarURL())
.setTimestamp()
  message.channel.send(yardım)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["y", "help", "h"],
    permLevel: 0
}

exports.help = {
    name: "yardım",
    description: "rache",
    usage: "rache"
}