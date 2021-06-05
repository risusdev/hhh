const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "-";
  
  let sıralı= db.all().filter(i=> i.ID.startsWith("davet_") && i.ID.endsWith(message.guild.id)).map(i=> [i.ID.replace("davet_","").replace("_"+message.guild.id,""),i.data]).sort(function(a,b){if(a[1] > b[1]) return -1;return 1;});
  function böl(liste,sayı){
    let sonuç = [];
    for(let i=0;i<Math.floor(liste.length/sayı);i++) {
      sonuç.push(liste.slice(sayı*i, (sayı*i)+sayı));
    }
    if(Math.floor(liste.length/sayı)*sayı != sayı) {
      sonuç.push(liste.slice(Math.floor(liste.length/sayı)*sayı));
    }
    return sonuç;
  }
  let sayfalar = böl(sıralı, 9);
  let şuanki = sayfalar[args[0] && !isNaN(args[0]) ? (args[0] > sayfalar.length ? sayfalar.length-1 : args[0]-1) : 0];
  if(şuanki.length > 9) şuanki=şuanki.slice(0,8);
  let embed = new Discord.MessageEmbed()
  .setAuthor("Davet sıralaması",bot.user.avatarURL())
  .setTitle("Sayfa "+((args[0] && !isNaN(args[0]) ? (args[0] > sayfalar.length ? sayfalar.length-1 : args[0]-1) : 0)+1)+"/"+sayfalar.length)
  .setFooter(message.author.tag+" tarafından istendi, Diğer Sayfalar İçin r!davet-sıralama Sayfa Numarası")
  .setTimestamp()
  .setColor("#36393F");
  şuanki.forEach(i=> {
    embed.addField("═══════════════",(sıralı.map(i=> i[0]).indexOf(i[0])+1) + ". <@!"+i[0]+">"+"\n"+i[1]+" davet", true);
  })
  message.channel.send(embed)
  
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["dvtsrlm"],
  permLevel: 0
};
exports.help = {
  name: 'davet-sıralama',
  description: ' ',
  usage: ' '
};