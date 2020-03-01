module.exports = {
    name: "Send Message",

    description: "Sends message.",

    category: "Message Stuff",

    inputs: [
        {
            "name": "action",
            "title": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "name": "channel",
            "title": "Channel",
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The chat channel (ex.: Text Channel) you want to send this message.",
            "types": ["object", "unspecified"]
        },
        {
            "name": "text",
            "title": "Text",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: The text you want to put in the message. (OPTIONAL)",
            "types": ["text", "unspecified"]
        },
        {
            "name": "embed",
            "title": "Embed",
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The embed you want to put in the message. (OPTIONAL)",
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
        },
        {
            "name": "message",
            "title": "Message",
            "description": "Type: Object\n\nDescription: The message you got with this message.",
            "types": ["object"]
        }
    ],

    code: function(cache) {
        const channel = this.GetInputValue("channel", cache);
        const text = this.GetInputValue("text", cache);
        const embed = this.GetInputValue("embed", cache);

        const _this = this;

        channel.send(text, embed).then(function(msg) {
            _this.StoreOutputValue(msg, "message", cache);
            _this.RunNextBlock("action", cache);
        });
    }
};