const { SlashCommandBuilder } = require('@discordjs/builders');
const discord = require("discord.js");
const botConfig = require('../botConfig.json')

module.exports = {

    data: new SlashCommandBuilder()
        .setName('commands')
        .setDescription('Geeft alle commands weer.')
        .addStringOption(option => option.setName('commands-categorie').setDescription('Enter a category')),

    async execute(client, interaction, message, args) {

        if (!interaction.options.getString('commands-categorie')) return interaction.reply("> Gebruik /commands \`general, info, games, staff\`.");

        const categorie = interaction.options.getString('commands-categorie');

        var prefix = botConfig.prefix;
        var general = 'General\n';
        var info = '\nInformation\n';
        var game = '\nGame\n';
        var staff = 'Staff Commands\n';

        client.commands.forEach(command => {

            switch (command.help.category) {

                case 'general':
                    general += `> ${prefix}${command.help.name} - ${command.help.description}\r\n`;
                    break;

                case 'info':
                    info += `> ${prefix}${command.help.name} - ${command.help.description}\r\n`;
                    break;

                case 'game':
                    game += `> ${prefix}${command.help.name} - ${command.help.description}\r\n`;
                    break;

                case 'staff':
                    staff += `> ${prefix}${command.help.name} - ${command.help.description}\r\n`;
                    break;
            }

        });

        var generalEmbed = new discord.MessageEmbed()
            .setTitle('General Commands.')
            .setDescription(`${general}`)
            .setColor('#f73115')
            .setFooter({ text: 'TeamDJD | Den Haag Stad V2', iconURL: 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png' })
            .setTimestamp()

        var informationEmbed = new discord.MessageEmbed()
            .setTitle('Information Commands')
            .setDescription(`${info}`)
            .setColor('#f73115')
            .setFooter({ text: 'TeamDJD | Den Haag Stad V2', iconURL: 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png' })
            .setTimestamp()

        var gameEmbed = new discord.MessageEmbed()
            .setTitle(`Game Commands`)
            .setDescription(`${game}`)
            .setColor('#f73115')
            .setFooter({ text: 'TeamDJD | Den Haag Stad V2', iconURL: 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png' })
            .setTimestamp()

        var staffEmbed = new discord.MessageEmbed()
            .setTitle(`Staff Commands`)
            .setDescription(`${staff}`)
            .setColor('#f73115')
            .setFooter({ text: 'TeamDJD | Den Haag Stad V2', iconURL: 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png' })
            .setTimestamp()

        if (categorie.toUpperCase() == "GENERAL") {

            return interaction.reply({ embeds: [generalEmbed] });

        } else if (categorie.toUpperCase() == "INFO") {

            return interaction.reply({ embeds: [informationEmbed] });

        } else if (categorie.toUpperCase() == "GAMES") {

            return interaction.reply({ embeds: [gameEmbed] });

        } else if (categorie.toUpperCase() == "STAFF") {

            if (!interaction.member.roles.cache.has('682635913431482471')) return interaction.channel.send('> Alleen een server moderator kan dit commando gebruiken.');

            return interaction.reply({ embeds: [staffEmbed], ephemeral: true });

        }

    }

}