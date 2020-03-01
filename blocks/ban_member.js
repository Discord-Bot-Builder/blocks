module.exports = {
    name: "Ban Member",

    description: "Bans a server member.",

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
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The member you want to ban.",
            "types": ["object", "unspecified"]
        },
        {
            "name": "reason",
            "title": "Reason",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: The reason for banning the member. (OPTIONAL)",
            "types": ["text", "unspecified"]
        }
    ],

    options: [],

    outputs: [
        {
            "name": "action",
            "title": "Action",
            "description": "Type: Action\n\nDescription: Executes blocks after waiting for the time.",
            "types": ["action"]
        }
    ],

    code: function(cache) {
        const member = this.GetInputValue("member", cache);
        const reason = this.GetInputValue("reason", cache);

        member.ban(reason).then(function() {
            this.RunNextBlock("action", cache);
        });
    }
};