const Discord = require("discord.js"),
  db = require("quick.db");

module.exports.run = async (client, message, args) => {
	 if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply('<a:twitchbit:793899916614828062> Bu komutu kullanabilmek için **Yönetici** olmalısın!')
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "a?";
  if (kontrol == "agayokaga") {
    let kanal = await db.fetch(`kanalk_${message.guild.id}`)
    if (!kanal) {
      const embed = new Discord.MessageEmbed()
        .setColor(0x36393F)
        .setFooter(client.user.username, client.user.avatarURL())
        .setDescription(`<a:twitchbit:793899916614828062> Kanal koruma sistemi zaten ayarlanmamış!`);
      message.channel.send(embed);
      return;
    }
    db.delete(`kanalk_${message.guild.id}`);
    const embed = new Discord.MessageEmbed()
      .setColor(0x36393F)
      .setFooter(client.user.username, client.user.avatarURL())
      .setDescription(`<a:twitchbit:793899916614828062> Kanal koruma sistemi sıfırlandı!`);
    message.channel.send(embed);
    return;
  } else {
    let kanal = await db.fetch(`kanalk_${message.guild.id}`)
    if (!kanal) {
      const embed = new Discord.MessageEmbed()
        .setColor(0x36393F)
        .setFooter(client.user.username, client.user.avatarURL())
        .setDescription(`<a:twitchbit:793899916614828062> Kanal koruma sistemi zaten ayarlanmamış!`);
      message.channel.send(embed);
      return;
    }
    db.delete(`kanalk_${message.guild.id}`);
    const embed = new Discord.MessageEmbed()
      .setColor(0x36393F)
      .setFooter(client.user.username, client.user.avatarURL())
      .setDescription(`<a:twitchbit:793899916614828062> Kanal koruma sistemi sıfırlandı!`);
    message.channel.send(embed);
    return;
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["channel-protection-reset"],
  permLevel: 3
};

exports.help = {
  name: "kanal-koruma-sıfırla",
  description: "kanal-koruma-sıfırla",
  usage: "kanal-koruma-sıfırla"
};