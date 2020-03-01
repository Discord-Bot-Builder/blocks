module.exports = {
    name: "Bot Initialization [Event]",

    description: "When your bot becomes ready to start working, this event will trigger.",

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
        }
    ],

    code: function(cache) {
        this.RunNextBlock("action", cache);
    }
};