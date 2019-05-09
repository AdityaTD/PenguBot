const { Language, klasaUtil: util, version, Duration } = require("../index");

module.exports = class extends Language {

    constructor(...args) {
        super(...args);
        this.language = {
            DEFAULT: key => `${key} has not been localized for en-US yet.`,
            INHIBITOR_DISABLED: "<:penguError:435712890884849664> ***This command is currently disabled***",
            INHIBITOR_DISABLED_GROUP: "<:penguError:435712890884849664> ***This command group is currently disabled***",
            COMMAND_UNLOAD: (type, name) => `<:penguSuccess:435712876506775553> Unloaded ${type}: ${name}`,
            COMMAND_TRANSFER_ERROR: "<:penguError:435712890884849664> That file has been transfered already or never existed.",
            COMMAND_RELOAD: (type, name) => `<:penguSuccess:435712876506775553> Reloaded ${type}: ${name}`,
            COMMAND_RELOAD_ALL: type => `<:penguSuccess:435712876506775553> Reloaded all ${type}.`,
            COMMAND_LOAD: (time, type, name) => `<:penguSuccess:435712876506775553> Successfully loaded ${type}: ${name}. (Took: ${time})`,
            COMMAND_LOAD_ERROR: (type, name, error) => `<:penguError:435712890884849664> Failed to load ${type}: ${name}. Reason:${util.codeBlock("js", error)}`,
            COMMAND_INVITE: `**👉 | Invite PenguBot to your Discord Guild:** <https://www.PenguBot.com/invite>`,
            COMMAND_SUPPORT: `**__PenguBot Support Guild__**\n• **Invite Link:** https://discord.gg/u8WYw5r`,
            COMMAND_INVITE_DESCRIPTION: "Displays the join server link of the bot.",
            COMMAND_INFO: [
                "PenguBot is a Multi-Purpose Discord Bot which is filled with features ranging from",
                "Moderation, Fun, Utilities and more. It is developed in NodeJS using many different",
                "technologies such as RethinkDB, JavaScript and Linux.",
                "",
                "• **Author:** [AdityaTD#5346](https://www.AdityaTD.me)",
                `• **Version:** ${version}`,
                "• **Website:** <https://www.PenguBot.com>",
                "• **Patreon:** <https://www.Patreon.com/PenguBot>",
                "• **PayPal:** <https://www.paypal.me/adityatripathid>",
                "• **Discord Guild:** <https://discord.gg/6KpTfqR>",
                "• **GitHub:** <https://www.github.com/AdityaTD/PenguBot>",
                "• **Database:** RethinkDB"
            ],
            COMMAND_DONATE: [
                "PenguBot runs on multipe servers rented out across the globe and that requires the rent. If you'd like to support PenguBot and it's financial costs in return for perks mentioned below please visit the following:",
                "",
                "__Perks__:",
                "• Unlimited Access to Queue Lengths, Volume Adjustment and more!",
                "• No Vote Locking - No Need To Upvote for Locked Commands",
                "• Better Uptime with Patron Only Bot",
                "• Special Role in Official Pengu Squad Server",
                "",
                "• **Patreon:** https://www.patreon.com/PenguBot",
                "• **PayPal:** https://www.paypal.me/adityatripathid",
                "• **Crypto Donations:** https://1upcoin.com/donate/adityatd",
                "• **PenguBot's Donation Page:** https://www.PenguBot.com/donate"
            ],
            COMMAND_HELP_NODM: "📪 | You have DMs disabled, I couldn't send you the commands in DMs so here's a link to all the commands: <https://www.pengubot.com/commands>",
            COMMAND_UPVOTE: ["Want PenguBot to become bigger and be available in more guilds you visit?",
                "Then vote for PenguBot via the link below and also unlock access to",
                "limited features that only upvoters can have access to!",
                "",
                "• **Vote:** https://www.pengubot.com/upvote"],
            COMMAND_TOGGLE_GROUP_DESCRPTION: "Disable/Enable Command Categories.",
            COMMAND_TOGGLE_COMMAND_DESCRPTION: "Disable/Enable Commands in your guild.",
            COMMAND_SUPPORT_DESCRIPTION: "Link to join PenguBot's Support Guild.",

            // Pengu's Sentences
            MESSAGE_PREFIX_SET: "Successfully updated the guild's prefix to:",
            MESSAGE_CURRENT_PREFIX: "Guild's current prefix is:",
            MESSAGE_PENGU: "here you go!",

            // Kick Messages
            MESSAGE_KICKED: "was kicked!",
            MESSAGE_KICK_YOURSELF: "You can not kick yourself!",
            MESSAGE_KICK_PENGU: "Why would you want to kick me?",
            MESSAGE_KICK_CANT: "This user can't be kicked.",

            // Ban Messages
            MESSAGE_BANNED: "was banned!",
            MESSAGE_SOFTBANNED: "was soft banned!",
            MESSAGE_BAN_YOURSELF: "You can not ban yourself!",
            MESSAGE_BAN_PENGU: "Why would you want to ban me?",
            MESSAGE_BAN_CANT: "This user can't be banned!",

            // Make Admin and Mod Messages
            MESSAGE_ADMIN_ADD: "is now a Pengu Admin!",
            MESSAGE_ADMIN_REMOVE: "is no longer a Pengu Admin!",
            MESSAGE_MOD_ADD: "is now a Pengu Moderator!",
            MESSAGE_MOD_REMOVE: "is no longer a Pengu Moderator!",
            MESSAGE_DJ_ADD: "is now a Pengu DJ!",
            MESSAGE_DJ_REMOVE: "is no longer a Pengu DJ!",

            // Mute Command Messages
            MESSAGE_MUTED: "was muted!",
            MESSAGE_UNMUTED: "was un-muted!",

            // Other Mod Commands Messages
            MESSAGE_PRUNE_DELETED: "message(s) were deleted!",

            // Custom Commands Messages
            MESSAGE_CMD_ADDED: "command was added by",
            MESSAGE_CMD_UPDATED: "command was updated by",
            MESSAGE_CMD_REMOVED: "command was removed by",
            MESSAGE_CMD_NOTFOUND: "command was not found!",
            MESSAGE_CMD_EXISTS: "command with this name already exists in Pengu as a default or custom command!",
            MESSAGE_NO_CMDS: "Your guild has no custom commands, ask an admin or above to make one!",
            MESSAGE_COMMAND_CUSTOM_ENABLED: "Custom Commands are now Enabled!",
            MESSAGE_COMMAND_CUSTOM_DISABLED: "Custom Commands are now Disabled!",

            // Welcome & Leave messages
            MESSAGE_WLCM_ENABLED: "Welcome Messages are now Enabeld!",
            MESSAGE_WLCM_DISABLED: "Welcome Messages are now Disabled!",
            MESSAGE_LEAVE_ENABLED: "Leave Messages are now Enabeld!",
            MESSAGE_LEAVE_DISABLED: "Leave Messages are now Disabled!",
            MESSAGE_WELCOME_SET: "Welcome message has now been set!",
            MESSAGE_LEAVE_SET: "Leave message has now been set!",
            MESSAGE_WELCOME_CHANNEL_SET: "Welcome messages channel has now been set!",
            MESSAGE_LEAVE_CHANNEL_SET: "Leave messages channel has now been set!",

            // Logging
            MESSAGE_LOGCHAN_SET: "Logging channel has now been set!",
            COMMAND_LOG_DESCRPTION: "Enable/Disable Logging events if you're Pengu Admin or above.",

            // Autoroles, Level & Self Roles
            MESSAGE_AUTOROLES_ENABLED: "Auto Roles have been enabled in this guild!",
            MESSAGE_AUTOROLES_DISABLED: "Auto Roles have been disabled in this guild!",
            MESSAGE_AUTOROLE_REMOVED: "role was removed from the Auto Roles!",
            MESSAGE_AUTOROLE_ADDED: "role was added in the Auto Roles!",
            COMMAND_SELFROLES: "Assign or Deassign or list Self Roles from Yourself.",
            COMMAND_SELFROLES_MANAGE: "Add or Remove Self Roles from the server.",
            COMMAND_TOGGLE_SELFROLES: "Enable/Disable Self Roles on the server.",
            MESSAGE_LEVELROLES_ENABLED: "Level Based Roles have been enabled in this guild!",
            MESSAGE_LEVELROLES_DISABLED: "Level Based Roles have been disabled in this guild!",

            // Utilities Messages
            MESSAGE_NEW_REMINDER: "New Reminder has been created with ID:",
            MESSAGE_LINK_SHORTEN: "Here's your Short URL:",
            MESSAGE_AVATAR: "Here's the avatar of",
            MESSAGE_STARCHAN_SET: "Starboard channel has now been set.",

            // Pengu's Commands Descriptions
            COMMAND_KICK_DESCRIPTION: "Allows moderators and above to kick users.",
            COMMAND_BAN_DESCRIPTION: "Allows moderators and above to ban users.",
            COMMAND_SOFTBAN_DESCRIPTION: "Allows moderators and above to softban users.",
            COMMAND_MAKE_ADMIN_DESCRIPTION: "Allows guild managers, admins and pengu admins to add/remove new pengu admins.",
            COMMAND_MAKE_MOD_DESCRIPTION: "Allows guild managers, admins and pengu admins to add/remove new pengu mods.",
            COMMAND_MAKE_STAFF_DESCRPTION: "Allows guild managers, admins and pengu admins to add/remove new pengu staff.",
            COMMAND_MUTE_DESCRIPTION: "Allows Pengu Moderators and above to Mute people.",
            COMMAND_SAY_DESCRIPTION: "Allows Pengu Moderators and above to make Pengu say stuff.",
            COMMAND_ADD_CMD_DESCRIPTION: "Allows Pengu Administrators and above to add custom commands to the guild.",
            COMMAND_TOGGLE_CUSTOM_DESCRIPTION: "Allows Pengu Administrators and above to enable or disable custom commands in the guild.",
            COMMAND_TOGGLE_WELCOME_DESCRPTION: "Allows Pengu Administrators and above to enable or disable welcome messages in the guild.",
            COMMAND_TOGGLE_LEAVE_DESCRPTION: "Allows Pengu Administrators and above to enable or disable welcome messages in the guild.",
            COMMAND_SET_WELCOME_DESCRPTION: "Allows Pengu Administrators and above set welcome messages in the guild.",
            COMMAND_SET_LEAVE_DESCRPTION: "Allows Pengu Administrators and above set leave messages in the guild.",
            COMMAND_CHANNEL_WELCOME_DESCRPTION: "Allows Pengu Administrators and above set welcome messages channel in the guild.",
            COMMAND_CHANNEL_LEAVE_DESCRPTION: "Allows Pengu Administrators and above set leave messages channel in the guild.",
            COMMAND_TOGGLE_ROLES_DESCRPTION: "Allows Pengu Administrators and above to enable or disable Auto Roles.",
            COMMAND_TOGGLE_LVLROLES_DESCRPTION: "Allows Pengu Administrators and above to enable or disable Level Based Roles.",
            COMMAND_LIST_LVLROLES_DESCRPTION: "List all the roles in the Level Based Roles List.",
            COMMAND_LVLROLE_DESCRPTION: "ALLOWS Pengu Administrators and above to Add and Remove Level Based Roles for a guild.",
            COMMAND_ADD_ROLES_DESCRPTION: "Allows Pengu Administrators and above to add new Auto Roles.",
            COMMAND_REMIND_DESCRIPTION: "Make Pengu remind you things so you don't forget.",
            COMMAND_SHORTEN_DESCRIPTION: "Let Pengu shorten your Long URLs in one simple command.",
            COMMAND_AFK_DESCRIPTION: "Set yourself AFK with a reason so other's know!",
            COMMAND_DEL_CMD_DESCRIPTION: "Allows Pengu Administrators and above to delete a custom command made previously.",
            COMMAND_LIST_CMDS_DESCRIPTION: "List all custom commands made in a guild.",
            COMMAND_TOGGLE_CUSTOM_DESCRPTION: "Allows Pengu Administrators and above to enable or disable custom commands in a guild.",
            COMMAND_MUTE_DESCRPTION: "Allows Pengu Moderators and above to Mute a person in the guild",
            COMMAND_PRUNE_DESCRIPTION: "Allows Pengu Moderators and above to Bulk Delete messages in a guild with filters.",
            COMMAND_MAKE_ADMIN_DESCRPTION: "Allows Administrators and Guild Owners to create new Pengu Admins.",
            COMMAND_MAKE_MODS_DESCRPTION: "Allows Pengu Admins and above to create new Pengu Mods.",
            COMMAND_PREFIX_DESCRIPTION: "Allows Pengu Admins and above to change a guild's prefix for PenguBot.",
            COMMAND_SHARDS_DESCRIPTION: "Check all the detailed shards information of PenguBot.",
            COMMAND_LMGTFY_DESCRIPTION: "Feeling lazy to google something? Let me google it for you.",
            COMMAND_UPVOTE_DESCRIPTION: "Vote for PenguBot on DBL and gain access to limited features in a second.",

            // Automod
            MESSAGE_AUTOMOD_ENABLED: "Auto moderation has now been Enabled with THREAT and SPAM filters by default. Change filters by doing `p!automod toggle <filter>`",
            MESSAGE_AUTOMOD_DISABLED: "Auto moderation has now been Disabled.",
            MESSAGE_AUTOMOD_TOGGLED: "filter has now been toggled",
            COMMAND_AUTOMOD_DESCRPTION: "Manage Auto moderation Settings.",

            // Fun Commands Descriptions
            COMMAND_CAT_DESCRIPTION: "Cute Cat Photos and Facts with Pengu!",
            COMMAND_CHUCK_DESCRIPTION: "Chuck Norris Jokes just a command away!",
            COMMAND_COMPLIMENT_DESCRIPTION: "Be nice and compliment some people out there with Pengu!",
            COMMAND_COOKIE_DESCRIPTION: "Mouth watering Cookie pictures to make you even more hungry!",
            COMMAND_DADJOKE_DESCRIPTION: "Everyone loves jokes but what about some Dad Jokes?",
            COMMAND_DOG_DESCRIPTION: "Cute Doggo Pictures to make your day!",
            COMMAND_FML_DESCRIPTION: "Things which has made people say FML!",
            COMMAND_HUG_DESCRIPTION: "Someone needs a hug? Why wait, just give it!",
            COMMAND_PENGU_DESCRIPTION: "The Cute OG Pengu Pictures!",
            COMMAND_8BALL_DESCRIPTION: "Ask the magical 8ball your questions!",
            COMMAND_DICE_DESCRIPTION: "Roll a dice and get an outcome with Pengu!",
            COMMAND_INSULT_DESCRIPTION: "Don't be nice and insult a fellow guild member!",
            COMMAND_KISS_DESCRIPTION: "Get naughty and just kiss the person!",
            COMMAND_PUNCH_DESCRIPTION: "Someone's being naughty? Give them a strong punch!",
            COMMAND_COMIC_DESCRIPTION: "The OG Kids would still remember comics, it's for them!",
            COMMAND_FACT_DESCRIPTION: "Educate Yourself with Pengu!",
            COMMAND_RPS_DESCRIPTION: "Ever wanted to compete against Pengu in Rock, Paper, Scissors, the greatest eSport of all time? Now you can!",
            COMMAND_SLOTS_DESCRIPTION: "I don't promote gambling but you can if you want because I can!",
            COMMAND_TRUMP_DESCRIPTION: "Get Trumped by Trump Insults!",
            COMMAND_MOMMA_DESCRIPTION: "Still not tired of Yo Momma jokes? We got more, don't you worry!",
            COMMAND_FOX_DESCRIPTION: "Love foxes? Me too! Here's a picture of a fox.",
            COMMAND_ILLEGAL_DESCRIPTION: "Let's make things illegal by making trump sign the bills for it.",
            COMMAND_MCA_DESCRIPTION: "Generate yourself a Minecraft Achievement image because My Craft...",
            COMMAND_LIO_DESCRIPTION: "Add yours or other people's face on to the cute lio!",
            COMMAND_SLAP_DESCRIPTION: "Who's being naughty? Give them a tight slap!",
            COMMAND_PAT_DESCRIPTION: "Someone did a good job? Give them a pat.",
            COMMAND_CUDDLE_DESCRIPTION: "Cuddle in, it's time to relax, everything's gonna be fine.",
            COMMAND_TICKLE_DESCRIPTION: "Who's being tough on surface? Tickle them and make them laugh!",
            COMMAND_POKE_DESCRIPTION: "Ping someone by poking them!",
            COMMAND_FEED_DESCRIPTION: "Anyone hungry? Feed them some food.",
            COMMAND_BATSLAP_DESCRIPTION: "Be a Bat Man and slap someone!",
            COMMAND_BEAUTIFUL_DESCRIPTION: "Admire your or someone else's avatar.",
            COMMAND_FACEPALM_DESCRIPTION: "*sigh* facepalm where you have to.",
            COMMAND_RIP_DESCRIPTION: "Pay someone their final respect.",
            COMMAND_SUPERPUNCH_DESCRIPTION: "Become a superman and give someone an even stronger punch!",
            COMMAND_TATTOO_DESCRIPTION: "Ever wanted your avatar being tatted on someone else? Here you have it.",
            COMMAND_TRIGGERED_DESCRIPTION: "Because getting trigerred is a lot easier now...",
            COMMAND_WANTED_DESCRIPTION: "Print some Wanted posters of who is wanted by the sherrif department.",
            COMMAND_VAULT_DESCRIPTION: "Be the ICONIC Vault boy or make someone else be one.",
            COMMAND_GARBAGE_DESCRIPTION: "Garbage someone because they're trash.",
            COMMAND_APPROVED_DESCRIPTION: "Give someone a seal of approval",
            COMMAND_REJECT_DESCRIPTION: "Reject someone, their quality isn't upto the mark.",
            COMMAND_TINDER_DESCRIPTION: "You Have a Match, let's match you with someone!",
            COMMAND_MISSING_DESCRIPTION: "Has your dear one went missing? Get them a poster.",
            COMMAND_SNAPCHAT_DESCRIPTION: "Create a Snapchat Meme Image.",
            COMMAND_OSU_DESCRIPTION: "Get osu! Statistics in a cool way!",
            COMMAND_CMM_DESCRIPTION: "Create a nice Change My Mind meme!",

            // NSFW Commands
            COMMAND_ANAL_DESCRIPTION: "-NOT SAFE FOR WORK- Anal images.",
            COMMAND_BOOBS_DESCRIPTION: "-NOT SAFE FOR WORK- Boobs images.",
            COMMAND_BOOTY_DESCRIPTION: "-NOT SAFE FOR WORK- Booty images.",
            COMMAND_PUSSY_DESCRIPTION: "-NOT SAFE FOR WORK- Pussy images.",
            COMMAND_TEEN_DESCRIPTION: "-NOT SAFE FOR WORK- Teen images.",
            COMMAND_HENTAI_DESCRIPTION: "-NOT SAFE FOR WORK- Hentai images.",
            COMMAND_SNAP_DESCRIPTION: "-NOT SAFE FOR WORK- Snapchat Images.",
            COMMAND_AMETEUR_DESCRIPTION: "-NOT SAFE FOR WORK- Ameteur Images.",
            COMMAND_GIFS_DESCRIPTION: "-NOT SAFE FOR WORK- Animated Gifs.",
            COMMAND_GWNSFW_DESCRIPTION: "-NOT SAFE FOR WORK- Gone Wild Images.",
            COMMAND_LESB_DESCRIPTION: "-NOT SAFE FOR WORK- Lesbian Images.",
            COMMAND_MILF_DESCRIPTION: "-NOT SAFE FOR WORK- MILF images.",
            COMMAND_NEKOS_DESCRIPTION: "-NOT SAFE FOR WORK- Nekos Images.",
            COMMAND_ANIMETRAPS_DESCRIPTION: "-NOT SAFE FOR WORK- Anime Trap Images",
            COMMAND_ASIAN_DESCRIPTION: "-NOT SAFE FOR WORK- Asian NSFW Images",
            COMMAND_BDSM_DESCRIPTION: "-NOT SAFE FOR WORK- BDSM Images",
            COMMAND_BJNSFW_DESCRIPTION: "-NOT SAFE FOR WORK- Blowjob Images",
            COMMAND_COSPLAY_DESCRIPTION: "-NOT SAFE FOR WORK- Cosplay Images",
            COMMAND_FITGIRLS_DESCRIPTION: "-NOT SAFE FOR WORK- Fitgirl Images",
            COMMAND_FUTANARI_DESCRIPTION: "-NOT SAFE FOR WORK- Futanari Images",
            COMMAND_NSFW_DESCRIPTION: "-NOT SAFE FOR WORK- General NSFW Images",
            COMMAND_FEET_DESCRIPTION: "-NOT SAFE FOR WORK- Feet Fetish Images",
            COMMAND_GINGER_DESCRIPTION: "-NOT SAFE FOR WORK- Ginger Images",
            COMMAND_OUTFITS_DESCRIPTION: "-NOT SAFE FOR WORK- Outfits Images",
            COMMAND_PARTYHOUSE_DESCRIPTION: "-NOT SAFE FOR WORK- Partyhouse Images",
            COMMAND_R34_DESCRIPTION: "-NOT SAFE FOR WORK- Rule-34 Images",
            COMMAND_SOLO_DESCRIPTION: "-NOT SAFE FOR WORK- Solo People Images",
            COMMAND_THICC_DESCRIPTION: "-NOT SAFE FOR WORK- Thicc Images",
            COMMAND_NSFWTRAPS_DESCRIPTION: "-NOT SAFE FOR WORK- Traps Images",

            // Utilities Commands
            COMMAND_GUILDINFO_DESCRIPTION: "Get brief information about a guild with this command.",
            COMMAND_TWSTATS_DESCRIPTION: "Check Twitch Statistics live on the go.",
            COMMAND_URBAN_DESCRIPTION: "Find meanings of words on Urban Dictionary.",
            COMMAND_USERINFO_DESCRIPTION: "Get brief user information in a single command.",
            COMMAND_WEATHER_DESCRIPTION: "Get weather of your area easily and in a fun way.",
            COMMAND_YTSTATS_DESCRIPTION: "Check YouTube Statistics live on the go.",
            COMMAND_ADBLOCK_DESCRIPTION: "Enable/Disable Auto Deletion of Invite Links. Pengu Mods and above can bypass this.",
            COMMAND_TRANSLATE_DESCRIPTION: "Translate a sentence or message to any selected language.",
            COMMAND_POLL_DESCRIPTION: "Create a Strawpoll using PenguBot",
            COMMAND_LOGCHAN_DESCRPTION: "Select a Channel Where you want to Log Events.",
            COMMAND_AVATAR_DESCRIPTION: "Get Avatar URL of Yourself or Someone else.",
            COMMAND_QUOTE_DESCRIPTION: "Quote a message with it's Message ID.",

            // Profile Commands
            COMMAND_LEVELUP_DESCRIPTION: "Manage Level Up settings of Users in your guild.",
            COMMAND_REP_DESCRIPTION: "Give your valuable rep point to someone to make them feel special.",
            COMMAND_PROFILE_DESCRIPTION: "Check yours or other users fancy profiles!",
            COMMAND_DAILY_DESCRIPTION: "Claim your daily 100 Snowflakes which you can use to buy cosmetics.",
            COMMAND_TITLE_DESCRIPTION: "Set your title which will be visible in your profile.",
            COMMAND_SNOWFLAKES_DESCRIPTION: "Check your Snowflakes or send your Snowflakes to others.",
            COMMAND_BGBUY_DESCRIPTION: "Buy backgrounds for your Pengu Profile.",
            COMMAND_CHANGEBG_DESCRIPTION: "Change your Pengu Profile's Background.",
            COMMAND_LEADERBOARD_DESCRIPTION: "See who is winning the leaderboard for your guild.",
            COMMAND_BACKGROUND_DESCRIPTION: "Customize your PenguBot profile by buying and choosing different backgrounds.",
            COMMAND_RANK_DESCRIPTION: "Server Based Member Rank Cards (Different for Each Server)",
            COMMAND_MANAGEXP_DESCRIPTION: "Set/Reset/Add XP to a Guild Member (PenguAdmin or Above Required)",

            // Dev Commands
            COMMAND_EXEC_DESCRIPTION: "-BOT OWNER ONLY-",
            COMMAND_SG_DESCRIPTION: "-BOT OWNER ONLY-",
            COMMAND_TPG_DESCRIPTION: "-BOT OWNER ONLY-",
            COMMAND_DONATE_DESCRIPTION: "Donate to PenguBot and help make something awesome!",

            // Music Commands
            COMMAND_DMSONG_DESCRIPTION: "Make Pengu send you the current song in your DMs.",
            COMMAND_LOOP_DESCRIPTION: "Loop a song so it repeats when it finishes playing.",
            COMMAND_LYRICS_DESCRIPTION: "Get a song's lyrics directly with Pengu.",
            COMMAND_MUSIC_DESCRIPTION: "Detailed information for all Music Commands.",
            COMMAND_NOWPLAYING_DESCRIPTION: "Know which song is currently playing and what is it's progress.",
            COMMAND_PLAY_DESCRIPTION: "Play Songs from YouTube/Twitch/SoundCloud/Mixer/Live Streams, etc. with Pengu.",
            COMMAND_SHUFFLE_DESCRIPTION: "Shuffle songs in the queue to be randomized.",
            COMMAND_QUEUE_DESCRIPTION: "See the current song queue in an interactive manner",
            COMMAND_SKIP_DESCRIPTION: "Skip the current song or call a vote skip if there are more than 3 members in the VC.",
            COMMAND_STOP_DESCRIPTION: "Stop and Clear the queue if you're Pengu-DJ or are the only one listening.",
            COMMAND_MAKE_DJ_DESCRPTION: "Allows guild managers, admins and pengu admins to add/remove new pengu dj.",
            COMMAND_LEAVE_DESCRIPTION: "Make Pengu forcefully leave your Voice Channel.",
            COMMAND_PAUSE_DESCRIPTION: "Pause/Resume the currently playing music.",
            COMMAND_VOLUME_DESCRIPTION: "Change the default volume of Pengu in your guild",
            COMMAND_DJONLY_DESCRIPTION: "Toggle Pengu DJ only mode for Music Commands.",
            INHIBITOR_DJ_ONLY: "This guild is configured to allow only Pengu DJ's to use Music Commands.",
            COMMAND_DUMP_DESCRIPTION: "Dump your server queue in raw format to be used later!",

            // Game Stats
            COMMAND_FORTNITE_DESCRIPTION: "Get Fortnite Game Statistics within Discord.",
            COMMAND_CRSTATS_DESCRIPTION: "Clash Royale Player Statistics within Discord.",
            COMMAND_COCSTATS_DESCRIPTION: "Clash of Clans Player Statistics within Discord.",
            COMMAND_CSGO_DESCRIPTION: "Counter Strike Global Offensive Player Statistics",

            // Starboard
            COMMAND_TOGGLE_STARBOARD_DESCRPTION: "Allows Pengu Administrators and above to toggle Starboard in the guild.",
            COMMAND_CHANNEL_STAR_DESCRPTION: "Allows Pengu Administrators and above to set a Starboard channel.",
            COMMAND_REQUIRED_STAR_DESCRPTION: "Allows Pengu Administrators and above to set minimum stars before Starboard message.",
            COMMAND_STAR_DESCRPTION: "Allows Pengu Moderators and above to force Starboard a message.",
            MESSAGE_STAR_ENABLED: "Starboard has now been enabled.",
            MESSAGE_STAR_DISABLED: "Starboard has now been disabled.",
            MESSAGE_STARS_REQUIRED_SET: "Set the minimum Stars required before a message is sent to Starboard.",
            MESSAGE_STAR_CHANNEL_SET: "Successfully set the Starboard channel.",

            // Custom Messages
            ER_TRY_AGAIN: "I am very sorry but was an error, please try again or contact us at https://discord.gg/kWMcUNe",
            ER_MUSIC_TRIP: "I tripped on a wire! *Ouch!* It hurts but I'll recover, try again later or contact us at https://discord.gg/kWMcUNe",
            ER_MUSIC_NF: "<:penguError:435712890884849664> I could not find any results for your query, please try again with a different one or contact us at https://discord.gg/kWMcUNe",
            ER_CATS_DOGS: "There was an error, I think a cat has cut the wire off, dogs don't do that.",
            ER_API: "Unfortunately due to the provider of this command's API getting down, this command is temporarily disabled.",
            ER_TINDER: "Can't match you with yourself...",
            CMD_LOG_DISABLED: "logging is now Disabled.",
            CMD_LOG_ENABLED: "logging is now Enabled.",
            CMD_NO_SELFROLES: "This guild does not have any self assignable roles.",
            CMD_SELF_ASSIGNABLE: "role is now self assignable.",
            CMD_NO_ASSIGNABLE: "role is no longer self assignable.",
            ER_NO_DM: "Can't send Direct Message to you because your DMs are not open.",
            CMD_FUN_COOKIE: "you've been given a cookie by",
            CMD_FUN_CUDDLE: "you just got cuddled by",
            CMD_FUN_FED: "you just got fed by",
            CMD_FUN_HUG: "you just got hugged by",
            CMD_FUN_KISS: "you just got kissed by",
            CMD_FUN_PAT: "you just got patted by",
            CMD_FUN_POKE: "you just got poked by",
            CMD_FUN_PUNCH: "you just got punched by",
            CMD_FUN_SLAP: "you just got slapped by",
            CMD_FUN_TICKLE: "you just got tickled by",
            CMD_FUN_PENGU: "here's the cute Pengu picture you requested",
            CMD_COC_TAG: "Invalid Tag, please retry with a valid one which you can find under In-game.",
            CMD_COC_DATA: "Couldn't find your data, try again later.",
            CMD_FORT_PLAT: "Invalid Username or Platform, please retry with either of these platforms: `pc`. `xbox`, `psn`.",
            CMD_FORT_ERR: "There was an error in the Tracking API, please try again later.",
            CMD_OSU_ERR: "Either the user couldn't be found or we're having some issues.",
            CMD_UPVOTE_ONLY: "You are not an up-voter of PenguBot, please visit <http://bit.ly/VoteDBL> to vote now and get access!",
            CMD_PATRON_ONLY: "This command is locked for Patrons Only. If you want to become a Patron please visit <https://patreon.com/PenguBot> and gain access to the Premium Bot.",
            CMD_RPS_INVALID: "That's an invalid move, please choose",
            CMD_SLOTS_INVALID: "The specified amount of Snowflakes is invalid, please enter at least 1 or more Snowflakes.",
            CMD_LOG_INVALID: "Invalid Option, please choose from",
            CMD_CSGO_NF: "That Username was not found on Steam, please try again with a different one.",
            CMD_CSGO_ER: "There was an error, either your profile is PRIVATE or you haven't bought CSGO or the API bailed on us. Try again later.",

            // Missing Default
            DEFAULT_LANGUAGE: "Default Language",
            SETTING_GATEWAY_EXPECTS_GUILD: "The parameter <Guild> expects either a Guild or a Guild Object.",
            SETTING_GATEWAY_VALUE_FOR_KEY_NOEXT: (data, key) => `The value ${data} for the key ${key} does not exist.`,
            SETTING_GATEWAY_VALUE_FOR_KEY_ALREXT: (data, key) => `The value ${data} for the key ${key} already exists.`,
            SETTING_GATEWAY_SPECIFY_VALUE: "You must specify the value to add or filter.",
            SETTING_GATEWAY_KEY_NOT_ARRAY: key => `The key ${key} is not an Array.`,
            SETTING_GATEWAY_KEY_NOEXT: key => `The key ${key} does not exist in the current data schema.`,
            SETTING_GATEWAY_INVALID_TYPE: "The type parameter must be either add or remove.",
            RESOLVER_INVALID_PIECE: (name, piece) => `${name} must be a valid ${piece} name.`,
            RESOLVER_INVALID_MSG: name => `${name} must be a valid message id.`,
            RESOLVER_INVALID_USER: name => `${name} must be a mention or valid user id.`,
            RESOLVER_INVALID_MEMBER: name => `${name} must be a mention or valid user id.`,
            RESOLVER_INVALID_CHANNEL: name => `${name} must be a channel tag or valid channel id.`,
            RESOLVER_INVALID_GUILD: name => `${name} must be a valid guild id.`,
            RESOLVER_INVALID_ROLE: name => `${name} must be a role mention or role id.`,
            RESOLVER_INVALID_LITERAL: name => `Your option did not match the only possibility: ${name}`,
            RESOLVER_INVALID_BOOL: name => `${name} must be true or false.`,
            RESOLVER_INVALID_INT: name => `${name} must be an integer.`,
            RESOLVER_INVALID_FLOAT: name => `${name} must be a valid number.`,
            RESOLVER_INVALID_REGEX_MATCH: (name, pattern) => `${name} must follow this regex pattern \`${pattern}\`.`,
            RESOLVER_INVALID_URL: name => `${name} must be a valid url.`,
            RESOLVER_STRING_SUFFIX: " characters",
            RESOLVER_MINMAX_EXACTLY: (name, min, suffix) => `${name} must be exactly ${min}${suffix}.`,
            RESOLVER_MINMAX_BOTH: (name, min, max, suffix) => `${name} must be between ${min} and ${max}${suffix}.`,
            RESOLVER_MINMAX_MIN: (name, min, suffix) => `${name} must be greater than ${min}${suffix}.`,
            RESOLVER_MINMAX_MAX: (name, max, suffix) => `${name} must be less than ${max}${suffix}.`,
            COMMANDMESSAGE_MISSING: "Missing one or more required arguments after end of input.",
            COMMANDMESSAGE_MISSING_REQUIRED: name => `${name} is a required argument.`,
            COMMANDMESSAGE_MISSING_OPTIONALS: possibles => `Missing a required option: (${possibles})`,
            COMMANDMESSAGE_NOMATCH: possibles => `Your option didn't match any of the possibilities: (${possibles})`,
            MONITOR_COMMAND_HANDLER_REPROMPT: (tag, error, time) => `${tag} | **${error}** | You have **${time}** seconds to respond to this prompt with a valid argument. Type **"ABORT"** to abort this prompt.`, // eslint-disable-line max-len
            MONITOR_COMMAND_HANDLER_ABORTED: "Aborted",
            INHIBITOR_COOLDOWN: remaining => `You have just used this command. You can use this command again in ${remaining} seconds.`,
            INHIBITOR_MISSING_BOT_PERMS: missing => `Insufficient permissions, missing: **${missing}**`,
            INHIBITOR_PERMISSIONS: "You do not have permission to use this command",
            INHIBITOR_REQUIRED_SETTINGS: settings => `The guild is missing the **${settings.join(", ")}** guild setting${settings.length > 1 ? "s" : ""} and thus the command cannot run.`,
            INHIBITOR_RUNIN: types => `This command is only available in ${types} channels`,
            INHIBITOR_RUNIN_NONE: name => `The ${name} command is not configured to run in any channel.`,
            COMMAD_UNLOAD: (type, name) => `✅ Unloaded ${type}: ${name}`,
            COMMAND_TRANSFER_SUCCESS: (type, name) => `✅ Successfully transferred ${type}: ${name}`,
            COMMAND_TRANSFER_FAILED: (type, name) => `Transfer of ${type}: ${name} to Client has failed. Please check your Console.`,
            COMMAND_REBOOT: "Rebooting...",
            COMMAND_PING: "Ping?",
            COMMAND_PINGPONG: (diff, ping) => `Pong! (Roundtrip took: ${diff}ms. Heartbeat: ${ping}ms.)`,
            COMMAND_INVITE_SELFBOT: "Why would you need an invite link for a selfbot...",
            COMMAND_HELP_DM: "📥 | The list of commands you have access to has been sent to your DMs.",
            COMMAND_ENABLE: (type, name) => `+ Successfully enabled ${type}: ${name}`,
            COMMAND_DISABLE: (type, name) => `+ Successfully disabled ${type}: ${name}`,
            COMMAND_DISABLE_WARN: "You probably don't want to disable that, since you wouldn't be able to run any command to enable it again",
            COMMAND_CONF_NOKEY: "You must provide a key",
            COMMAND_CONF_NOVALUE: "You must provide a value",
            COMMAND_CONF_ADDED: (value, key) => `Successfully added the value \`${value}\` to the key: **${key}**`,
            COMMAND_CONF_UPDATED: (key, response) => `Successfully updated the key **${key}**: \`${response}\``,
            COMMAND_CONF_KEY_NOT_ARRAY: "This key is not array type. Use the action 'reset' instead.",
            COMMAND_CONF_REMOVE: (value, key) => `Successfully removed the value \`${value}\` from the key: **${key}**`,
            COMMAND_CONF_GET_NOEXT: key => `The key **${key}** does not seem to exist.`,
            COMMAND_CONF_GET: (key, value) => `The value for the key **${key}** is: \`${value}\``,
            COMMAND_CONF_RESET: (key, response) => `The key **${key}** has been reset to: \`${response}\``,

            // Music interface
            MUSICIF_NO_MUSIC_PLAYING: "There's currently no music playing!",
            MUSICIF_NOW_PLAYING_TITLE: "Now Playing - PenguBot",
            MUSICIF_TITLE: "Title",
            MUSICIF_AUTHOR: "Author",
            MUSICIF_SONG_LENGHT: "Duration",
            MUSICIF_SONG_REQUESTED_BY: "Requested by",
            MUSICIF_SONG_LINK: "Link",
            MUSICIF_QUEUE_HINT: "Scroll between pages to see the song queue.",
            MUSICIF_QUEUE_TITLE: "Use the reactions to change pages, select a page, or stop viewing the queue",
            MUSICIF_QUEUE_LOADING: "Loading Queue...",
            MUSICIF_NO_VOICE_CHANNEL: "You're currently not in a voice channel or there was an error, try again.",
            MUSICIF_QUEUE_LIMIT_REACHED: "Sorry but the maximum queue size is 1000 songs. If you want to bypass this limit, consider becoming a Patron at <https://patreon.com/PenguBot>",
            MUSICIF_TOGGLE_SONG_LOOP: "Toggled single song repeat.",
            MUSICIF_TOGGLE_QUEUE_LOOP: "Now all queue will repeat.",
            MUSICIF_SONG_NOT_FOUND: "Song not found, please try with a different one",

            // 30th December 2018
            HELP_SET_LANGUAGE: ["Please select a Language you Want **PenguBot** to Speak in.",
                "",
                ":flag_gb: English (en-US)",
                ":flag_it: Italian (it-IT)",
                ":flag_it: Sardinian (sar-IT)",
                ":flag_fr: French (fr-FR)",
                ":flag_es: Espanol (es-ES)",
                "",
                "Type `p!setlanguage <Name>` to change your language."],
            CONF_LANG_SET: "is now set as the default PenguBot language in this guild.",

            // January 2019
            ER_MUSIC_PATRON: "This paste feature has been locked for Premium Guilds only, if you want to gain access become a Patron at <https://www.patreon.com/PenguBot> or Donate at <https://www.paypal.me/adityatripathid> with your Discord Username as a Message.",
            ERR_TRY_AGAIN: "There was an oopsie, please try again!",
            ER_CHOICES_SENSE: "You want me to choose from a single option? That makes sense...",
            CHOICE_SELECT: "My gut feeling says, go with",
            COMMAND_CHOOSE_DESCRIPTION: "Need help in selecting an option? PenguBot to the rescue!",
            COMMAND_CASE_DESCRIPTION: "Get information about a specific moderation case with it's ID.",
            COMMAND_WARN_DESCRIPTION: "Warn a user for an infraction and log it.",
            COMMAND_HISTORY_DESCRIPTION: "Get a user's infraction history from mod logs.",
            COMMAND_REASON_DESCRIPTION: "Allow a moderator to set a case's history in mod logs.",
            COMMAND_MODLOG_DESCRIPTION: "Change the Mod Logs setting in the server.",

            // Commands (Start of cleaning up Language files)
            COMMAND_AFK_REMOVED: username => `Dear ${username}, I've successfully removed you from AFK.`,
            COMMAND_AFK_SET: (username, reason) => `Dear ${username}, I've set you afk for \`${reason}\``,

            // Monitors
            MONITOR_AFK_REMOVED: username => `Welcome back **${username}**, I have removed you from AFK.`,
            MONITOR_AFK_ISAFK: (username, reason, time) => `**${username}** is currently AFK for \`${reason}\` - ${Duration.toNow(time)} ago`
        };
    }

    async init() {
        await super.init();
    }

};
