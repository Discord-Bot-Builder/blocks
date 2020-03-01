module.exports = {
    name: "Get Invite Info",

    description: "Get invite information.",

    category: "Invite Stuff",

    inputs: [
        {
            "name": "action",
            "title": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "name": "Invite",
            "title": "Invite",
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The invite you want to get information.",
            "types": ["object", "unspecified"]
        }
    ],

    options: [
        {
            "name": "info",
            "title": "Invite Info",
            "description": "Description: Invite information you want to get.\n\nNOTE: The only guaranteed options are \"Invite Code\", \"Invite URL\", \"Invite Server\", and \"Invite Channel\". Other options can not work. (It's the Discord API's fault)",
            "type": "SELECT",
            "options": {
                1: "Invite Channel [Channel]",
                2: "Invite Code [Text]",
                3: "Invite Created At [Date]",
                4: "Invite Expires At [Date]",
                5: "Invite Server [Server]",
                6: "Invite Inviter [User]",
                7: "Invite Maximum Age In Seconds [Number]",
                8: "Invite Maximum Uses In Seconds [Number]",
                9: "Invite Server Member Count [Number]",
                10: "Invite Server Online Member Count [Number]",
                11: "Is Invite Temporary? [Boolean]",
                12: "Invite Server Text Channel Count [Number]",
                13: "Invite URL [Text]",
                14: "Invite Uses [Number]",
                15: "Invite Server Voice Channel Count [Number]"
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
            "description": "Type: Unspecified\n\nDescription: Result you got with the invite.",
            "types": ["unspecified"]
        }
    ],

    code: function(cache) {
        const invite = this.GetInputValue("invite", cache);
        const info = parseInt(this.GetOptionValue("info", cache));

        let result;
        switch(info) {
            case 1:
                result = invite.channel;
                break;
            case 2:
                result = invite.code;
                break;
            case 3:
                result = invite.createdAt;
                break;
            case 4:
                result = invite.expiresAt;
                break;
            case 5:
                result = invite.guild;
                break;
            case 6:
                result = invite.inviter;
                break;
            case 7:
                result = invite.maxAge;
                break;
            case 8:
                result = invite.maxUses;
                break;
            case 9:
                result = invite.memberCount;
                break;
            case 10:
                result = invite.presenceCount;
                break;
            case 11:
                result = invite.temporary;
                break;
            case 12:
                result = invite.textChannelCount;
                break;
            case 13:
                result = invite.url;
                break;
            case 14:
                result = invite.uses;
                break;
            case 15:
                result = invite.voiceChannelCount;
                break;
        }

        this.StoreOutputValue(result, "result", cache);
        this.RunNextBlock("action", cache);
    }
};