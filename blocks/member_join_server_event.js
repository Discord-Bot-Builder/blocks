module.exports = {
    name: "Member Join Server [Event]",

    description: "When someone joins a server, this event will trigger.",

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
            "name": "member",
            "title": "Member",
            "description": "Type: Object\n\nDescription: The member who joined the server.",
            "types": ["object"]
        }
    ],

    code: function(cache) {
        this.client.on("guildMemberAdd", member => {
            this.StoreOutputValue(member, "member", cache);
            this.RunNextBlock("action", cache);
        });
    }
};