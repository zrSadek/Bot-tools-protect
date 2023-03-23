const db = require('quick.db')
const { MessageEmbed } = require ('discord.js')
const whitelist = require("../../whitelist.json")

module.exports = {
    config: {
        name: 'whitelist'
        },

    run: async(client, message, args) => {   
         if(message.author.id !== whitelist.id && message.author.id !== whitelist.id2 && message.author.id !== whitelist.id3 && message.author.id !== whitelist.id4 && message.author.id !== whitelist.id5 && message.author.id !== whitelist.id6 && message.author.id !== whitelist.id7 && message.author.id !== whitelist.id8 && message.author.id !== whitelist.id9) return;  
        if(!args[0]) return message.reply({ content: "Vous pouvez faire whitelist `add`, `list` `remove`.", allowedMentions:{repliedUsers:false}})

        if(args[0] == "add") {
        let user = client.users.cache.get(args[1]) || message.mentions.users.first()
        if (!user) return message.channel.send("Vous devez mentionner un membre !");
        const wl = db.fetch(`wl_${user.id}`)
        if(wl == true) return message.channel.send(`${user} est déjà whitelist!`)
        message.channel.send(`${user} est maintenant whitelist!`)
        db.set(`wl_${user.id}`, true)}
        
        if(args[0] == "remove") {
        let users = client.users.cache.get(args[1]) || message.mentions.users.first()
        if (!users) return message.channel.send("Vous devez mentionner un membre!");
        const wl = db.fetch(`wl_${users.id}`) 
        if(wl == false) return message.reply(`${users} n'était pas whitelist!`)
        message.channel.send(`${users} est maintenant unwhitelist!`)
        db.set(`wl_${users.id}`, false)}
    
        if(args[0] == "list") {
                let list = message.guild.members.cache.filter(u => db.get(`wl_${u.id}`)).map(a => `${a.user.username} - ${a.user.id}`)//.join('\n');
                if(list.length < 1) return message.channel.send(`Pas de personne dans la whitlist`)
                let embed = new MessageEmbed()
                .setTitle('liste du membre whitlist')
                .setColor(`RED`)
                .setDescription(list)     
                message.channel.send(embed)
                }
    }}
