module.exports = {
    name: "Wait",

    description: "Waits for the set amount of time to finish and then executes the next blocks.",

    category: "Extras",

    inputs: [
        {
            "name": "action",
            "title": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "name": "amount",
            "title": "Amount",
            "description": "Acceptable Types: Number, Unspecified\n\nDescription: The amount of time to wait.",
            "types": ["number", "unspecified"]
        }
    ],

    options: [
        {
            "name": "measurement_type",
            "title": "Measurement Type",
            "description": "Description: The measurement type you want to set.",
            "type": "SELECT",
            "options": {
                "miliseconds": "Miliseconds",
                "seconds": "Seconds",
                "minutes": "Minutes",
                "hours": "Hours"
            }
        }
    ],

    outputs: [
        {
            "name": "action",
            "title": "Action",
            "description": "Type: Action\n\nDescription: Executes blocks after waiting for the time.",
            "types": ["action"]
        }
    ],

    code: function(cache) {
        const amount = parseFloat(this.GetInputValue("amount", cache));
        const measurement_type = this.GetOptionValue("measurement_type", cache);

        let time = 0;
        switch(measurement_type) {
            case "miliseconds":
                time = amount;
                break;
            case "seconds":
                time = amount * 1000;
                break;
            case "minutes":
                time = amount * 1000 * 60;
                break;
            case "hours":
                time = amount * 1000 * 60 * 60;
                break;
            default:
                break;
        }

        setTimeout(() => {
            this.RunNextBlock("action", cache)
        }, time);
    }
};