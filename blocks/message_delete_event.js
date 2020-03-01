module.exports = {
    name: "Message Delete [Event]",

    description: "When someone deletes a message, this event will trigger",

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
            "name": "message",
            "title": "Message",
            "description": "Type: Object\n\nDescription: The deleted message.",
            "types": ["object"]
        },
        {
            "name": "user",
            "title": "User",
            "description": "Type: Object\n\nDescription: The user that deleted the message. (This is UNSTABLE and INACCURATE and can return an undefined value)",
            "types": ["object", "undefined"]
        }
    ],

    code: function(cache) {
        this.client.on("messageDelete", async msg => {
            this.StoreOutputValue(msg, "message", cache);

            if(msg.guild.me.permissions.has("VIEW_AUDIT_LOG")) {
                const entry = await msg.guild.fetchAuditLogs({type: "MESSAGE_DELETE"}).then(audit => audit.entries.first());
                if(entry) {
                    const channelCondition = entry.extra && entry.extra.channel && entry.extra.channel.id === msg.channel.id;
                    const userCondition = entry.target && entry.target.id === user.id;
            
                    if(channelCondition && userCondition && entry.createdTimestamp > Date.now() - 5000) {
                        const executor = entry.executor;
                        if(executor) {
                            this.StoreOutputValue(executor, "user", cache);
                        }
                    }
                }
            }

            this.RunNextBlock("action", cache);
        });
    }
};