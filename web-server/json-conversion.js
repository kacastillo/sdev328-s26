let jsonString = `{
    "id": "12345",
    "username": "john_doe",
    "email": "john.doe@example.com",
    "profile": {
        "firstName": "John",
        "lastName": "Doe",
        "birthday": "1990-01-01",
        "gender": "male",
        "bio": "Avid hiker and photographer. Passionate about web technologies and education.",
        "address": {
            "street": "123 Elm St",
            "city": "Somewhere",
            "state": "WA",
            "postalCode": "98101",
            "country": "USA"
        }
    },
    "credentials": {
        "passwordHash": "abcdef1234567890",
        "securityQuestions": [
            {
                "question": "What is your mother's maiden name?",
                "answerHash": "7890abcdef123456"
            },
            {
                "question": "What was the name of your first pet?",
                "answerHash": "4567890abcdef123"
            }
        ]
    },
    "socialLinks": [
        {
            "platform": "Twitter", 
            "url": "http://twitter.com/john_doe"
        },
        {
            "platform": "LinkedIn", 
            "url": "http://linkedin.com/in/johndoe"
        }
    ],
    "preferences": {
        "language": "English",
        "privacySettings": {
            "profileVisible": true,
            "activityStatus": true,
            "locationTracking": false
        },
        "theme": "dark"
    },
    "activityLog": [
        {"date": "2024-05-10", "action": "Logged in"},
        {"date": "2024-05-10", "action": "Updated profile picture"},
        {"date": "2024-05-11", "action": "Posted a new article", "title": "Adventures in Web Development"}
    ]
}`;

console.log(jsonString);
console.log(typeof jsonString);

//this only works with objects
console.log(jsonString.email);

//convert from string -> object
let jsonObject = JSON.parse(jsonString);
console.log(jsonObject.activityLog[0].action);

//convert from object -> string