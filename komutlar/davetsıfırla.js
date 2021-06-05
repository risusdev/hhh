const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "-";
  if (!message.member.hasPermission("ADMINISTRATOR")) {
    message.channel.send(`:x:   **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);
    return;
  }
  const embed = new Discord.MessageEmbed()
    .setColor("#ffd100")
    .setDescription(
      `Herkesin davetlerinin sıfırlanmasını onaylıyor musunuz?`
    )
    .setFooter(bot.user.username, bot.user.avatarURL);
  message.channel.send(embed).then(async function(sentEmbed) {
    const emojiArray = ["✅"];
    const filter = (reaction, user) =>
      emojiArray.includes(reaction.emoji.name) && user.id === message.author.id;
    await sentEmbed.react(emojiArray[0]).catch(function() {});
    var reactions = sentEmbed.createReactionCollector(filter, {
      time: 30000
    });
    reactions.on("end", () => sentEmbed.edit("İşlem iptal oldu!"));
    reactions.on("collect", async function(reaction) {
      if (reaction.emoji.name === "✅") {
        message.channel.send(
          `İşlem onaylandı! herkesin daveti sıfırlandı!`
        );
        db.all().filter(i=> i.ID.startsWith("davet_") && i.ID.endsWith(message.guild.id)).forEach(i=> {
          db.delete(i.ID);
        })
      }
    });
  });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['davetsıfırla'],
  permLevel: 3
};
exports.help = {
  name: 'davet-sıfırla',
  description: '',
  usage: 'duyuru [mesaj]'
};