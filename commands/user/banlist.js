const {MessageEmbed } = require("discord.js")

module.exports = {
    config: {
        name: `banlist`,
    },
    run: async (client, message) => {
        const fetchBans = message.guild.fetchBans()
        const bannedMembers = (await fetchBans)
        .map((member) => `${member.user.tag}: ${member.user.id}`)
        .join("\n");

        let embed = new MessageEmbed()
                .setTitle(`liste des membres banni.`)
                .setColor(`RED`)
                .setDescription(bannedMembers)  
                .setFooter(client.user.username,client.user.displayAvatarURL({dynamic : true }))      
                message.channel.send(embed)        
    }}