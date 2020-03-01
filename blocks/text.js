module.exports = {
    name: "Text",

    description: "Create text to use it in your blocks.",

    category: "Inputs",

    auto_execute: true,

    inputs: [],

    options: [
        {
            "name": "text",
            "title": "Text",
            "description": "Description: The text you want to set.",
            "type": "TEXT"
        }
    ],

    outputs: [
        {
            "name": "text",
            "title": "Text",
            "description": "Type: Text\n\nDescription: The text you set.",
            "types": ["text"]
        }
    ],

    code: function(cache) {
        this.StoreOutputValue(this.GetOptionValue("text", cache) + "", "text", cache);
    }
};