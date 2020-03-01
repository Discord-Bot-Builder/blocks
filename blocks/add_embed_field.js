module.exports = {
    name: "Add Embed Field",

    description: "Adds a field to the embed.",

    category: "Embed",

    inputs: [
        {
            "name": "action",
            "title": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "name": "embed",
            "title": "Embed",
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The embed you want to add the field.",
            "types": ["object", "unspecified"]
        },
        {
            "name": "field_name",
            "title": "Field Name",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: The field name you want to add to the embed.",
            "types": ["text", "unspecified"]
        },
        {
            "name": "field_value",
            "title": "Field Value",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: The field value you want to add to the embed.",
            "types": ["text", "unspecified"]
        },
        {
            "name": "field_inline",
            "title": "Field Inline",
            "description": "Acceptable Types: Boolean, Unspecified\n\nDescription: The field inline you want to display to the embed. (OPTIONAL)",
            "types": ["boolean", "unspecified"]
        }
    ],

    options: [],

    outputs: [
        {
            "name": "action",
            "title": "Action",
            "description": "Type: Action\n\nDescription: Executes blocks.",
            "types": ["action"]
        },
        {
            "name": "embed",
            "title": "Embed",
            "description": "Type: Object\n\nDescription: The message embed with the field already added.",
            "types": ["object"]
        }
    ],

    code: function(cache) {
        const embed = this.GetInputValue("embed", cache);
        const field_name = this.GetInputValue("field_name", cache);
        const field_value = this.GetInputValue("field_value", cache);
        const field_inline = this.GetInputValue("field_inline", cache);

        this.StoreOutputValue(embed.addField(field_name, field_value, field_inline), "embed", cache);
        this.RunNextBlock("action", cache);
    }
};