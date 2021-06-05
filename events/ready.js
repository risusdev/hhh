const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;

module.exports = client => {
 setInterval(function() {
}, 350);
  var msgArray = [
"🔥 Yardım İçin r!yardım 🔥",
//"🔥 Eher Bot Çalışmazsa Reset Atılmıştır. 🔥",
//"🔥 Yardım İçin Destek Sunucusuna Gel 🔥",
];


 setInterval(() => {
  var rastgeleOyun = Math.floor(Math.random() * msgArray.length);
  client.user.setActivity(`${msgArray[rastgeleOyun]}`, { type: 'PLAYING' })
}, 8000);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} Ready Çalışıyo Baba`);
   console.log(`[ BOT HAZIR ] - [ SUNUCULAR - ${client.guilds.cache.size} ] - [ KULLANICILAR - ${client.guilds.cache
          .reduce((a, b) => a + b.memberCount, 0)
          .toLocaleString()} ]`)

};