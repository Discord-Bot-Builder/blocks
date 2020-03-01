module.exports = {
    name: "Bot Typing",

    description: "Start or stop the typing indicator of your bot in the channel.",

    category: "Bot Stuff",

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
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The channel to start or stop the typing indicator of your bot.",
            "types": ["object", "unspecified"]
        }
    ],

    options: [
        {
            "name": "typing_option",
            "title": "Typing Option",
            "description": "Description: What to do with the typing indicator of your bot.",
            "type": "SELECT",
            "options": {
                "start": "Start Typing",
                "stop": "Stop Typing"
            }
        }
    ],

    outputs: [
        {
            "name": "action",
            "title": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes block.",
            "types": ["action"]
        }
    ],

    code: function(cache) {
        const channel = this.GetInputValue("channel", cache);
        const typing_option = this.GetOptionValue("typing_select", cache);

        if(typing_option == "start") {
            channel.startTyping();
        } else {
            channel.stopTyping(true);
        }

        this.RunNextBlock("action", cache);
    }
};