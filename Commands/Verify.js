const { MessageAttachment } = require('discord.js');
const { Captcha } = require('captcha-canvas')
const fetch = require('node-fetch')

module.exports.run = async (client, message, args) => {

    const captcha = new Captcha();
    captcha.async = true;
    captcha.addDecoy();
    captcha.drawTrace();
    captcha.drawCaptcha();

    const captchaAttachment = new MessageAttachment(
        await captcha.png,
        'captcha.png'
    );

    message.channel.send({ 
        files: [captchaAttachment], 
        content: `Code: ${captcha.text}`
    });

}

module.exports.help = {
    name: 'verify',
    category: 'staff',
    description: 'With this command a staff member can close a ticket.'
}