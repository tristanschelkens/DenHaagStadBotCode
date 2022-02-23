const discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    return message.reply('> Dit commando is niet in gebruik.')

    // if (!message.member.roles.cache.has('934841178518609982')) return message.reply('> Alleen HC+ kan dit commando gebruiken.');

    // const staffMuteRole = message.guild.roles.cache.get('934842526978957323');

    // const staffMuteMember = message.guild.members.cache.get(message.mentions.users.first().id || message.guild.members.get(args[0]).id);

    // // if (staffMuteMember) return message.reply('> Test, ' + staffMuteMember + '.')

    // if (!staffMuteMember) return message.reply('> Gelieve een gebruiker op te geven, `<@gebruiker-id>`.');

    // if(staffMuteMember.roles.cache.has('934841178518609982')) return message.reply('> Alleen een Hoofd Administrator+ kan een Super Administrator muten.');

    

}

module.exports.help = {
    name: 'staffmute',
    category: 'info',
    description: 'Met dit commando kan je speciale rollen krijgen.',
    aliases: ['smute']
}