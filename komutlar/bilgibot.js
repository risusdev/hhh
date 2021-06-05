const Discord = require('discord.js')
const moment = require("moment");
const db = require('quick.db')
const os = require("os");
const client = require("moment-duration-format");
exports.run = async (client, message, args) => {
  
let uptime = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]")
let bel = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)
let bel2 = (process.memoryUsage().heapTotal / 1024 / 1024).toFixed(2)
let aylartoplam = {
        "01": "Ocak",
        "02": "Şubat",
        "03": "Mart",
        "04": "Nisan",
        "05": "Mayıs",
        "06": "Haziran",
        "07": "Temmuz",
        "08": "Ağustos",
        "09": "Eylül",
        "10": "Ekim",
        "11": "Kasım",
        "12": "Aralık"
  }
 let aylar = aylartoplam 
 let duration = client.uptime

 let s = (`${moment(client.user.createdAt).format('DD')} ${aylar[moment(client.user.createdAt).format('MM')]} ${moment(client.user.createdAt).format('YYYY HH:mm:ss')}`)



 const Embed = new Discord.MessageEmbed()
  .setTitle(`Rache İstatistik.`)
 .setDescription(`
            **Sahip Bilgileri**
           <a:twitchbit:793899916614828062> Kurucular ➤➤ **<@!666223000739381258> <@!761945664447840256> <@!477050335685509124>**
           <a:twitchbit:793899916614828062> İD ➤➤ **\`666223000739381258, 477050335685509124, 761945664447840256\`**\n
           **Bot Sunucuları**
           <a:twitchbit:793899916614828062> Sunucu Sayısı ➤➤ **\`${client.guilds.cache.size.toLocaleString()}/200\`**
           <a:twitchbit:793899916614828062> Kullanıcı Sayısı ➤➤**\`${client.users.cache.size}/120000\`**
           <a:twitchbit:793899916614828062> Kanal  sayısı ➤➤  **\`${client.channels.cache.size.toLocaleString()}\`\n**  
           **Versiyon Bilgileri**
           <a:twitchbit:793899916614828062> DiscordJS ➤➤ **\`v${Discord.version}\`**
           <a:twitchbit:793899916614828062> NodeJS ➤➤ **\`${process.version}\`**\n
           **Bot Kullanım bilgileri**
           <a:twitchbit:793899916614828062> Kuruluş ➤➤ **\`${s}\`**
           <a:twitchbit:793899916614828062> Ping ➤➤ **\`${client.ws.ping}ms\`**
           <a:twitchbit:793899916614828062> Bit  ➤➤ **\`${os.arch()}\`**
           <a:twitchbit:793899916614828062> İşletim Sistemi ➤➤ **\`${os.platform()}\`**
           <a:twitchbit:793899916614828062> Çalışma Süresi ➤➤  **\`${uptime}\`**
           <a:twitchbit:793899916614828062> Bellek Kullanımı ➤➤ **\`${bel}/1GB\`**
           <a:twitchbit:793899916614828062> Toplam Bellek Miktarı ➤➤ **\`${bel2}/9GB\`**
           <a:twitchbit:793899916614828062> Yüklü Modül sayısı ➤➤ **\`200+\`**
           <a:twitchbit:793899916614828062> Komut Sayısı  ➤➤   **\`${client.commands.size}\`** 
           <a:twitchbit:793899916614828062> CPU  \`\`\`fix\n➤➤ ${os.cpus().map((i) => `${i.model}`)[0]}\`\`\`
            **Bot ekstra bilgiler**
           <a:twitchbit:793899916614828062> Ana Komut ➤➤ **\`r!yardım\` + \`r!kayıtsistemi\` + \`Yeni Komutlar\`** 
           <a:twitchbit:793899916614828062> Veri Kaydı ➤➤ **\`quick.db\`**
           <a:twitchbit:793899916614828062> quick.db Komut sayısı ➤➤ **\`50+\`**
           <a:twitchbit:793899916614828062> Destek Sunucusu ➤➤ [Destek Sunucusu](https://discord.gg/mMMpTt5)
`)          
//${db.all().lenght} (databasedeki veri sayısını göstericekdir isterseniz ekleyin)
  message.channel.send(Embed)
};
 
exports.conf = { 
  enabled: true,
  guildOnly: false,
  aliases: ['botbilgi', 'istatistik'],
  permLevel: 0
};
 
exports.help = {
  name: 'i',
  description: 'Reklam Sistemini Akif Eder',
  usage: 'reklam-engelle'
};