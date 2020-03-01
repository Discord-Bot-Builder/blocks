module.exports = {
    name: "Set Bot Status",

    description: "Set a status for your bot.",

    category: "Bot Stuff",

    inputs: [
        {
            "name": "action",
            "title": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        }
    ],

    options: [
        {
            "name": "status_type",
            "title": "Status Type",
            "description": "Description: Status type to the bot.",
            "type": "SELECT",
            "options": {
                "online": "Online",
                "dnd": "Do Not Disturb",
                "idle": "Idle",
                "invisible": "Invisible"
            }
        }
    ],

    outputs: [
        {
            "name": "action",
            "title": "Action",
            "description": "Type: Action\n\nDescription: Executes blocks.",
            "types": ["action"]
        }
    ],

    code: function(cache) {
        const status_type = this.GetOptionValue("status_type", cache);

        this.client.user.setStatus(status_type);

        this.RunNextBlock("action", cache);
    }
};