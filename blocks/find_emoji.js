module.exports = {
    name: "Find Emoji",

    description: "Find a server emoji.",

    category: "Emoji Stuff",

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
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The server to find the server emoji. If not used, this will find the server emoji on a random server. (OPTIONAL)",
            "types": ["object", "unspecified"]
        },
        {
            "name": "search_value",
            "title": "Search Value",
            "description": "Acceptable Types: Text, Number, Unspecified\n\nDescription: Enter the value here according to your choice in \"Find Emoji By\".",
            "types": ["text", "number", "unspecified"]
        }
    ],

    options: [
        {
            "name": "find_emoji_by",
            "title": "Find Emoji By",
            "description": "Description: Choose the search type for the server emoji.",
            "type": "SELECT",
            "options": {
                "id": "Emoji ID",
                "name": "Emoji Name",
                "url": "Emoji URL"
            }
        }
    ],

    outputs: [
        {
            "name": "action",
            "title": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes block.",
            "types": ["action"]
        },
        {
            "name": "emoji",
            "title": "Emoji",
            "description": "Type: Object\n\nDescription: The found server emoji.",
            "types": ["object"]
        }
],

    code: function(cache) {
        const server = this.GetInputValue("server", cache);
        const search_value = this.GetInputValue("search_value", cache);
        const find_emoji_by = this.GetOptionValue("find_emoji_by", cache);

        let emojis;
        if(server) emojis = server.emojis;
        else emojis = this.client.emojis;

        let result;
        switch(find_emoji_by) {
            case "id":
                result = emojis.get(search_value + "");
                break;
            case "name":
                result = emojis.find(c => c.name == search_value);
                break;
            case "url":
                result = emojis.find(c => c.url == search_value);
                break;
        }

        this.StoreOutputValue(result, "emoji", cache);
        this.RunNextBlock("action", cache);
    }
};