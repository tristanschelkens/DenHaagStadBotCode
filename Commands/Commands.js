const discord = require("discord.js");
const botConfig = require('../botConfig.json');

module.exports.run = async (client, message, args, err) => {

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

            const row = new discord.MessageActionRow().addComponents(

                new discord.MessageButton()
                    .setCustomId('general')
                    .setLabel('General')
                    .setStyle('SUCCESS'),

                new discord.MessageButton()
                    .setCustomId('information')
                    .setLabel('Information')
                    .setStyle('PRIMARY'),

                new discord.MessageButton()
                    .setCustomId('game')
                    .setLabel('Game')
                    .setStyle('SECONDARY'),

                new discord.MessageButton()
                    .setCustomId('staff')
                    .setLabel('Staff')
                    .setStyle('DANGER'),

            );

            var embedColorPrompt = new discord.MessageEmbed()
                .setDescription('Kies een command categorie.')
                .setColor('#f73115')


            message.reply({ embeds: [embedColorPrompt], components: [row] });

            const collector = message.channel.createMessageComponentCollector({
                max: 1000
            });

            collector.on("collect", (interactionButton) => {

                const id = interactionButton.customId;

                switch (id) {
                    case "general":
                        return interactionButton.reply({ embeds: [generalEmbed] });
                    case "information":
                        return interactionButton.reply({ embeds: [informationEmbed] });
                    case "game":
                        return interactionButton.reply({ embeds: [gameEmbed] });
                    case "staff":
                        if (!message.member.roles.cache.has('682635913431482471')) return message.channel.send('> Alleen een server moderator kan dit commando gebruiken.');
                        return interactionButton.reply({ embeds: [staffEmbed] , ephemeral: true });


                }
            });

}

module.exports.help = {
    name: 'commands',
    category: 'info',
    description: 'Met dit commando geeft de bot alle commands.',
    aliases: []
}