const discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    message.reply('> Dit commando is niet in gebuik.')

    // // const filter = m => m.content.includes('discord');
    // const collector = message.channel.createMessageCollector({ time: 15000 });
    
    // collector.on('collect', collectorMessageOne => {


    // });

    
    // collector.on('end', collectedMessagesOne => {
        
    //     message.channel.send('De collector is gestopt, deze berichten heb ik gelogd: `' + collectedMessagesOne + '`.')

    // });


}

module.exports.help = {
    name: 'collector',
    category: 'staff',
    description: 'Met dit commando kan een server moderator meerdere berichten verwijderen in 1 keer.',
    aliases: []
}