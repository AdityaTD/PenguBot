const MusicCommand = require("../../lib/structures/MusicCommand");

module.exports = class extends MusicCommand {

    constructor(...args) {
        super(...args, {
            requireDJ: true,
            requireMusic: true,
            cooldown: 10,
            aliases: ["loopsong", "repeat"],
            requiredPermissions: ["USE_EXTERNAL_EMOJIS"],
            description: language => language.get("COMMAND_LOOP_DESCRIPTION"),
            extendedHelp: "No extended help available.",

            usage: "[queue|song]"
        });
    }

    async run(msg, [queueOrSong = "song"]) {
        const { music } = msg.guild;
        if (!music.playing) return msg.sendMessage(`${this.client.emotes.cross} There's currently no music playing!`);
        if (msg.member.voice.channel.id !== msg.guild.me.voice.channel.id) return msg.sendMessage(`${this.client.emotes.cross} You're currently not in a voice channel or there was an error, try again.`);

        if (queueOrSong === "song") {
            music.looping = !music.looping;
        } else {
            if (music.queue.length * 2 > 1000) throw "The maximum queue size is 1000 songs.";
            music.queue = music.queue.concat(music.queue);
        }
        return msg.sendMessage(`⏯ | ***Song looping is now ${queueOrSong === "queue" ? "The whole queue will now repeat." : music.looping ? "Enabled" : "Disabled"}***`);
    }

};
