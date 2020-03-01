module.exports = {
    name: "Print",

    description: "Sends the value you gave to your console. Useful for checking arrays or objects.",

    category: "Extras",

    inputs: [
        {
            "name": "action",
            "title": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "name": "value",
            "title": "Value",
            "description": "Acceptable Types: Unspecified, Undefined, Null, Object, Boolean, Number, Text, List\n\nDescription: The value that you want to send to your console.",
            "types": ["unspecified", "undefined", "null", "object", "boolean", "number", "text", "list"]
        }
    ],

    options: [],

    outputs: [
        {
            "name": "action",
            "title": "Action",
            "description": "Type: Action\n\nDescription: Executes blocks.",
            "types": ["action"]
        }
    ],

    code: function(cache) {
        const content = this.GetInputValue("value", cache);

        console.log(content);

        this.RunNextBlock("action", cache);
    }
};