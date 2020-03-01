module.exports = {
    name: "Message Sent [Event]",

    description: "When someone sends a message, this event will trigger",

    category: "Events",

    auto_execute: true,

    inputs: [],

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
            "description": "Type: Object\n\nDescription: The message sent by someone.",
            "types": ["object"]
        }
    ],

    code: function(cache) {
        this.client.on("message", msg => {
            this.StoreOutputValue(msg, "message", cache);
            this.RunNextBlock("action", cache);
        });
    }
};