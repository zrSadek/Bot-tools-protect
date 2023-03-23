const whitelist = require("../../whitelist.json")
module.exports = {
    config: {
        name: 'setname',
        aliases: ['name'],
        },

    run: async(client, message, args) => {   
          if(message.author.id !== whitelist.id && message.author.id !== whitelist.id2 && message.author.id !== whitelist.id3 && message.author.id !== whitelist.id4 && message.author.id !== whitelist.id5 && message.author.id !== whitelist.id6 && message.author.id !== whitelist.id7 && message.author.id !== whitelist.id8 && message.author.id !== whitelist.id9) return;  
 
        if (args.length) {
            let str_content = args.join(" ")
            client.user.setUsername(str_content)
            .then(u => message.channel.send(`:white_check_mark: ${message.author}, Vous avez changé le pseudonyme de votre bot.`))
            .catch(e => { return message.channel.send(`${message.author}, Une erreur est survenue.`); });
        } else {
            message.channel.send(`${message.author}, Vous avez fournie aucune valeur, veuillez mettre comment vous souhaitez nommé votre bot.`);
        }
    }}
