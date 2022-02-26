const { SlashCommandBuilder } = require('@discordjs/builders');
const discord = require("discord.js");

module.exports = {

    data: new SlashCommandBuilder()
        .setName('queue')
        .setDescription('Toont devolgende nummers.'),

    async execute(client, interaction, message, args) {

        const queue = player.getQueue(interaction.guildId);
        if (!queue?.playing)
            return interaction.followUp({
                content: "> Er zijn geen liedje aan het afspelen",
            });

        const currentTrack = queue.current;
        const tracks = queue.tracks.slice(0, 10).map((m, i) => {
            return `${i + 1}. [**${m.title}**](${m.url}) - ${
                m.requestedBy.tag
            }`;
        });

        return interaction.followUp({
            embeds: [
                {
                    title: "Song Queue",
                    description: `${tracks.join("\n")}${
                        queue.tracks.length > tracks.length
                            ? `\n...${
                                  queue.tracks.length - tracks.length === 1
                                      ? `${
                                            queue.tracks.length - tracks.length
                                        } meer nummers`
                                      : `${
                                            queue.tracks.length - tracks.length
                                        } meer nummers`
                              }`
                            : ""
                    }`,
                    color: "#f73115",
                    fields: [
                        {
                            name: "Now Playing",
                            value: `🎶 | [**${currentTrack.title}**](${currentTrack.url}) - ${currentTrack.requestedBy.tag}`,
                        },
                    ],
                },
            ],
        });

    }

}