const { SlashCommandBuilder } = require('@discordjs/builders');
const discord = require("discord.js");

module.exports = {

    data: new SlashCommandBuilder()
        .setName('play')
        .setDescription('Zet een nummer op!')
        .addStringOption(option => option.setName('songtitle').setDescription('Naam van het liedje.')),

    async execute(client, interaction, message, args) {

        const songTitle = interaction.options.getString("songtitle");

        if (!interaction.member.voice.channel)
            return interaction.followUp({
                content: "> Je moet eerst een voice channel joinen!",
            });

        const searchResult = await player.search(songTitle, {
            requestedBy: interaction.user,
            searchEngine: QueryType.AUTO,
        });

        const queue = await player.createQueue(interaction.guild, {
            metadata: interaction.channel,
        });

        if (!queue.connection)
            await queue.connect(interaction.member.voice.channel);

        interaction.followUp({ content: `> Playing ${songTitle}` });

        searchResult.playlist
            ? queue.addTracks(searchResult.tracks)
            : queue.addTrack(searchResult.tracks[0]);

        if (!queue.playing) await queue.play();

    }

}