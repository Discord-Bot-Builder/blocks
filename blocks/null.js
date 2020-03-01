module.exports = {
    name: "Null",

    description: "Create null value to use it in your blocks.",

    category: "Inputs",

    auto_execute: true,

    inputs: [],

    options: [],

    outputs: [
        {
            "name": "null",
            "title": "Null",
            "description": "Type: Null\n\nDescription: The null value.",
            "types": ["null"]
        }
    ],

    code: function(cache) {
        this.StoreOutputValue(null, "null", cache);
    }
};