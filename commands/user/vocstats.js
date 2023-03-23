const Discord = require("discord.js");

module.exports = {
    config: {
    name: 'vocstats'  
    },

    run: async(client, message, args) => {
            var connectedCount = 0;
            var streamingCount = 0;
            var mutedCount = 0;
            var mutedMic = 0;

            const channels = message.guild.channels.cache.filter(c => c.type === 'voice');
            channels.forEach(c => {
                connectedCount += c.members.size;
                    c.members.forEach(m => {
                        if(m.voice.streaming) streamingCount++;
                        if(m.voice.selfDeaf || m.voice.serverDeaf) mutedCount++;
                        if(m.voice.selfMute || m.voice.serverMute) mutedMic++;
                    })
            })
            const embed = new Discord.MessageEmbed()
                .setAuthor(`${message.author.tag}`, `${message.author.avatarURL()}`)
                .setTitle(`:bar_chart: ・ Statistiques vocales`)
                .setDescription(` ↳ \`${connectedCount}\` membre(s) en vocal \n ↳ \`${streamingCount}\` membre(s) en streaming\n ↳ \`${mutedMic}\` membre(s) muet   \n ↳ \`${mutedCount}\` membre(s) sourd`)
                .setTimestamp()
            message.channel.send(embed)
}
}
