const discord = require('discord.js');
const paginator = require('@koenie06/discord.js-pagination')

module.exports.run = async (client, message, args, interaction) => {

    return;

    // /*
    //              * The function requires atleast 2 items:
    //              * 1) Interaction. This is used to start the paginator.
    //              * 2) Pages. A array of all the pages (MessageEmbed's).
    //              * 
    //              * There are also some optional items:
    //              * 1) Buttons. A Object with button information to customize the buttons.
    //              * 2) Timeout. A Integer of the time when the paginator stops.
    //             */

    // const page1 = new discord.MessageEmbed().setTitle('This is page 1')
    // const page2 = new discord.MessageEmbed().setTitle('This is page 2')
    // const page3 = new discord.MessageEmbed().setTitle('This is page 3')
    // const page4 = new discord.MessageEmbed().setTitle('This is page 4')
    // const page5 = new discord.MessageEmbed().setTitle('This is page 5')
    // const page6 = new discord.MessageEmbed().setTitle('This is page 6')
    // const page7 = new discord.MessageEmbed().setTitle('This is page 7')
    // const page8 = new discord.MessageEmbed().setTitle('This is page 8')
    // const page9 = new discord.MessageEmbed().setTitle('This is page 9')
    // const page10 = new discord.MessageEmbed().setTitle('This is page 10')


    // paginator.button({
    //     message: message,
    //     pages: [page1, page2, page3, page4, page5, page6, page7, page8, page9, page10],
    //     buttons: {
    //         previous: {
    //             label: 'Click for previous page',
    //             style: 'PRIMARY'
    //         },
    //         next: {
    //             label: 'Click for next page',
    //             style: 'SUCCESS'
    //         },
    //         stop: {
    //             label: 'Click to stop',
    //             style: 'DANGER'
    //         }
    //     },
    //     timeout: 100000000
    // });

}

module.exports.help = {
    name: 'buttonpages',
    category: 'info',
    description: 'Met dit commando kan je een bug melden.',
    aliases: ['buttonpage', 'buttonp', 'bpages', 'bp']
}