module.exports = {
    name: "Get Server Info",

    description: "Get server information.",

    category: "Server Stuff",

    inputs: [
        {
            "name": "action",
            "title": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "name": "server",
            "title": "Server",
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The server you want to get information.",
            "types": ["object", "unspecified"]
        }
    ],

    options: [
        {
            "name": "info",
            "title": "Server Info",
            "description": "Description: Server information you want to get.",
            "type": "SELECT",
            "options": {
                1: "Server AFK Channel [Voice Channel]",
                2: "Server AFK Channel ID [Text]",
                3: "Server AFK Channel Timeout In Seconds [Number]",
                4: "Server Application ID [Text]",
                5: "Is Server Available? [Boolean]",
                6: "Server Channel List [List <Channel>]",
                7: "Server Created At [Date]",
                8: "Server Default Message Notifications [Text]",
                9: "Server Default Role [Role]",
                10: "Has Bot Been Removed From The Server? [Boolean]",
                11: "Are Embedded Images Enabled On This Server? [Boolean]",
                12: "Server Emoji List [List <Emoji>]",
                13: "Server Explicit Content Filter Level [Text]",
                14: "Server Icon [Text]",
                15: "Server Icon URL [Text]",
                16: "Server ID [Text]",
                17: "Bot Joined The Server At [Date]",
                18: "Is Server Large? [Boolean]",
                19: "Bot As Server Member [Member]",
                20: "Server Member Count [Number]",
                21: "Server Member List [List <Member>]",
                22: "Is Server Two-Factor Authentication Enabled? [Boolean]",
                23: "Server Name [Text]",
                24: "Server Name Acronym [Text]",
                25: "Server Owner Member [Member]",
                26: "Server Owner Member ID [Text]",
                27: "Server Member Presence List [Presence]",
                28: "Server Region [Text]",
                29: "Server Role List [List <Role>]",
                30: "Server Splash [Text]",
                31: "Server Splash URL [Text]",
                32: "Server System Channel [Text Channel]",
                33: "Server System Channel ID [Text]",
                34: "Server Verification Level [Text]",
                35: "Is Server Verified? [Boolean]",
                36: "Server Bot Voice Connection [Voice Channel]",
                37: "Server Ban List [List <Ban>]",
                38: "Server Invite List [List <Invite>]",
                39: "Server Vanity [Text]",
                40: "Server Vanity URL [Text]",
                41: "Server Webhook List [List <Webhook>]",
            }
        }
    ],

    outputs: [
        {
            "name": "action",
            "title": "Action",
            "description": "Type: Action\n\nDescription: Executes blocks.",
            "types": ["action"]
        },
        {
            "name": "result",
            "title": "Result",
            "description": "Type: Unspecified\n\nDescription: Result you got with the server.",
            "types": ["unspecified"]
        }
    ],

    code: async function(cache) {
        const server = this.GetInputValue("server", cache);
        const info = parseInt(this.GetOptionValue("info", cache));

        let result;
        switch(info) {
            case 1:
                result = server.afkChannel;
                break;
            case 2:
                result = server.afkChannelID;
                break;
            case 3:
                result = server.afkTimeout;
                break;
            case 4:
                result = server.applicationID;
                break;
            case 5:
                result = server.available;
                break;
            case 6:
                result = server.channels.array();
                break;
            case 7:
                result = server.createdAt;
                break;
            case 8:
                switch(server.defaultMessageNotifications) {
                    case "ALL":
                        result = "All Messages";
                        break;
                    case "MENTIONS":
                        result = "Only Mentions";
                        break;
                }
                break;
            case 9:
                result = server.defaultRole;
                break;
            case 10:
                result = server.deleted;
                break;
            case 11:
                result = server.embedEnabled;
                break;
            case 12:
                result = server.emojis.array();
                break;
            case 13:
                switch(server.explicitContentFilter) {
                    case 0:
                        result = "Disabled";
                        break;
                    case 1:
                        result = "No Role";
                        break;
                    case 2:
                        result = "All Members";
                        break;
                }
                break;
            case 14:
                result = server.icon;
                break;
            case 15:
                result = server.iconURL;
                break;
            case 16:
                result = server.id;
                break;
            case 17:
                result = server.joinedAt;
                break;
            case 18:
                result = server.large;
                break;
            case 19:
                result = server.me;
                break;
            case 20:
                result = server.memberCount;
                break;
            case 21:
                result = server.members.array();
                break;
            case 22:
                switch(server.mfaLevel) {
                    case 0:
                        result = false;
                        break;
                    case 1:
                        result = true;
                        break;
                }
                break;
            case 23:
                result = server.name;
                break;
            case 24:
                result = server.nameAcronym;
                break;
            case 25:
                result = server.owner;
                break;
            case 26:
                result = server.ownerID;
                break;
            case 27:
                result = server.presences.array();
                break;
            case 28:
                switch(server.region) {
                    case "amsterdam":
                        result = "Amsterdam";
                        break;
                    case "brazil":
                        result = "Brazil";
                        break;
                    case "eu_central":
                        result = "EU Central";
                        break;
                    case "eu_west":
                        result = "EU West";
                        break;
                    case "frankfurt":
                        result = "Frankfurt";
                        break;
                    case "hongkong":
                        result = "Hong Kong";
                        break;
                    case "india":
                        result = "India";
                        break;
                    case "japan":
                        result = "Japan";
                        break;
                    case "london":
                        result = "London";
                        break;
                    case "russia":
                        result = "Russia";
                        break;
                    case "singapore":
                        result = "Singapore";
                        break;
                    case "southafrica":
                        result = "South Africa";
                        break;
                    case "sydney":
                        result = "Sydney";
                        break;
                    case "us_central":
                        result = "US Central";
                        break;
                    case "us_east":
                        result = "US East";
                        break;
                    case "us_south":
                        result = "US South";
                        break;
                    case "us_west":
                        result = "US West";
                        break;
                    case "vip_amsterdam":
                        result = "Amsterdam VIP";
                        break;
                    case "vip_us_east":
                        result = "US East VIP";
                        break;
                    case "vip_us_west":
                        result = "US West VIP";
                        break;
                }
                break;
            case 29:
                result = server.roles.array();
                break;
            case 30:
                result = server.splash;
                break;
            case 31:
                result = server.splashURL;
                break;
            case 32:
                result = server.systemChannel;
                break;
            case 33:
                result = server.systemChannelID;
                break;
            case 34:
                switch(server.verificationLevel) {
                    case 0:
                        result = "None";
                        break;
                    case 1:
                        result = "Low";
                        break;
                    case 2:
                        result = "Medium";
                        break;
                    case 3:
                        result = "High";
                        break;
                    case 4:
                        result = "Extreme";
                        break;
                }
                break;
            case 35:
                result = server.verified;
                break;
            case 36:
                result = server.voiceConnection;
                break;
            case 37:
                result = await server.fetchBans(true).then(bans => bans.array());
                break;
            case 38:
                result = await server.fetchInvites().then(invites => invites.array());
                break;
            case 39:
                result = await server.fetchVanityCode();
                break;
            case 40:
                result = await server.fetchVanityCode().then(code => code && `https://discord.gg/${code}`);
                break;
            case 41:
                result = await server.fetchWebhooks().then(webhooks => webhooks.array());
                break;
        }

        this.StoreOutputValue(result, "result", cache);
        this.RunNextBlock("action", cache);
    }
};