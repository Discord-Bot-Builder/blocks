module.exports = {
    name: "Find Voice Channel",

    description: "Find a voice channel.",

    category: "Channel Stuff",

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
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The server to find the voice channel. (OPTIONAL)",
            "types": ["object", "unspecified"]
        },
        {
            "name": "search_value",
            "title": "Search Value",
            "description": "Acceptable Types: Text, Number, Unspecified\n\nDescription: Enter the value here according to your choice in \"Find Voice Channel By\".",
            "types": ["text", "number", "unspecified"]
        }
    ],

    options: [
        {
            "name": "find_voice_channel_by",
            "title": "Find Voice Channel By",
            "description": "Description: Choose the search type for the voice channel.",
            "type": "SELECT",
            "options": {
                "id": "Voice Channel ID",
                "name": "Voice Channel Name",
                "user_limit": "Voice Channel User Limit",
                "position": "Voice Channel Position",
                "bitrate": "Voice Channel Bitrate"
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
            "name": "voice_channel",
            "title": "Voice Channel",
            "description": "Type: Object\n\nDescription: The found voice channel.",
            "types": ["object"]
        }
    ],

    code: function(cache) {
        let server = this.GetInputValue("server", cache);
        const search_value = this.GetInputValue("search_value", cache);
        const find_voice_channel_by = this.GetOptionValue("find_voice_channel_by", cache);

        if(!server) server = this.client;

        const channels = server.channels.filter(c => c.type == "voice");

        let result;
        switch(find_voice_channel_by) {
            case "id":
                result = channels.get(search_value + "");
                break;
            case "name":
                result = channels.find(c => c.name == search_value);
                break;
            case "user_limit":
                result = channels.find(c => c.userLimit == parseInt(search_value));
                break;
            case "position":
                result = channels.find(c => c.position == parseInt(search_value));
                break;
            case "bitrate":
                result = channels.find(c => c.bitrate == parseInt(search_value));
                break;
        }

        this.StoreOutputValue(result, "voice_channel", cache);
        this.RunNextBlock("action", cache);
    }
};