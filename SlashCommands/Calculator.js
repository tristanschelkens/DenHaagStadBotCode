const { SlashCommandBuilder } = require('@discordjs/builders');
const { Options } = require('discord.js');

module.exports = {

    data: new SlashCommandBuilder()
        .setName('calculator')
        .setDescription('Geeft het antwoord op je reken vragen!')
        .addStringOption(option => option.setName('number1').setDescription('Enter a number.'))
        .addStringOption(option => option.setName('factor').setDescription('Geef +, -, * of / op.'))
        .addStringOption(option => option.setName('number2').setDescription('Enter a number.')),


    async execute(client, interaction, message, args, options) {

        

        if (!interaction.options.getString('number1')) return interaction.reply({
            content: `> Geef twee getallen en een factor op.`,
            ephemeral: true
        })

        if (!interaction.options.getString('factor')) return interaction.reply({
            content: `> Geef twee getallen en een factor op.`,
            ephemeral: true
        })

        if (!interaction.options.getString('number2')) return interaction.reply({
            content: `> Geef twee getallen en een factor op.`,
            ephemeral: true
        })

        var number1 = interaction.options.getString('number1');

        var number2 = interaction.options.getString('number2');

        var factor = interaction.options.getString('factor');

        if (factor === '-') return interaction.reply({
            content: `${number1} - ${number2} = ${parseInt(number1) - parseInt(number2)}`,
            ephemeral: false
        })

        if (factor === '+') return interaction.reply({
            
            content: `${number1} + ${number2} = ${parseInt(number1) + parseInt(number2)}`,
            ephemeral: false
        })

        if (factor === '/') return interaction.reply({
            content: `${number1} / ${number2} = ${parseInt(number1) / parseInt(number2)}`,
            ephemeral: false
        })

        if (factor === '*') return interaction.reply({
            content: `${number1} * ${number2} = ${parseInt(number1) * parseInt(number2)}`,
            ephemeral: false
        })

        è

    }

}