const discord = require("discord.js");
const quotes = require("../Quotes.json")

module.exports.run = async (client, message, args) => {

    var num = Math.floor(Math.random() * quotes.Quotes.length)

    var quoteEmbed = new discord.MessageEmbed()
        .setDescription(`> ${quotes.Quotes[num].q}`)
        .setColor('#f73115')
        .setFooter({ text: `${quotes.Quotes[num].a}`})
    return message.reply({ embeds: [quoteEmbed] });

}

module.exports.help = {
    name: "quote",
    category: 'game',
    description: 'Met dit commando geeft de bot je een quote.',
    aliases: []
}