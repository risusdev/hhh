const Discord = require("discord.js");
const talkedRecently = new Set();

exports.run = async (client, message, args) => {
 if (talkedRecently.has(message.author.id)) {
           return message.channel.send("`3` Saniyede da Bir Kullanabilirsiniz - " + `<@${message.author.id}>`);
    } else {

         
        talkedRecently.add(message.author.id);
        setTimeout(() => {
      

          talkedRecently.delete(message.author.id);
        }, 3000);
    } 


  
let istek = args.slice(0).join(' ')
if(!istek) return message.channel.send('**Bug Bildirmek için Bir Bug Yazınız.** :x:')

const embed = new Discord.MessageEmbed()
.setTitle("Rache Bot Bug Sistemi")
.setColor('BLUE')
.setDescription(`**Bug Kanalı** ${message.channel.name} \n **Bug Bildirilen Sunucu** \`${message.guild.name}\` \n **Bugu Bildiren Kullanıcı** <@${message.author.id}> \n **Bildirilen Bug :** \`${istek}\``)
client.channels.cache.get('794185083627634707').send(embed)
  
message.channel.send("Başarılı").then(message => message.delete({ timeout: 5000 }));
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0  
};

exports.help = {
  name: 'bug-bildir',
  description: 'İstek kodları belirtmeye yarar',
  usage: 'istek-kod <istek>'
}