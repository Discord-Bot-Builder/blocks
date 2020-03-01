module.exports = {
    name: "Get Server Emoji Info",

    description: "Get server emoji information.",

    category: "Server Emoji Stuff",

    inputs: [
        {
            "name": "action",
            "title": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "name": "server_emoji",
            "title": "Server Emoji",
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The server emoji you want to get information.",
            "types": ["object", "unspecified"]
        }
    ],

    options: [
        {
            "name": "info",
            "title": "Server Emoji Info",
            "description": "Description: Server emoji information you want to get.",
            "type": "SELECT",
            "options": {
                1: "Is Server Emoji Animated? [Boolean]",
                2: "Server Emoji Created At [Date]",
                3: "Is Server Emoji Deletable By The Bot? [Boolean]",
                4: "Is Server Emoji Deleted? [Boolean]",
                5: "Server Emoji Server [Server]",
                6: "Server Emoji ID [Text]",
                7: "Server Emoji Identifier [Text]",
                8: "Is Server Emoji Managed By An External Service? [Boolean]",
                9: "Server Emoji Name [Text]",
                10: "Does Server Emoji Require Colons Surrounding It? [Boolean]",
                11: "Server Emoji Role List [List <Role>]",
                12: "Server Emoji URL [Text]",
                13: "Server Emoji Author [User]",
                14: "Server Emoji Mention [Text]"
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
            "description": "Type: Unspecified\n\nDescription: Result you got with the server emoji.",
            "types": ["unspecified"]
        }
    ],

    code: async function(cache) {
        const server_emoji = this.GetInputValue("server_emoji", cache);
        const info = parseInt(this.GetOptionValue("info", cache));

        let result;
        switch(info) {
            case 1:
                result = server_emoji.animated;
                break;
            case 2:
                result = server_emoji.createdAt;
                break;
            case 3:
                result = server_emoji.deletable;
                break;
            case 4:
                result = server_emoji.deleted;
                break;
            case 5:
                result = server_emoji.guild;
                break;
            case 6:
                result = server_emoji.id;
                break;
            case 7:
                result = server_emoji.identifier;
                break;
            case 8:
                result = server_emoji.managed;
                break;
            case 9:
                result = server_emoji.name;
                break;
            case 10:
                result = server_emoji.requiresColons;
                break;
            case 11:
                result = server_emoji.roles.array();
                break;
            case 12:
                result = server_emoji.url;
                break;
            case 13:
                result = await server_emoji.fetchAuthor();
                break;
            case 14:
                result = server_emoji.toString();
                break;
        }

        this.StoreOutputValue(result, "result", cache);
        this.RunNextBlock("action", cache);
    }
};