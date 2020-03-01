module.exports = {
    name: "Set Bot Activity",

    description: "Set an activity to your bot.",

    category: "Bot Stuff",

    inputs: [
        {
            "name": "action",
            "title": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "name": "activity_name",
            "title": "Activity Name",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: The activity name for the bot.",
            "types": ["text", "unspecified"]
        },
        {
            "name": "activity_twitch_url",
            "title": "Activity Twitch URL",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: The activity Twitch stream URL for the bot. (Only require if you set \"Streaming\" in \"Activity Type\")",
            "types": ["text", "unspecified"]
        }
    ],

    options: [
        {
            "name": "activity_type",
            "title": "Activity Type",
            "description": "Description: Activity type to the bot.",
            "type": "SELECT",
            "options": {
                "playing": "Playing",
                "listening": "Listening to",
                "watching": "Watching",
                "streaming": "Streaming"
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
        const activity_name = this.GetInputValue("activity_name", cache);
        const activity_twitch_url = this.GetInputValue("activity_twitch_url", cache);
        const activity_type = this.GetOptionValue("activity_type", cache);

        const obj = {
            "type": activity_type.toUpperCase()
        };

        if(activity_type == "streaming") obj["url"] = activity_twitch_url;

        this.client.user.setActivity(activity_name, obj);

        this.RunNextBlock("action", cache);
    }
};