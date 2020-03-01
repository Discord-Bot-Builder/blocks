module.exports = {
    name: "Set Embed URL",

    description: "Sets an URL to the embed.",

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
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The embed you want to set the URL.",
            "types": ["object", "unspecified"]
        },
        {
            "name": "url",
            "title": "URL",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: The URL you want to set to the embed.",
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
            "description": "Type: Object\n\nDescription: The message embed with the URL already set.",
            "types": ["object"]
        }
    ],

    code: function(cache) {
        const embed = this.GetInputValue("embed", cache);
        const url = this.GetInputValue("url", cache);

        this.StoreOutputValue(embed.setURL(url), "embed", cache);
        this.RunNextBlock("action", cache);
    }
};