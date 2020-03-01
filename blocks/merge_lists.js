module.exports = {
    name: "Merge Lists",

    description: "Merge two lists into one.",

    category: "List",

    inputs: [
        {
            "name": "action",
            "title": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "name": "list1",
            "title": "List 1",
            "description": "Acceptable Types: List, Unspecified\n\nDescription: The first list to merge with the second list.",
            "types": ["list", "unspecified"]
        },
        {
            "name": "list2",
            "title": "List 2",
            "description": "Acceptable Types: List, Unspecified\n\nDescription: The second list to merge with the first list.",
            "types": ["list", "unspecified"]
        }
    ],

    options: [],

    outputs: [
        {
            "name": "action",
            "title": "Action",
            "description": "Type: Action\n\nDescription: Executes blocks.",
            "types": ["action"]
        },
        {
            "name": "list",
            "title": "List",
            "description": "Type: List\n\nDescription: The merged list.",
            "types": ["list"]
        }
    ],

    code: function(cache) {
        const list1 = this.GetInputValue("list1", cache);
        const list2 = this.GetInputValue("list2", cache);

        this.StoreOutputValue(list1.concat(list2), "list", cache);
        this.RunNextBlock("action", cache);
    }
};