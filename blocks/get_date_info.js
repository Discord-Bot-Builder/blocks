module.exports = {
    name: "Get Date Info",

    description: "Get date information.",

    category: "Extras",

    inputs: [
        {
            "name": "action",
            "title": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "name": "Date",
            "title": "Date",
            "description": "Acceptable Types: Date, Unspecified\n\nDescription: The date you want to get information.",
            "types": ["date", "unspecified"]
        }
    ],

    options: [
        {
            "name": "info",
            "title": "Date Info",
            "description": "Description: Date information you want to get.",
            "type": "SELECT",
            "options": {
                1: "Date Unix Timestamp [Number]",
                2: "Date Weekday [Text]",
                3: "Date Day Number [Number]",
                4: "Date Month of the Year [Text]",
                5: "Date Month Number [Number]",
                6: "Date Year [Text]",
                7: "Date Full Time [Text]",
                8: "Date Hour [Number]",
                9: "Date Minute [Number]",
                10: "Date Second [Number]",
                11: "Date Millisecond [Number]",
                12: "Date Timezone [Text]"
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
            "description": "Type: Unspecified\n\nDescription: Result you got with the date.",
            "types": ["unspecified"]
        }
    ],

    code: function(cache) {
        const date = this.GetInputValue("date", cache);
        const info = parseInt(this.GetOptionValue("info", cache));

        let result;
        switch(info) {
            case 1:
                result = date.getTime();
                break;
            case 2:
                const weekday = {
                    0: "Sunday",
                    1: "Monday",
                    2: "Tuesday",
                    3: "Wednesday",
                    4: "Thursday",
                    5: "Friday",
                    6: "Saturday"
                };
                result = weekday[date.getDay()];
                break;
            case 3:
                result = date.getDate();
                break;
            case 4:
                const month = {
                    0: "January",
                    1: "February",
                    2: "March",
                    3: "April",
                    4: "May",
                    5: "June",
                    6: "July",
                    7: "August",
                    8: "September",
                    9: "October",
                    10: "November",
                    11: "December"
                };
                result = month[date.getMonth()];
                break;
            case 5:
                result = date.getMonth() + 1;
                break;
            case 6:
                result = date.getFullYear();
                break;
            case 7:
                result = ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2) + ":" + ("0" + date.getSeconds()).slice(-2);
                break;
            case 8:
                result = date.getHours();
                break;
            case 9:
                result = date.getMinutes();
                break;
            case 10:
                result = date.getSeconds();
                break;
            case 11:
                result = date.getMilliseconds();
                break;
            case 12:
                result = "GMT" + date.slice(28, 29) + parseInt(date.slice(29, 33)) / 100;
                break;
        }

        this.StoreOutputValue(result, "result", cache);
        this.RunNextBlock("action", cache);
    }
};