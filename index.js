const { Client, Intents, intents, Collection, Interaction } = require('discord.js');
const botConfig = require('./botConfig.json');
const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const discord = require("discord.js");
const moment = require("moment");
const package = require('./package.json');
const quotes = require('./Quotes.json');
const fetch = require('node-fetch');
const botInfo = require('./Commands/BotInfo');

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_VOICE_STATES
    ]
});
client.commands = new Collection();
client.aliases = new Collection();
client.slashCommands = new Collection();
const slashCommands = [];

const commandFiles = fs.readdirSync("./Commands/").filter(file => file.endsWith(".js"));

for (const file of commandFiles) {

    const command = require(`./Commands/${file}`);

    client.commands.set(command.help.name, command);

    command.help.aliases.forEach(alias => {

        client.aliases.set(alias, command.help.name);

    })

    console.log(`• De file ${command.help.name}.js is geladen.`);

}

const commandSlashFiles = fs.readdirSync("./SlashCommands").filter(file => file.endsWith(".js"));

for (const fileSlash of commandSlashFiles) {

    const commandSlash = require(`./SlashCommands/${fileSlash}`);

    client.slashCommands.set(commandSlash.data.name, commandSlash);

    slashCommands.push(commandSlash.data.toJSON());

    console.log(`• De file ${commandSlash.data.name}.js is geladen.`);

}

client.once("ready", async () => {
    console.log(`${client.user.username} | Is online!`);
    client.user.setActivity("Code", { type: "PLAYING" });

    const statusOptions = [
        `Prefix: ${botConfig.prefix} `,
        `Help command: ${botConfig.prefix}help`,
        `Creator: Tristan#5000`

    ]

    let counter = 0;

    //let time = 1 * 60 * 1000;
    let time = 3 * 1000;

    const updateStatus = () => {

        client.user.setPresence({

            status: 'online',
            activities: [
                {
                    name: statusOptions[counter]
                }
            ]

        });

        if (++counter >= statusOptions.length) counter = 0;

        setTimeout(updateStatus, time);

    }
    updateStatus();

    let guildId = '493866072072650762';

    let clientId = '866387719428243486';

    const rest = new REST({ version: '9' }).setToken(botConfig.token);

    (async () => {
        try {

            console.log('Started refreshing application (/) commands.');

            await rest.put(
                Routes.applicationGuildCommands(clientId, guildId),
                { body: slashCommands },
            );

            console.log('Successfully reloaded application (/) commands.');

        } catch (error) {

            console.error(error);

        }
    })();

    // commands.create({
    //     name: 'gameinfo',
    //     description: 'Geeft info weer over de game.'
    // });

    //     commands.create({
    //         name: 'servers',
    //         description: 'Geeft alle Discord servers weer.'
    //     });

    //     commands.create({
    //         name: 'gangs',
    //         description: 'Geeft alle gangs weer.'
    //     });

    //     commands.create({
    //         name: 'dog',
    //         description: 'Geeft een foto van een hond weer.'
    //     });

    //     commands.create({
    //         name: 'cat',
    //         description: 'Geeft een foto van een kat weer.'
    //     });

    //     commands.create({
    //         name: 'quote',
    //         description: 'Reageert met een quote.'
    //     });

    //     commands.create({
    //         name: 'test',
    //         description: 'Met dit commando kan je testen als de bot werkt.'
    //     });

    //     commands.create({
    //         name: 'avatar',
    //         description: 'Geeft de avatar weer van de opgegven persoon.',
    //         options: [
    //             {
    //                 name: 'avatarpersoon',
    //                 description: 'Persoon.',
    //                 type: 6,
    //                 required: false,
    //             }
    //         ]
    //     });

    //     commands.create({
    //         name: 'commands',
    //         description: 'Geeft commands weer.',
    //         options: [
    //             {
    //                 name: 'command_categorie',
    //                 description: 'De categorie van het commando.',
    //                 type: 10,
    //                 required: false,
    //             }
    //         ]
    //     });

    //     commands.create({
    //         name: 'members',
    //         description: 'Geeft het aantal leden weer.',
    //     });

    //     commands.create({
    //         name: 'serverinfo',
    //         description: 'Geeft info weer over de Discord server.'
    //     });

    //     commands.create({
    //         name: 'botinfo',
    //         description: 'Geeft info weer over de Discord bot.'
    //     });

    //     commands.create({
    //         name: 'eightball',
    //         description: 'Geeft een willekeurig antwoord op je vraag.',
    //         options: [
    //             {
    //                 name: 'eightballvraag',
    //                 description: 'Zet hier je vraag. • Het minst 4 woorden.',
    //                 required: true,
    //                 type: 3
    //             }
    //         ]
    //     });

    //     commands.create({
    //         name: 'optellen',
    //         description: 'Twee getallen optellen.',
    //         options: [
    //             {
    //                 name: 'optellen1',
    //                 description: 'Eerste nummer.',
    //                 type: 10,
    //                 required: true,
    //             },
    //             {
    //                 name: 'optellen2',
    //                 description: 'Tweede nummer.',
    //                 type: 10,
    //                 required: true,
    //             }
    //         ]
    //     });

    //     commands.create({
    //         name: 'aftrekken',
    //         description: 'Twee getallen aftrekken.',
    //         options: [
    //             {
    //                 name: 'aftrekken1',
    //                 description: 'Eerste nummer.',
    //                 type: 10,
    //                 required: true,
    //             },
    //             {
    //                 name: 'aftrekken2',
    //                 description: 'Tweede nummer.',
    //                 type: 10,
    //                 required: true,
    //             }
    //         ]
    //     });

    //     commands.create({
    //         name: 'delen',
    //         description: 'Twee getallen aftrekken.',
    //         options: [
    //             {
    //                 name: 'delen1',
    //                 description: 'Eerste nummer.',
    //                 type: 10,
    //                 required: true,
    //             },
    //             {
    //                 name: 'delen2',
    //                 description: 'Tweede nummer.',
    //                 type: 10,
    //                 required: true,
    //             }
    //         ]
    //     });

    //     commands.create({
    //         name: 'maal',
    //         description: 'Twee getallen aftrekken.',
    //         options: [
    //             {
    //                 name: 'maal1',
    //                 description: 'Eerste nummer.',
    //                 type: 10,
    //                 required: true,
    //             },
    //             {
    //                 name: 'maal2',
    //                 description: 'Tweede nummer.',
    //                 type: 10,
    //                 required: true,
    //             }
    //         ]
    //     });

});

