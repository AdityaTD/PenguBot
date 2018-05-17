const { Command, RichDisplay } = require("klasa");
const { MessageEmbed } = require("discord.js");

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            runIn: ["text"],
            cooldown: 10,
            permissionLevel: 0,
            requiredPermissions: ["USE_EXTERNAL_EMOJIS", "EMBED_LINKS", "MANAGE_MESSAGES"],
            description: (msg) => msg.language.get("COMMAND_QUEUE_DESCRIPTION"),
            extendedHelp: "No extended help available."
        });
        this.Music = true;
    }

    async run(msg) {
        const { music } = msg.guild;
        const { queue } = music;
        if (!music.playing) return msg.sendMessage("<:penguError:435712890884849664> ***There's currently no music playing!***");

        const pages = new RichDisplay(new MessageEmbed()
            .setTitle("Use the reactions to change pages, select a page, or stop viewing the queue")
            .setAuthor("Queue - PenguBot", "https://i.imgur.com/IS8hX4t.png")
            .setDescription("Scroll between pages to see the song queue.")
            .setColor("#428bca")
        );

        for (let i = 0, temp = queue.length; i < temp; i += 5) {
            const curr = queue.slice(i, i + 5);
            pages.addPage(t => t.setDescription(curr.map(y => `\`-\` [${y.trackTitle.replace(/\*/g, "\\*")}](${y.trackURL}) (${y.friendlyDuration})`)));
        }
        pages.run(await msg.sendMessage("<a:penguLoad:435712860744581120> Loading Queue..."), {
            time: 120000,
            filter: (reaction, user) => user === msg.author
        });
    }

};
