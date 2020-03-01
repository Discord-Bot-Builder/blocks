module.exports = {
    name: "Find Message",

    description: "Find a message.",

    category: "Message Stuff",

    inputs: [
        {
            "name": "action",
            "title": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "name": "channel",
            "title": "Channel",
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The channel to find the message. If not used, in some cases, this will find the message on a random server. (OPTIONAL)",
            "types": ["object", "unspecified"]
        },
        {
            "name": "search_value",
            "title": "Search Value",
            "description": "Acceptable Types: Text, Number, Object, Unspecified\n\nDescription: Enter the value here according to your choice in \"Find Message By\".",
            "types": ["text", "number", "object", "unspecified"]
        }
    ],

    options: [
        {
            "name": "find_message_by",
            "title": "Find Message By",
            "description": "Description: Choose the search type for the message.",
            "type": "SELECT",
            "options": {
                "id": "Message ID (Requires Channel to find uncached messages)",
                "user_author": "Message Author [User]",
                "member_author": "Message Author [Member] (If is a server message)",
                "content": "Message Content",
                "clean_content": "Message Clean Content",
                "server": "Message Server (If is a server message)",
                "url": "Message URL",
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
            "name": "message",
            "title": "Message",
            "description": "Type: Object\n\nDescription: The found message.",
            "types": ["object"]
        }
],

    code: async function(cache) {
        const channel = this.GetInputValue("channel", cache);
        const search_value = this.GetInputValue("search_value", cache);
        const find_message_by = this.GetOptionValue("find_message_by", cache);

        let result;
        if(find_message_by == "id" && channel) {
            result = await channel.fetchMessage(search_value);
        } else {
            let messages;
            if(channel) messages = channel.messages;
            else messages = [].concat(...client.channels.filter(a => a.messages).map(a => a.messages.array()));

            switch(find_message_by) {
                case "id":
                    result = messages.find(c => c.id == search_value);
                    break;
                case "user_author":
                    result = messages.find(c => c.author == search_value);
                    break;
                case "member_author":
                    result = messages.find(c => c.member == search_value);
                    break;
                case "content":
                    result = messages.find(c => c.content == search_value);
                    break;
                case "clean_content":
                    result = messages.find(c => c.cleanContent == search_value);
                    break;
                case "server":
                    result = messages.find(c => c.guild == search_value);
                    break;
                case "url":
                    result = messages.find(c => c.url == search_value);
                    break;
            }
        }

        this.StoreOutputValue(result, "message", cache);
        this.RunNextBlock("action", cache);
    }
};