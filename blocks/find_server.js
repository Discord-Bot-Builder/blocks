module.exports = {
    name: "Find Server",

    description: "Find a server.",

    category: "Server Stuff",

    inputs: [
        {
            "name": "action",
            "title": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "name": "search_value",
            "title": "Search Value",
            "description": "Acceptable Types: Text, Number, Unspecified\n\nDescription: Enter the value here according to your choice in \"Find Server By\".",
            "types": ["text", "number", "unspecified"]
        }
    ],

    options: [
        {
            "name": "find_server_by",
            "title": "Find Server By",
            "description": "Description: Choose the search type for the server.",
            "type": "SELECT",
            "options": {
                "id": "Server ID",
                "name": "Server Name",
                "name_acronym": "Server Name Acronym",
                "owner": "Server Owner",
                "system_channel": "Server System Channel",
                "afk_channel": "Server AFK Channel",
                "icon_url": "Server Icon URL",
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
            "name": "server",
            "title": "Server",
            "description": "Type: Object\n\nDescription: The found server.",
            "types": ["object"]
        }
    ],

    code: function(cache) {
        const search_value = this.GetInputValue("search_value", cache);
        const find_server_by = this.GetOptionValue("find_server_by", cache);

        const servers = this.client.guilds;

        let result;
        switch(find_server_by) {
            case "id":
                result = servers.get(search_value + "");
                break;
            case "name":
                result = servers.find(c => c.name == search_value);
                break;
            case "name_acronym":
                result = servers.find(c => c.nameAcronym == search_value);
                break;
            case "owner":
                result = servers.find(c => c.owner == search_value);
                break;
            case "system_channel":
                result = servers.find(c => c.systemChannel == search_value);
                break;
            case "afk_channel":
                result = servers.find(c => c.afkChannel == search_value);
                break;
            case "icon_url":
                result = servers.find(c => c.iconURL == search_value);
                break;
        }

        this.StoreOutputValue(result, "server", cache);
        this.RunNextBlock("action", cache);
    }
};