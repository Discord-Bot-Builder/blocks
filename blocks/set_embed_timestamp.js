module.exports = {
    name: "Set Embed Timestamp",

    description: "Sets a timestamp to the embed.",

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
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The embed you want to set the timestamp.",
            "types": ["object", "unspecified"]
        },
        {
            "name": "timestamp",
            "title": "Timestamp",
            "description": "Acceptable Types: Date, Number, Unspecified\n\nDescription: The timestamp you want to set to the embed. (OPTIONAL)",
            "types": ["date", "number", "unspecified"]
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
        const timestamp = this.GetInputValue("timestamp", cache);

        this.StoreOutputValue(embed.setTimestamp(timestamp), "embed", cache);
        this.RunNextBlock("action", cache);
    }
};