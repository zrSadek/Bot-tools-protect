const {MessageEmbed } = require("discord.js")

module.exports = {
    config: {
        name: `botlist`,
    },
    run: async (client, message) => {

        let bots = message.guild.members.cache.filter(m => m.user.bot).size;
        let noms = message.guild.members.cache.filter(m => m.user.bot).map(m => `${m.user.tag}: ${m.user.id}`).join("\n");    
        var embed = new MessageEmbed()
        .setColor('RED')
        .setTitle(`Liste des Bots (${bots})`)
        .setDescription(noms)
        .setFooter(client.user.username,client.user.displayAvatarURL({dynamic : true }))
        message.channel.send(embed)
    }
}