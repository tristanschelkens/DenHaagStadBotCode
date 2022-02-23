const discord = require("discord.js");

module.exports.run = async (client, message, args) => {


    if (!message.member.roles.cache.has('682635913431482471')) return message.reply('> Jij kan dit niet');

    if (!args[0]) return message.reply("> Geen begin datum meegegeven.")

    if (!args[1]) return message.reply("> Geen eind datum meegegeven.")

    if (!args[2]) return message.reply("> Geen reden meegegeven.")

    var afmeldRole = message.guild.roles.cache.get('873857897136783360');

    var begin = args[0]
    var einde = args[1]
    var reden = args.slice(2).join(" ")

    var afmelden = message.member.guild.channels.cache.get("666690472692940830");

    message.member.roles.add(afmeldRole.id);

    const afmeldEmbed = new discord.MessageEmbed()
        .setAuthor({ name: `${message.author.username}`, iconURL: `${message.author.avatarURL({ size: 4096 })}`})
        .addField("Begin datum:", "> " + begin)
        .addField("Eind datum:", "> " + einde)
        .addField("Reden:", "> " + reden)
        .setColor('#f73115')
        .setFooter({ text: 'TeamDJD | Den Haag Stad V2', iconURL: 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png' })

    var msg = await afmelden.send({ embeds: [afmeldEmbed] })

    await message.member.roles.add(afmeldRole.id);
    
    return message.reply("> U bent succesvol afgemeld.")

}

module.exports.help = {
    name: "afmelden",
    category: 'staff',
    description: 'Met dit commando kan een stafflid zich afmelden.',
    aliases: []
}