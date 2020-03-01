module.exports = {
    name: "Set Embed Thumbnail",

    description: "Sets a thumbnail to the embed.",

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
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The embed you want to set the thumbnail.",
            "types": ["object", "unspecified"]
        },
        {
            "name": "thumbnail",
            "title": "Thumbnail URL",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: The thumbnail URL you want to set to the embed.",
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
            "description": "Type: Object\n\nDescription: The message embed with the thumbnail already set.",
            "types": ["object"]
        }
    ],

    code: function(cache) {
        const embed = this.GetInputValue("embed", cache);
        const thumbnail = this.GetInputValue("thumbnail", cache);

        this.StoreOutputValue(embed.setThumbnail(thumbnail), "embed", cache);
        this.RunNextBlock("action", cache);
    }
};