module.exports = {
    name: "Get Role Info",

    description: "Get role information.",

    category: "Role Stuff",

    inputs: [
        {
            "name": "action",
            "title": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "name": "role",
            "title": "Role",
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The role you want to get information.",
            "types": ["object", "unspecified"]
        }
    ],

    options: [
        {
            "name": "info",
            "title": "Role Info",
            "description": "Description: Role information you want to get.",
            "type": "SELECT",
            "options": {
                1: "Role Position In The Role Manager [Number]",
                2: "Role Base 10 Color [Number]",
                3: "Role Created At [Date]",
                4: "Has Role Been Deleted? [Boolean]",
                5: "Is Role Editable By The Bot? [Boolean]",
                6: "Role Server [Server]",
                7: "Role Hex Color [Text]",
                8: "Is Role Separate From Others? [Boolean]",
                9: "Role ID [Text]",
                10: "Is Role Managed By An External Service? [Boolean]",
                11: "Role Member List [List <Member>]",
                12: "Is Role Mentionable? [Boolean]",
                13: "Role Name [Text]",
                14: "Role Permissions Bitfield [Number]",
                15: "Role Position In Discord API [Number]",
                16: "Role Permissions [Permissions]",
                17: "Role Mention [Text]"
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
            "description": "Type: Unspecified\n\nDescription: Result you got with the role.",
            "types": ["unspecified"]
        }
    ],

    code: function(cache) {
        const role = this.GetInputValue("role", cache);
        const info = parseInt(this.GetOptionValue("info", cache));

        let result;
        switch(info) {
            case 1:
                result = role.calculatedPosition;
                break;
            case 2:
                result = role.color;
                break;
            case 3:
                result = role.createdAt;
                break;
            case 4:
                result = role.deleted;
                break;
            case 5:
                result = role.editable;
                break;
            case 6:
                result = role.guild;
                break;
            case 7:
                result = role.hexColor;
                break;
            case 8:
                result = role.hoist;
                break;
            case 9:
                result = role.id;
                break;
            case 10:
                result = role.managed;
                break;
            case 11:
                result = role.members.array();
                break;
            case 12:
                result = role.mentionable;
                break;
            case 13:
                result = role.name;
                break;
            case 14:
                result = role.permissions;
                break;
            case 15:
                result = role.position;
                break;
            case 16:
                result = role.serialize();
                break;
            case 17:
                result = role.toString();
                break;
        }

        this.StoreOutputValue(result, "result", cache);
        this.RunNextBlock("action", cache);
    }
};