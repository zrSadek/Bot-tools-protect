const {MessageEmbed } = require("discord.js")

module.exports = {
    config: {
        name: `adminlist`,
    },
    run: async (client, message) => {

var str_filtrer = message.guild.members.cache.filter(member => member.hasPermission("ADMINISTRATOR"))
    var str_map = str_filtrer.map(m => `${m.user.tag}: ${m.user.id}`).join("\n")
    for(let i = 0; i < str_map.length; i += 1995) {
        const str_content = str_map.substring(i, Math.min(str_map.length, i + 1995));
        message.channel.send(
            new MessageEmbed()
            .setTitle(`Liste des admins présents (**${str_filtrer.size}**)`)
            .setDescription(`\n${str_content}`)
            .setColor('RED')
            .setFooter(client.user.username,client.user.displayAvatarURL({dynamic : true }))
        )
    }
    }}