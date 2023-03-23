const {Client, Message, MessageEmbed } = require('discord.js')
const db = require('quick.db')
const Discord = require("discord.js");
const whitelist = require("../../whitelist.json")
module.exports = {
    config: {
    name: 'antiweb',
    aliases: ['anti-web'],
    },

    run: async(client, message, args) => {

        if(message.author.id !== whitelist.id && message.author.id !== whitelist.id2 && message.author.id !== whitelist.id3 && message.author.id !== whitelist.id4 && message.author.id !== whitelist.id5 && message.author.id !== whitelist.id6 && message.author.id !== whitelist.id7 && message.author.id !== whitelist.id8 && message.author.id !== whitelist.id9) return;  
        if(!args[0]) return message.reply({ content: "Faite `antibot on/off`.", allowedMentions:{repliedUsers:false}})
        
        if(args[0] === "on"){
            await db.set(`anti-web-${message.guild.id}`, true)

            const on = new Discord.MessageEmbed()
            .setDescription("L'anti-web vient d'être activer avec succès")
            .setColor("GREEN")

            return message.channel.send(on).catch(e => console.log(e))
        }
        if(args[0] === "off"){
            await db.delete(`anti-web-${message.guild.id}`)

            const off = new Discord.MessageEmbed()
            .setDescription("L'anti-web vient d'être désactiver avec succès")
            .setColor('RED')

            return message.channel.send(off).catch(e => console.log(e))
          }
    }
  }
