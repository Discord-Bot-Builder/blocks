module.exports = {
    name: "Find Text Channel",

    description: "Find a text channel.",

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
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The server to find the text channel. (OPTIONAL)",
            "types": ["object", "unspecified"]
        },
        {
            "name": "search_value",
            "title": "Search Value",
            "description": "Acceptable Types: Text, Number, Unspecified\n\nDescription: Enter the value here according to your choice in \"Find Text Channel By\".",
            "types": ["text", "number", "unspecified"]
        }
    ],

    options: [
        {
            "name": "find_text_channel_by",
            "title": "Find Text Channel By",
            "description": "Description: Choose the search type for the text channel.",
            "type": "SELECT",
            "options": {
                "id": "Text Channel ID",
                "name": "Text Channel Name",
                "topic": "Text Channel Topic",
                "position": "Text Channel Position"
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
            "name": "text_channel",
            "title": "Text Channel",
            "description": "Type: Object\n\nDescription: The found text channel.",
            "types": ["object"]
        }
    ],

    code: function(cache) {
        let server = this.GetInputValue("server", cache);
        const search_value = this.GetInputValue("search_value", cache);
        const find_text_channel_by = this.GetOptionValue("find_text_channel_by", cache);

        if(!server) server = this.client;

        const channels = server.channels.filter(c => c.type == "text");

        let result;
        switch(find_text_channel_by) {
            case "id":
                result = channels.get(search_value + "");
                break;
            case "name":
                result = channels.find(c => c.name == search_value);
                break;
            case "topic":
                result = channels.find(c => c.topic == search_value);
                break;
            case "position":
                result = channels.find(c => c.position == parseInt(search_value));
                break;
        }

        this.StoreOutputValue(result, "text_channel", cache);
        this.RunNextBlock("action", cache);
    }
};