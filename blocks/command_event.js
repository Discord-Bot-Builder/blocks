module.exports = {
    name: "Command [Event]",

    description: "When someone types a bot command, this event will trigger.",

    category: "Events",

    auto_execute: true,

    inputs: [
        {
            "name": "command_name",
            "title": "Command Name",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: This is what the user types, including the prefix, to trigger this bot command.",
            "types": ["text", "unspecified"]
        },
        {
            "name": "custom_prefix",
            "title": "Custom Prefix",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: The prefix is useful for distinguishing commands from other bots. If not set, this uses the default prefix (you can change the default prefix in the Bot Menu). (OPTIONAL)",
            "types": ["text", "unspecified"]
        },
        {
            "name": "command_slowmode",
            "title": "Command Slowmode",
            "description": "Acceptable Types: Number, Unspecified\n\nDescription: Users will not be able to use this command per the millisecond interval set here. (OPTIONAL)",
            "types": ["number", "unspecified"]
        }
    ],

    options: [
        {
            "name": "command_restriction",
            "title": "Command Restriction",
            "description": "Description: The user will not be able to use this command if a command restriction applies.",
            "type": "SELECT",
            "options": {
                "none": "None",
                "server_only": "Server Only",
                "server_owner_only": "Server Owner Only",
                "bot_owner_only": "Bot Owner Only",
                "dms_only": "DMs Only"
            }
        },
        {
            "name": "required_user_permission",
            "title": "Required User Permission",
            "description": "Description: The required user permission to use this command.",
            "type": "SELECT",
            "options": {
                "none": "None",
                "administrator": "Administrator",
                "create_instant_invite": "Create Instant Invite",
                "kick_members": "Kick Members",
                "ban_members": "Ban Members",
                "manage_channels": "Manage Channels",
                "manage_guild": "Manage Server",
                "add_reactions": "Add Reactions",
                "view_audit_log": "View Audit Log",
                "priority_speaker": "Priority Speaker",
                "view_channel": "Read Text Channels & See Voice Channels",
                "send_messages": "Send Messages",
                "send_tts_messages": "Send TTS Messages",
                "manage_messages": "Manage Messages",
                "embed_links": "Embed Links",
                "attach_files": "Attach Files",
                "read_message_history": "Read Message History",
                "mention_everyone": "Mention Everyone",
                "external_emojis": "Use External Emojis",
                "connect": "Connect (Connect to a voice channel)",
                "speak": "Speak (Speak in a voice channel)",
                "mute_members": "Mute Members (Mute members across all voice channels)",
                "deafen_members": "Deafen Members (Deafen members across all voice channels)",
                "move_members": "Move Members (Move members between voice channels)",
                "use_vad": "Use Voice Activity",
                "change_nickname": "Change Nickname",
                "manage_nicknames": "Manage Nicknames (Change other members' nicknames)",
                "manage_roles": "Manage Roles",
                "manage_webhooks": "Manage Webhooks",
                "manage_emojis": "Manage Emojis"
            }
        },
        {
            "name": "case_sensitive",
            "title": "Case Sensitive",
            "description": "Description: If you select \"no\", for example, \"play\", \"PLAY\" and \"PlAy\" are the same. This is useful if you want commands with the same name but with different case variants.",
            "type": "SELECT",
            "options": {
                "yes": "Yes",
                "no": "No"
            }
        },
        {
            "name": "command_slowmode_restriction",
            "title": "Command Slowmode Restriction",
            "description": "Description: Select the restriction that will affect the user's slowmode at each location. Only use this if you enter a value in \"Commmand Slowmode\".",
            "type": "SELECT",
            "options": {
                "channel": "Per Channel",
                "server/dm": "Per Server/DM",
                "everywhere": "Everywhere",
            }
        }
    ],

    outputs: [
        {
            "name": "action1",
            "title": "Action",
            "description": "Type: Action\n\nDescription: Executes blocks if there is no error message.",
            "types": ["action"]
        },
        {
            "name": "action2",
            "title": "Action (Error)",
            "description": "Type: Action\n\nDescription: Executes blocks if there is any error message.",
            "types": ["action"]
        },
        {
            "name": "message",
            "title": "Message",
            "description": "Type: Object\n\nDescription: The command author's message.",
            "types": ["object"]
        },
        {
            "name": "channel",
            "title": "Channel",
            "description": "Type: Object\n\nDescription: The command author's message channel.",
            "types": ["object"]
        },
        {
            "name": "user",
            "title": "User",
            "description": "Type: Object\n\nDescription: The command author.",
            "types": ["object"]
        },
        {
            "name": "error_message",
            "title": "Error Message",
            "description": "Type: Object\n\nDescription: An error message is given here when the user is still in slowmode, does not have the required permission or other restriction violated.\n\nPossible Values: command_restriction, user_permission, user_slowmode, nothing",
            "types": ["text"]
        }
    ],

    code: function(cache) {
        const command_name = this.GetInputValue("command_name", cache) || "";
        const custom_prefix = this.GetInputValue("custom_prefix", cache);
        const command_slowmode = parseInt(this.GetInputValue("command_slowmode", cache));

        const command_restriction = this.GetOptionValue("command_restriction", cache);
        const required_user_permission = this.GetOptionValue("required_user_permission", cache);
        const case_sensitive = this.GetOptionValue("case_sensitive", cache) == "yes" ? true : false;
        const command_slowmode_restriction = this.GetOptionValue("command_slowmode_restriction", cache);

        const prefix = custom_prefix ? custom_prefix : "prefix" in this.data ? this.data.prefix : "!";

        function CheckCommandRestriction(msg) {
            switch(command_restriction) {
                case "server_only":
                    return [Boolean(msg.guild), CheckPermission(msg.member)];
                case "server_owner_only":
                    return [msg.guild && msg.guild.owner == msg.member, true];
                case "bot_owner_only":
                    return ["owners" in this.data && this.data.owners.includes(msg.author.id), true];
                case "dms_only":
                    return [msg.channel.type == "dm", true];
                default: // case "none":
                    if(msg.guild) {
                        return [true, CheckPermission(msg.member)];
                    } else {
                        return [true, true];
                    }
            }
        }

        function CheckPermission(member) {
            if(required_user_permission == "none") return true;
            return member.hasPermission(required_user_permission, false, true, true);
        }

        let timers = {};

        function CheckSlowmode(msg) {
            switch (command_slowmode_restriction) {
                case "channel":
                    if(msg.author.id in timers && msg.channel.id in timers[msg.author.id] && timers[msg.author.id][msg.channel.id] >= Date.now()) return false;

                    if(!(msg.author.id in timers)) timers[msg.author.id] = {};
                    timers[msg.author.id][msg.channel.id] = Date.now() + command_slowmode;
                    return true;
                case "server/dm":
                    if(msg.guild) {
                        if(msg.author.id in timers && msg.guild.id in timers[msg.author.id] && timers[msg.author.id][msg.guild.id] >= Date.now()) return false;

                        if(!(msg.author.id in timers)) timers[msg.author.id] = {};
                        timers[msg.author.id][msg.guild.id] = Date.now() + command_slowmode;
                        return true;
                    } else if(msg.channel.type == "dm") {
                        if(msg.author.id in timers && msg.channel.id in timers[msg.author.id] && timers[msg.author.id][msg.channel.id] >= Date.now()) return false;

                        if(!(msg.author.id in timers)) timers[msg.author.id] = {};
                        timers[msg.author.id][msg.channel.id] = Date.now() + command_slowmode;
                        return true;
                    }
                case "everywhere":
                    if(msg.author.id in timers && timers[msg.author.id] >= Date.now()) return false;

                    timers[msg.author.id] = Date.now() + command_slowmode;
                    return true;
            }
        }

        const ActionError = function(msg, reason) {
            this.StoreOutputValue(msg, "message", cache);
            this.StoreOutputValue(msg.channel, "channel", cache);
            this.StoreOutputValue(msg.author, "user", cache);
            this.StoreOutputValue(reason, "error_message", cache);
            this.RunNextBlock("action2", cache);
        }.bind(this);

        this.client.on("message", msg => {
            if(msg.author.bot) return;

            if(!(msg.content && msg.content.trim() && (case_sensitive ? msg.content.trim().startsWith(prefix + command_name) : msg.content.trim().toLowerCase().startsWith(prefix + command_name.toLowerCase())))) {
                return;
            }

            const _res = CheckCommandRestriction(msg);

            if(!_res[0]) {
                ActionError(msg, "command_restriction");
                return;
            } else if(!_res[1]) {
                ActionError(msg, "user_permission");
                return;
            }

            if(command_slowmode && !CheckSlowmode(msg)) {
                ActionError(msg, "user_slowmode");
                return;
            }

            this.StoreOutputValue(msg, "message", cache);
            this.StoreOutputValue(msg.channel, "channel", cache);
            this.StoreOutputValue(msg.author, "user", cache);
            this.StoreOutputValue("nothing", "error_message", cache);
            this.RunNextBlock("action1", cache);
        });
    }
};