client.on('messageDelete', async (messageDeleted) => {

    var messageDeletedErrorEmbed = new discord.MessageEmbed()
        .setAuthor({ name: `${messageDeleted.author.tag}`, iconURL: `${messageDeleted.author.avatarURL({ size: 4096 })}`})
        .addFields(
            { name: 'Bericht gemaakt door', value: `> <@${messageDeleted.author.id}>` },
            { name: 'Bericht', value: `> \`Het bericht was te lang.\`` },
            { name: "Bericht id", value: `> ${messageDeleted.id}` },
            { name: "Verwijderd uit", value: `> ${messageDeleted.channel}` }
        )
        .setTimestamp()
        .setFooter({ text: 'TeamDJD | Den Haag Stad V2', iconURL: 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png' })
        .setColor('#f73115');

    var content = messageDeleted.content;

    if (!content) content = 'Geen tekst meegegeven.';

    if (messageDeleted.content.length > 250) return client.channels.cache.get('925789063586390036').send({ embeds: [messageDeletedErrorEmbed] });

    var messageDeletedEmbed = new discord.MessageEmbed()
    .setAuthor({ name: `${messageDeleted.author.tag}`, iconURL: `${messageDeleted.author.avatarURL({ size: 4096 })}`})
    .addFields(
            { name: 'Bericht gemaakt door', value: `> <@${messageDeleted.author.id}>` },
            { name: 'Bericht', value: `> ${content}` },
            { name: "Bericht id", value: `> ${messageDeleted.id}` },
            { name: "Verwijderd uit", value: `> ${messageDeleted.channel}` }
        )
        .setTimestamp()
        .setFooter({ text: 'TeamDJD | Den Haag Stad V2', iconURL: 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png' })
        .setColor('#f73115');

    client.channels.cache.get('925789063586390036').send({ embeds: [messageDeletedEmbed] }).catch()

});

client.on('interactionCreate', async (interaction, err) => {

    if (interaction.isSelectMenu()) {
        const { customId, values, member } = interaction;

        if (customId === 'role') {

            const component = interaction.component;

            const removed = component.options.filter((option) => {
                return !values.includes(option.value)
            })

            for (var id of removed) {
                member.roles.remove(id.value)
            }

            for (var id of values) {
                member.roles.add(id)
            }

            interaction.reply({
                content: 'Roles updated!',
                ephemeral: true
            })

        }
    } else if (interaction.isCommand()) {

        const slashCommand = client.slashCommands.get(interaction.commandName);

        if (!slashCommand) return;

        try {

            await slashCommand.execute(client, interaction);

        }
        catch (err) {

            await interaction.reply({ content: '> Er was een probleem bij het uitvoeren van het commando.', ephemeral: true })

        }

        // const { commandName, options } = interaction;

        // if (commandName === 'ping') {

        //     interaction.reply({
        //         content: '> Pong!',
        //         ephemeral: false
        //     })

        // } else if (commandName === 'optellen') {

        //     const optellen1 = options.getNumber('optellen1');

        //     const optellen2 = options.getNumber('optellen2');

        //     const opgeteltGetal = optellen1 + optellen2;

        //     interaction.reply({
        //         content: `> ${optellen1} + ${optellen2} = ${opgeteltGetal}`,
        //         ephemeral: false
        //     })

        // } else if (commandName === 'aftrekken') {

        //     const aftrekken1 = options.getNumber('aftrekken1');

        //     const aftrekken2 = options.getNumber('aftrekken2');

        //     const afgetrokkenGetal = aftrekken1 - aftrekken2;

        //     interaction.reply({
        //         content: `> ${aftrekken1} - ${aftrekken2} = ${afgetrokkenGetal}`,
        //         ephemeral: false
        //     })

        // } else if (commandName === 'delen') {

        //     const delen1 = options.getNumber('delen1');

        //     const delen2 = options.getNumber('delen2');

        //     const gedeeltGetal = delen1 / delen2;

        //     interaction.reply({
        //         content: `> ${delen1} / ${delen2} = ${gedeeltGetal}`,
        //         ephemeral: false
        //     })

        // } else if (commandName === 'maal') {

        //     const maal1 = options.getNumber('maal1');

        //     const maal2 = options.getNumber('maal2');

        //     const gevermenigvuldigdGetal = maal1 * maal2;

        //     interaction.reply({
        //         content: `> ${maal1} * ${maal2} = ${gevermenigvuldigdGetal}`,
        //         ephemeral: false
        //     })

        // } else if (commandName === 'avatar') {

        //     var avatarPersoon = options.getUser('avatarpersoon');

        //     if (!avatarPersoon) avatarPersoon = interaction.user;

        //     var avatarEmbed = new discord.MessageEmbed()
        //         .setAuthor({ name: `${avatarPersoon.tag}`, iconURL: `${avatarPersoon.author.avatarURL({ size: 4096 })}`})
        //         .setImage(avatarPersoon.displayAvatarURL({ dynamic: true, size: 4096 }))
        //         .setColor('#f73115')
        //         .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png');

        //     interaction.reply({ embeds: [avatarEmbed] })

        // } else if (commandName === 'serverinfo') {

        //     var serverEmbed = new discord.MessageEmbed()
        //         .setTitle(`${interaction.guild.name}`)
        //         .setColor('#f73115')
        //         .addFields(
        //             { name: 'Founder', value: `> <@486559825984225283>` },
        //             { name: 'ID', value: `> ${interaction.guild.id}` },
        //             { name: "Bots", value: `> 8` },
        //             { name: "People", value: `> ${interaction.guild.memberCount - interaction.guild.members.cache.filter(m => m.user.bot).size}` },
        //             { name: "Created on", value: `> ${moment(interaction.guild.createdAt).format('LL')}` },
        //             { name: "Joined on", value: `> ${interaction.member.joinedAt.toString()}` }

        //         )
        //         .setThumbnail('https://media.discordapp.net/attachments/755878713668796446/872847136478351380/image0.png')
        //         .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png')
        //         .setTimestamp()

        //     const serverInfoRow = new discord.MessageActionRow().addComponents(

        //         new discord.MessageButton()
        //             .setLabel('Link')
        //             .setStyle('LINK')
        //             .setURL('https://discord.gg/8Xsh8MpeDh')

        //     );

        //     interaction.reply({ embeds: [serverEmbed], components: [serverInfoRow] });

        // } else if (commandName === 'botinfo') {

        //     var botEmbed = new discord.MessageEmbed()
        //         .setTitle('Bot information.')
        //         .setColor('#f73115')
        //         .addFields(
        //             { name: 'Bot name', value: `> ${client.user.username}` },
        //             { name: 'Bot ID', value: `> ${client.user.id}` },
        //             { name: 'Prefix', value: `> ${botConfig.prefix}` },
        //             { name: 'Made by', value: `> <@712621794053587016>` },
        //             { name: 'Created on', value: `> Visual Studio Code` },
        //             { name: 'Discord.js', value: `> ${package.dependencies["discord.js"]}` },
        //             { name: 'Platform', value: `> MacOS Big Sur` },
        //             { name: 'Last update', value: `> ${botConfig.lastUpdate}` },
        //             { name: 'Content latest update', value: `> ${botConfig.contentLastUpdate}` },
        //             { name: 'Created on', value: `> ${botConfig.createdOn}` }
        //         )
        //         .setThumbnail('https://media.discordapp.net/attachments/755878713668796446/872847136478351380/image0.png')
        //          .setFooter({ text: 'TeamDJD | Den Haag Stad V2', iconURL: 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png' })
        //         .setTimestamp()

        //     const botInfoRow = new discord.MessageActionRow().addComponents(

        //         new discord.MessageButton()
        //             .setLabel('TwoepKoep Chats.')
        //             .setStyle('LINK')
        //             .setURL('https://discord.gg/VrWyrpkM6B')

        //     );

        //     interaction.reply({ embeds: [botEmbed], components: [botInfoRow] });

        // } else if (commandName === 'eightball') {

        //     var antwoorden = ["Ja", "Nee", "Misschien", "Misschien niet", "Waarschijnlijk wel"];

        //     var resultaat = Math.floor((Math.random() * antwoorden.length));

        //     const user = options.getMember('eightball')

        //     const eightBallEmbed = new discord.MessageEmbed()
        //         .setTitle(`Lees hier het antwoord op je vraag, ${user}`)
        //         .setThumbnail("https://magic-8ball.com/assets/images/Our_magic_8_ball.png")
        //         .addFields([
        //             { name: "Antwoord", value: `> ${antwoorden[resultaat]}` },
        //         ])
        //         .setFooter({ text: 'TeamDJD | Den Haag Stad V2', iconURL: 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png' })
        //         .setTimestamp()
        //         .setColor('#f73115');

        //     interaction.reply({ embeds: [eightBallEmbed] });

        // } else if (commandName === 'test') {

        //     interaction.reply('> De bot is klaar om uw commando\'s uit te voeren!')

        // } else if (commandName === 'quote') {

        //     var num = Math.floor(Math.random() * quotes.Quotes.length)

        //     var quoteEmbed = new discord.MessageEmbed()
        //         .setDescription(`> ${quotes.Quotes[num].q}`)
        //         .setColor('#f73115')
        //         .setFooter(`${quotes.Quotes[num].a}`);

        //     interaction.reply({ embeds: [quoteEmbed] })

        // } else if (commandName === 'dog') {

        //     fetch('https://www.reddit.com/r/lookatmydog/random/.json').then(resp => resp.json()).then(respOmgevormd => {

        //         var permaLink = respOmgevormd[0].data.children[0].data.permaLink;
        //         var dogUrl = `https://www.reddit.com${permaLink}`;
        //         var dogFoto = respOmgevormd[0].data.children[0].data.url;
        //         var dogTitle = respOmgevormd[0].data.children[0].data.title;

        //         var dogEmbed = new discord.MessageEmbed()
        //             .setTitle(`${dogTitle}`)
        //             .setURL(`${dogUrl}`)
        //             .setImage(`${dogFoto}`)
        //             .setColor('#f73115')
        //             .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png')
        //             .setTimestamp()

        //         interaction.reply({ embeds: [dogEmbed] })

        //     }).catch("error", (err) => {
        //         console.log(err.message);
        //     })

        // } else if (commandName === 'cat') {

        //     fetch('https://www.reddit.com/r/cats/random/.json').then(resp => resp.json()).then(respOmgevormd => {

        //         var permaLink = respOmgevormd[0].data.children[0].data.permaLink;
        //         var catUrl = `https://www.reddit.com${permaLink}`;
        //         var catFoto = respOmgevormd[0].data.children[0].data.url;
        //         var catTitle = respOmgevormd[0].data.children[0].data.title;

        //         var catEmbed = new discord.MessageEmbed()
        //             .setTitle(`${catTitle}`)
        //             .setURL(`${catUrl}`)
        //             .setImage(`${catFoto}`)
        //             .setColor('#f73115')
        //             .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png')
        //             .setTimestamp()
        //         interaction.reply({ embeds: [catEmbed] });

        //     }).catch("error", (err) => {
        //         console.log(err.message);
        //     })

        // } else if (commandName === 'gameinfo') {

        //     const gameEmbed = new discord.MessageEmbed()
        //         .setTitle('Game Informatie')
        //         .addFields(
        //             { name: 'Game Creator', value: `> <@486559825984225283>` },
        //             { name: 'Game Name', value: `> Den Haag Stad` },
        //             { name: 'Game Link', value: `> [Den Haag Stad](https://www.roblox.com/games/5784855325/Den-Haag-Stad)` },
        //             { name: 'Game Developers', value: `> <@690126965729918978> \n > <@613688933980831754> \n >  <@527416839211319318> \n > <@722779830025977936> \n > <@340846369701101575> \n > <@452758813053812737>` }
        //         )
        //         .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png')
        //         .setColor('#f73115')
        //         .setTimestamp()
        //         .setThumbnail('https://cdn.discordapp.com/attachments/562200277248114719/922619599118278706/Dhs.png')

        //     interaction.reply({ embeds: [gameEmbed] })

        // } else if (commandName === 'servers') {

        //     var serverEmbed = new discord.MessageEmbed()
        //         .setTitle('Discord Servers Den Haag Stad.')
        //         .setColor('#f73115')
        //         .addFields(
        //             { name: 'YouTube Server', value: `> [YouTube Server](https://discord.gg/Bt94fKAYSB)` },
        //             { name: 'Sollicitatie Server', value: `> [Sollicitatie Server](https://discord.gg/NCHjWjZg96)` },
        //             { name: 'Koninklijke Landmacht', value: `> [Koninklijke Landmacht](https://discord.gg/s5DnaFZtEq)` },
        //             { name: 'Koninklijke Marechaussee', value: `> [Koninklijke Marechaussee](https://discord.gg/4fGDD7pagH)` },
        //             { name: 'Dienst Speciale Interventies', value: `> [Dienst Speciale Interventies](https://discord.gg/NSdXwCxhK2)` }
        //         )
        //         .setThumbnail('https://media.discordapp.net/attachments/755878713668796446/872847136478351380/image0.png')
        //         .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png')
        //         .setTimestamp()

        //     interaction.reply({ embeds: [serverEmbed] });

        // } else if (commandName === 'gangs') {

        //     var serverEmbed = new discord.MessageEmbed()
        //         .setTitle('Gangs Den Haag Stad.')
        //         .setColor('#f73115')
        //         .addFields(
        //             { name: 'Gang Cartel De La Rana | 🐸', value: `> [Gang Cartel De La Rana | 🐸](https://discord.gg/9bjpEArXbZ)` },
        //             { name: 'Gang Clips', value: `> [Gang Clips](https://discord.gg/B3fGpWMVa9)` },
        //         )
        //         .setThumbnail('https://media.discordapp.net/attachments/755878713668796446/872847136478351380/image0.png')
        //         .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png')
        //         .setTimestamp()

        //     interaction.reply({ embeds: [serverEmbed] });

        // } else if (commandName === 'commands') {

        //     var prefix = botConfig.prefix;

        //     var general = 'General\n';
        //     var info = '\nInformation\n';
        //     var game = '\nGame\n';
        //     var staff = 'Staff Commands\n';

        //     client.commands.forEach(command => {

        //         switch (command.help.category) {

        //             case 'general':
        //                 general += `> ${prefix}${command.help.name} - ${command.help.description}\r\n`;
        //                 break;

        //             case 'info':
        //                 info += `> ${prefix}${command.help.name} - ${command.help.description}\r\n`;
        //                 break;

        //             case 'game':
        //                 game += `> ${prefix}${command.help.name} - ${command.help.description}\r\n`;
        //                 break;

        //             case 'staff':
        //                 staff += `> ${prefix}${command.help.name} - ${command.help.description}\r\n`;
        //                 break;
        //         }

        //     });

        //     var generalEmbed = new discord.MessageEmbed()
        //         .setTitle('General Commands.')
        //         .setDescription(`${general}`)
        //         .setColor('#f73115')
        //         .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png')
        //         .setTimestamp()

        //     var informationEmbed = new discord.MessageEmbed()
        //         .setTitle('Information Commands')
        //         .setDescription(`${info}`)
        //         .setColor('#f73115')
        //         .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png')
        //         .setTimestamp()

        //     var gameEmbed = new discord.MessageEmbed()
        //         .setTitle(`Game Commands`)
        //         .setDescription(`${game}`)
        //         .setColor('#f73115')
        //         .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png')
        //         .setTimestamp()

        //     var staffEmbed = new discord.MessageEmbed()
        //         .setTitle(`Staff Commands`)
        //         .setDescription(`${staff}`)
        //         .setColor('#f73115')
        //         .setFooter('TeamDJD | Den Haag Stad V2', 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png')
        //         .setTimestamp()

        //     var user = options.getUser('commands')

        //     var number = options.getNumber('command_categorie');

        //     if (number > 4) return interaction.reply('> Geef een het getal 4 of kleiner op.');

        //     if (!number) return interaction.reply('> Geef een nummer mee. \n \n> General Commands • 1 \n > Information Commands • 2 \n > Game Commands • 3 \n > Staff Commands • 4');

        //     if (number === 1) return interaction.reply({ embeds: [generalEmbed] });

        //     if (number === 2) return interaction.reply({ embeds: [informationEmbed] });

        //     if (number === 3) return interaction.reply({ embeds: [gameEmbed] });

        //     if (number === 4) if (interaction.member.roles.cache.has('682635913431482471')) {

        //         return interaction.reply({
        //             embeds: [staffEmbed],
        //             ephemeral: true
        //         });

        //     } else {

        //         return interaction.reply('> Enkel het staff team mag dit commando gebruiken.')

        //     }

        // } else if (commandName === 'members') {



        //     const aantalLeden = `${interaction.guild.memberCount - interaction.guild.members.cache.filter(m => m.user.bot).size}`;

        //     const aantalBots = `8`;

        //     return interaction.reply(`> Deze Discord server telt ${aantalLeden} members en ${aantalBots} bots.`)


        // } else {

        //     return console.log(err)

        // }

    }
});

client.on('guildMemberAdd', member => {

    var chatChannel = member.guild.channels.cache.get('669284473711362088');

    if (!chatChannel) return;

    chatChannel.send(`> Welcome to the server ${member}!`);

});

client.on('messageCreate', async message => {

    if (message.content === 'hallo') return message.reply('> Hoi, hoe gaat het?');

    if (message.content === 'Hallo') return message.reply('> Hoi, hoe gaat het?');

    if (message.content === 'hoi') return message.reply('> Hallo, hoe gaat het?');

    if (message.content === 'Hoi') return message.reply('> Hoi, hoe gaat het?');

    if (message.content === 'goed') return message.reply('> Fijn om te horen!');

    if (message.content === 'Goed') return message.reply('> Fijn om te horen!');

    if (message.content === 'slecht') return message.reply('> Oei, wat is er aan de hand?');

    if (message.content === 'Slecht') return message.reply('> Oei, wat is er aan de hand?');

    if (message.content === 'pizza') return message.reply('> Pizza met annanas is lekker.');

    if (message.content === 'Pizza') return message.reply('> Pizza met annanas is lekker.');

    if (message.content === 'Kanker') return message.delete() + message.channel.send(`<@${message.author.id}> gelieven dat woord niet meer te gebruiken.`);

    if (message.content === 'kanker') return message.delete() + message.channel.send(`<@${message.author.id}> gelieven dat woord niet meer te gebruiken.`);

    if (message.content === 'wollah') return message.delete() + message.channel.send(`<@${message.author.id}> gelieven dat woord niet meer te gebruiken.`);

    if (message.content === 'Wollah') return message.delete() + message.channel.send(`<@${message.author.id}> gelieven dat woord niet meer te gebruiken.`);

    if (message.content === 'Allah') return message.delete() + message.channel.send(`<@${message.author.id}> gelieven dat woord niet meer te gebruiken.`);

    if (message.content === 'allah') return message.delete() + message.channel.send(`<@${message.author.id}> gelieven dat woord niet meer te gebruiken.`);

});

client.on('messageCreate', async message => {

    if (message.author.bot) return;

    var prefixes = JSON.parse(fs.readFileSync('./Prefixes.json'));

    if (!prefixes[message.guild.id]) {

        prefixes[message.guild.id] = {
            prefix: botConfig.prefix
        };

    }

    var prefix = prefixes[message.guild.id].prefix;

    // var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    if (!message.content.startsWith(prefix)) return;

    const commandData = client.commands.get(command.slice(prefix.length)) || client.commands.get(client.aliases.get(command.slice(prefix.length)));

    if (!commandData) return;

    var arguments = messageArray.slice(1);

    try {

        await commandData.run(client, message, arguments);

    } catch (error) {

        console.log(error);

        await message.reply('> Er was een probleem bij het uitvoeren van het commando.');

    }

});

client.login(process.env.token);

// client.login(botConfig.token)