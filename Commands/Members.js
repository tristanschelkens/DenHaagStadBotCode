const discord = require('discord.js');
const moment = require("moment");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
        .setTitle(`${message.guild.name} members!`)
        .setColor('#f73115')
        .addFields(
            { name: "Members", value: `> ${message.guild.memberCount - message.guild.members.cache.filter(m =>m.user.bot).size}`},
        )
        .setFooter({ text: 'TeamDJD | Den Haag Stad V2', iconURL: 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png' })
        .setTimestamp()

        return message.reply({ embeds: [botEmbed]});

}

module.exports.help = {
    name: 'members',
    category: 'info',
    description: 'Met dit commando geeft de bot info weer over de server.',
    aliases: []
}