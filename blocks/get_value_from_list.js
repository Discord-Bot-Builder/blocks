module.exports = {
    name: "Get Value in List",

    description: "Get a value in the list.",

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
            "description": "Acceptable Types: List, Unspecified\n\nDescription: The list to get the value.",
            "types": ["list", "unspecified"]
        },
        {
            "name": "custom_position",
            "title": "Custom Position",
            "description": "Acceptable Types: Number, Unspecified\n\nDescription: The custom position to get the value to the list. Starts at 0. (Only use this input if you selected the option \"Custom Position\")",
            "types": ["number", "unspecified"]
        }
    ],

    options: [
        {
            "name": "postion_type",
            "title": "Postion Type",
            "description": "Description: Select the position to get the value in the list.",
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
            "name": "value",
            "title": "Value",
            "description": "Type: Unspecified\n\nDescription: The value you got in the list.",
            "types": ["unspecified"]
        }
    ],

    code: function(cache) {
        const list = this.GetInputValue("list", cache);
        const custom_position = parseInt(this.GetInputValue("custom_position", cache));
        const postion_type = this.GetOptionValue("postion_type", cache);
        
        let value;
        switch(postion_type) {
            case "first":
                value = list[0];
                break;
            case "last":
                value = list[list.length-1];
                break;
             case "random":
                value = list[Math.round(Math.random() * (list.length - 1))];
                break;
            case "custom":
                value = list[custom_position];
                break;
        }

        this.StoreOutputValue(value, "value", cache);
        this.RunNextBlock("action", cache);
    }
};