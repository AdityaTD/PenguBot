const { Event } = require("klasa");
const MusicClient = require("../lib/structures/LavalinkClient");

module.exports = class extends Event {

    async run() {
        // Setup lavalink
        this.client.lavalink = new MusicClient(this.client, this.client.config.nodes);
        if (this.client.config.main.status) this.client.whStatus.send(`✅ **ONLINE:** Shard \`${this.client.shard.id}\` is now online.`);
    }

};
