const { SlashCommandBuilder } = require('@discordjs/builders');
const discord = require("discord.js");
const fetch = require('node-fetch');

module.exports = {

    data: new SlashCommandBuilder()
        .setName('dog')
        .setDescription('Geeft een foto van een kat weer.'),

    async execute(client, interaction, message, args) {

        fetch('https://www.reddit.com/r/lookatmydog/random/.json').then(resp => resp.json()).then(respOmgevormd => {

            var permaLink = respOmgevormd[0].data.children[0].data.permaLink;
            var catUrl = `https://www.reddit.com${permaLink}`;
            var catFoto = respOmgevormd[0].data.children[0].data.url;
            var catTitle = respOmgevormd[0].data.children[0].data.title;

            var catEmbed = new discord.MessageEmbed()
                .setTitle(`${catTitle}`)
                .setURL(`${catUrl}`)
                .setImage(`${catFoto}`)
                .setColor('#f73115')
                .setFooter({ text: 'TeamDJD | Den Haag Stad V2', iconURL: 'https://cdn.discordapp.com/attachments/755878713668796446/872847136478351380/image0.png' })
                .setTimestamp()
            return interaction.reply({ embeds: [catEmbed] });

        }).catch("error", (err) => {
            console.log(err.message);
        })
    }

}