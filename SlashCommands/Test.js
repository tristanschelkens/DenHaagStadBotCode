const { SlashCommandBuilder } = require('@discordjs/builders');
const discord = require("discord.js");

module.exports = {

    data: new SlashCommandBuilder()
        .setName('test')
        .setDescription('Met dit commando kan je kijken of de bot online is.'),

    async execute(client, interaction, message, args) {
        
        interaction.reply({
            content: `> De bot is klaar om uw commando\'s uit te voeren!`,
            ephemeral: false
        })

    }

}