module.exports = {
    name: "Remove Value from List",

    description: "Remove a value from the list.",

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
            "description": "Acceptable Types: List, Unspecified\n\nDescription: The list to remove the value.",
            "types": ["list", "unspecified"]
        },
        {
            "name": "custom_position",
            "title": "Custom Position",
            "description": "Acceptable Types: Number, Unspecified\n\nDescription: The custom position to remove the value from the list. Starts at 0. (Only use this input if you selected the option \"Custom Position\")",
            "types": ["number", "unspecified"]
        }
    ],

    options: [
        {
            "name": "postion_type",
            "title": "Postion Type",
            "description": "Description: Select the position to remove the value from the list.",
            "type": "SELECT",
            "options": {
                "first": "First Position",
                "last": "Last Position",
                "random": "Random Position",
                "custom": "Custom Position"
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
            "name": "list",
            "title": "List",
            "description": "Type: List\n\nDescription: The list with the value removed.",
            "types": ["list"]
        }
    ],

    code: function(cache) {
        const list = this.GetInputValue("list", cache);
        const custom_position = parseInt(this.GetInputValue("custom_position", cache));
        const postion_type = this.GetOptionValue("postion_type", cache);

        switch(postion_type) {
            case "first":
                list.shift();
                break;
            case "last":
                list.pop();
                break;
            case "random":
                list.splice(Math.round(Math.random() * list.length), 1);
                break;
            case "custom":
                list.splice(custom_position, 1);
                break;
        }

        this.StoreOutputValue(list, "list", cache);
        this.RunNextBlock("action", cache);
    }
};