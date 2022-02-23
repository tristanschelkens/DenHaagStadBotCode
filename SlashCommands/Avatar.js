const { SlashCommandBuilder } = require('@discordjs/builders');
const discord = require("discord.js");

module.exports = {

    data: new SlashCommandBuilder()
        .setName('avatar')
        .setDescription('Geeft de avatar weer van de opgegeven persoon.')
        .addUserOption(option => option.setName('target').setDescription('The user')),

    async execute(client, interaction, message, args) {

        const user = interaction.options.getUser('target');

        if (!user) return interaction.reply({ content: '> Gelieve een gebruiker op te geven.', ephemeral: true });

        var avatarEmbed = new discord.MessageEmbed()
            .setAuthor({ name: `${user.tag}`, iconURL: `${user.displayAvatarURL({ dynamic: true, size: 4096 })}` })
            .setImage(user.displayAvatarURL({ dynamic: true, size: 4096 }))
            .setColor('#f73115')
            .setFooter({ text: 'TeamDJD | Den Haag Stad V2', iconURL: 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png' })

        return interaction.reply({ embeds: [avatarEmbed] })
    }

}