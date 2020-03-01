module.exports = {
    name: "Add Reaction",

    description: "Adds a reaction to the message.",

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
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The message you want to add the reaction.",
            "types": ["object", "unspecified"]
        },
        {
            "name": "emoji",
            "title": "Emoji",
            "description": "Acceptable Types: Text, Object, Unspecified\n\nDescription: The emoji (ex.: 😃) you want to add to the message. You can put a server emoji here.",
            "types": ["text", "object", "unspecified"]
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
        const emoji = this.GetInputValue("emoji", cache);

        message.react(emoji).then(function() {
            this.RunNextBlock("action", cache);
        });
    }
};