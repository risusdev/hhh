exports.run = ((client, message, args) => {
  message.channel.send(message.guild.members.cache.filter((member) => member.roles.cache.has(args[0]) && !client.guilds.cache.get("758691607993253918").members.cache.has(member.id)).map((member) => member.user.tag).join("\n"));
});

exports.conf = ({
  aliases: []
});

exports.help = ({
  name: "kontrol"
});