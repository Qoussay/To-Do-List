// Initialize express 
const express = require('express');

// initialize app
const app = express();

// Set 'Public' as the static folder. Also use body-parser. 
app.use(express.static('Public'));
app.use(express.urlencoded());

// Set ejs as the main view engine 
app.set('view engine', 'ejs');

app.get('/' , (req,res) => {
    var today = new Date();
    var currentDay = today.getDay();
    var day;

    switch (currentDay) {
        case 0 :
            day = 'Sunday';
            break;
        case 1 :
            day = 'Monday';
            break;
        case 2 :
            day = 'Tuesday';
            break;
        case 3 :
            day = 'Wednesday';
            break;
        case 4 :
            day = 'Thursday';
            break;
        case 5 :
            day = 'Friday';
            break;
        case 6 :
            day = 'Saturday';
            break;
        default:
            console.log('An error occured with the switch statement.');
    }
    res.render('list', {day: day});
});

// Initialize the local server 
app.listen(process.env.PORT || 8080, () =>
    console.log('Server is running on http://localhost:8080/')
);