module.exports = {
    name: "Add Member Role",

    description: "Adds a role to the member.",

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
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The member you want to add the role.",
            "types": ["object", "unspecified"]
        },
        {
            "name": "role",
            "title": "Role",
            "description": "Acceptable Types: Object, Number, Unspecified\n\nDescription: The role or ID of the role you want to add to the member.",
            "types": ["object", "number", "unspecified"]
        },
        {
            "name": "reason",
            "title": "Reason",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: The reason for adding the role to the member. (OPTIONAL)",
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
        }
    ],

    code: function(cache) {
        const member = this.GetInputValue("member", cache);
        const role = this.GetInputValue("role", cache);
        const reason = this.GetInputValue("reason", cache);

        member.addRole(role, reason).then(function() {
            this.RunNextBlock("action", cache);
        });
    }
};