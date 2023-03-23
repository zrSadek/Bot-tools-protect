const { MessageEmbed } = require("discord.js")

module.exports = {
config: {
        name: "help",
        aliases: ['aide'],
},

    run: async (bot, message) => {
        let embed = new MessageEmbed()
        .setColor(`RED`)
.setDescription('**Voici la liste de mes commandes (15)**')
        .addFields(

            { name: `💥・antiraid (2)`, value: '`antibot`, `antiweb`'},
                
            { name: `📂・log (1)`, value: '`setwelcome-on/off`',},

            { name: `💰・jeu (1)`, value: '`ppc`',},

            { name: `🏠・Utilitaire (6)`, value: '`help`, `speed`, `banlist`, `botlist`, `adminlist`, `suggest`, `vocstats`'},

            { name: `👑・owner (4)`, value: '`whitelist`, `setname`, `setavatar`, `set-suggestion`'},
        )
        .setTimestamp()
        .setThumbnail(bot.user.displayAvatarURL())
        message.channel.send(embed)    
}}
