module.exports = {
    name: "Create Embed",

    description: "Create an embed to use it in your message.",

    category: "Embed",

    inputs: [
        {
            "name": "action",
            "title": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
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
            "description": "Type: Object\n\nDescription: The created message embed.",
            "types": ["object"]
        }
    ],

    code: function(cache) {
        const DiscordJS = require("discord.js");

        this.StoreOutputValue(new DiscordJS.RichEmbed(), "embed", cache);
        this.RunNextBlock("action", cache);
    }
};