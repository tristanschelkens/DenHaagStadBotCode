const { SlashCommandBuilder } = require('@discordjs/builders');
const discord = require("discord.js");
const botConfig = require('../botConfig.json');
const moment = require('moment');
const package = require('../package.json')

module.exports = {

    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Geeft info weer over alle gangs.')
        .addStringOption(option => option.setName('help-categorie').setDescription('Enter a category.')),

    async execute(client, interaction, message, args) {

        if (!interaction.options.getString('help-categorie')) return interaction.reply('> Gelive een categorie mee te geven. Kies uit /help \`commands, gameinfo, serverinfo, botinfo, groepen, ecolor, servers\`.')

        const categorie = interaction.options.getString('help-categorie');

        if (categorie.toUpperCase() == "GAMEINFO") {

            const gameEmbed = new discord.MessageEmbed()
                .setTitle('Game Informatie')
                .addFields(
                    { name: 'Game Creator', value: `> <@486559825984225283>` },
                    { name: 'Game Name', value: `> Den Haag Stad` },
                    { name: 'Game Link', value: `> [Den Haag Stad](https://www.roblox.com/games/5784855325/Den-Haag-Stad)` },
                    { name: 'Game Developers', value: `> <@690126965729918978> \n > <@613688933980831754> \n >  <@527416839211319318> \n > <@722779830025977936> \n > <@340846369701101575> - Oud Developer. \n > <@452758813053812737> - Oud Developer.` }
                )
                .setFooter({ text: 'TeamDJD | Den Haag Stad V2', iconURL: 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png' })
                .setColor('#f73115')
                .setTimestamp()
                .setThumbnail('https://cdn.discordapp.com/attachments/562200277248114719/922619599118278706/Dhs.png')
            return interaction.reply({ embeds: [gameEmbed] })

        } else if (categorie.toUpperCase() == "COMMANDS") {

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


            interaction.reply({ embeds: [embedColorPrompt], components: [row] });

            const collector = interaction.channel.createMessageComponentCollector({
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
                        if (!interaction.member.roles.cache.has('682635913431482471')) return interaction.channel.send('> Alleen een server moderator kan dit commando gebruiken.');
                        return interactionButton.reply({ embeds: [staffEmbed] , ephemeral: true });


                }
            });

        } else if (categorie.toUpperCase() == "INVITE") {

            var inviteEmbed = new discord.MessageEmbed()
                .setTitle("Invites!")
                .setDescription('[TeamDJD YouTube Server.](https://discord.gg/VgejNANPrN) \n - \n [Koninklijke Landmacht Server.](https://discord.gg/s5DnaFZtEq) \n - \n [Koninklijke Marechaussee Server.](https://discord.gg/4fGDD7pagH) \n - \n [DSI Den Haag Stad Server.](https://discord.gg/NSdXwCxhK2) \n - \n [Sollicitatie Server Den Haag Stad.](https://discord.gg/NCHjWjZg96) \n - \n [ESS Den Haag Stad Server.](https://discord.gg/GcPMCrWaar) \n - \n [Politie Den Haag Stad Server.](https://discord.gg/8VUuEkvRe2)')
                .setColor('#f73115')
                .setFooter({ text: 'TeamDJD | Den Haag Stad V2', iconURL: 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png' })
                .setTimestamp()
            return interaction.reply({ embeds: [inviteEmbed] })

        } else if (categorie.toUpperCase() == "GROEPEN") {

            var inviteEmbed = new discord.MessageEmbed()
                .setTitle("Groepen!")
                .addFields(
                    { name: 'Ambulance', value: `> [Ambulance Groep](https://www.roblox.com/groups/7506132/Ambulance-I-Den-Haag-Stad#!/about)` },
                    { name: 'Brandweer', value: `> [Brandweer Groep](https://www.roblox.com/groups/7506165/Brandweer-I-Den-Haag-Stad#!/about)` },
                    { name: 'Defensie', value: `> Defensie Groep - Krijg je wanneer je de Try-Out hebt gehaald.` },
                    { name: 'Dienst Speciale Interventies', value: `> [Dienst Spelciale Interventies Groep](https://www.roblox.com/groups/6962086/Dienst-Speciale-Interventies-I-Den-Haag-stad#!/about)` },
                    { name: 'Gemeente', value: `> [Gemeente Groep](https://www.roblox.com/groups/8158231/Gemeente-Den-Haag-Stad#!/about)` },
                    { name: 'Koninklijke Marechaussee', value: `> [Koninklijke Marechaussee Groep](https://www.roblox.com/groups/7506220/Koninklijke-Marechaussee-I-Den-Haag-Stad#!/about)` },
                    { name: 'Politie', value: `> [Politie Groep](https://www.roblox.com/groups/6758586/Politie-I-Den-Haag-stad#!/about)` },
                    { name: 'Verkeerspolitie', value: `> [Verkeerspolitie Groep](https://www.roblox.com/groups/8230930/Dienst-Infrastructuur)` },
                )
                .setColor('#f73115')
                .setFooter({ text: 'TeamDJD | Den Haag Stad V2', iconURL: 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png' })
                .setTimestamp()
            return interaction.reply({ embeds: [inviteEmbed] })

        } else if (categorie.toUpperCase() == "GROUP") {

            var inviteEmbed = new discord.MessageEmbed()
                .setTitle("Groepen!")
                .addFields(
                    { name: 'Ambulance', value: `> [Ambulance Groep](https://www.roblox.com/groups/7506132/Ambulance-I-Den-Haag-Stad#!/about)` },
                    { name: 'Brandweer', value: `> [Brandweer Groep](https://www.roblox.com/groups/7506165/Brandweer-I-Den-Haag-Stad#!/about)` },
                    { name: 'Defensie', value: `> Defensie Groep - Krijg je wanneer je de Try-Out hebt gehaald.` },
                    { name: 'Dienst Speciale Interventies', value: `> [Dienst Spelciale Interventies Groep](https://www.roblox.com/groups/6962086/Dienst-Speciale-Interventies-I-Den-Haag-stad#!/about)` },
                    { name: 'Gemeente', value: `> [Gemeente Groep](https://www.roblox.com/groups/8158231/Gemeente-Den-Haag-Stad#!/about)` },
                    { name: 'Koninklijke Marechaussee', value: `> [Koninklijke Marechaussee Groep](https://www.roblox.com/groups/7506220/Koninklijke-Marechaussee-I-Den-Haag-Stad#!/about)` },
                    { name: 'Politie', value: `> [Politie Groep](https://www.roblox.com/groups/6758586/Politie-I-Den-Haag-stad#!/about)` },
                    { name: 'Verkeerspolitie', value: `> [Verkeerspolitie Groep](https://www.roblox.com/groups/8230930/Dienst-Infrastructuur)` },
                )
                .setColor('#f73115')
                .setFooter({ text: 'TeamDJD | Den Haag Stad V2', iconURL: 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png' })
                .setTimestamp()
            return interaction.reply({ embeds: [inviteEmbed] })

        } else if (categorie.toUpperCase() == "ECOLOR") {

            const row = new discord.MessageActionRow().addComponents(

                new discord.MessageButton()
                    .setCustomId('frog')
                    .setLabel('Frog.')
                    .setStyle('SUCCESS'),

                new discord.MessageButton()
                    .setCustomId('twoepkoepchats')
                    .setLabel('TwoepKoep Chats.')
                    .setStyle('DANGER'),

            );

            var embedColorPrompt = new discord.MessageEmbed()
                .setDescription('Kies tussen de twee bots.')
                .setColor('#f73115')


            interaction.reply({ embeds: [embedColorPrompt], components: [row] });

            const collector = interaction.channel.createMessageComponentCollector({
                max: 1000
            });

            collector.on("collect", (interactionButton) => {

                const id = interactionButton.customId;

                switch (id) {
                    case "frog":
                        return interactionButton.reply('> #6aa75e');
                    case "twoepkoepchats":
                        return interactionButton.reply('> #f73115');

                }
            });

        } else if (categorie.toUpperCase() == "SERVERINFO") {

            var botEmbed = new discord.MessageEmbed()
                .setTitle(`${interaction.guild.name}`)
                .setColor('#f73115')
                .addFields(
                    { name: 'Founder', value: `> <@486559825984225283>` },
                    { name: 'ID', value: `> ${interaction.guild.id}` },
                    { name: "Bots", value: `> 8` },
                    { name: "People", value: `> ${interaction.guild.memberCount - interaction.guild.members.cache.filter(m => m.user.bot).size}` },
                    { name: "Created on", value: `> ${moment(interaction.guild.createdAt).format('LL')}` },
                    { name: "Joined on", value: `> ${interaction.member.joinedAt.toString()}` }

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

        } else if (categorie.toUpperCase() == "BOTINFO") {

            var botEmbed = new discord.MessageEmbed()
                .setTitle('Bot information.')
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
                .setFooter({ text: 'TeamDJD | Den Haag Stad V2', iconURL: 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png' })
                .setTimestamp()

            const row = new discord.MessageActionRow().addComponents(

                new discord.MessageButton()
                    .setLabel('TwoepKoep Chats.')
                    .setStyle('LINK')
                    .setURL('https://discord.gg/VrWyrpkM6B')

            );

            return interaction.reply({ embeds: [botEmbed], components: [row] });

        } else if (categorie.toUpperCase() == "SERVERS") {

            var botEmbed = new discord.MessageEmbed()
                .setTitle('Discord Servers Den Haag Stad.')
                .setColor('#f73115')
                .addFields(
                    { name: 'YouTube Server', value: `> [YouTube Server](https://discord.gg/Bt94fKAYSB)` },
                    { name: 'Sollicitatie Server', value: `> [Sollicitatie Server](https://discord.gg/NCHjWjZg96)` },
                    { name: 'Koninklijke Landmacht', value: `> [Koninklijke Landmacht](https://discord.gg/v9YBS7bavD)` },
                    { name: 'Koninklijke Marechaussee', value: `> [Koninklijke Marechaussee](https://discord.gg/4fGDD7pagH)` },
                    { name: 'Dienst Speciale Interventies', value: `> [Dienst Speciale Interventies](https://discord.gg/NSdXwCxhK2)` }
                )
                .setThumbnail('https://media.discordapp.net/attachments/755878713668796446/872847136478351380/image0.png')
                .setFooter({ text: 'TeamDJD | Den Haag Stad V2', iconURL: 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png' })
                .setTimestamp()

            return interaction.reply({ embeds: [botEmbed] });
        }

    }

}