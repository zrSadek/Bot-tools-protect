const db = require("quick.db")
const {Client, Message, MessageEmbed } = require('discord.js')
const whitelist = require("../../whitelist.json")
module.exports = {
    config: {
        name: "setwelcome-off"
    },

    run: async (bot, message, args,client) => {
        if(message.author.id !== whitelist.id && message.author.id !== whitelist.id2 && message.author.id !== whitelist.id3 && message.author.id !== whitelist.id4 && message.author.id !== whitelist.id5 && message.author.id !== whitelist.id6 && message.author.id !== whitelist.id7 && message.author.id !== whitelist.id8 && message.author.id !== whitelist.id9) return;  

        if(message.member.hasPermission('ADMINISTRATOR')){

        try {
            let h = db.fetch(`setwelcome-on_${message.guild.id}`)

            if (!h) {
                return message.channel.send(`**Il n'y a pas de channel Setwelcome défini à désactiver !**`)
            } else {
                let channel = message.guild.channels.cache.get(h)
                bot.guilds.cache.get(message.guild.id).channels.cache.get(channel.id).send("**Setwelcome désactiver!**")
                db.delete(`setwelcome-on_${message.guild.id}`)

                message.channel.send(`**Le channel Setwelcome a été désactivé avec succès dans\`${channel.name}\`**`)
            }
            return;
        } catch {
            return message.channel.send("**Erreur - `Autorisations manquantes ou la chaîne n'existe pas`**")
        }
    }
}}
