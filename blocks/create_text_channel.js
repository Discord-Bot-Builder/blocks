module.exports = {
    name: "Create Text Channel",

    description: "Create a new text channel in the server.",

    category: "Channel Stuff",

    inputs: [
        {
            "name": "action",
            "title": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "name": "server",
            "title": "Server",
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The server to create this text channel.",
            "types": ["object", "unspecified"]
        },
        {
            "name": "channel_name",
            "title": "Channel Name",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: The name for this text channel.",
            "types": ["text", "unspecified"]
        },
        {
            "name": "channel_topic",
            "title": "Channel Topic",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: The topic for this text channel. (OPTIONAL)",
            "types": ["text", "unspecified"]
        },
        {
            "name": "channel_position",
            "title": "Channel Position",
            "description": "Acceptable Types: Number, Unspecified\n\nDescription: The position for this text channel. (OPTIONAL)",
            "types": ["number", "unspecified"]
        },
        {
            "name": "channel_nsfw",
            "title": "Channel NSFW",
            "description": "Acceptable Types: Boolean, Unspecified\n\nDescription: Whether this text channel is NSFW. (OPTIONAL)",
            "types": ["boolean", "unspecified"]
        },
        {
            "name": "channel_slowmode",
            "title": "Channel Slowmode",
            "description": "Acceptable Types: Number, Unspecified\n\nDescription: The slowmode for this text channel in seconds. (OPTIONAL)",
            "types": ["number", "unspecified"]
        },
        {
            "name": "channel_category",
            "title": "Channel Category",
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The category to add this text channel. (OPTIONAL)",
            "types": ["object", "unspecified"]
        },
        {
            "name": "reason",
            "title": "Reason",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: The reason for creating this text channel. (OPTIONAL)",
            "types": ["text", "unspecified"]
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
            "name": "text_channel",
            "title": "Text Channel",
            "description": "Type: Object\n\nDescription: This created text channel.",
            "types": ["object"]
        }
    ],

    code: function(cache) {
        const server = this.GetInputValue("server", cache);
        const channel_name = this.GetInputValue("channel_name", cache);
        const channel_topic = this.GetInputValue("channel_topic", cache);
        const channel_position = parseInt(this.GetInputValue("channel_position", cache));
        const channel_nsfw = this.GetInputValue("channel_nsfw", cache);
        const channel_slowmode = this.GetInputValue("channel_slowmode", cache);
        const channel_category = this.GetInputValue("channel_category", cache);
        const reason = this.GetInputValue("reason", cache);

        server.createChannel(channel_name, {
            type: "text",
            position: channel_position,
            topic: channel_topic,
            nsfw: channel_nsfw,
            parent: channel_category,
            rateLimitPerUser: channel_slowmode,
            reason
        }).then(channel => {
            this.StoreOutputValue(channel, "text_channel", cache);
            this.RunNextBlock("action", cache);
        });
    }
};