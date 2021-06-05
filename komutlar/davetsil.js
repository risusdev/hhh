const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  let prefix = (await db.fetch(`prefix.${message.guild.id}`)) || "-";
  if (!message.member.hasPermission("ADMINISTRATOR")) {
  message.channel.send(`:x:   **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);
    return;
  }
  let u = message.mentions.users.first();
let m = args.slice(1).join(" ")
  if (!u) {
    return message.channel.send(
      new Discord.MessageEmbed()
      .setFooter(bot.user.username, bot.user.avatarURL)
        .setDescription("**Lütfen daveti sililenecek kişiyi etiketleyiniz!**")
        .setColor("#ffd100")
    );
  }
    if (!m) {
    return message.channel.send(
      new Discord.MessageEmbed()
      .setFooter(bot.user.username, bot.user.avatarURL)
        .setDescription("**Lütfen silinecek davet sayısını giriniz.**")
        .setColor("#ffd100")
    );
  }
  const embed = new Discord.MessageEmbed()
    .setColor("#ffd100")
  .setFooter(bot.user.username, bot.user.avatarURL)
    .setDescription(`${u} Adlı şahsa; ${m} davet silindi!`);
  message.channel.send(embed);
   await db.add(`davet_${u.id}_${message.guild.id}`, -m);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['davetsil'],
  permLevel: 3
};
exports.help = {
  name: 'davet-sil',
  description: '',
  usage: 'duyuru [mesaj]'
};