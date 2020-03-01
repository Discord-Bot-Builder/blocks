module.exports = {
    name: "Get Bot Info",

    description: "Get bot information.",

    category: "Bot Stuff",

    inputs: [
        {
            "name": "action",
            "title": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        }
    ],

    options: [
        {
            "name": "info",
            "title": "Bot Info",
            "description": "Description: Bot information you want to get.",
            "type": "SELECT",
            "options": {
                1: "Bot Voice Broadcast List [List <Voice Broadcast>]",
                2: "Is Bot In A Browser Environment? [Boolean]",
                3: "Bot Channel List [List <Channel>]",
                4: "Bot Server Emoji List [List <Server Emoji>]",
                5: "Bot Server List [List <Server>]",
                6: "Current Bot Ping [Number]",
                7: "Recent Bot Pings List [List <Number>]",
                8: "Bot Ready At [Date]",
                9: "Bot Status [Text]",
                10: "Bot Token (BE CAREFUL) [Text]",
                11: "Bot Uptime In Milliseconds [Number]",
                12: "Bot As User [User]",
                13: "Bot User List [List <User>]",
                14: "Bot Voice Connection List [List <Voice Connection>]"
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
            "description": "Type: Unspecified\n\nDescription: Result you got with the bot.",
            "types": ["unspecified"]
        }
    ],

    code: function(cache) {
        const bot = this.client;
        const info = parseInt(this.GetOptionValue("info", cache));

        let result;
        switch(info) {
            case 1:
                result = bot.broadcasts.array();
                break;
            case 2:
                result = bot.browser;
                break;
            case 3:
                result = bot.channels.array();
                break;
            case 4:
                result = bot.emojis.array();
                break;
            case 5:
                result = bot.guilds.array();
                break;
            case 6:
                result = bot.ping;
                break;
            case 7:
                result = bot.pings.array();
                break;
            case 8:
                result = bot.readyAt;
                break;
            case 9:
                switch(bot.status) {
                    case 0:
                        result = "Ready";
                        break;
                    case 1:
                        result = "Connecting";
                        break;
                    case 2:
                        result = "Reconnecting";
                        break;
                    case 3:
                        result = "Idle";
                        break;
                    case 4:
                        result = "Nearly";
                        break;
                    case 5:
                        result = "Disconnected";
                        break;
                }
                break;
            case 10:
                result = bot.token;
                break;
            case 11:
                result = bot.uptime;
                break;
            case 12:
                result = bot.user;
                break;
            case 13:
                result = bot.users.array();
                break;
            case 14:
                result = bot.voiceConnections.array();
                break;
        }

        this.StoreOutputValue(result, "result", cache);
        this.RunNextBlock("action", cache);
    }
};