module.exports = {
    name: "Add Blank Embed Field",

    description: "Adds a blank field to the embed.",

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
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The embed you want to add the blank field.",
            "types": ["object", "unspecified"]
        },
        {
            "name": "field_inline",
            "title": "Field Inline",
            "description": "Acceptable Types: Boolean, Unspecified\n\nDescription: The blank field inline you want to display to the embed. (OPTIONAL)",
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
            "description": "Type: Object\n\nDescription: The message embed with the blank field already added.",
            "types": ["object"]
        }
    ],

    code: function(cache) {
        const embed = this.GetInputValue("embed", cache);
        const field_inline = this.GetInputValue("field_inline", cache);

        this.StoreOutputValue(embed.addBlankField(field_inline), "embed", cache);
        this.RunNextBlock("action", cache);
    }
};