const { SlashCommandBuilder } = require('@discordjs/builders');
const discord = require("discord.js");

module.exports = {

    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Geeft je ping terug.'),

    async execute(client, interaction, message, args) {

        return interaction.reply({ content: `> Pong, ${client.ws.ping} ms.`, ephemeral: false });

    }

}