const { SlashCommandBuilder } = require('@discordjs/builders');
const discord = require("discord.js");

module.exports = {

    data: new SlashCommandBuilder()
        .setName('eightball')
        .setDescription('Geeft een random antwoord weer op je vraag.')
        .addStringOption(option => option.setName('vraag').setDescription('Enter a number.')),

    async execute(client, interaction, message, args) {

        if (!interaction.options.getString('vraag')) return interaction.reply({
            content: `> Geef een vraag op.`,
            ephemeral: true
        })

        var antwoorden = ["Ja", "Nee", "Misschien", "Misschien niet", "Waarschijnlijk wel"];

        var resultaat = Math.floor((Math.random() * antwoorden.length));
        var vraag = interaction.options.getString('vraag');

        var eightBallEmbed = new discord.MessageEmbed()
            .setTitle(`8ball vraag van ${interaction.user.tag}`)
            .setDescription("Lees hier de vraag van de 8ball")
            .setThumbnail("https://magic-8ball.com/assets/images/Our_magic_8_ball.png")
            .addFields([
                { name: "Vraag", value: `${vraag}` },
                { name: "Antwoord", value: `${antwoorden[resultaat]}` },
            ])
            .setFooter({ text: 'TeamDJD | Den Haag Stad V2', iconURL: 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png' })
            .setTimestamp()
            .setColor('#f73115');

        return interaction.reply({ embeds: [eightBallEmbed] })

    }

}