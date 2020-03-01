module.exports = {
    name: "Get Member Info",

    description: "Get member information.",

    category: "Member Stuff",

    inputs: [
        {
            "name": "action",
            "title": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "name": "member",
            "title": "Member",
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The member you want to get information.",
            "types": ["object", "unspecified"]
        }
    ],

    options: [
        {
            "name": "info",
            "title": "Member Info",
            "description": "Description: Member information you want to get.",
            "type": "SELECT",
            "options": {
                1: "Is Member Bannable By The Bot? [Boolean]",
                2: "Member Color Role [Role]",
                3: "Is Member Deafened In Any Way? [Boolean]",
                4: "Has Member Been Removed From The Server? [Boolean]",
                5: "Member Display Base 10 Color [Text]",
                6: "Member Display Hex Color [Text]",
                7: "Member Display Name [Text]",
                8: "Member Server [Server]",
                9: "Member Highest Role [Role]",
                10: "Member Hoist Role [Role]",
                11: "Member ID [Text]",
                12: "Member Joined The Server At [Date]",
                13: "Is Member Kickable By The Bot? [Boolean]",
                14: "Member Last Message [Message]",
                15: "Member Last Message ID [Text]",
                16: "Is Member Manageable By The Bot? [Boolean]",
                17: "Member Muted In Any Way? [Message]",
                18: "Member Nickname [Text]",
                19: "Member Permissions [Permissions]",
                20: "Member Presence [Presence]",
                21: "Member Role List [List <Role>]",
                22: "Is Member Self-Deafened? [Boolean]",
                23: "Is Member Self-Muted? [Boolean]",
                24: "Is Member Deafened Server-Wide? [Boolean]",
                25: "Is Member Muted Server-Wide? [Boolean]",
                26: "Is Member Speaking? (Bot Must Be On The Same Voice Channel) [Message]",
                27: "Member User [User]",
                28: "Member Voice Channel [Voice Channel]",
                29: "Member Voice Channel ID [Text]",
                30: "Member Voice Session ID [Text]",
                31: "Member Mention [Text]"
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
            "description": "Type: Unspecified\n\nDescription: Result you got with the member.",
            "types": ["unspecified"]
        }
    ],

    code: function(cache) {
        const member = this.GetInputValue("member", cache);
        const info = parseInt(this.GetOptionValue("info", cache));

        let result;
        switch(info) {
            case 1:
                result = member.bannable;
                break;
            case 2:
                result = member.colorRole;
                break;
            case 3:
                result = member.deaf;
                break;
            case 4:
                result = member.deleted;
                break;
            case 5:
                result = member.displayColor;
                break;
            case 6:
                result = member.displayHexColor;
                break;
            case 7:
                result = member.displayName;
                break;
            case 8:
                result = member.guild;
                break;
            case 9:
                result = member.highestRole;
                break;
            case 10:
                result = member.hoistRole;
                break;
            case 11:
                result = member.id;
                break;
            case 12:
                result = member.joinedAt;
                break;
            case 13:
                result = member.kickable;
                break;
            case 14:
                result = member.lastMessage;
                break;
            case 15:
                result = member.lastMessageID;
                break;
            case 16:
                result = member.manageable;
                break;
            case 17:
                result = member.mute;
                break;
            case 18:
                result = member.nickname;
                break;
            case 19:
                result = member.permissions;
                break;
            case 20:
                result = member.presence;
                break;
            case 21:
                result = member.roles.array();
                break;
            case 22:
                result = member.selfDeaf;
                break;
            case 23:
                result = member.selfMute;
                break;
            case 24:
                result = member.serverDeaf;
                break;
            case 25:
                result = member.serverMute;
                break;
            case 26:
                result = member.speaking;
                break;
            case 27:
                result = member.user;
                break;
            case 28:
                result = member.voiceChannel;
                break;
            case 29:
                result = member.voiceChannelID;
                break;
            case 30:
                result = member.voiceSessionID;
                break;
            case 31:
                result = member.toString();
                break;
        }

        this.StoreOutputValue(result, "result", cache);
        this.RunNextBlock("action", cache);
    }
};