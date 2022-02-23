const discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    return message.reply('> Dit commando is niet in gebruik')

    // const filter = m => m.content.includes('discord');

    // if (!message.member.roles.cache.has('682635913431482471')) return message.reply('> Jij kan dit niet.');

    // var trainingLogChannel = message.member.guild.channels.cache.get("939819015856095262");

    // const collector = message.channel.createMessageCollector({ time: 15000 });

    // message.reply('> Hoeveel trainees waren er bij uw training?');

    // collector.on('collect', message1 => {

    //     console.log(`Collected ${message1.content}`);

    // });

    // message.channel.send(`> ${messsage.author}, hoe is je training verlopen?`);

    // collector.on('collect', message2 => {

    //     console.log(`Collected ${message2.content}`);

    // });

    // collector.on('end', collected => {
    //     message.channel.send(`Ik heb ${collected.size} items gecollect.`);
    // });

}

module.exports.help = {
    name: 'training',
    category: 'staff',
    description: 'Met dit commando kan een server moderator meerdere berichten verwijderen in 1 keer.',
    aliases: []
}