const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var user = message.mentions.users.first() ||
        client.users.cache.get(args[0]) ||
        client.users.cache.find(user => user.username.toLowerCase() == args.join(" ").toLowerCase()) ||
        client.users.cache.find(user => user.tag.toLowerCase() == args.join(" ").toLowerCase()) ||
        message.member.user;

    var avMember = message.guild.members.cache.get(user.id);

    // message.channel.send('> user: ' + user + ', avMember: ' + avMember)

    if (!avMember) return message.reply('> Error.');

    var avatarEmbed = new discord.MessageEmbed()
        .setAuthor({ name: `${user.tag}`, iconURL: `${user.displayAvatarURL({ dynamic: true, size: 4096 })}` })
        .setImage(user.displayAvatarURL({ dynamic: true, size: 4096 }))
        .setColor('#f73115')
        .setFooter({ text: 'TeamDJD | Den Haag Stad V2', iconURL: 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png' })

    message.reply({ embeds: [avatarEmbed] })

    return await message.channel.send('> Tip: Ik kan alleen avatars tonen mbv. een ID als de persoon een bericht heeft gestuurd na dat de bot is opgestart! Anders zal je de persoon moeten taggen.')

}

module.exports.help = {
    name: "avatar",
    category: 'info',
    description: 'Met dit commando geeft de bot de avatar weer van jou.',
    aliases: ["av", "pf"]
}