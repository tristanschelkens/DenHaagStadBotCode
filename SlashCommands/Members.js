const { SlashCommandBuilder } = require('@discordjs/builders');
const discord = require("discord.js");

module.exports = {

    data: new SlashCommandBuilder()
        .setName('members')
        .setDescription('Geeft het aantal members weer.'),

    async execute(client, interaction, message, args) {

        var botEmbed = new discord.MessageEmbed()
            .setTitle(`${interaction.guild.name} members!`)
            .setColor('#f73115')
            .addFields(
                { name: "Members", value: `> ${interaction.guild.memberCount - interaction.guild.members.cache.filter(m => m.user.bot).size}` },
            )
            .setFooter({ text: 'TeamDJD | Den Haag Stad V2', iconURL: 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png' })
            .setTimestamp()

        return interaction.reply({ embeds: [botEmbed] });

    }

}