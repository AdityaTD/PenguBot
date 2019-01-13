const { Language, util } = require("klasa");

module.exports = class extends Language {

    constructor(...args) {
        super(...args);
        this.language = {
            DEFAULT: key => `${key} henüz tr-TR (Türkçe) için tercüme edilmemiş.`,
            INHIBITOR_DISABLED: "<:penguError:435712890884849664> ***Bu komut şu anda devre dışı bırakılmıştır.***",
            INHIBITOR_DISABLED_GROUP: "<:penguError:435712890884849664> ***Bu komut grubu şu anda devre dışı bırakılmıştır.***",
            COMMAND_UNLOAD: (type, name) => `<:penguSuccess:435712876506775553> ${type} geri yüklendi: ${name}`,
            COMMAND_TRANSFER_ERROR: "<:penguError:435712890884849664> Bu dosya zaten taşınmış veya hiç var olmamış.",
            COMMAND_RELOAD: (type, name) => `<:penguSuccess:435712876506775553> ${type} yeniden yüklendi: ${name}`,
            COMMAND_RELOAD_ALL: type => `<:penguSuccess:435712876506775553> Hepsi geri yüklendi: ${type}.`,
            COMMAND_LOAD: (time, type, name) => `<:penguSuccess:435712876506775553> ${type} başarıyla yüklendi: ${name}. (Alınan zaman: ${time})`,
            COMMAND_LOAD_ERROR: (type, name, error) => `<:penguError:435712890884849664> ${type} yüklenirken hata: ${name}. Sebep: ${util.codeBlock("js", error)}`,
            COMMAND_INVITE: `**👉 | PenguBot'u Discord Sunucunuza Ekleyin:** <https://www.PenguBot.com/invite>`,
            COMMAND_SUPPORT: `**__PenguBot Destek Sunucusu__**\n• **Invite Link:** https://discord.gg/u8WYw5r`,
            COMMAND_INVITE_DESCRIPTION: "Botu sunucunuza eklemek için kullanacağınız davet bağlantısını gösterir.",
            COMMAND_INFO: [
                "PenguBot is a Multi-Purpose Discord Bot which is filled with features ranging from",
                "Moderation, Fun, Utilities and more. It is developed in NodeJS using many different",
                "technologies such as RethinkDB, JavaScript and Linux.",
                "",
                "• **Yapımcı:** [AdityaTD#5346](https://www.AdityaTD.me)",
                `• **Sürüm:** ${require("../package").version}`,
                "• **Website:** <https://www.PenguBot.com>",
                "• **Patreon:** <https://www.Patreon.com/PenguBot>",
                "• **PayPal:** <https://www.paypal.me/adityatripathid>",
                "• **Discord Sunucusu:** <https://discord.gg/6KpTfqR>",
                "• **GitHub:** <https://www.github.com/AdityaTD/PenguBot>",
                "• **Veritabanı:** RethinkDB"
            ],
            COMMAND_DONATE: [
                "PenguBot dünya çapında birçok sunucuda bulunmaktadır ve bir kiraya ihtiyaç duyar. Eğer PenguBot'u ve onun maddi giderlerine çok havalı özellikler karşılığında katkı sağlamak isterseniz aşağıdaki bağlantıları ziyaret edin:",
                "",
                "__Alacakların__:",
                "• Kuyruklara sınırsız erişim, ses düzeyi ayarlama ve dahası!",
                "• Oy Kilidi Yok - Kilitli Komutlara erişmek için oy vermenize gerek yok!",
                "• Patronlara özel bot ile daha iyi çalışma süresi!",
                "• Resmî Pengu Squad Sunucusunda Özel Rol!",
                "",
                "• **Patreon:** https://www.patreon.com/PenguBot",
                "• **PayPal:** https://www.paypal.me/adityatripathid",
                "• **Kripto Bağışlar:** https://1upcoin.com/donate/adityatd",
                "• **PenguBot'nun Bağış Sayfası:** https://www.PenguBot.com/donate"
            ],
            COMMAND_HELP_NODM: "📪 | Özel Mesajların kapalı, sana Özel Mesaj olarak komutları gönderemedim bu yüzden işte tüm komutlar: <https://www.pengubot.com/commands>",
            COMMAND_UPVOTE: ["PenguBot'un daha çok büyümesini ve ziyaret ettiğin sunucularda daha çok karşına çıkmasını ister misin?",
                "Öyleyse aşağıdaki bağlantıdan bota oy verin ve sadece",
                "oy veren kişilerin kullanabileceği özel özelliklere erişin",
                "",
                "• **Oy Verin:** https://www.pengubot.com/upvote"],
            COMMAND_TOGGLE_GROUP_DESCRPTION: "Komut Kategorilerini Aktifleştir/Devre Dışı Bırak.",
            COMMAND_TOGGLE_COMMAND_DESCRPTION: "Sunucunda Komutları Aktifleştir/Devre Dışı Bırak.",
            COMMAND_SUPPORT_DESCRIPTION: "PenguBot'un Destek Sunucu bağlantısı.",

            // Pengu's Sentences
            MESSAGE_PREFIX_SET: "Sunucunun öneki başarıyla şuna değiştirildi:",
            MESSAGE_CURRENT_PREFIX: "Sunucunun mevcut öneki:",
            MESSAGE_PENGU: "işte böyle!",

            // Kick Messages
            MESSAGE_KICKED: "sunucudan atıldı!",
            MESSAGE_KICK_YOURSELF: "Kendini sunucudan atamazsın!",
            MESSAGE_KICK_PENGU: "Neden beni sunucudan atmak isteyesin ki?",
            MESSAGE_KICK_CANT: "Bu kullanıcı sunucudan atılamıyor.",

            // Ban Messages
            MESSAGE_BANNED: "sunucudan yasaklandı!",
            MESSAGE_SOFTBANNED: "sunucudan yasaklandı! (soft)",
            MESSAGE_BAN_YOURSELF: "Kendini sunucudan yasaklayamazsın!",
            MESSAGE_BAN_PENGU: "Neden beni sunucudan yasaklamak isteyesin ki?",
            MESSAGE_BAN_CANT: "Bu kullanıcı sunucudan atılamıyor.",

            // Make Admin and Mod Messages
            MESSAGE_ADMIN_ADD: "artık bir Pengu Yöneticisi!",
            MESSAGE_ADMIN_REMOVE: "artık bir Pengu Yöneticisi değil!",
            MESSAGE_MOD_ADD: "artık bir Pengu Moderatörü!",
            MESSAGE_MOD_REMOVE: "artık bir Pengu Moderatörü değil!",
            MESSAGE_DJ_ADD: "artık bir Pengu DJ'i!",
            MESSAGE_DJ_REMOVE: "artık bir Pengu DJ'i değil!",

            // Mute Command Messages
            MESSAGE_MUTED: "susturuldu!",
            MESSAGE_UNMUTED: "kişisinin susturması kaldırıldı!",

            // Other Mod Commands Messages
            MESSAGE_PRUNE_DELETED: "mesaj silindi!",

            // Custom Commands Messages
            MESSAGE_CMD_ADDED: "komutu şu kişi tarafından eklendi:",
            MESSAGE_CMD_UPDATED: "komutu şu kişi tarafından güncellendi:",
            MESSAGE_CMD_REMOVED: "komutu şu kişi tarafından kaldırıldı:",
            MESSAGE_CMD_NOTFOUND: "komutu bulunmadı!",
            MESSAGE_CMD_EXISTS: "komutu varsayılan bir Pengu komutu veya özel komut olarak zaten eklenmiş!",
            MESSAGE_NO_CMDS: "Sunucunuzun bir özel komutu yok, bir tane yapması için yöneticilere söyle!",
            MESSAGE_COMMAND_CUSTOM_ENABLED: "Özel Komutlar Aktif!",
            MESSAGE_COMMAND_CUSTOM_DISABLED: "Özel Komutlar Devre Dışı!",

            // Welcome & Leave messages
            MESSAGE_WLCM_ENABLED: "Hoş Geldin Mesajları Aktif!",
            MESSAGE_WLCM_DISABLED: "Hoş Geldin Mesajları Devre Dışı!",
            MESSAGE_LEAVE_ENABLED: "Çıkış Mesajları Aktif!",
            MESSAGE_LEAVE_DISABLED: "Çıkış Mesajları Devre Dışı!",
            MESSAGE_WELCOME_SET: "Hoş geldin mesajı ayarlandı!",
            MESSAGE_LEAVE_SET: "Çıkış mesajı ayarlandı!",
            MESSAGE_WELCOME_CHANNEL_SET: "Hoş geldin mesaj kanalı ayarlandı!",
            MESSAGE_LEAVE_CHANNEL_SET: "Çıkış mesajı kanalı ayarlandı!",

            // Logging
            MESSAGE_LOGCHAN_SET: "Kayıt kanalı ayarlandı!",
            COMMAND_LOG_DESCRPTION: "Bir Pengu Yöneticisi veya daha üstüysen kayıt eylemlerini aç/kapa.",

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
            MESSAGE_LINK_SHORTEN: "İşte kısa bağlantın:",
            MESSAGE_AVATAR: "Avatar: ",
            MESSAGE_AFK_TRUE: "Durumunu Klavyeden Uzakta (AFK) olarak ayarla!",
            MESSAGE_AFK_FALSE: "Klavyeden Uzakta (afk) olan durumunu kaldır!",
            MESSAGE_IS_AFK: "şu nedenden dolayı AFK:",
            MESSAGE_AFK_REMOVED: "artık AFK değil! Yeniden hoş geldin!",
            MESSAGE_STARCHAN_SET: "Yıldız Tablosu kanalı ayarlandı!",

            // Pengu's Commands Descriptions
            COMMAND_KICK_DESCRIPTION: "Allows moderators and above to kick users.",
            COMMAND_BAN_DESCRIPTION: "Allows moderators and above to ban users.",
            COMMAND_SOFTBAN_DESCRIPTION: "Allows moderators and above to softban users.",
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
            MESSAGE_AUTOMOD_ENABLED: "Otomatik yönetim TEHTİTLER ve SPAM filtreleri ile (varsayılan olarak) aktifleştirildi. `p!automod toggle <Filtre>` yazarak filtreleri değiştir.",
            MESSAGE_AUTOMOD_DISABLED: "Otomatik yönetim devre dışı bırakıldı.",
            MESSAGE_AUTOMOD_TOGGLED: "filtresi açıldı/kapatıldı.",
            COMMAND_AUTOMOD_DESCRPTION: "Otomatik yönetim ayarlarını düzenle.",

            // Fun Commands Descriptions
            COMMAND_CAT_DESCRIPTION: "Pengu ile Şirin kedi fotoğrafları ve ilginç bilgiler!",
            COMMAND_CHUCK_DESCRIPTION: "Chuck Norris şakaları sadece bir komut uzakta!",
            COMMAND_COMPLIMENT_DESCRIPTION: "Biraz iyi biri ol ve etraftaki insanlara Pingu ile iltifat et!",
            COMMAND_COOKIE_DESCRIPTION: "Ağız sulandıran ve karnını daha da çok acıktıracak kurabiye fotoğrafları!",
            COMMAND_DADJOKE_DESCRIPTION: "Herkes esprileri sever fakat Soğuk Esprilere ne dersin?",
            COMMAND_DOG_DESCRIPTION: "Gününü gün edecek tatlı mı tatlı köpek fotoğrafları!",
            COMMAND_FML_DESCRIPTION: "İnsanlara "Ulan Hayatımı S*keyim" dedirten şeyler!",
            COMMAND_HUG_DESCRIPTION: "Birinin sarılmaya mı ihtiyacı var? Neden bekliyorsun ki, sarıl gitsin!",
            COMMAND_PENGU_DESCRIPTION: "Tatlı Penguen fotoğrafları!",
            COMMAND_8BALL_DESCRIPTION: "Sorularını sihirli 8topu'na sor!",
            COMMAND_DICE_DESCRIPTION: "Pengu ile bir zar at ve bir sonuç edin!",
            COMMAND_INSULT_DESCRIPTION: "İyi davranma ve bir üyeyi rencide et >:)!",
            COMMAND_KISS_DESCRIPTION: "Biraz yaramazlık yap ve birisine öpücük ver :)",
            COMMAND_PUNCH_DESCRIPTION: "Birileri yaramazlık mı yapıyor? Vur kafalarına!",
            COMMAND_COMIC_DESCRIPTION: "Eskilerin çocukları hala bu Çizgi Romanlar hatırlayacaktır!",
            COMMAND_FACT_DESCRIPTION: "Pengu ile bilgine bilgi kat!",
            COMMAND_RPS_DESCRIPTION: "Dünyanın en ezeli e-Sporu olan Taş, Kağıt, Makas'ı artık Pingu ile oynayabilirsin!",
            COMMAND_SLOTS_DESCRIPTION: "Bak ben kumara özendirmiyorum ama istersen oynayabilirsin :-)",
            COMMAND_TRUMP_DESCRIPTION: "Trump hakaretleri ile Trumplan!",
            COMMAND_MOMMA_DESCRIPTION: "Anan esprilerinden hala bıkmadın mı? İşte birkaçı!",
            COMMAND_FOX_DESCRIPTION: "Tilkileri sever misin? Ben de! İşte bir fotoğraf!",
            COMMAND_ILLEGAL_DESCRIPTION: "Trump sayesinde bir şeyleri yasak et.",
            COMMAND_MCA_DESCRIPTION: "Kendine bir Minecraft Başarımı oluştur.",
            COMMAND_LIO_DESCRIPTION: "Add yours or other people's face on to the cute lio!",
            COMMAND_SLAP_DESCRIPTION: "Kim yaramazlık yapıyor?! Onlara kıyak bir şaplak at!",
            COMMAND_PAT_DESCRIPTION: "Birileri iyi bir iş mi çıkardı? Onları okşa!",
            COMMAND_CUDDLE_DESCRIPTION: "Gel kucaklaşalım. Sorun yok... her şey düzelecek :-)",
            COMMAND_TICKLE_DESCRIPTION: "Who's being tough on surface? Tickle them and make them laugh!",
            COMMAND_POKE_DESCRIPTION: "Birilerini dürterek onların sinirini boz!",
            COMMAND_FEED_DESCRIPTION: "Aç olan var mı? Yemek getirdik de.",
            COMMAND_BATSLAP_DESCRIPTION: "Batman yine birilerine vuruyor!",
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
            COMMAND_SNAPCHAT_DESCRIPTION: "Bir Snapchat Mem Resmi yap.",
            COMMAND_OSU_DESCRIPTION: "Kıyak bir şekilde osu! istatistikleri edin!",
            COMMAND_CMM_DESCRIPTION: "Hoş bir "Fikrimi Değiştir" memi yap!",

            // NSFW Commands
            COMMAND_ANAL_DESCRIPTION: "-İŞ İÇİN UYGUN DEĞİL- Anal Resimleri.",
            COMMAND_BOOBS_DESCRIPTION: "-İŞ İÇİN UYGUN DEĞİL- Göğüs Resimleri.",
            COMMAND_BOOTY_DESCRIPTION: "-İŞ İÇİN UYGUN DEĞİL- Kalça Resimleri.",
            COMMAND_PUSSY_DESCRIPTION: "-İŞ İÇİN UYGUN DEĞİL- Vajina Resimleri.",
            COMMAND_TEEN_DESCRIPTION: "-İŞ İÇİN UYGUN DEĞİL- Ergen Resimleri.",
            COMMAND_HENTAI_DESCRIPTION: "-İŞ İÇİN UYGUN DEĞİL- Hentai Resimleri.",
            COMMAND_SNAP_DESCRIPTION: "-İŞ İÇİN UYGUN DEĞİL- Snapchat Resimleri.",
            COMMAND_AMETEUR_DESCRIPTION: "-İŞ İÇİN UYGUN DEĞİL- Amatör Resimleri.",
            COMMAND_GIFS_DESCRIPTION: "-İŞ İÇİN UYGUN DEĞİL- Hareketli GIF'ler.",
            COMMAND_GWNSFW_DESCRIPTION: "-İŞ İÇİN UYGUN DEĞİL- Gone Wild Resimleri.",
            COMMAND_LESB_DESCRIPTION: "-İŞ İÇİN UYGUN DEĞİL- Lezbiyen Resimleri.",
            COMMAND_MILF_DESCRIPTION: "-İŞ İÇİN UYGUN DEĞİL- MILF Resimleri.",
            COMMAND_NEKOS_DESCRIPTION: "-İŞ İÇİN UYGUN DEĞİL- Neko Resimleri.",
            COMMAND_ANIMETRAPS_DESCRIPTION: "-İŞ İÇİN UYGUN DEĞİL- Anime Trap Resimleri",
            COMMAND_ASIAN_DESCRIPTION: "-İŞ İÇİN UYGUN DEĞİL- Asyalı Uygunsuz Resimler",
            COMMAND_BDSM_DESCRIPTION: "-İŞ İÇİN UYGUN DEĞİL- BDSM Resimleri",
            COMMAND_BJNSFW_DESCRIPTION: "-İŞ İÇİN UYGUN DEĞİL- Sakso Resimleri",
            COMMAND_COSPLAY_DESCRIPTION: "-İŞ İÇİN UYGUN DEĞİL- Cosplay Resimleri",
            COMMAND_FITGIRLS_DESCRIPTION: "-İŞ İÇİN UYGUN DEĞİL- Fitgirl Resimleri",
            COMMAND_FUTANARI_DESCRIPTION: "-İŞ İÇİN UYGUN DEĞİL- Futanari Resimleri",
            COMMAND_NSFW_DESCRIPTION: "-İŞ İÇİN UYGUN DEĞİL- Genel Uygunsuz Resimler",
            COMMAND_FEET_DESCRIPTION: "-İŞ İÇİN UYGUN DEĞİL- Ayak Fetişi Resimleri",
            COMMAND_GINGER_DESCRIPTION: "-İŞ İÇİN UYGUN DEĞİL- Kızıl Resimleri",
            COMMAND_OUTFITS_DESCRIPTION: "-İŞ İÇİN UYGUN DEĞİL- Outfit Resimleri",
            COMMAND_PARTYHOUSE_DESCRIPTION: "-İŞ İÇİN UYGUN DEĞİL- Partyhouse Resimleri",
            COMMAND_R34_DESCRIPTION: "-İŞ İÇİN UYGUN DEĞİL- 34. Kural Resimleri",
            COMMAND_SOLO_DESCRIPTION: "-İŞ İÇİN UYGUN DEĞİL- Solo People Resimleri",
            COMMAND_THICC_DESCRIPTION: "-İŞ İÇİN UYGUN DEĞİL- Thick Resimleri",
            COMMAND_NSFWTRAPS_DESCRIPTION: "-İŞ İÇİN UYGUN DEĞİL- Trap Resimleri",

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
            COMMAND_EXEC_DESCRIPTION: "-SADECE BOT SAHİBİ-",
            COMMAND_SG_DESCRIPTION: "-SADECE BOT SAHİBİ-",
            COMMAND_TPG_DESCRIPTION: "-SADECE BOT SAHİBİ-",
            COMMAND_DONATE_DESCRIPTION: "Bağış yap ve havalı şeyler yapmamıza yardım et!",

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
            ER_TINDER: "Seni kendinle match'leyemem...",
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
            DEFAULT_LANGUAGE: "Varsayılan Dil",
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
            MONITOR_COMMAND_HANDLER_ABORTED: "İptal Edildi",
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
            COMMAND_PING: "Ping mi?",
            COMMAND_PINGPONG: (diff, ping) => `Pong! (Roundtrip took: ${diff}ms. Heartbeat: ${ping}ms.)`,
            COMMAND_INVITE_SELFBOT: "Neden bir selfbot için davet bağlantısı istersin ki...",
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
            MUSICIF_NO_MUSIC_PLAYING: "Çalan Şarkı Yok!",
            MUSICIF_NOW_PLAYING_TITLE: "Şimdi Çalıyor - PenguBot",
            MUSICIF_TITLE: "Başlık",
            MUSICIF_AUTHOR: "Yapımcı",
            MUSICIF_SONG_LENGHT: "Süre",
            MUSICIF_SONG_REQUESTED_BY: "İsteyen",
            MUSICIF_SONG_LINK: "Bağlantı",
            MUSICIF_QUEUE_HINT: "Şarkı kuyruğunu görmek için sayfalar arasında gezinin.",
            MUSICIF_QUEUE_TITLE: "Tepkileri sayfalar arasında gezinmek, sayfsa seçmek, veya kuyruğu kapatmak için kullanabilirsiniz.",
            MUSICIF_QUEUE_LOADING: "Kuyruk Yükleniyor...",
            MUSICIF_NO_VOICE_CHANNEL: "Ses kanalında değilsiniz veya bir hata oluştu, tekrar deneyin",
            MUSICIF_QUEUE_LIMIT_REACHED: "Üzgünüm ama kuyruğa en fazla 1000 şarkı ekleyebilirsiniz. Eğer bu limiti esgeçmek isterseniz <https://patreon.com/PenguBot> adresinden patron olabilirsiniz!",
            MUSICIF_TOGGLE_SONG_LOOP: "Tek şarkı tekrarı açıldı/kapatıldı.",
            MUSICIF_TOGGLE_QUEUE_LOOP: "Artık tüm kuyruk tekrarlanacak.",
            MUSICIF_SONG_NOT_FOUND: "Şarkı bulunamadı başka bir tane deneyin.",

            // 30th December 2018
            HELP_SET_LANGUAGE: ["**PenguBot**'un konuşmasını istediğiniz dili seçin",
                "",
                ":flag_gb: İngilizce (en-US)",
                ":flag_it: İtalyanca (it-IT)",
                ":flag_it: Sarduca (sar-IT)",
                ":flag_fr: Fransızca (fr-FR)",
                ":flag_es: İspanyolca (es-ES)",
                ":flag_tr: Türkçe (tr-TR)",
                "",
                "`p!setlanguage <Dil>` yazarak sunucunuzun dilini değiştirin."],
            CONF_LANG_SET: "artık bu sunucuda PenguBot'un konuşacağı varsayılan dil."
        };
    }

    async init() {
        await super.init();
    }

};
