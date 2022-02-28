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

    // const rest = new REST({ version: '9' }).setToken(botConfig.token);

    const rest = new REST({ version: '9' }).setToken(process.env.token);

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

    } else if (interaction.isCommand()) {

        const slashCommand = client.slashCommands.get(interaction.commandName);

        if (!slashCommand) return;

        // await slashCommand.execute(client, interaction);

        try {

            await slashCommand.execute(client, interaction);

        }
        catch (err) {

            await interaction.reply({ content: '> Er was een probleem bij het uitvoeren van het commando.', ephemeral: true })

        }

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

// client.login(process.env.token);

client.login(botConfig.token)