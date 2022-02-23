const { SlashCommandBuilder } = require('@discordjs/builders');
const discord = require("discord.js");
const quotes = require('../Quotes.json')

module.exports = {

    data: new SlashCommandBuilder()
        .setName('quote')
        .setDescription('Geeft een random quote.'),

    async execute(client, interaction, message, args) {

        var num = Math.floor(Math.random() * quotes.Quotes.length)
    
        var quoteEmbed = new discord.MessageEmbed()
            .setDescription(`> ${quotes.Quotes[num].q}`)
            .setColor('#f73115')
            .setFooter({ text: `${quotes.Quotes[num].a}`})
    
        return interaction.reply({ embeds: [quoteEmbed] });

    }

}