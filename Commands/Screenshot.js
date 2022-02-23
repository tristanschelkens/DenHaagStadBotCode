const discord = require("discord.js");
const fetch = require('axios')

module.exports.run = async (client, message, args) => {

    let url = args[0]

    if (!url) return message.reply('> Geef een URL op.');

    message.reply('> Aan het laden...').then(async msg => {
        
        let res = await fetch(`https://api.ultrax-yt.com/v1/screenshot?url=${url}&key=KAzlWGFqVxIR`);

        const buffer = new Buffer.from(res.data.screenshot.split(',')[1], "base64");

        const image = new discord.MessageAttachment(buffer, 'screenshot.png');

        const imageEmbed = new discord.MessageEmbed()
            .setTitle(url)
            .setURL(url)
            .setColor('#f73115')
            .setImage('attachment://screenshot.png')
            .setFooter({ text: 'TeamDJD | Den Haag Stad V2', iconURL: 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png' })

        msg.edit( { content: '> Geladen!', embeds: [imageEmbed], files: [image]});

    }).catch(async (err) => {

        message.channel.send('> Er is iets mis gelopen, ik kan van die website geen screenshot nemen.');

        return await console.log(err)

    })

}


module.exports.help = {
    name: "screenshot",
    category: 'general',
    description: '',
    aliases: ['schermafbeelding']
}