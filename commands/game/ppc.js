const { MessageEmbed } = require('discord.js');
module.exports = {
    config: {
        name: `ppc`,
    },


	run: async(client, message, args) => {
		let embed = new MessageEmbed()
		.setTitle("pierre papier ciseaux")
		.setDescription("Réagissez pour jouer !")
		.setTimestamp()
		let msg = await message.channel.send(embed)
		await msg.react("🗻")
		await msg.react("✂")
		await msg.react("📰")

		const filter = (reaction, user) => {
            return ['🗻', '✂', '📰'].includes(reaction.emoji.name) && user.id === message.author.id;
        }

        

        const choices = ['🗻', '✂', '📰']
        const me = choices[Math.floor(Math.random() * choices.length)]
        msg.awaitReactions(filter, {max:1, time: 60000, error: ["temps"]}).then(
        	async(collected) => {
        		const reaction = collected.first()
        		let result = new MessageEmbed()
        		.setTitle("Résultats ")
        		.addField("Votre choix", `${reaction.emoji.name}`)
        		.addField("Mon choix", `${me}`)
			await msg.edit(result)
        		if ((me === "🗻" && reaction.emoji.name === "✂") ||
                (me === "📰" && reaction.emoji.name === "🗻") ||
                (me === "✂" && reaction.emoji.name === "📰")) {
                    message.reply("Tu a perdu !");
            } else if (me === reaction.emoji.name) {
                return message.reply(" égalité !");
            } else {
                return message.reply("Tu a gagner !");
            }
        })

        .catch(collected => {
                message.reply('Le processus a été annulé !');

        
            }
          


        
            )}
        
    
          
        
            
        }
