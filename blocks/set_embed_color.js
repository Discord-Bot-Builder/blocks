module.exports = {
    name: "Set Embed Color",

    description: "Sets a color to the embed.",

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
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The embed you want to set the color.",
            "types": ["object", "unspecified"]
        },
        {
            "name": "color",
            "title": "Color",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: The color you want to set to the embed.",
            "types": ["text", "unspecified"]
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
            "description": "Type: Object\n\nDescription: The message embed with the color already set.",
            "types": ["object"]
        }
    ],

    code: function(cache) {
        const embed = this.GetInputValue("embed", cache);
        const color = this.GetInputValue("color", cache);

        this.StoreOutputValue(embed.setColor(color), "embed", cache);
        this.RunNextBlock("action", cache);
    }
};