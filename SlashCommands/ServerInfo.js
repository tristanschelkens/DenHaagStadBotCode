const { SlashCommandBuilder } = require('@discordjs/builders');
const discord = require("discord.js");
const moment = require('moment')

module.exports = {

    data: new SlashCommandBuilder()
        .setName('serverinfo')
        .setDescription('Geeft info weer over de Discord server.'),

    async execute(client, interaction, message, args) {

        var botEmbed = new discord.MessageEmbed()
        .setTitle(`${interaction.guild.name}`)
        .setColor('#f73115')
        .addFields(
            { name: 'Founder', value: `> <@486559825984225283>`},
            { name: 'ID', value: `> ${interaction.guild.id}`},
            { name: "Bots", value: `> 8`},
            { name: "Members", value: `> ${interaction.guild.memberCount - interaction.guild.members.cache.filter(m =>m.user.bot).size}`},
            { name: "Created on", value: `> ${moment(interaction.guild.createdAt).format('LL')}`},
            { name: "Joined on", value: `> ${interaction.member.joinedAt.toString()}`}
            
        )
        .setThumbnail('https://media.discordapp.net/attachments/755878713668796446/872847136478351380/image0.png')
        .setFooter({ text: 'TeamDJD | Den Haag Stad V2', iconURL: 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png' })
        .setTimestamp()

        const row = new discord.MessageActionRow().addComponents(
                
            new discord.MessageButton()
                .setLabel('Link')
                .setStyle('LINK')
                .setURL('https://discord.gg/8Xsh8MpeDh')
    
        );

        return interaction.reply({ embeds: [botEmbed], components: [row] });

    }

}