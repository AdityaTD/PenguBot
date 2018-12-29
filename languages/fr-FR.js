const { Language, util } = require("klasa");

module.exports = class extends Language {

    constructor(...args) {
        super(...args);
        this.language = {
            DEFAULT: key => `${key} n'a pas encore été localisé pour fr-FR.`,
            INHIBITOR_DISABLED: "<:penguError:435712890884849664> ***Cette commande est actuellement désactivée***",
            INHIBITOR_DISABLED_GROUP: "<:penguError:435712890884849664> ***Ce groupe de commandes est actuellement désactivé***",
            COMMAND_UNLOAD: (type, name) => `<:penguSuccess:435712876506775553> Déchargé ${type}: ${name}`,
            COMMAND_TRANSFER_ERROR: "<:penguError:435712890884849664> Ce fichier a déjà été transféré ou n'a jamais existé.",
            COMMAND_RELOAD: (type, name) => `<:penguSuccess:435712876506775553> Rechargé ${type}: ${name}`,
            COMMAND_RELOAD_ALL: type => `<:penguSuccess:435712876506775553> Rechargé tous ${type}.`,
            COMMAND_LOAD: (time, type, name) => `<:penguSuccess:435712876506775553> Chargé avec succès ${type}: ${name}. (J'ai employé: ${time})`,
            COMMAND_LOAD_ERROR: (type, name, error) => `<:penguError:435712890884849664> Échec du chargement ${type}: ${name}. Raison:${util.codeBlock("js", error)}`,
            COMMAND_INVITE: `**👉 | Inviter PenguBot dans votre Discord guilde:** <https://www.PenguBot.com/invite>`,
            COMMAND_SUPPORT: `**__PenguBot Support Guild__**\n• **Invite Link:** https://discord.gg/u8WYw5r`,
            COMMAND_INVITE_DESCRIPTION: "Voir le lien d'invitation pour le bot.",
            COMMAND_INFO: [
                "PenguBot est un bot Discord multi-usages rempli de fonctionnalités quels Modération, amusement, utilitaires et plus. Il est développé dans NodeJS en utilisant de nombreuses technologies différentes telles que RethinkDB, JavaScript and Linux.",
                "",
                "• **Auteur:** [AdityaTD#5346](https://www.AdityaTD.me)",
                `• **Version:** ${require("../package").version}`,
                "• **Site Internet:** <https://www.PenguBot.com>",
                "• **Patreon:** <https://www.Patreon.com/PenguBot>",
                "• **Discord Guilde:** <https://discord.gg/6KpTfqR>",
                "• **GitHub:** <https://www.github.com/AdityaTD/PenguBot>",
                "• **Database:** RethinkDB"
            ],
            COMMAND_DONATE: [
                "PenguBot fonctionne sur plusieurs serveurs loués dans le monde entier, ce qui nécessite un loyer. Si vous souhaitez soutenir PenguBot et que ses coûts financiers sont en contrepartie des avantages mentionnés ci-dessous, veuillez visiter la page suivante:",
                "",
                "__Perks__:",
                "• Accès illimité a la durée de la play, réglage du volume et plus encore!",
                "• Pas de verrouillage des votes - Pas besoin de vote pour quelques commandes",
                "• Meilleure disponibilité avec un Bot pour le Patron",
                "• Rôle spécial dans le serveur officiel de Pengu Squad",
                "",
                "• **Patreon:** https://www.patreon.com/PenguBot",
                "• **Crypto Donations:** https://1upcoin.com/donate/adityatd",
                "• **PenguBot's Donation Page:** https://www.PenguBot.com/donate"
            ],
            COMMAND_HELP_NODM: "📪 | Vous avez les DM désactivés, je ne pouvais pas vous envoyer les commandes dans les DM alors voici un lien vers toutes les commandes: <https://www.pengubot.com/commands>",
            COMMAND_UPVOTE: ["Voulez-vous que PenguBot devienne plus grand et soit disponible dans plus de guildes que vous visitez?",
                "Ensuite, votez pour PenguBot via le lien ci-dessous et débloquez également l'accès à",
                "fonctionnalités limitées que seuls les votants peuvent avoir accès!",
                "",
                "• **Vote:** https://www.pengubot.com/upvote"],
            COMMAND_TOGGLE_GROUP_DESCRPTION: "Désactiver/Activer les Catégories de Commandes.",
            COMMAND_TOGGLE_COMMAND_DESCRPTION: "Désactiver/Activer les Commandes dans ta guilde.",
            COMMAND_SUPPORT_DESCRIPTION: "Link to join PenguBot's Support Guild.",

            // Pengu's Sentences **
            MESSAGE_PREFIX_SET: "Mise à jour du préfixe de la guilde avec:",
            MESSAGE_CURRENT_PREFIX: "Le préfixe actuel de la guilde est:",
            MESSAGE_PENGU: "Voici.. !",

            // Kick Messages **
            MESSAGE_KICKED: "a été mis dehors!!",
            MESSAGE_KICK_YOURSELF: "Tu ne peux pas mettre toi meme dehors!",
            MESSAGE_KICK_PENGU: "Pourquoi voudriez-vous me mettre dehors??",
            MESSAGE_KICK_CANT: "Cet utilisateur ne peut pas être expulsé.",

            // Ban Messages **
            MESSAGE_BANNED: "a été banni! (ban)",
            MESSAGE_SOFTBANNED: "a été banni! (softban)",
            MESSAGE_BAN_YOURSELF: "Vous ne pouvez pas vous interdire!",
            MESSAGE_BAN_PENGU: "Pourquoi voudriez-vous m'interdire?",
            MESSAGE_BAN_CANT: "Cet utilisateur ne peut pas être banni!",

            // Make Admin and Mod Messages **
            MESSAGE_ADMIN_ADD: "est maintenant un Administrateur Pengu!",
            MESSAGE_ADMIN_REMOVE: "n'est plus un Administrateur Pengu!",
            MESSAGE_MOD_ADD: "est maintenant un Modérateur Pengu!",
            MESSAGE_MOD_REMOVE: "n'est plus un Modérateur Pengu!",
            MESSAGE_DJ_ADD: "est maintenant un Pengu DJ!",
            MESSAGE_DJ_REMOVE: "n'est plus un a Pengu DJ!",

            // Mute Command Messages **
            MESSAGE_MUTED: "était en sourdine!",
            MESSAGE_UNMUTED: "était sans sourdine!",

            // Other Mod Commands Messages
            MESSAGE_PRUNE_DELETED: "messages ont été supprimés!",

            // Custom Commands Messages **
            MESSAGE_CMD_ADDED: "- commande a été ajoutée par",
            MESSAGE_CMD_UPDATED: "- commande a été mise à jour par",
            MESSAGE_CMD_REMOVED: "- commande a été supprimée par",
            MESSAGE_CMD_NOTFOUND: "- commande n'a pas été trouvée!",
            MESSAGE_CMD_EXISTS: "- commande avec ce nom existe déjà dans Pengu en tant que commande par défaut ou personnalisée!",
            MESSAGE_NO_CMDS: "Votre guilde n'a pas de commandes personnalisées, demandez à un administrateur ou supérieur de vous en créer une!",
            MESSAGE_COMMAND_CUSTOM_ENABLED: "Les Commandes Personnalisées sont maintenant activées!",
            MESSAGE_COMMAND_CUSTOM_DISABLED: "Les Commandes Personnalisées sont maintenant désactivées!",

            // Welcome & Leave messages **
            MESSAGE_WLCM_ENABLED: "Les Messages de Bienvenue sont maintenant activées!!",
            MESSAGE_WLCM_DISABLED: "Les Messages de Bienvenue sont maintenant désactivées!",
            MESSAGE_LEAVE_ENABLED: "Leave Messages de Adieu sont maintenant activées!!",
            MESSAGE_LEAVE_DISABLED: "Leave Messages de Adieu sont maintenant désactivéesd!",
            MESSAGE_WELCOME_SET: "Le Message de Bienvenue est maintenant défini!",
            MESSAGE_LEAVE_SET: "Le Message de Adieu est maintenant défini!",
            MESSAGE_WELCOME_CHANNEL_SET: "Le canal des messages de bienvenue est maintenant défini!",
            MESSAGE_LEAVE_CHANNEL_SET: "Le canal des messages de adieu est maintenant défini!",

            // Logging **
            MESSAGE_LOGCHAN_SET: "Le canal de journalisation est maintenant défini!",
            COMMAND_LOG_DESCRPTION: "Activer/Désactiver les événements de journalisation. Si vous êtes Administrateur de Pengu ou supérieur.",

            // Autoroles, Level & Self Roles **
            MESSAGE_AUTOROLES_ENABLED: "Les rôles automatiques ont été activés dans cette guilde!",
            MESSAGE_AUTOROLES_DISABLED: "Les rôles automatiques ont été desactivés dans cette guilde!",
            MESSAGE_AUTOROLE_REMOVED: "rôle a été retiré des Rôles-Automatiques!",
            MESSAGE_AUTOROLE_ADDED: "rôle a été ajouté dans les Rôles-Automatiques!",
            COMMAND_SELFROLES: "Assigner/Désaffecter/Afficher soi-même les Rôles.",
            COMMAND_SELFROLES_MANAGE: "Attribuer ou désaffecter des Rôles-Automatiques du serveur.",
            COMMAND_TOGGLE_SELFROLES: "Activer/Désactiver les Rôles-Automatiques du serveur.",
            MESSAGE_LEVELROLES_ENABLED: "Les Rôles basés sur les Niveaux ont été activés dans cette guilde!",
            MESSAGE_LEVELROLES_DISABLED: "Les Rôles basés sur les Niveaux ont été desactivés dans cette guilde!",

            // Utilities Messages
            MESSAGE_NEW_REMINDER: "New Reminder has been created with ID:",
            MESSAGE_LINK_SHORTEN: "Here's your Short URL:",
            MESSAGE_AVATAR: "Here's the avatar of",
            MESSAGE_AFK_TRUE: "Set your status to Away From Keyboard!",
            MESSAGE_AFK_FALSE: "Set your status to no longer Aaway From Keyboard!",
            MESSAGE_IS_AFK: "is currently AFK for:",
            MESSAGE_AFK_REMOVED: "was removed from the AFK status!",
            MESSAGE_STARCHAN_SET: "Starboard channel has now been set.",

            // Pengu's Commands Descriptions
            COMMAND_KICK_DESCRIPTION: "Permet aux Modérateurs de mettre qlq au dehors.",
            COMMAND_BAN_DESCRIPTION: "Permet aux Modérateursto ban users.",
            COMMAND_SOFTBAN_DESCRIPTION: "Permet aux Modérateurs to softban users.",
            COMMAND_MAKE_ADMIN_DESCRIPTION: "Allows guild managers, admins and pengu admins to add new pengu admins.",
            COMMAND_MAKE_MOD_DESCRIPTION: "Allows guild managers, admins and pengu admins to add new pengu mods.",
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
            COMMAND_DONATE_DESCRIPTION: "Faites un don à PenguBot et aidez à faire quelque chose de génial!!",

            // Music Commands
            COMMAND_DMSONG_DESCRIPTION: "Faites en sorte que Pengu vous envoie la chanson en cours dans votre DMs.",
            COMMAND_LOOP_DESCRIPTION: "Répéter une chanson. Il répète la chanson quand il a fini de jouer.",
            COMMAND_LYRICS_DESCRIPTION: "Get a song's lyrics directly with Pengu.",
            COMMAND_MUSIC_DESCRIPTION: "Detailed information for all Music Commands.",
            COMMAND_NOWPLAYING_DESCRIPTION: "Know which song is currently playing and what is it's progress.",
            COMMAND_PLAY_DESCRIPTION: "Play Songs from YouTube/Twitch/SoundCloud/Mixer/Live Streams, etc. with Pengu.",
            COMMAND_SHUFFLE_DESCRIPTION: "Shuffle songs in the queue to be randomized.",
            COMMAND_QUEUE_DESCRIPTION: "See the current song queue in an interactive manner",
            COMMAND_SKIP_DESCRIPTION: "Skip the current song or call a vote skip if there are more than 3 members in the VC.",
            COMMAND_STOP_DESCRIPTION: "Stop and Clear the queue if you're Pengu-DJ or are the only one listening.",
            COMMAND_MAKE_DJ_DESCRPTION: "Make a user Pengu DJ if you are Pengu Mod or above.",
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
            ER_CURR_LANG: "PenguBot déjà parle Français!",
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
            CMD_PATRON_ONLY: "This guild is not Premium. Please consider becoming a Patron at <https://patreon.com/PenguBot> in order to access this feature.",
            CMD_RPS_INVALID: "That's an invalid move, please choose",
            CMD_SLOTS_INVALID: "The specified amount of Snowflakes is invalid, please enter at least 1 or more Snowflakes.",
            CMD_LOG_INVALID: "Invalid Option, please choose from",
            CMD_CSGO_NF: "That Username was not found on Steam, please try again with a different one.",
            CMD_CSGO_ER: "There was an error, either your profile is PRIVATE or you haven't bought CSGO or the API bailed on us. Try again later.",

            // Missing Default
            DEFAULT_LANGUAGE: "Langue par défaut",
            SETTING_GATEWAY_EXPECTS_GUILD: "Le paramètre <Guild> attend soit un identifiant soit une instance de serveur.",
            SETTING_GATEWAY_VALUE_FOR_KEY_NOEXT: (data, key) => `La valeur '${data}' pour la clef '${key}' n'existe pas.`,
            SETTING_GATEWAY_VALUE_FOR_KEY_ALREXT: (data, key) => `La valeur '${data}' pour la clef '${key}' existe déjà.`,
            SETTING_GATEWAY_SPECIFY_VALUE: "Vous devez spécifier une clef pour ajouter ou filtrer.",
            SETTING_GATEWAY_KEY_NOT_ARRAY: key => `La clef '${key}' n'est pas une matrice.`,
            SETTING_GATEWAY_KEY_NOEXT: key => `La clef '${key}' n'existe pas dans le schema de données actuel.`,
            SETTING_GATEWAY_INVALID_TYPE: "Le paramètre 'type' doit être soit 'add' ou 'remove'.",
            RESOLVER_INVALID_PIECE: (name, piece) => `${name} doit être un nom de ${piece} valide.`,
            RESOLVER_INVALID_MSG: name => `${name} doit être un identifiant de message valide.`,
            RESOLVER_INVALID_USER: name => `${name} doit être une mention ou un identifiant d'utilisateur valide.`,
            RESOLVER_INVALID_MEMBER: name => `${name} doit être une mention ou un identifiant d'utilisateur valide.`,
            RESOLVER_INVALID_CHANNEL: name => `${name} doit être un tag ou un identifiant de salon valide.`,
            RESOLVER_INVALID_GUILD: name => `${name} doit être un identifiant de serveur valide.`,
            RESOLVER_INVALID_ROLE: name => `${name} doit être une mention ou un identifiant de rôle.`,
            RESOLVER_INVALID_LITERAL: name => `Votre option ne correspond pas à la seule possibilité : ${name}`,
            RESOLVER_INVALID_BOOL: name => `${name} doit être vrai ou faux.`,
            RESOLVER_INVALID_INT: name => `${name} doit être un entier.`,
            RESOLVER_INVALID_FLOAT: name => `${name} doit être un nombre valide.`,
            RESOLVER_INVALID_URL: name => `${name} doit être une url valide.`,
            RESOLVER_STRING_SUFFIX: " caractères",
            RESOLVER_MINMAX_EXACTLY: (name, min, suffix) => `${name} doit être exactement ${min}${suffix}.`,
            RESOLVER_MINMAX_BOTH: (name, min, max, suffix) => `${name} doit être entre ${min} et ${max}${suffix}.`,
            RESOLVER_MINMAX_MIN: (name, min, suffix) => `${name} doit être plus grand que ${min}${suffix}.`,
            RESOLVER_MINMAX_MAX: (name, max, suffix) => `${name} doit être plus petit que ${max}${suffix}.`,
            COMMANDMESSAGE_MISSING: "Il manque au moins un argument à la fin de l'entrée.",
            COMMANDMESSAGE_MISSING_REQUIRED: name => `${name} est un argument requis.`,
            COMMANDMESSAGE_MISSING_OPTIONALS: possibles => `Il manque une option requise : (${possibles})`,
            COMMANDMESSAGE_NOMATCH: possibles => `Votre option ne correspond à aucune des possibilités : (${possibles})`,
            // eslint-disable-next-line max-len
            MONITOR_COMMAND_HANDLER_REPROMPT: (tag, error, time) => `${tag} | **${error}** | Vous avez **${time}** secondes pour répondre à ce message avec un argument valide. Tapez **"ABORT"** pour annuler ce message.`,
            MONITOR_COMMAND_HANDLER_ABORTED: "Annulé",
            INHIBITOR_COOLDOWN: remaining => `Vous venez d'utiliser cette commande. Vous pourrez à nouveau utiliser cette commande dans ${remaining} secondes.`,
            INHIBITOR_MISSING_BOT_PERMS: missing => `Permissions insuffisantes, il manque : **${missing}**`,
            INHIBITOR_PERMISSIONS: "Vous n'avez pas la permission d'utiliser cette commmande",
            // eslint-disable-next-line max-len
            INHIBITOR_REQUIRED_SETTINGS: settings => `Votre serveur n'a pas le${settings.length > 1 ? "s" : ""} paramètre${settings.length > 1 ? "s" : ""} **${settings.join(", ")}** et ne peux pas s'exécuter.`,
            INHIBITOR_RUNIN: types => `Cette commande est uniquement disponible dans les salons ${types}`,
            INHIBITOR_RUNIN_NONE: name => `La commande ${name} n'est pas configurée pour s'exécuter dans un salon.`,
            COMMAD_UNLOAD: (type, name) => `✅ ${type} déchargé : ${name}`,
            COMMAND_TRANSFER_SUCCESS: (type, name) => `✅ ${type} transféré avec succès : ${name}`,
            COMMAND_TRANSFER_FAILED: (type, name) => `Le transfert de ${type} : ${name} au Client a échoué. Veuillez vérifier votre Console.`,
            COMMAND_REBOOT: "Redémarrage...",
            COMMAND_PING: "Ping ?",
            COMMAND_PINGPONG: (diff, ping) => `Pong ! (L'aller-retour a pris : ${diff}ms. Pulsation : ${ping}ms.)`,
            COMMAND_INVITE_SELFBOT: "Pourquoi auriez-vous besoin d'un lien d'invitation pour un selfbot...",
            COMMAND_HELP_DM: "📥 | Les commandes ont été envoyées dans vos MPs.",
            COMMAND_ENABLE: (type, name) => `+ ${type} activé avec succès : ${name}`,
            COMMAND_DISABLE: (type, name) => `+ ${type} désactivé avec succès : ${name}`,
            COMMAND_DISABLE_WARN: "Vous ne voulez probablement pas désactiver cela, car vous ne serez plus capable d'exécuter une commande pour le réactiver",
            COMMAND_CONF_NOKEY: "Vous devez fournir une clef",
            COMMAND_CONF_NOVALUE: "Vous devez fournir une valeur",
            COMMAND_CONF_ADDED: (value, key) => `La valeur \`${value}\` a été ajoutée avec succès à la clef : **${key}**`,
            COMMAND_CONF_UPDATED: (key, response) => `La clef **${key}** a été mise à jour avec succès : \`${response}\``,
            COMMAND_CONF_KEY_NOT_ARRAY: "Cette clef n'est pas une matrice. Utilisez plutôt l'action 'reset'.",
            COMMAND_CONF_REMOVE: (value, key) => `La valeur \`${value}\` a été otée avec succès de la clef : **${key}**`,
            COMMAND_CONF_GET_NOEXT: key => `La clef **${key}** ne semble pas exister.`,
            COMMAND_CONF_GET: (key, value) => `La valeur pour la clef **${key}** est : \`${value}\``,
            COMMAND_CONF_RESET: (key, response) => `La clef **${key}** a été réinitialisée à : \`${response}\``,
            
            
            // while translating ... 
            COMMAND_PING_DESCRIPTION: "Ping le server PenguBot ..",
            COMMAND_HELP_DESCRIPTION: "Vous recevrez ces messages d'aide.",
            COMMAND_INFO_DESCRIPTION: "Informations sur le projet de PenguBot",
            COMMAND_STATS_DESCRIPTION: "Statistiques de PenguBot",
            COMMAND_CONF_USER_DESCRIPTION: "Informations sur la configuration actuelle",
            COMMAND_SETLANGUAGE_DESCRPTION: "(Admin) Choisir la langue de PenguBot parmi les disponibles.",

            // Music interface
            MUSICIF_NO_MUSIC_PLAYING: "Aucune musique ne joue!",
            MUSICIF_NOW_PLAYING_TITLE: "En cours de lecture..",
            MUSICIF_TITLE: "Title",
            MUSICIF_AUTHOR: "Auteur",
            MUSICIF_SONG_LENGHT: "Durée",
            MUSICIF_SONG_REQUESTED_BY: "Demandeur",
            MUSICIF_SONG_LINK: "Link",

            MUSICIF_SONG_NOT_FOUND: "Chant non trouvé, veuillez essayer avec un autre."


        };
    }

    async init() {
        await super.init();
    }

};
