module.exports = {
    name: "Find Role",

    description: "Find a role.",

    category: "Role Stuff",

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
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The server to find the role. If not used, in some cases, this will find the role on a random server. (OPTIONAL)",
            "types": ["object", "unspecified"]
        },
        {
            "name": "search_value",
            "title": "Search Value",
            "description": "Acceptable Types: Text, Number, Unspecified\n\nDescription: Enter the value here according to your choice in \"Find Role By\".",
            "types": ["text", "number", "unspecified"]
        }
    ],

    options: [
        {
            "name": "find_role_by",
            "title": "Find Role By",
            "description": "Description: Choose the search type for the role.",
            "type": "SELECT",
            "options": {
                "id": "Role ID",
                "position": "Role Position",
                "color": "Role Color",
                "name": "Role Name"
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
            "name": "role",
            "title": "Role",
            "description": "Type: Object\n\nDescription: The found role.",
            "types": ["object"]
        }
],

    code: function(cache) {
        const server = this.GetInputValue("server", cache);
        const search_value = this.GetInputValue("search_value", cache);
        const find_role_by = this.GetOptionValue("find_role_by", cache);

        let roles;
        if(server) roles = server.roles;
        else roles = [].concat(...this.client.guilds.map(a => a.roles.array()));

        let result;
        switch(find_role_by) {
            case "id":
                result = roles.find(c => c.id == search_value);
                break;
            case "position":
                result = roles.find(c => c.position == parseInt(search_value));
                break;
            case "color":
                result = roles.find(c => c.hexColor == search_value);
                break;
            case "name":
                result = roles.find(c => c.name == search_value);
                break;
        }

        this.StoreOutputValue(result, "role", cache);
        this.RunNextBlock("action", cache);
    }
};