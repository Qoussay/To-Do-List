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

    if (currentDay == 6 || currentDay == 7 ) {
        res.render('list', {weekday: 'WeekEnd'});
    } else {
        res.render('list', {weekday: 'WeekDay'});
    }
});

// Initialize the local server 
app.listen(process.env.PORT || 8080, () =>
    console.log('Server is running on http://localhost:8080/')
);