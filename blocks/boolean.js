module.exports = {
    name: "Boolean",

    description: "Create boolean to use it in your blocks.",

    category: "Inputs",

    auto_execute: true,

    inputs: [],

    options: [
        {
            "name": "boolean_type",
            "title": "Boolean Type",
            "description": "Description: The boolean you want to set.",
            "type": "SELECT",
            "options": {
                "true": "true",
                "false": "false"
            }
        }
    ],

    outputs: [
        {
            "name": "boolean",
            "title": "Boolean",
            "description": "Type: Boolean\n\nDescription: The boolean you set.",
            "types": ["boolean"]
        }
    ],

    code: function(cache) {
        this.StoreOutputValue(this.GetOptionValue("boolean_type", cache) == "true" ? true : false, "boolean", cache);
    }
};