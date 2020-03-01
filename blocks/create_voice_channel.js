module.exports = {
    name: "Create Voice Channel",

    description: "Create a new voice channel in the server.",

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
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The server to create this voice channel.",
            "types": ["object", "unspecified"]
        },
        {
            "name": "channel_name",
            "title": "Channel Name",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: The name for this voice channel.",
            "types": ["text", "unspecified"]
        },
        {
            "name": "channel_position",
            "title": "Channel Position",
            "description": "Acceptable Types: Number, Unspecified\n\nDescription: The position for this voice channel. (OPTIONAL)",
            "types": ["number", "unspecified"]
        },
        {
            "name": "channel_userlimit",
            "title": "Channel User Limit",
            "description": "Acceptable Types: Number, Unspecified\n\nDescription: The user limit for this voice channel. (OPTIONAL)",
            "types": ["number", "unspecified"]
        },
        {
            "name": "channel_bitrate",
            "title": "Channel Bitrate",
            "description": "Acceptable Types: Number, Unspecified\n\nDescription: The bitrate for this voice channel. (OPTIONAL)",
            "types": ["number", "unspecified"]
        },
        {
            "name": "channel_category",
            "title": "Channel Category",
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The category to add this voice channel. (OPTIONAL)",
            "types": ["object", "unspecified"]
        },
        {
            "name": "reason",
            "title": "Reason",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: The reason for creating this voice channel. (OPTIONAL)",
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
            "name": "voice_channel",
            "title": "Voice Channel",
            "description": "Type: Object\n\nDescription: This created voice channel.",
            "types": ["object"]
        }
    ],

    code: function(cache) {
        const server = this.GetInputValue("server", cache);
        const channel_name = this.GetInputValue("channel_name", cache);
        const channel_position = parseInt(this.GetInputValue("channel_position", cache));
        const channel_userlimit = parseInt(this.GetInputValue("channel_userlimit", cache));
        const channel_bitrate = parseInt(this.GetInputValue("channel_bitrate", cache));
        const channel_category = this.GetInputValue("channel_category", cache);
        const reason = this.GetInputValue("reason", cache);

        server.createChannel(channel_name, {
            type: "voice",
            position: channel_position,
            bitrate: channel_bitrate,
            userLimit: channel_userlimit,
            parent: channel_category,
            reason
        }).then(channel => {
            this.StoreOutputValue(channel, "voice_channel", cache);
            this.RunNextBlock("action", cache);
        });
    }
};