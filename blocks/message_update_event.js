module.exports = {
    name: "Message Update [Event]",

    description: "When someone updates/edits a message, this event will trigger.",

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
            "name": "old_message",
            "title": "Old Message",
            "description": "Type: Object\n\nDescription: The message before the update.",
            "types": ["object"]
        },
        {
            "name": "new_message",
            "title": "New Message",
            "description": "Type: Object\n\nDescription: The message after the update.",
            "types": ["object"]
        }
    ],

    code: function(cache) {
        this.client.on("messageUpdate", (oldmsg, newmsg) => {
            this.StoreOutputValue(oldmsg, "old_message", cache);
			this.StoreOutputValue(newmsg, "new_message", cache);
            this.RunNextBlock("action", cache);
        });
    }
};