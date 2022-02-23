const { SlashCommandBuilder } = require('@discordjs/builders');
const discord = require("discord.js");
const botInfo = require('../Commands/BotInfo');
const package = require('../package.json');
const botConfig = require('../botConfig.json');

module.exports = {

    data: new SlashCommandBuilder()
        .setName('botinfo')
        .setDescription('Geeft info weer over de bot.'),

    async execute(client, interaction, message, args) {

        var botEmbed = new discord.MessageEmbed()
            .setTitle('Bot Information.')
            .setColor('#f73115')
            .addFields(
                { name: 'Bot name', value: `> ${client.user.username}` },
                { name: 'Bot ID', value: `> ${client.user.id}` },
                { name: 'Prefix', value: `> ${botConfig.prefix}` },
                { name: 'Made by', value: `> <@712621794053587016>` },
                { name: 'Created on', value: `> Visual Studio Code` },
                { name: 'Discord.js', value: `> ${package.dependencies["discord.js"]}` },
                { name: 'Platform', value: `> MacOS Big Sur` },
                { name: 'Last update', value: `> ${botConfig.lastUpdate}` },
                { name: 'Content latest update', value: `> ${botConfig.contentLastUpdate}` },
                { name: 'Created on', value: `> ${botConfig.createdOn}` }
            )
            .setThumbnail('https://media.discordapp.net/attachments/755878713668796446/872847136478351380/image0.png')
            .setFooter({ text: 'TeamDJD | Den Haag Stad V2', iconURL: 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png' })            .setTimestamp()

        const row = new discord.MessageActionRow().addComponents(

            new discord.MessageButton()
                .setLabel('TwoepKoep Chats.')
                .setStyle('LINK')
                .setURL('https://discord.gg/VrWyrpkM6B')

        );

        interaction.reply({ embeds: [botEmbed], components: [row] });

    }

}