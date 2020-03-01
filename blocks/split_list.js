module.exports = {
    name: "Split List",

    description: "Split the list at a specific position.",

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
            "description": "Acceptable Types: List, Unspecified\n\nDescription: The list to split.",
            "types": ["list", "unspecified"]
        },
        {
            "name": "position",
            "title": "Position",
            "description": "Acceptable Types: Number, Unspecified\n\nDescription: The position to split the list.",
            "types": ["number", "unspecified"]
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
            "name": "list1",
            "title": "List 1",
            "description": "Type: List\n\nDescription: The first part of the split list.",
            "types": ["list"]
        },
        {
            "name": "list2",
            "title": "List 2",
            "description": "Type: List\n\nDescription: The second part of the split list.",
            "types": ["list"]
        }
    ],

    code: function(cache) {
        const list = this.GetInputValue("list", cache);
        const position = this.GetInputValue("list", cache);

        this.StoreOutputValue(list.slice(0, position), "list1", cache);
        this.StoreOutputValue(list.slice(position + 1), "list2", cache);
        this.RunNextBlock("action", cache);
    }
};