const discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (client, message, args) => {

    if (args[0]) return message.reply('> Je kan alleen je eigen quiz punten bekijken.')

    const quizUser = message.author.id;

    if (!quizUser) return message.reply('> De bot kan de opgegeven gebruiker niet vinden.');

    const quizPoints = JSON.parse(fs.readFileSync('./QuizPoints.json', "UTF8"));

    if (!quizPoints[quizUser]) return message.reply('> De opgegeven persoon heeft nog geen quiz punten.');

    if (!args[0]) return message.reply(`> Je hebt **${quizPoints[quizUser].quizPoints.toString()}** quiz punt(en).`);

}

module.exports.help = {
    name: 'quizpoints',
    category: 'games',
    description: 'Met dit commando kan je bekijken hoeveel quiz punten je hebt.',
    aliases: ['quizpunten']
}