const {MessageEmbed } = require('discord.js')
const db = require('quick.db')

module.exports = {
    config: {
    name: 'suggest'  
    },

    run: async(client, message, args) => {

        let channel = db.get(`suggestion_${message.guild.id}`)
        if(channel === null) return message.channel.send(`**Suggestion** est désactivé, activez-le en tapant \`suggestion\` puis votre #channel`)

        const er = new MessageEmbed()
        .setDescription('Utilisation: `suggest <message>`')
        .setColor('RED')

        const err = new MessageEmbed()
        .setDescription('Votre description a dépassé `2000`caractères maximum')
        .setColor('RED')

        const suggest = args.join(" ")

        if(!suggest) return message.channel.send(er)
        if(!suggest.length > 2000) return message.channel.send(err)

        try {
            await message.react('✅')

            let embed = new MessageEmbed()
            .setTitle(`${message.author.tag} Vient de donner une suggestion:`)
            .setDescription(suggest)
            .setTimestamp()
            .setColor('BLURPLE')
    
            let msg = await client.channels.cache.get(channel).send(embed)
            await msg.react('✅')
            await msg.react('❌')
            
        } catch (error) {
            console.log(error)
        }
    }
}