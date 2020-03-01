module.exports = {
    name: "Find Invite",

    description: "Find an invite.",

    category: "Invite Stuff",

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
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The server to find the invite. If possible, use this to get a better invite object. (OPTIONAL)",
            "types": ["object", "unspecified"]
        },
        {
            "name": "search_value",
            "title": "Search Value",
            "description": "Acceptable Types: Text, Object, Number, Unspecified\n\nDescription: Enter the value here according to your choice in \"Find Invite By\".",
            "types": ["text", "object", "number", "unspecified"]
        }
    ],

    options: [
        {
            "name": "find_invite_by",
            "title": "Find Invite By",
            "description": "Description: Choose the search type for the invite.",
            "type": "SELECT",
            "options": {
                "code": "Invite Code",
                "url": "Invite URL",
                "channel": "Invite Channel",
                "inviter": "Invite Inviter [User] (REQUIRES SERVER)",
                "uses": "Invite Uses (REQUIRES SERVER)"
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
            "name": "invite",
            "title": "Invite",
            "description": "Type: Object\n\nDescription: The found invite.",
            "types": ["object"]
        }
],

    code: async function(cache) {
        const server = this.GetInputValue("server", cache);
        const search_value = this.GetInputValue("search_value", cache);
        const find_invite_by = this.GetOptionValue("find_invite_by", cache);

        let result;

        if(server) {
            const invites = await server.fetchInvites();

            switch(find_invite_by) {
                case "code":
                    result = invites.get(search_value + "");
                    break;
                case "url":
                    result = invites.find(c => c.url == search_value);
                    break;
                case "channel":
                    result = invites.find(c => c.channel == search_value);
                    break;
                case "inviter":
                    result = invites.find(c => c.inviter == search_value);
                    break;
                case "uses":
                    result = invites.find(c => c.uses == search_value);
                    break;
            }
        } else {
            result = await this.client.fetchInvite(search_value);
        }

        this.StoreOutputValue(result, "invite", cache);
        this.RunNextBlock("action", cache);
    }
};