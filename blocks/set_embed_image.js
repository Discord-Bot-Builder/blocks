module.exports = {
    name: "Set Embed Image",

    description: "Sets an image to the embed.",

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
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The embed you want to set the image.",
            "types": ["object", "unspecified"]
        },
        {
            "name": "image",
            "title": "Image URL",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: The image URL you want to set to the embed.",
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
            "description": "Type: Object\n\nDescription: The message embed with the image already set.",
            "types": ["object"]
        }
    ],

    code: function(cache) {
        const embed = this.GetInputValue("embed", cache);
        const image = this.GetInputValue("image", cache);

        this.StoreOutputValue(embed.setImage(image), "embed", cache);
        this.RunNextBlock("action", cache);
    }
};