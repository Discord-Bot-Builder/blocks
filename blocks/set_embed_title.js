module.exports = {
    name: "Set Embed Title",

    description: "Sets a title to the embed.",

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
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The embed you want to set the title.",
            "types": ["object", "unspecified"]
        },
        {
            "name": "title",
            "title": "Title",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: The title you want to set to the embed.",
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
            "description": "Type: Object\n\nDescription: The message embed with the title already set.",
            "types": ["object"]
        }
    ],

    code: function(cache) {
        const embed = this.GetInputValue("embed", cache);
        const title = this.GetInputValue("title", cache);

        this.StoreOutputValue(embed.setTitle(title), "embed", cache);
        this.RunNextBlock("action", cache);
    }
};