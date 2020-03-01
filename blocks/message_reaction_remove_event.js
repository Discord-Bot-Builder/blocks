module.exports = {
    name: "Message Reaction Remove [Event]",

    description: "When someone removes a reaction from a message, this event will trigger.",

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
            "name": "reaction",
            "title": "Reaction",
            "description": "Type: Object\n\nDescription: The reaction that was removed.",
            "types": ["object"]
        },
        {
            "name": "user",
            "title": "User",
            "description": "Type: Object\n\nDescription: The user that removed the reaction.",
            "types": ["object"]
        }
    ],

    code: function(cache) {
        this.client.on("messageReactionRemove", (reaction, user) => {
            this.StoreOutputValue(reaction, "reaction", cache);
			this.StoreOutputValue(user, "user", cache);
            this.RunNextBlock("action", cache);
        });
    }
};