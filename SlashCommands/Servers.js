const { SlashCommandBuilder } = require('@discordjs/builders');
const discord = require("discord.js");

module.exports = {

    data: new SlashCommandBuilder()
        .setName('servers')
        .setDescription('Geeft alle Discord servers weer.'),

    async execute(client, interaction, message, args) {

        var serverEmbed = new discord.MessageEmbed()
            .setTitle('Discord Servers Den Haag Stad.')
            .setColor('#f73115')
            .addFields(
                { name: 'YouTube Server', value: `> [YouTube Server](https://discord.gg/Bt94fKAYSB)` },
                { name: 'Sollicitatie Server', value: `> [Sollicitatie Server](https://discord.gg/NCHjWjZg96)` },
                { name: 'Koninklijke Landmacht', value: `> [Koninklijke Landmacht](https://discord.gg/v9YBS7bavD)` },
                { name: 'Koninklijke Marechaussee', value: `> [Koninklijke Marechaussee](https://discord.gg/4fGDD7pagH)` },
                { name: 'Dienst Speciale Interventies', value: `> [Dienst Speciale Interventies](https://discord.gg/kM4kJzEuMY)` }
            )
            .setThumbnail('https://media.discordapp.net/attachments/755878713668796446/872847136478351380/image0.png')
            .setFooter({ text: 'TeamDJD | Den Haag Stad V2', iconURL: 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png' })
            .setTimestamp()

        return interaction.reply({ embeds: [serverEmbed] });

    }

}