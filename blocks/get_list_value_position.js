module.exports = {
    name: "Get List Value Position",

    description: "Search for a value in the list and get its position.",

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
            "description": "Acceptable Types: List, Unspecified\n\nDescription: The list to search for the value.",
            "types": ["list", "unspecified"]
        },
        {
            "name": "value",
            "title": "Value",
            "description": "Acceptable Types: Unspecified, Undefined, Null, Object, Boolean, Date, Number, Text, List\n\nDescription: The value to find in the list.",
            "types": ["unspecified", "undefined", "null", "object", "boolean", "date", "number", "text", "list"]
        },
        {
            "name": "start_at",
            "title": "Start Search At",
            "description": "Acceptable Types: Number, Unspecified\n\nDescription: The index to start the search at. (OPTIONAL)",
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
            "name": "position",
            "title": "Position",
            "description": "Type: Number\n\nDescription: The position of the found value.",
            "types": ["number"]
        }
    ],

    code: function(cache) {
        const list = this.GetInputValue("list", cache);
        const value = this.GetInputValue("value", cache);
        const start_at = this.GetInputValue("start_at", cache);

        this.StoreOutputValue(list.indexOf(value, start_at), "position", cache);
        this.RunNextBlock("action", cache);
    }
};