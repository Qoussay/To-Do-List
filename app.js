// Initialize express 
const express = require('express');

// initialize app
const app = express();

// Set 'Public' as the static folder. Also use body-parser. 
app.use(express.static('Public'));
app.use(express.urlencoded());

// Set ejs as the main view engine 
app.set('view engine', 'ejs');

var new_reminder_array = [];

app.get('/' , (req,res) => {
    var today = new Date();
    
    const options = {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    };

    const day = today.toLocaleDateString('en-GB', options);

    res.render('list', {day: day, new_list_item_array: new_reminder_array});
});

app.post('/', (req,res) => {
    var new_reminder = req.body.new_reminder;
    new_reminder_array.push(new_reminder);
    res.redirect('/');
})

// Initialize the local server 
app.listen(process.env.PORT || 8080, () =>
    console.log('Server is running on http://localhost:8080/')
);