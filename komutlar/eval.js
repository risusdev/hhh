const Discord = require('discord.js');
const db = require('quick.db')
const ms = require('ms');
const cryptoconfig = require('../ayarlar.json');

exports.run = (client, message, args) => {
    
  const commonTags = require("common-tags");
  const util = require("util");
   let { MessageEmbed } = require("discord.js");
if(message.author.id !== "666223000739381258") if(message.author.id !== "666223000739381258") return message.channel.send("Kullanım Dışı");
    function cleanText(text) {
      if (typeof text === "string") {
        return text
          .replace(/`/g, "`" + String.fromCharCode(8203))
          .replace(/@/g, "@" + String.fromCharCode(8203));
      } else {
        return text;
      }
    }

    try {
      let executedIn = process.hrtime();
      let result = eval(args.join(" "));
      result = cleanText(result);
      result = util.inspect(result);
      executedIn = process.hrtime(executedIn);
      executedIn =
        executedIn[0] * Math.pow(10, 3) + executedIn[1] / Math.pow(10, 6);

      let embed = new MessageEmbed();
         embed.setColor("BLUE")
      embed.setDescription(commonTags.stripIndents`
      ${executedIn.toFixed(3)} milisaniyede çalıştırıldı
      \`\`\`js
        ${result}\`\`\`
    `);
      message.channel.send({ embed });
    } catch (error) {
      let embed = new MessageEmbed();
      embed.setDescription(commonTags.stripIndents`
      <a:twitchbit:793899916614828062> Hata Çıktı <a:twitchbit:793899916614828062>
      \`\`\`js
      ${cleanText(error)}\`\`\`
    `);
        embed.setColor("BLUE")
 message.channel.send({ embed });
    }
  
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "rache",
  description: "kanal-koruma",
  usage: "kanal-koruma"
};