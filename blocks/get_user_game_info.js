module.exports = {
    name: "Get User Game Info",

    description: "Get game information of user playing.",

    category: "User Stuff",

    inputs: [
        {
            "name": "action",
            "title": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "name": "user",
            "title": "User",
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The user to get game information.",
            "types": ["object", "unspecified"]
        }
    ],

    options: [
        {
            "name": "info",
            "title": "Game Info",
            "description": "Description: Game information you want to get.",
            "type": "SELECT",
            "options": {
                1: "Game Name [Text]",
                2: "Game Details [Text]",
                3: "Game State/Custom Status [Text]",
                4: "Game Party ID [Text]",
                5: "Current Game Party Size [Number]",
                6: "Maximum Game Party Size [Number]",
                7: "Game Date Start [Date]",
                8: "Game Date End [Date]",
                9: "Game Large Image Text [Text]",
                10: "Game Small Image Text [Text]",
                11: "Game Large Image URL [Text]",
                12: "Game Small Image URL [Text]",
                13: "Game Is Streaming? [Boolean]",
                14: "Game Stream URL [Text]",
                15: "Game Type [Text]",
                16: "Game Aplication ID [Text]"
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
            "description": "Type: Unspecified\n\nDescription: Result you got with the user game.",
            "types": ["unspecified"]
        }
    ],

    code: function(cache) {
        const user = this.getInputValue("user", cache);
        const info = parseInt(this.getOptionValue("info", cache));

        let result;
        switch(info) {
            case 1:
                result = user.presence.game.name;
                break;
            case 2:
                result = user.presence.game.details;
                break;
            case 3:
                result = user.presence.game.state;
                break;
            case 4:
                if(!user.presence.game.party) break;
                result = user.presence.game.party.id;
                break;
            case 5:
                if(!user.presence.game.party || user.presence.game.party.size) break;
                result = user.presence.game.party.size[0];
                break;
            case 6:
                if(!user.presence.game.party || user.presence.game.party.size) break;
                result = user.presence.game.party.size[1];
                break;
            case 7:
                if(!user.presence.game.party.timestamps) break;
                result = user.presence.game.timestamps.start;
                break;
            case 8:
                if(!user.presence.game.party.timestamps) break;
                result = user.presence.game.timestamps.end;
                break;
            case 9:
                if(!user.presence.game.party.assets) break;
                result = user.presence.game.assets.largeText;
                break;
            case 10:
                if(!user.presence.game.party.assets) break;
                result =  user.presence.game.assets.smallText;
                break;
            case 11:
                if(!user.presence.game.party.assets) break;
                result = user.presence.game.assets.largeImageURL;
                break;
            case 12:
                if(!user.presence.game.party.assets) break;
                result = user.presence.game.assets.smallImageURL;
                break;
            case 13:
                result = user.presence.game.streaming;
                break;
            case 14:
                result = user.presence.game.url;
                break;
            case 15:
                switch(user.presence.game.type) {
                    case 0:
                        result = "Playing";
                        break;
                    case 1:
                        result = "Streaming";
                        break;
                    case 2:
                        result = "Listening";
                        break;
                    case 3:
                        result = "Watching";
                        break;
                }
                break;
            case 16:
                result = user.presence.game.applicationID;
                break;
            }

            this.StoreOutputValue(result, "result", cache);
            this.RunNextBlock("action", cache);
        }
};