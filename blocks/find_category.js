module.exports = {
    name: "Find Category",

    description: "Find a category.",

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
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The server to find the category. (OPTIONAL)",
            "types": ["object", "unspecified"]
        },
        {
            "name": "search_value",
            "title": "Search Value",
            "description": "Acceptable Types: Text, Number Unspecified\n\nDescription: Enter the value here according to your choice in \"Find Category By\".",
            "types": ["text", "number", "unspecified"]
        }
    ],

    options: [
        {
            "name": "find_category_by",
            "title": "Find Category By",
            "description": "Description: Choose the search type for the category.",
            "type": "SELECT",
            "options": {
                "id": "Category ID",
                "name": "Category Name"
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
            "name": "category",
            "title": "Category",
            "description": "Type: Object\n\nDescription: The found category.",
            "types": ["object"]
        }
    ],

    code: function(cache) {
        let server = this.GetInputValue("server", cache);
        const search_value = this.GetInputValue("search_value", cache);
        const find_category_by = this.GetOptionValue("find_category_by", cache);

        if(!server) server = this.client;

        const channels = server.channels.filter(c => c.type == "category");

        let result;
        switch(find_category_by) {
            case "id":
                result = channels.get(search_value + "");
                break;
            case "name":
                result = channels.find(c => c.name == search_value);
                break;
        }

        this.StoreOutputValue(result, "category", cache);
        this.RunNextBlock("action", cache);
    }
};