const discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    return message.reply('> De bot is klaar om uw commando\'s uit te voeren!')

}

module.exports.help = {
    name: 'test',
    category: 'info',
    description: 'Met dit commando kan je testen of de bot het doet.',
    aliases: []
}