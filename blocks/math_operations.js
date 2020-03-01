module.exports = {
    name: "Math Operations",

    description: "Performs mathematical operation between two numbers.",

    category: "Extras",

    inputs: [
        {
            "name": "action",
            "title": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "name": "number1",
            "title": "First Number",
            "description": "Acceptable Types: Number, Unspecified\n\nDescription: The first number to perform a mathematical operation with the second number.",
            "types": ["number", "unspecified"]
        },
        {
            "name": "number2",
            "title": "Second Number",
            "description": "Acceptable Types: Number, Unspecified\n\nDescription: The second number to perform a mathematical operation with the first number.",
            "types": ["number", "unspecified"]
        }
    ],

    options: [
        {
            "name": "math_operation_type",
            "title": "Math Operation Type",
            "description": "Description: Math operation type to be performed between the two numbers set.",
            "type": "SELECT",
            "options": {
                "addition": "+ (Addition)",
                "subtraction": "- (Subtraction)",
                "division": "÷ (Division)",
                "multiplication": "× (Multiplication)",
                "exponentiation": "^ (Exponentiation)"
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
            "name": "number",
            "title": "Number",
            "description": "Type: Number\n\nDescription: The number you got with the mathematical operation between the two numbers.",
            "types": ["number"]
        }
    ],

    code: function(cache) {
        const number1 = parseFloat(this.GetInputValue("number1", cache));
        const number2 = parseFloat(this.GetInputValue("number2", cache));
        const math_operation_type = this.GetOptionValue("math_operation_type", cache);

        let result;
        switch(math_operation_type) {
            case "addition":
                result = number1 + number2;
                break;
            case "subtraction":
                result = number1 - number2;
                break;
            case "division":
                result = number1 / number2;
                break;
            case "multiplication":
                result = number1 * number2;
                break;
            case "exponentiation":
                result = number1 ** number2;
                break;
        }

        this.StoreOutputValue(result, "number", cache);
        this.RunNextBlock("action", cache);
    }
};