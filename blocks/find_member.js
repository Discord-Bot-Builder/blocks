module.exports = {
    name: "Find Member",

    description: "Find a member.",

    category: "Member Stuff",

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
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The server to find the member. If not used, this will find the member on a random server. (OPTIONAL)",
            "types": ["object", "unspecified"]
        },
        {
            "name": "search_value",
            "title": "Search Value",
            "description": "Acceptable Types: Text, Number, Unspecified\n\nDescription: Enter the value here according to your choice in \"Find Member By\".",
            "types": ["text", "number", "unspecified"]
        }
    ],

    options: [
        {
            "name": "find_member_by",
            "title": "Find Member By",
            "description": "Description: Choose the search type for the member.",
            "type": "SELECT",
            "options": {
                "id": "Member ID",
                "username": "Member Username",
                "display_name": "Member Display Name",
                "color": "Member Color"
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
            "name": "member",
            "title": "Member",
            "description": "Type: Object\n\nDescription: The found member.",
            "types": ["object"]
        }
],

    code: function(cache) {
        const server = this.GetInputValue("server", cache);
        const search_value = this.GetInputValue("search_value", cache);
        const find_member_by = this.GetOptionValue("find_member_by", cache);

        let members;
        if(server) members = server.members;
        else members = [].concat(...this.client.guilds.map(a => a.members.array()));

        let result;
        switch(find_member_by) {
            case "id":
                result = members.find(c => c.id == search_value);
                break;
            case "username":
                result = members.find(c => c.username == search_value);
                break;
            case "display_name":
                result = members.find(c => c.displayName == search_value);
                break;
            case "username":
                result = members.find(c => c.displayHexColor == search_value);
                break;
        }

        this.StoreOutputValue(result, "member", cache);
        this.RunNextBlock("action", cache);
    }
};