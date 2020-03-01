module.exports = {
    name: "Delete Message",

    description: "Deletes the message.",

    category: "Message Stuff",

    inputs: [
        {
            "name": "action",
            "title": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "name": "message",
            "title": "Message",
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The message you want to delete.",
            "types": ["object", "unspecified"]
        }
    ],

    options: [],

    outputs: [
        {
            "name": "action",
            "title": "Action",
            "description": "Type: Action\n\nDescription: Executes blocks.",
            "types": ["action"]
        }
    ],

    code: function(cache) {
        const message = this.GetInputValue("message", cache);

        message.delete();

        this.RunNextBlock("action", cache);
    }
};