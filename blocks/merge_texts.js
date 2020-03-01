module.exports = {
    name: "Merge Texts",

    description: "Merge the two texts into one.",

    category: "Extras",

    inputs: [
        {
            "name": "action",
            "title": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "name": "text1",
            "title": "First Text",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: The first text to merge with the second text.",
            "types": ["text", "unspecified"]
        },
        {
            "name": "text2",
            "title": "Second Text",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: The second text to merge with the first text.",
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
        },
        {
            "name": "text",
            "title": "Text",
            "description": "Type: Text\n\nDescription: The text you got with the merge of the two texts.",
            "types": ["text"]
        }
    ],

    code: function(cache) {
        const text1 = this.GetInputValue("text1", cache) + "";
        const text2 = this.GetInputValue("text2", cache) + "";

        this.StoreOutputValue(text1 + text2, "text", cache);
        this.RunNextBlock("action", cache);
    }
};