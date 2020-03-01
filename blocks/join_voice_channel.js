module.exports = {
    name: "Join Voice Channel",

    description: "Join the voice channel.",

    category: "Channel Stuff",

    inputs: [
        {
            "name": "action",
            "title": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "name": "voice_channel",
            "title": "Voice Channel",
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The voice channel to join.",
            "types": ["object", "unspecified"]
        }
    ],

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
        const voice_channel = this.GetInputValue("voice_channel", cache);

        voice_channel.join().then(() => {
            this.RunNextBlock("action", cache);
        });
    }
};