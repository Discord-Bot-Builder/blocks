module.exports = {
    name: "Get state code",

    description: "Input a state's name, and it outputs its code. (i.e. Mississippi=MS)",

    category: "Extras",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "state",
            "name": "State",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: The State's Name (i.e. Mississippi)",
            "types": ["text", "unspecified"]
        }
    ],

    options: [],

    outputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["action"]
        },
        {
            "id": "stateshort",
            "name": "State abbreviation",
            "description": "Type: Text\n\nDescription: The number obtained from the mathematical operation between the two numbers.",
            "types": ["text"]
        }
    ],

    code(cache) {
        const state = this.GetInputValue("state", cache);
        const stateformatted = state.toString().toLowerCase();

        let result;
        switch(stateformatted) {
            case "alabama":
                resulta = "AL";
                break;
            case "alaska":
                resulta = "AK";
                break;
            case "american samoa":
                resulta = "AS";
                break;
            case "arizona":
                resulta = "AZ";
                break;
            case "arkansas":
                resulta = "AR";
                break;
            case "california":
                resulta = "CA";
                break;
            case "colorado":
                resulta = "CO";
                break;
            case "connecticut":
                resulta = "CT";
                break;
            case "delaware":
                resulta = "DE";
                break;
            case "district of columbia":
                resulta = "DC";
                break;
            case "dc":
                resulta = "DC";
                break;
            case "federated states of micronesia":
                resulta = "FM";
                break;
            case "florida":
                resulta = "FL";
                break;
            case "georgia":
                resulta = "GA";
                break;
            case "guam":
                resulta = "GU";
                break;
            case "hawaii":
                resulta = "HI";
                break;
            case "idaho":
                resulta = "ID";
                break;
            case "illinois":
                resulta = "IL";
                break;
            case "indiana":
                resulta = "IN";
                break;
            case "iowa":
                resulta = "IA";
                break;
            case "kansas":
                resulta = "KS";
                break;
            case "kentucky":
                resulta = "KY";
                break;
            case "louisiana":
                resulta = "LA";
                break;
            case "maine":
                resulta = "ME";
                break;
            case "marshall islands":
                resulta = "MH";
                break;
            case "maryland":
                resulta = "MD";
                break;
            case "massachusetts":
                resulta = "MA";
                break;
            case "michigan":
                resulta = "MI";
                break;
            case "minnesota":
                resulta = "MN";
                break;
            case "mississippi":
                resulta = "MS";
                break;
            case "missouri":
                resulta = "MO";
                break;
            case "montana":
                resulta = "MT";
                break;
            case "nebraska":
                resulta = "NE";
                break;
            case "nevada":
                resulta = "NV";
                break;
            case "new hampshire":
                resulta = "NH";
                break;
            case "new jersey":
                resulta = "NJ";
                break;
            case "new mexico":
                resulta = "NM";
                break;
            case "new york":
                resulta = "NY";
                break;
            case "north carolina":
                resulta = "NC";
                break;
            case "north dakota":
                resulta = "ND";
                break;
            case "northern mariana islands":
                resulta = "MP";
                break;
            case "ohio":
                resulta = "OH";
                break;
            case "oklahoma":
                resulta = "OK";
                break;
            case "oregon":
                resulta = "OR";
                break;
            case "palau":
                resulta = "PW";
                break;
            case "pennsylvania":
                resulta = "PA";
                break;
            case "puerto rico":
                resulta = "PR";
                break;
            case "rhode island":
                resulta = "RI";
                break;
            case "south carolina":
                resulta = "SC";
                break;
            case "south dakota":
                resulta = "SD";
                break;
            case "tennessee":
                resulta = "TN";
                break;
            case "texas":
                resulta = "TX";
                break;
            case "utah":
                resulta = "UT";
                break;
            case "vermont":
                resulta = "VT";
                break;
            case "virgin Islands":
                resulta = "VI";
                break;
            case "virginia":
                resulta = "VA";
                break;
            case "washington":
                resulta = "WA";
                break;
            case "west virginia":
                resulta = "WV";
                break;
            case "wisconsin":
                resulta = "WI";
                break;
            case "wyoming":
                resulta = "WY"; 
                break;       
            }

        this.StoreOutputValue(result, "stateshort", cache);
        this.RunNextBlock("action", cache);
    }
}