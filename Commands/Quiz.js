const discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (client, message, args) => {

    // return message.reply('> Dit commando is niet in gebruik, de bot Developer gaat morgen verder werken aan het commando.')

    const quizQuestions = require('../quiz.json');

    const item = quizQuestions[Math.floor(Math.random() * quizQuestions.length)];

    const filter = response => {

        return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());

    };

    message.reply(`> ${item.question}`, { fetchReply: true })
        .then(() => {

            message.channel.awaitMessages({ filter, max: 1, time: 30000, errors: ['time'] })
                .then(collected => {

                    const quizUser = collected.first().author;

                    const quizUserPoints = JSON.parse(fs.readFileSync('./QuizPoints.json', "UTF8"));

                    if (!quizUserPoints[quizUser.id]) quizUserPoints[quizUser.id] = {
                        quizPoints: 0
                    }

                    quizUserPoints[quizUser.id].quizPoints++;

                    fs.writeFile('./QuizPoints.json', JSON.stringify(quizUserPoints), (err) => {

                        if (err) console.log(err);

                    });

                    return message.channel.send(`> ${collected.first().author} heeft het antwoord goed geraden!`);

                })

                .catch(collected => {

                    message.channel.send(`> Het lijkt erop dat je niet het juiste antwoord hebt binnen de tijd! De antwoorden waren \`${item.answers}\`.`);

                    if (collected) console.log(collected);

                });

        });

}

module.exports.help = {
    name: 'quiz',
    category: 'games',
    description: 'Met dit commando kan je een quiz spelen.',
    aliases: []
}