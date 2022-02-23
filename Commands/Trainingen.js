const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    message.reply('> Dit commando is niet in gebruik.');

    // if (!message.member.roles.cache.find(r => r.name === "Staff Team")) return message.channel.send("Je hebt hiervoor geen rechten!");

    // const filter = m => m.author.id === message.author.id
    // const trainingChannel = message.guild.channels.cache.find(c => c.name == "🖋-training-logs")

    // const eenheidEmbed = new discord.MessageEmbed()
    //     .setColor("#f73115")
    //     .setTitle("Eenheidskiezer")
    //     .setDescription("Geef het cijfer van je eenheid waar je een training wilt geven.")
    //     .addField("1", `Brandweer`)
    //     .addField("2", `Ambulance`)
    //     .addField("3", `DSI`)
    //     .addField("4", `Kmar`)
    //     .addField("5", `Polite`)
    //     .addField("6", 'Dnr')
    //     .addField("7", `Rijkswaterstaat`)
    //     .addField("8", `Beveiliging`)
    //     .addField("9", `Verkeers Politie`);


    // message.channel.send({ embeds: [eenheidEmbed] }).then(async msg => {

    //     message.channel.awaitMessages(m => m.author.id === message.author.id, { max: 1 }).then(collected => {

    //         if (collected.first().content.toLowerCase() == '1') {
    //             const tijdEmbed = new discord.MessageEmbed()
    //                 .setColor("#f73115")
    //                 .setTitle("Tijd")
    //                 .setDescription("Hoe laat geef je je training?");
    //             message.channel.send({ embeds: [tijdEmbed] })
    //             const collector2 = message.channel.createMessageCollector(filter, { max: '1', maxMatches: "1" })
    //             collector2.on("collect", t => {
    //                 const coHostEmbed = new discord.MessageEmbed()
    //                     .setColor("#f73115")
    //                     .setTitle("Co-host")
    //                     .setDescription("Wie is je co-host?");
    //                 message.channel.send({ embeds: [coHostEmbed] })
    //                 const collector3 = message.channel.createMessageCollector(filter, { max: '1', maxMatches: "1" })
    //                 collector3.on("collect", c => {
    //                     const opmerkingEmbed = new discord.MessageEmbed()
    //                         .setColor("#f73115")
    //                         .setTitle("Opmerking")
    //                         .setDescription("Geef een opmerking voor je training.")
    //                     message.channel.send({ embeds: [opmerkingEmbed] })
    //                     const collector4 = message.channel.createMessageCollector(filter, { max: '1', maxMatches: '1' })
    //                     collector4.on("collect", o => {
    //                         const typeEmbed = new discord.MessageEmbed()
    //                             .setDescription("Wat voor type heeft je training?")
    //                             .setTitle("Type")
    //                             .setColor("#f73115")
    //                         message.channel.send({ embeds: [typeEmbed] })
    //                         const collector5 = message.channel.createMessageCollector(filter, { max: '1', maxMatches: '1' })
    //                         collector5.on("collect", p => {
    //                             var brandweerMessage = new discord.MessageEmbed()

    //                                 .setDescription("**BRANDWEER TRAINING**")
    //                                 .setColor("#f73115")
    //                                 .addField("Type", `${p.content}`)
    //                                 .addField("Tijdstip:", `${t.content}`)
    //                                 .addField("Host:", `${message.author}`)
    //                                 .addField("Co-Host:", `${c.content}`)
    //                                 .addField("Opmerking:", `${o.content}`)
    //                                 .setThumbnail(`https://www.brandweer.nl/media/2015/beeldmark-goud-wit.png?anchor=center&mode=crop&width=640&height=640&upscale=false&rnd=131284240352270000`)
    //                                 .setFooter("Made by DJ Krul", `https://yt3.ggpht.com/a-/AOh14GjguB57_skEpmxJlF2JF3YRqaQN2KNnw6uw5wgFsw=s100-c-k-c0xffffffff-no-rj-mo`);
    //                             message.channel.send({ embeds: [brandweerMessage] })
    //                         });
    //                     })
    //                 })
    //             })
    //         };
    //         if (collected.first().content.toLowerCase() == '2') {
    //             const tijdEmbed = new discord.MessageEmbed()
    //                 .setColor("#f73115")
    //                 .setTitle("Tijd")
    //                 .setDescription("Om hoe laat geef je je training?");
    //             message.channel.send({ embeds: [tijdEmbed] })
    //             const collector2 = message.channel.createMessageCollector(filter, { max: '1', maxMatches: "1" })
    //             collector2.on("collect", t => {
    //                 const coHostEmbed = new discord.MessageEmbed()
    //                     .setColor("#f73115")
    //                     .setTitle("Co-host")
    //                     .setDescription("Wie is je co-host?");
    //                 message.channel.send({ embeds: [coHostEmbed] })
    //                 const collector3 = message.channel.createMessageCollector(filter, { max: '1', maxMatches: "1" })
    //                 collector3.on("collect", c => {
    //                     const opmerkingEmbed = new discord.MessageEmbed()
    //                         .setColor("#f73115")
    //                         .setTitle("Opmerking")
    //                         .setDescription("Geef een opmerking voor je training.")
    //                     message.channel.send({ embeds: [opmerkingEmbed] })
    //                     const collector4 = message.channel.createMessageCollector(filter, { max: '1', maxMatches: '1' })
    //                     collector4.on("collect", o => {
    //                         const typeEmbed = new discord.MessageEmbed()
    //                             .setDescription("Wat voor type heeft je training?")
    //                             .setTitle("Type")
    //                             .setColor("#f73115")
    //                         message.channel.send({ embeds: [typeEmbed] })
    //                         const collector5 = message.channel.createMessageCollector(filter, { max: '1', maxMatches: '1' })
    //                         collector5.on("collect", p => {
    //                             var ambulanceMessage = new discord.MessageEmbed()

    //                                 .setDescription("**AMBULANCE TRAINING**")
    //                                 .setColor("#f73115")
    //                                 .addField("Type", p.content)
    //                                 .addField("Tijdstip:", t.content)
    //                                 .addField("Host:", `${message.author}`)
    //                                 .addField("Co-Host:", c.content)
    //                                 .addField("Opmerking:", o.content)
    //                                 .setThumbnail(`https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Star_of_life2.svg/260px-Star_of_life2.svg.png`)
    //                                 .setFooter("Made by DJ Krul", `https://yt3.ggpht.com/a-/AOh14GjguB57_skEpmxJlF2JF3YRqaQN2KNnw6uw5wgFsw=s100-c-k-c0xffffffff-no-rj-mo`);

    //                             trainingChannel.send({ embeds: [ambulanceMessage] })
    //                         })
    //                     })
    //                 })
    //             })
    //         };

    //         if (collected.first().content.toLowerCase() == '3') {
    //             const tijdEmbed = new discord.MessageEmbed()
    //                 .setColor("#f73115")
    //                 .setTitle("Tijd")
    //                 .setDescription("Om hoe laat geef je je training?");
    //             message.channel.send({ embeds: [tijdEmbed] })
    //             const collector2 = message.channel.createMessageCollector(filter, { max: '1', maxMatches: "1" })
    //             collector2.on("collect", t => {
    //                 const coHostEmbed = new discord.MessageEmbed()
    //                     .setColor("#f73115")
    //                     .setTitle("Co-host")
    //                     .setDescription("Wie is je co-host?");
    //                 message.channel.send({ embeds: [coHostEmbed] })
    //                 const collector3 = message.channel.createMessageCollector(filter, { max: '1', maxMatches: "1" })
    //                 collector3.on("collect", c => {
    //                     const opmerkingEmbed = new discord.MessageEmbed()
    //                         .setColor("#f73115")
    //                         .setTitle("Opmerking")
    //                         .setDescription("Geef een opmerking voor je training.")
    //                     message.channel.send({ embeds: [opmerkingEmbed] })
    //                     const collector4 = message.channel.createMessageCollector(filter, { max: '1', maxMatches: '1' })
    //                     collector4.on("collect", o => {
    //                         const typeEmbed = new discord.MessageEmbed()
    //                             .setDescription("Wat voor type heeft je training?")
    //                             .setTitle("Type")
    //                             .setColor("#f73115")
    //                         message.channel.send({ embeds: [typeEmbed] })
    //                         const collector5 = message.channel.createMessageCollector(filter, { max: '1', maxMatches: '1' })
    //                         collector5.on("collect", p => {
    //                             var ambulanceMessage = new discord.MessageEmbed()

    //                                 .setDescription("**DSI TRAINING**")
    //                                 .setColor("#f73115")
    //                                 .addField("Type", p.content)
    //                                 .addField("Tijdstip:", t.content)
    //                                 .addField("Host:", `${message.author}`)
    //                                 .addField("Co-Host:", c.content)
    //                                 .addField("Opmerking:", o.content)
    //                                 .setThumbnail(`https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Insigne_du_Dienst_Speciale_Interventies_%28DSI%29.svg/1200px-Insigne_du_Dienst_Speciale_Interventies_%28DSI%29.svg.png`)
    //                                 .setFooter("Made by DJ Krul", `https://yt3.ggpht.com/a-/AOh14GjguB57_skEpmxJlF2JF3YRqaQN2KNnw6uw5wgFsw=s100-c-k-c0xffffffff-no-rj-mo`);

    //                             trainingChannel.send({ embeds: [ambulanceMessage] })
    //                         })
    //                     })
    //                 })
    //             })
    //         };
    //         if (collected.first().content.toLowerCase() == '4') {
    //             const tijdEmbed = new discord.MessageEmbed()
    //                 .setColor("#f73115")
    //                 .setTitle("Tijd")
    //                 .setDescription("Om hoe laat geef je je training?");
    //             message.channel.send({ embeds: [tijdEmbed] })
    //             const collector2 = message.channel.createMessageCollector(filter, { max: '1', maxMatches: "1" })
    //             collector2.on("collect", t => {
    //                 const coHostEmbed = new discord.MessageEmbed()
    //                     .setColor("#f73115")
    //                     .setTitle("Co-host")
    //                     .setDescription("Wie is je co-host?");
    //                 message.channel.send({ embeds: [coHostEmbed] })
    //                 const collector3 = message.channel.createMessageCollector(filter, { max: '1', maxMatches: "1" })
    //                 collector3.on("collect", c => {
    //                     const opmerkingEmbed = new discord.MessageEmbed()
    //                         .setColor("#f73115")
    //                         .setTitle("Opmerking")
    //                         .setDescription("Geef een opmerking voor je training.")
    //                     message.channel.send({ embeds: [opmerkingEmbed] })
    //                     const collector4 = message.channel.createMessageCollector(filter, { max: '1', maxMatches: '1' })
    //                     collector4.on("collect", o => {
    //                         const typeEmbed = new discord.MessageEmbed()
    //                             .setDescription("Wat voor type heeft je training?")
    //                             .setTitle("Type")
    //                             .setColor("#f73115")
    //                         message.channel.send({ embeds: [typeEmbed] })
    //                         const collector5 = message.channel.createMessageCollector(filter, { max: '1', maxMatches: '1' })
    //                         collector5.on("collect", p => {
    //                             var ambulanceMessage = new discord.MessageEmbed()

    //                                 .setDescription("**KMAR TRAINING**")
    //                                 .setColor("#f73115")
    //                                 .addField("Type", p.content)
    //                                 .addField("Tijdstip:", t.content)
    //                                 .addField("Host:", `${message.author}`)
    //                                 .addField("Co-Host:", c.content)
    //                                 .addField("Opmerking:", o.content)
    //                                 .setThumbnail(`https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Embleem_Koninklijke_Marechaussee.svg/1200px-Embleem_Koninklijke_Marechaussee.svg.png`)
    //                                 .setFooter("Made by DJ Krul", `https://yt3.ggpht.com/a-/AOh14GjguB57_skEpmxJlF2JF3YRqaQN2KNnw6uw5wgFsw=s100-c-k-c0xffffffff-no-rj-mo`);

    //                             trainingChannel.send({ embeds: [eenheidEmbed] });
    //                         })
    //                     })
    //                 })
    //             })
    //         };
    //         if (collected.first().content.toLowerCase() == '5') {
    //             const tijdEmbed = new discord.MessageEmbed()
    //                 .setColor("#f73115")
    //                 .setTitle("Tijd")
    //                 .setDescription("Om hoe laat geef je je training?");
    //             message.channel.send({ embeds: [tijdEmbed] })
    //             const collector2 = message.channel.createMessageCollector(filter, { max: '1', maxMatches: "1" })
    //             collector2.on("collect", t => {
    //                 const coHostEmbed = new discord.MessageEmbed()
    //                     .setColor("#f73115")
    //                     .setTitle("Co-host")
    //                     .setDescription("Wie is je co-host?");
    //                 message.channel.send({ embeds: [coHostEmbed] })
    //                 const collector3 = message.channel.createMessageCollector(filter, { max: '1', maxMatches: "1" })
    //                 collector3.on("collect", c => {
    //                     const opmerkingEmbed = new discord.MessageEmbed()
    //                         .setColor("#f73115")
    //                         .setTitle("Opmerking")
    //                         .setDescription("Geef een opmerking voor je training.")
    //                     message.channel.send({ embeds: [opmerkingEmbed] })
    //                     const collector4 = message.channel.createMessageCollector(filter, { max: '1', maxMatches: '1' })
    //                     collector4.on("collect", o => {
    //                         const typeEmbed = new discord.MessageEmbed()
    //                             .setDescription("Wat voor type heeft je training?")
    //                             .setTitle("Type")
    //                             .setColor("#f73115")
    //                         message.channel.send({ embeds: [typeEmbed] })
    //                         const collector5 = message.channel.createMessageCollector(filter, { max: '1', maxMatches: '1' })
    //                         collector5.on("collect", p => {
    //                             var ambulanceMessage = new discord.MessageEmbed()

    //                                 .setDescription("**POLITIE TRAINING**")
    //                                 .setColor("#f73115")
    //                                 .addField("Type", p.content)
    //                                 .addField("Tijdstip:", t.content)
    //                                 .addField("Host:", `${message.author}`)
    //                                 .addField("Co-Host:", c.content)
    //                                 .addField("Opmerking:", o.content)
    //                                 .setThumbnail(`https://seeklogo.com/images/P/Politie-logo-269952DA5A-seeklogo.com.png`)
    //                                 .setFooter("Made by DJ Krul", `https://yt3.ggpht.com/a-/AOh14GjguB57_skEpmxJlF2JF3YRqaQN2KNnw6uw5wgFsw=s100-c-k-c0xffffffff-no-rj-mo`);

    //                             trainingChannel.send({ embeds: [ambulanceMessage] })
    //                         })
    //                     })
    //                 })
    //             })
    //         };
    //         if (collected.first().content.toLowerCase() == '6') {
    //             const tijdEmbed = new discord.MessageEmbed()
    //                 .setColor("#f73115")
    //                 .setTitle("Tijd")
    //                 .setDescription("Hoe laat geef je je training?");
    //             message.channel.send({ embeds: [tijdEmbed] })
    //             const collector2 = message.channel.createMessageCollector(filter, { max: '1', maxMatches: "1" })
    //             collector2.on("collect", t => {
    //                 const coHostEmbed = new discord.MessageEmbed()
    //                     .setColor("#f73115")
    //                     .setTitle("Co-host")
    //                     .setDescription("Wie is je co-host?");
    //                 message.channel.send({ embeds: [coHostEmbed] })
    //                 const collector3 = message.channel.createMessageCollector(filter, { max: '1', maxMatches: "1" })
    //                 collector3.on("collect", c => {
    //                     const opmerkingEmbed = new discord.MessageEmbed()
    //                         .setColor("#f73115")
    //                         .setTitle("Opmerking")
    //                         .setDescription("Geef een opmerking voor je training.")
    //                     message.channel.send({ embeds: [opmerkingEmbed] })
    //                     const collector4 = message.channel.createMessageCollector(filter, { max: '1', maxMatches: '1' })
    //                     collector4.on("collect", o => {
    //                         const typeEmbed = new discord.MessageEmbed()
    //                             .setDescription("Wat voor type heeft je training?")
    //                             .setTitle("Type")
    //                             .setColor("#f73115")
    //                         message.channel.send({ embeds: [typeEmbed] })
    //                         const collector5 = message.channel.createMessageCollector(filter, { max: '1', maxMatches: '1' })
    //                         collector5.on("collect", p => {
    //                             var brandweerMessage = new discord.MessageEmbed()

    //                                 .setDescription("**DNR TRAINING**")
    //                                 .setColor("#f73115")
    //                                 .addField("Type", `${p.content}`)
    //                                 .addField("Tijdstip:", `${t.content}`)
    //                                 .addField("Host:", `${message.author}`)
    //                                 .addField("Co-Host:", `${c.content}`)
    //                                 .addField("Opmerking:", `${o.content}`)
    //                                 .setThumbnail(`https://www.hartvannederland.nl/wp-content/uploads/2011/10/19723_SBSP-AD_Logos.jpg`)
    //                                 .setFooter("Made by DJ Krul", `https://yt3.ggpht.com/a-/AOh14GjguB57_skEpmxJlF2JF3YRqaQN2KNnw6uw5wgFsw=s100-c-k-c0xffffffff-no-rj-mo`);
    //                             trainingChannel.send({ embeds: [brandweerMessage] })
    //                         });
    //                     })
    //                 })
    //             })
    //         };
    //         if (collected.first().content.toLowerCase() == '7') {
    //             const tijdEmbed = new discord.MessageEmbed()
    //                 .setColor("#f73115")
    //                 .setTitle("Tijd")
    //                 .setDescription("Hoe laat geef je je training?");
    //             message.channel.send({ embeds: [tijdEmbed] })
    //             const collector2 = message.channel.createMessageCollector(filter, { max: '1', maxMatches: "1" })
    //             collector2.on("collect", t => {
    //                 const coHostEmbed = new discord.MessageEmbed()
    //                     .setColor("#f73115")
    //                     .setTitle("Co-host")
    //                     .setDescription("Wie is je co-host?");
    //                 message.channel.send({ embeds: [coHostEmbed] })
    //                 const collector3 = message.channel.createMessageCollector(filter, { max: '1', maxMatches: "1" })
    //                 collector3.on("collect", c => {
    //                     const opmerkingEmbed = new discord.MessageEmbed()
    //                         .setColor("#f73115")
    //                         .setTitle("Opmerking")
    //                         .setDescription("Geef een opmerking voor je training.")
    //                     message.channel.send({ embeds: [opmerkingEmbed] })
    //                     const collector4 = message.channel.createMessageCollector(filter, { max: '1', maxMatches: '1' })
    //                     collector4.on("collect", o => {
    //                         const typeEmbed = new discord.MessageEmbed()
    //                             .setDescription("Wat voor type heeft je training?")
    //                             .setTitle("Type")
    //                             .setColor("#f73115")
    //                         message.channel.send({ embeds: [typeEmbed] })
    //                         const collector5 = message.channel.createMessageCollector(filter, { max: '1', maxMatches: '1' })
    //                         collector5.on("collect", p => {
    //                             var brandweerMessage = new discord.MessageEmbed()

    //                                 .setDescription("**RIJKSWATERSTAAT TRAINING**")
    //                                 .setColor("#f73115")
    //                                 .addField("Type", `${p.content}`)
    //                                 .addField("Tijdstip:", `${t.content}`)
    //                                 .addField("Host:", `${message.author}`)
    //                                 .addField("Co-Host:", `${c.content}`)
    //                                 .addField("Opmerking:", `${o.content}`)
    //                                 .setThumbnail(`https://futurecommunication.nl/wp-content/uploads/2020/02/rijkswaterstaat-logo.png`)
    //                                 .setFooter("Made by DJ Krul", `https://yt3.ggpht.com/a-/AOh14GjguB57_skEpmxJlF2JF3YRqaQN2KNnw6uw5wgFsw=s100-c-k-c0xffffffff-no-rj-mo`);
    //                             trainingChannel.send({ embeds: [brandweerMessage] })
    //                         });
    //                     })
    //                 })
    //             })
    //         };
    //         if (collected.first().content.toLowerCase() == '8') {
    //             const tijdEmbed = new discord.MessageEmbed()
    //                 .setColor("#f73115")
    //                 .setTitle("Tijd")
    //                 .setDescription("Om hoe laat geef je je training?");
    //             message.channel.send({ embeds: [tijdEmbed] })
    //             const collector2 = message.channel.createMessageCollector(filter, { max: '1', maxMatches: "1" })
    //             collector2.on("collect", t => {
    //                 const coHostEmbed = new discord.MessageEmbed()
    //                     .setColor("#f73115")
    //                     .setTitle("Co-host")
    //                     .setDescription("Wie is je co-host?");
    //                 message.channel.send({ embeds: [coHostEmbed] })
    //                 const collector3 = message.channel.createMessageCollector(filter, { max: '1', maxMatches: "1" })
    //                 collector3.on("collect", c => {
    //                     const opmerkingEmbed = new discord.MessageEmbed()
    //                         .setColor("#f73115")
    //                         .setTitle("Opmerking")
    //                         .setDescription("Geef een opmerking voor je training.")
    //                     message.channel.send({ embeds: [opmerkingEmbed] })
    //                     const collector4 = message.channel.createMessageCollector(filter, { max: '1', maxMatches: '1' })
    //                     collector4.on("collect", o => {
    //                         const typeEmbed = new discord.MessageEmbed()
    //                             .setDescription("Wat voor type heeft je training?")
    //                             .setTitle("Type")
    //                             .setColor("#f73115")
    //                         message.channel.send({ embeds: [typeEmbed] })
    //                         const collector5 = message.channel.createMessageCollector(filter, { max: '1', maxMatches: '1' })
    //                         collector5.on("collect", p => {
    //                             var ambulanceMessage = new discord.MessageEmbed()

    //                                 .setDescription("**BEVEILIGING TRAINING**")
    //                                 .setColor("#f73115")
    //                                 .addField("Type", p.content)
    //                                 .addField("Tijdstip:", t.content)
    //                                 .addField("Host:", `${message.author}`)
    //                                 .addField("Co-Host:", c.content)
    //                                 .addField("Opmerking:", o.content)
    //                                 .setThumbnail(`http://vitaaltilburg.nl/app/uploads/sites/5/2017/10/securitas.png`)
    //                                 .setFooter("Made by DJ Krul", `https://yt3.ggpht.com/a-/AOh14GjguB57_skEpmxJlF2JF3YRqaQN2KNnw6uw5wgFsw=s100-c-k-c0xffffffff-no-rj-mo`);

    //                             trainingChannel.send({ embeds: [ambulanceMessage] })
    //                         })
    //                     })
    //                 })
    //             })
    //         };
    //         if (collected.first().content.toLowerCase() == '9') {
    //             const tijdEmbed = new discord.MessageEmbed()
    //                 .setColor("#f73115")
    //                 .setTitle("Tijd")
    //                 .setDescription("Om hoe laat geef je je training?");
    //             message.channel.send({ embeds: [tijdEmbed] })
    //             const collector2 = message.channel.createMessageCollector(filter, { max: '1', maxMatches: "1" })
    //             collector2.on("collect", t => {
    //                 const coHostEmbed = new discord.MessageEmbed()
    //                     .setColor("#f73115")
    //                     .setTitle("Co-host")
    //                     .setDescription("Wie is je co-host?");
    //                 message.channel.send({ embeds: [coHostEmbed] })
    //                 const collector3 = message.channel.createMessageCollector(filter, { max: '1', maxMatches: "1" })
    //                 collector3.on("collect", c => {
    //                     const opmerkingEmbed = new discord.MessageEmbed()
    //                         .setColor("#f73115")
    //                         .setTitle("Opmerking")
    //                         .setDescription("Geef een opmerking voor je training.")
    //                     message.channel.send({ embeds: [opmerkingEmbed] })
    //                     const collector4 = message.channel.createMessageCollector(filter, { max: '1', maxMatches: '1' })
    //                     collector4.on("collect", o => {
    //                         const typeEmbed = new discord.MessageEmbed()
    //                             .setDescription("Wat voor type heeft je training?")
    //                             .setTitle("Type")
    //                             .setColor("#f73115")
    //                         message.channel.send({ embeds: [typeEmbed] })
    //                         const collector5 = message.channel.createMessageCollector(filter, { max: '1', maxMatches: '1' })
    //                         collector5.on("collect", p => {
    //                             var ambulanceMessage = new discord.MessageEmbed()

    //                                 .setDescription("**VERKEERSPOLITIE TRAINING**")
    //                                 .setColor("#f73115")
    //                                 .addField("Type", p.content)
    //                                 .addField("Tijdstip:", t.content)
    //                                 .addField("Host:", `${message.author}`)
    //                                 .addField("Co-Host:", c.content)
    //                                 .addField("Opmerking:", o.content)
    //                                 .setThumbnail(`https://media.discordapp.net/attachments/562200277248114719/776936138933534720/image0.jpg?width=472&height=499`)
    //                                 .setFooter("Made by DJ Krul", `https://yt3.ggpht.com/a-/AOh14GjguB57_skEpmxJlF2JF3YRqaQN2KNnw6uw5wgFsw=s100-c-k-c0xffffffff-no-rj-mo`);

    //                             trainingChannel.send({ embeds: [ambulanceMessage] })
    //                         })
    //                     })
    //                 })
    //             })
    //         };


    //     })
    // })
}
module.exports.help = {
    name: "20071",
    category: 'staff',
    description: 'Met dit commando kunnen leden van het staff team een training inplannen.',
    aliases: []
}