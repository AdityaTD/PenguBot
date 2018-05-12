const { Event } = require("klasa");

module.exports = class extends Event {

    constructor(...args) {
        super(...args, {
            enabled: true,
            once: false
        });
    }

    async run(role) {
        const log = this.client.log("roles", role.guild, `☑ **${role} role** was \`created\` in the guild.`);
        const loggingChannel = role.guild.channels.get(role.guild.configs.loggingChannel);
        if (log) loggingChannel.sendEmbed(log);
    }

    async init() {
        if (!this.client.gateways.guilds.schema.logs.has("roles")) {
            this.client.gateways.guilds.schema.logs.add("roles", { type: "boolean", default: false });
        }
    }

};
