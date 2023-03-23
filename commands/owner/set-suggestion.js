const db = require('quick.db')
const Discord = require("discord.js");
const whitelist = require("../../whitelist.json")

module.exports = {
    config: {
    name: 'set-suggestion'
    },

    run: async(message, args) => {

      
     if(message.author.id !== whitelist.id && message.author.id !== whitelist.id2 && message.author.id !== whitelist.id3 && message.author.id !== whitelist.id4 && message.author.id !== whitelist.id5 && message.author.id !== whitelist.id6 && message.author.id !== whitelist.id7 && message.author.id !== whitelist.id8 && message.author.id !== whitelist.id9) return;  
      if(!message.member.permissions.has('ADMINISTRATOR')) return;
        let channel = message.mentions.channels.first() || message.channel || args[0]

        await db.set(`suggestion_${message.guild.id}`, channel.id)

        if(args[0] === "off"){
            const embed = new Discord.MessageEmbed()
            .setDescription('Suggestion a été désactivée avec succès')
            .setColor('RED')
            await db.delete(`suggestion_${message.guild.id}`)
            return message.channel.send(embed)
        }
        const embed = new Discord.MessageEmbed()
        .setDescription(`La suggestion a été définie sur ${channel} avec succès`)
        .setColor('GREEN')

        await message.channel.send(embed)
    }
}
