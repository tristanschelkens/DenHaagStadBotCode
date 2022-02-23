const discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    if (!args[0]) return message.reply('> Beschrijf je suggestie.');

    if (!args[3]) return message.reply('> Beschrijf je suggestie meer.');

    const redenMessage = args.splice(0, args.length).join(' ');

    const reviewChannel = message.member.guild.channels.cache.get('752146535722254432');

    if (!reviewChannel) return message.reply('> Er is geen kanaal waar ik je suggestie in kan versturen.');

    var reviewEmbed = new discord.MessageEmbed()
        .addField('Suggestie', `> ${redenMessage}`)
        .addField('Person', `> ${message.author}`)
        .setColor('#f73115')
        .setFooter({ text: 'TeamDJD | Den Haag Stad V2', iconURL: 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png' })
        .setTimestamp()

    message.reply(`> Je suggestie is verzonden! Je kan hem vinden in <#752146535722254432>.`);

    var msg = await reviewChannel.send({embeds: [reviewEmbed]})

    await msg.react('🟩')
    await msg.react('🟥')
    
    

    return;



}

module.exports.help = {
    name: 'suggestie',
    category: 'info',
    description: 'Met dit commando kan je een suggestie aanmaken.',
    aliases: []
}