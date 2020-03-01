module.exports = {
    name: "Get Message Info",

    description: "Get message information.",

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
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The message you want to get information.",
            "types": ["object", "unspecified"]
        }
    ],

    options: [
        {
            "name": "info",
            "title": "Message Info",
            "description": "Description: Message information you want to get.",
            "type": "SELECT",
            "options": {
                1: "Message Attachment List [List <Message Attachment>]",
                2: "Message Author [User]",
                3: "Message Channel [Text Channel]",
                4: "Message Clean Content [Text]",
                5: "Message Content [Text]",
                6: "Message Created At [Date]",
                7: "Is Message Deletable By The Bot? [Boolean]",
                8: "Has Message Been Deleted? [Boolean]",
                9: "Is Message Editable By The Bot? [Boolean]",
                10: "Message Edited At [Date]",
                11: "Cached Edited Message List [List <Message>]",
                12: "Message Embed List [List <Message Embed>]",
                13: "Message Server [Server]",
                14: "Is Message A Hit In A Search? [Boolean]",
                15: "Message ID [Text]",
                16: "Message Author [Member]",
                17: "Message Channel Mention List [List <Channel>]",
                18: "Message Member Mention List [List <Member>]",
                19: "Message Role Mention List [List <Role>]",
                20: "Message User Mention List [List <User>]",
                21: "Has Message Been Mentioned @everyone/@here? [Boolean]",
                22: "Message Nonce [Text]",
                23: "Is Message Pinnable By The Bot? [Boolean]",
                24: "Is Message Pinned? [Boolean]",
                25: "Message Reaction List [List <Message Reaction>]",
                26: "Was Message Sent By Discord? [Boolean]",
                27: "Was Message Text-To-Speech? [Boolean]",
                28: "Message Type [Text]",
                29: "Message URL [Text]",
                30: "Message Webhook [Webhook]",
                31: "Message Webhook ID [Text]"
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
            "description": "Type: Unspecified\n\nDescription: Result you got with the message.",
            "types": ["unspecified"]
        }
    ],

    code: function(cache) {
        const message = this.GetInputValue("message", cache);
        const info = parseInt(this.GetOptionValue("info", cache));

        let result;
        switch(info) {
            case 1:
                result = message.attachments.array();
                break;
            case 2:
                result = message.author;
                break;
            case 3:
                result = message.channel;
                break;
            case 4:
                result = message.cleanContent;
                break;
            case 5:
                result = message.content;
                break;
            case 6:
                result = message.createdAt;
                break;
            case 7:
                result = message.deletable;
                break;
            case 8:
                result = message.deleted;
                break;
            case 9:
                result = message.editable;
                break;
            case 10:
                result = message.editedAt;
                break;
            case 11:
                result = message.edits;
                break;
            case 12:
                result = message.embeds;
                break;
            case 13:
                result = message.guild;
                break;
            case 14:
                result = message.hit;
                break;
            case 15:
                result = message.id;
                break;
            case 16:
                result = message.member;
                break;
            case 17:
                result = message.mentions.channels.array();
                break;
            case 18:
                result = message.mentions.members.array();
                break;
            case 19:
                result = message.mentions.roles.array();
                break;
            case 20:
                result = message.mentions.users.array();
                break;
            case 21:
                result = message.mentions.everyone;
                break;
            case 22:
                result = message.nonce;
                break;
            case 23:
                result = message.pinnable;
                break;
            case 24:
                result = message.pinned;
                break;
            case 25:
                result = message.reactions.array();
                break;
            case 26:
                result = message.system;
                break;
            case 27:
                result = message.tts;
                break;
            case 28:
                result = message.type;
                break;
            case 29:
                result = message.url;
                break;
            case 30:
                message.fetchWebhook().then(webhook => {
                    this.StoreOutputValue(webhook.array(), "result", cache);
                    this.RunNextBlock("action", cache);
                    return;
                });
            case 31:
                result = message.webhookID;
                break;
        }

        this.StoreOutputValue(result, "result", cache);
        this.RunNextBlock("action", cache);
    }
};