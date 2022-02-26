const { SlashCommandBuilder } = require('@discordjs/builders');
const discord = require("discord.js");

module.exports = {

    data: new SlashCommandBuilder()
        .setName('pauze')
        .setDescription('Zet een nummer op pauze!'),

    async execute(client, interaction, message, args) {

        const queue = player.getQueue(interaction.guildId);

        queue.setPaused(true);

        return interaction.followUp({ content: "> Het liedje is gepauzeerd!" });

    }

}