module.exports = {
    name: "Set Embed Footer",

    description: "Sets a footer to the embed.",

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
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The embed you want to set the footer.",
            "types": ["object", "unspecified"]
        },
        {
            "name": "footer_text",
            "title": "Footer Text",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: The footer text you want to set to the embed.",
            "types": ["text", "unspecified"]
        },
        {
            "name": "footer_icon",
            "title": "Footer Icon",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: The footer icon you want to set to the embed. (OPTIONAL)",
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
            "description": "Type: Object\n\nDescription: The message embed with the timestamp already set.",
            "types": ["object"]
        }
    ],

    code: function(cache) {
        const embed = this.GetInputValue("embed", cache);
        const footer_text = this.GetInputValue("footer_text", cache);
        const footer_icon = this.GetInputValue("footer_icon", cache);

        this.StoreOutputValue(embed.setFooter(footer_text, footer_icon), "embed", cache);
        this.RunNextBlock("action", cache);
    }
};