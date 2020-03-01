module.exports = {
    name: "Reverse List",

    description: "Reverse the values in the list.",

    category: "List",

    inputs: [
        {
            "name": "action",
            "title": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "name": "list",
            "title": "List",
            "description": "Acceptable Types: List, Unspecified\n\nDescription: The list to reverse.",
            "types": ["list", "unspecified"]
        }
    ],

    options: [],

    outputs: [
        {
            "name": "action",
            "title": "Action",
            "description": "Type: Action\n\nDescription: Executes blocks.",
            "types": ["action"]
        },
        {
            "name": "list",
            "title": "List",
            "description": "Type: List\n\nDescription: The reversed list.",
            "types": ["list"]
        }
    ],

    code: function(cache) {
        const list = this.GetInputValue("list", cache);

        this.StoreOutputValue(list.reverse(), "list", cache);
        this.RunNextBlock("action", cache);
    }
};