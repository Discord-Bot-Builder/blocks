module.exports = {
    name: "Get Message Arguments",

    description: "Get the message arguments.",

    category: "Message Stuff",

    inputs: [
        {
            "name": "action",
            "title": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "name": "message",
            "title": "Message",
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The message to get the arguments.",
            "types": ["object", "unspecified"]
        },
        {
            "name": "custom_argument_separator",
            "title": "Custom Argument Separator",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: The custom separator for the message arguments. Supports RegExp. Default: /\\s+/. (OPTIONAL)",
            "types": ["text", "unspecified"]
        },
        {
            "name": "argument_number",
            "title": "Argument Number",
            "description": "Acceptable Types: Number, Unspecified\n\nDescription: The number related to your selection in \"Argument Type\".",
            "types": ["number", "unspecified"]
        }
    ],

    options: [
        {
            "name": "argument_type",
            "title": "Argument Type",
            "description": "Description: The message argument to get.",
            "type": "SELECT",
            "options": {
                "one_argument": "One Argument",
                "multiple_arguments": "Multiple Arguments",
                "mentioned_user": "Mentioned User",
                "mentioned_member": "Mentioned Member",
                "mentioned_role": "Mentioned Role",
                "mentioned_channel": "Mentioned Channel"
            }
        }
    ],

    outputs: [
        {
            "name": "action",
            "title": "Action",
            "description": "Type: Action\n\nDescription: Executes blocks.",
            "types": ["action"]
        },
        {
            "name": "result",
            "title": "Result",
            "description": "Type: Unspecified\n\nDescription: The message argument you got. The value can be undefined.",
            "types": ["unspecified"]
        }
    ],

    code: function(cache) {
        const message = this.GetInputValue("message", cache);
        const separator = this.GetInputValue("custom_argument_separator", cache) || "\\s+";
        const argument_number = parseInt(this.GetInputValue("argument_number", cache)) || 0;
        const argument_type = this.GetOptionValue("argument_type", cache);

        const content = message.content.trim();

        function ConvertRegex(q, x) {
            let flags = q.replace(/.*\/([gimuy]*)$/, '$1');
            if (flags === q) flags = '';
            let pattern = (flags ? q.replace(new RegExp('^/(.*?)/' + flags + '$'), '$1') : q);
            try { return new RegExp(pattern, x ? flags + "g" : flags); } catch (e) { return null; }
        }

        let result;
        switch(argument_type) {
            case "one_argument":
                result = content.split(ConvertRegex(separator))[argument_number];
                break;
            case "multiple_arguments":
                const arrayy = [];
                const reg = ConvertRegex(separator, true);
                while(rE = reg.exec(content)) {
                    arrayy.push(rE);
                }
                if(argument_number > arrayy.length || argument_number < 0) {
                    break;
                } else if(argument_number == 0) {
                    result = content.substring(0, arrayy[argument_number].index);
                } else {
                    result = content.substring(arrayy[argument_number - 1].index + arrayy[argument_number - 1][0].length);
                }
                break;
            case "mentioned_user":
                if(message.mentions.users.size) {
                    const users = message.mentions.users.array();
                    if(users[argument_number - 1]) result = users[argument_number - 1];
                }
                break;
            case "mentioned_member":
                if(message.mentions.members.size) {
                    const members = message.mentions.members.array();
                    if(members[argument_number - 1]) result = members[argument_number - 1];
                }
                break;
            case "mentioned_role":
                if(message.mentions.roles.size) {
                    const roles = message.mentions.roles.array();
                    if(roles[argument_number - 1]) result = roles[argument_number - 1];
                }
                break
            case "mentioned_channel":
                if(message.mentions.channels.size) {
                    const channels = message.mentions.channels.array();
                    if(channels[argument_number - 1]) result = channels[argument_number - 1];
                }
                break;
            default:
                break;
        }

        this.StoreOutputValue(result, "result", cache);
        this.RunNextBlock("action", cache);
    }
};