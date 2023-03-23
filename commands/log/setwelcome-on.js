const db = require("quick.db")
const {Client, Message, MessageEmbed } = require('discord.js')
const whitelist = require("../../whitelist.json")
module.exports = {
    config: {
        name: "setwelcome-on"
    },
    run: async (bot, message, args,client) => {   
      if(message.author.id !== whitelist.id && message.author.id !== whitelist.id2 && message.author.id !== whitelist.id3 && message.author.id !== whitelist.id4 && message.author.id !== whitelist.id5 && message.author.id !== whitelist.id6 && message.author.id !== whitelist.id7 && message.author.id !== whitelist.id8 && message.author.id !== whitelist.id9) return;  

        if(message.member.hasPermission('ADMINISTRATOR')){

    if (!args[0]) {
      let l = await db.fetch(`setwelcome-on_${message.guild.id}`);
      let channelName = message.guild.channels.cache.get(l);
      if (message.guild.channels.cache.has(l)) {
        return message.channel.send(
          `**L'ensemble de channel setwelcome sur ce serveur est\`${channelName.name}\`!**`
        );
      } else
        return message.channel.send(
          "**Veuillez entrer un nom de chaîne ou un identifiant à définir!**"
        );
    }
        let channel = message.mentions.channels.first() || bot.guilds.cache.get(message.guild.id).channels.cache.get(args[0]) || message.guild.channels.cache.find(c => c.name.toLowerCase() === args.join(' ').toLocaleLowerCase());

        if (!channel || channel.type !== 'text') return message.channel.send("**Veuillez entrer un channel de texte valide!**");

        try {
            let p = await db.fetch(`setwelcome-on_${message.guild.id}`)

            if (channel.id === p) {
                return message.channel.send("**Ce canal est déjà défini comme channel Setwelcome!**")
            } else {
                bot.guilds.cache.get(message.guild.id).channels.cache.get(channel.id).send("**Ensemble de channel Setwelcome!**")
                db.set(`setwelcome-on_${message.guild.id}`, channel.id)

                message.channel.send(`**Le channel Setwelcome a été défini avec succès dans \`${channel.name}\`!**`)
            }
        } catch {
            return message.channel.send("**Erreur - `Autorisations manquantes ou channel n'est pas un channel de texte!`**");
        }
    }
}}
