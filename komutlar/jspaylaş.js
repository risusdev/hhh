const Discord = require('discord.js')
const db = require('quick.db');

exports.run = async (client, message, args) => {
    
    let sistem = db.fetch(`kodsistemi.${message.guild.id}`)
    const acikdegil = new Discord.MessageEmbed()
    .setAuthor(client.avatarURL)
    .setColor("RANDOM")
    .setDescription(`Bu komutu kullanabilmek için kod sistemini açman gerekiyor! r!kod-sistemi aç`)
  if(!sistem) return message.channel.send(acikdegil)
let kategori = message.guild.channels.cache.find(r => r.id === db.fetch(`kodJS.${message.guild.id}`))
let yetkilirol = db.fetch(`kodyetkiliR.${message.guild.id}`)
if(!db.fetch(`kodK.${message.guild.id}`)) return message.channel.send(`Kod logunu ayarlamalisin!`)
let log = client.channels.cache.get(db.fetch(`kodK.${message.guild.id}`))
if(!yetkilirol) return message.channel.send(`Yetkili Rol Ayarlanmamış! r!kodyetkili-rol @rol`)
if(!kategori) return message.channel.send(`Kategori İd Ayarlanmamış! r!js-kanal kategoriid`)

if(!message.member.roles.cache.has(yetkilirol)) return message.channel.send("Yetkin yok!")
let everyone = message.guild.roles.cache.find(r => r.name === `@everyone`);
if(!args[0] || !args[1] || !args[2]) return message.channel.send(`Lütfen komutu doğru kullanınız!\nÖrnek kullanım: r!js <kod-adı> - <kod-main>\nEğer kodun main veya komut kısmı yok ise - yazınız!`)
message.guild.channels.create(args[0], {type: 'text'}).then(kanal => {
  message.channel.send(`Kod kanalini olusturdum iste kanalin! <#${kanal.id}>`)
    kanal.setParent(kategori.id)
    
    kanal.send(new Discord.MessageEmbed()
.setAuthor(`${args[0]} adlı kod paylaşıldı!`)
.setDescription(`<a:tik:782527242097917963> **Kod hakkında**
<a:tik:782527242097917963> Yetkili isim \`${message.author.tag}\`
<a:tik:782527242097917963> Yetkili id \`${message.author.id}\`
<a:tik:782527242097917963> Kod Main linki: [Maine Fırla](${args[1]})
<a:tik:782527242097917963> Kod Komut linki: [Koda Fırla](${args[2]})`)
.setColor("RED"))
  })
  log.send(new Discord.MessageEmbed()
  .setAuthor(`${args[0]} adlı kod paylaşıldı!`)
  .setDescription(`<a:tik:782527242097917963> **Kod hakkında**
  <a:tik:782527242097917963> Yetkili isim \`${message.author.tag}\`
  <a:tik:782527242097917963> Yetkili id \`${message.author.id}\`
  <a:tik:782527242097917963> Kod Main linki: [Maine Fırla](${args[1]})
  <a:tik:782527242097917963> Kod Komut linki: [Koda Fırla](${args[2]})`)
  .setColor("RED"))

}


    exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: ["kod"],
        permLevel: 0,
        kategori: "kodyetkili",
     
      };
     
      exports.help = {
        name: 'js',
        description: 'Gelişmiş kodyetkili Sistemindeki kodyetkili ekibi rolünü değiştirmenizi sağlar.',
        usage: 'kodyetkili-rol-ayarla <@rol>',
       
      };