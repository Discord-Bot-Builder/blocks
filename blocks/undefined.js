module.exports = {
    name: "Undefined",

    description: "Create undefined value to use it in your blocks.",

    category: "Inputs",

    auto_execute: true,

    inputs: [],

    options: [],

    outputs: [
        {
            "name": "undefined",
            "title": "Undefined",
            "description": "Type: Undefined\n\nDescription: The undefined value.",
            "types": ["undefined"]
        }
    ],

    code: function(cache) {
        this.StoreOutputValue(undefined, "undefined", cache);
    }
};