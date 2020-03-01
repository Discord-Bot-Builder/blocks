module.exports = {
    name: "Create List",

    description: "Create a list to use it in your blocks.",

    category: "List",

    inputs: [
        {
            "name": "action",
            "title": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
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
            "description": "Type: List\n\nDescription: The created list.",
            "types": ["list"]
        }
    ],

    code: function(cache) {
        this.StoreOutputValue([], "list", cache);
        this.RunNextBlock("action", cache);
    }
};