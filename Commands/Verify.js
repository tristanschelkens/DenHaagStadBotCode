const { MessageAttachment, DiscordAPIError } = require('discord.js');
const { Captcha } = require('captcha-canvas')
const fetch = require('node-fetch')
const discord = require('discord.js')

module.exports.run = async (client, message, args) => {

    if (message.member.roles.cache.has('566189282793095170')) return message.reply('> Jij bent al geverifieerd!');

    const captcha = new Captcha();
    captcha.async = true;
    captcha.addDecoy();
    captcha.drawTrace();
    captcha.drawCaptcha();

    const captchaAttachment = new MessageAttachment(
        await captcha.png,
        'captcha.png'
    );

    const captchaEmbed = new discord.MessageEmbed()
    .setDescription('Slove the captcha!')
    .setColor('#f73115')
    .setImage('attachment://captcha.png')


    message.channel.send({
        files: [captchaAttachment], 
        embeds: [captchaEmbed]
    });

    const filter = (captchaMessage) => {
        if (!message.member.id === captchaMessage.author.id) {

            return;

        } else if (captchaMessage.content === captcha.text) {

            return true;

        } else if (captchaMessage.author.bot) {

            return;

        } else {

            message.channel.send('> Wrong captcha entered, you will be kicked soon.');

        }

    };

    try {

        const response = await message.channel.awaitMessages({
            filter,
            max: 1,
            time: 20000,
            errors: ['time']
        });

        if (response) {

            message.channel.send(`> ${message.author}, you have been verified.`)

            message.member.roles.add('566189282793095170');

        }

    } catch (err) {

        await message.channel.send('> You have not verified, you have send the wrong captcha code, you have been kicked.');

        message.member.kick(`Reden: auto kick, captcha niet gehaald. Gekickt door: Den Haag Stad Bot.`);

    }

}

module.exports.help = {
    name: 'verify',
    category: 'staff',
    description: 'With this command a staff member can close a ticket.',
    aliases: []
} 