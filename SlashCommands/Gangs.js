const { SlashCommandBuilder } = require('@discordjs/builders');
const discord = require("discord.js");

module.exports = {

    data: new SlashCommandBuilder()
        .setName('gangs')
        .setDescription('Geeft info weer over alle gangs.'),

    async execute(client, interaction, message, args) {
        
        var serverEmbed = new discord.MessageEmbed()
        .setTitle('Gangs Den Haag Stad.')
        .setColor('#f73115')
        .addFields(
            { name: 'Gang Cartel De La Rana | 🐸', value: `> [Gang Cartel De La Rana | 🐸](https://discord.gg/9bjpEArXbZ)` },
            { name: 'Gang Clips', value: `> [Gang Clips](https://discord.gg/B3fGpWMVa9)` },
            { name: 'The Blood Masters', value: `> [The Blood Masters](https://discord.gg/mzhdNPzxkv)` },
            { name: 'Maffia La Familia De La Muerte', value: `> [Maffia La Familia De La Muerte](https://discord.gg/6hF6ztQztR)` },
        )
        .setThumbnail('https://media.discordapp.net/attachments/755878713668796446/872847136478351380/image0.png')
        .setFooter({ text: 'TeamDJD | Den Haag Stad V2', iconURL: 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png' })
        .setTimestamp()

    return interaction.reply({ embeds: [serverEmbed] });

    }

}