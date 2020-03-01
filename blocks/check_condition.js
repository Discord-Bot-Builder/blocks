module.exports = {
    name: "Check Comparison",

    description: "Compares two values by the selected comparison type and returns a boolean.",

    category: "Extras",

    inputs: [
        {
            "name": "action",
            "title": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "name": "value1",
            "title": "First Value",
            "description": "Acceptable Types: Unspecified, Undefined, Null, Object, Boolean, Number, Text, List\n\nDescription: The first value you want to compare with the second value.",
            "types": ["unspecified", "undefined", "null", "object", "boolean", "number", "text", "list"]
        },
        {
            "name": "value2",
            "title": "Second Value",
            "description": "Acceptable Types: Unspecified, Undefined, Null, Object, Boolean, Number, Text, List\n\nDescription: The second value you want to compare with the first value.",
            "types": ["unspecified", "undefined", "null", "object", "boolean", "number", "text", "list"]
        }
    ],

    options: [
        {
            "name": "comparison_type",
            "title": "Comparison Type",
            "description": "Description: Comparison type between the two values set.",
            "type": "SELECT",
            "options": {
                "equal": "Equal To",
                "not_equal": "Not Equal",
                "equals_exactly": "Equal Exactly",
                "not_equal_exactly": "Not Equal Exactly",
                "greater_than": "Greater Than",
                "less_than": "Less Than",
                "greater_than_or_equal": "Greater Than or Equal To",
                "less_than_or_equal": "Less Than or Equal To",
                "start_with": "Start With",
                "end_with": "End With",
                "match_regexp": "Match RegExp"
            }
        }
    ],

    outputs: [
        {
            "name": "action1",
            "title": "Action (If true)",
            "description": "Type: Action\n\nDescription: If true, executes this following blocks.",
            "types": ["action"]
        },
        {
            "name": "action2",
            "title": "Action (If false)",
            "description": "Type: Action\n\nDescription: If false, executes this following blocks.",
            "types": ["action"]
        }
    ],

    code: function(cache) {
        const value1 = this.GetInputValue("value1", cache);
        const value2 = this.GetInputValue("value2", cache);
        const comparison_type = this.GetOptionValue("comparison_type", cache);

        let result;
        switch(comparison_type) {
            case "equal":
                result = value1 == value2;
                break;
            case "not_equal":
                result = value1 != value2;
                break;
            case "equals_exactly":
                result = value1 === value2;
                break;
            case "not_equal_exactly":
                result = value1 !== value2;
                break;
            case "greater_than":
                result = value1 > value2;
                break;
            case "less_than":
                result = value1 < value2;
                break;
            case "greater_than_or_equal":
                result = value1 >= value2;
                break;
            case "less_than_or_equal":
                result = value1 <= value2;
                break;
            case "start_with":
                result = value1.startsWith(value2);
                break;
            case "end_with":
                result = value1.endsWith(value2);
                break;
            case "match_regexp":
                result = value1.match(value2);
                break;
        }

        if(Boolean(result)) {
            this.RunNextBlock("action1", cache);
        } else {
            this.RunNextBlock("action2", cache);
        }
    }
};