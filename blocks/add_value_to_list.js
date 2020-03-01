module.exports = {
    name: "Add Value to List",

    description: "Add a value to the list.",

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
            "description": "Acceptable Types: List, Unspecified\n\nDescription: The list you want to add the value.",
            "types": ["list", "unspecified"]
        },
        {
            "name": "value",
            "title": "Value",
            "description": "Acceptable Types: Unspecified, Undefined, Null, Object, Boolean, Date, Number, Text, List\n\nDescription: The value you want to add to the list.",
            "types": ["unspecified", "undefined", "null", "object", "boolean", "date", "number", "text", "list"]
        },
        {
            "name": "custom_position",
            "title": "Custom Position",
            "description": "Acceptable Types: Number, Unspecified\n\nDescription: The custom position to add the value to the list. Starts at 0. (Only use this input if you selected the option \"Custom Position\")",
            "types": ["number", "unspecified"]
        }
    ],

    options: [
        {
            "name": "postion_type",
            "title": "Postion Type",
            "description": "Description: Select the position to add the value to the list.",
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
            "description": "Type: List\n\nDescription: The list with the value added.",
            "types": ["list"]
        }
    ],

    code: function(cache) {
        const list = this.GetInputValue("list", cache);
        const value = this.GetInputValue("value", cache);
        const custom_position = parseInt(this.GetInputValue("custom_position", cache));
        const postion_type = this.GetOptionValue("postion_type", cache);

        switch(postion_type) {
            case "first":
                list.unshift(value);
                break;
            case "last":
                list.push(value);
                break;
            case "random":
                list.splice(Math.round(Math.random() * list.length), 0, value);
                break;
            case "custom":
                list.splice(custom_position, 0, value);
                break;
        }

        this.StoreOutputValue(list, "list", cache);
        this.RunNextBlock("action", cache);
    }
};