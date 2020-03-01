module.exports = {
    name: "Set Embed Author",

    description: "Sets an author to the embed.",

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
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The embed you want to set the author.",
            "types": ["object", "unspecified"]
        },
        {
            "name": "author_name",
            "title": "Author Name",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: The author name you want to set to the embed.",
            "types": ["text", "unspecified"]
        },
        {
            "name": "author_avatar",
            "title": "Author Avatar",
            "description": "Acceptable Types: Text\n\nDescription: The author avatar you want to set to the embed. (OPTIONAL)",
            "types": ["text"]
        },
        {
            "name": "author_link",
            "title": "Author Link",
            "description": "Acceptable Types: Text\n\nDescription: The author link you want to set to the embed that an user can click. (OPTIONAL)",
            "types": ["text"]
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
            "description": "Type: Object\n\nDescription: The message embed with the author already set.",
            "types": ["object"]
        }
    ],

    code: function(cache) {
        const embed = this.GetInputValue("embed", cache);
        const author_name = this.GetInputValue("author_name", cache);
        const author_avatar = this.GetInputValue("author_avatar", cache);
        const author_link = this.GetInputValue("title", cache);

        this.StoreOutputValue(embed.setAuthor(author_name, author_avatar, author_link), "embed", cache);
        this.RunNextBlock("action", cache);
    }
};