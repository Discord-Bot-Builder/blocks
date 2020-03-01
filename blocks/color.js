module.exports = {
    name: "Color",

    description: "Create color to use it in your blocks.",

    category: "Inputs",

    auto_execute: true,

    inputs: [],

    options: [
        {
            "name": "color",
            "title": "Color",
            "description": "Description: The color you want to set.",
            "type": "COLOR"
        }
    ],

    outputs: [
        {
            "name": "color",
            "title": "Color",
            "description": "Type: Text\n\nDescription: The color you set.",
            "types": ["text"]
        }
    ],

    code: function(cache) {
        this.StoreOutputValue(this.GetOptionValue("color", cache), "color", cache);
    }
};