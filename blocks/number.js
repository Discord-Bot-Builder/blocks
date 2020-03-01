module.exports = {
    name: "Number",

    description: "Create number to use it in your blocks.",

    category: "Inputs",

    auto_execute: true,

    inputs: [],

    options: [
        {
            "name": "number",
            "title": "Number",
            "description": "Description: The number you want to set.",
            "type": "NUMBER"
        }
    ],

    outputs: [
        {
            "name": "number",
            "title": "Number",
            "description": "Type: Number\n\nDescription: The number you set.",
            "types": ["number"]
        }
    ],

    code: function(cache) {
        this.StoreOutputValue(parseFloat(this.GetOptionValue("number", cache)), "number", cache);
    }
};