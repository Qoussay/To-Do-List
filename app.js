// Initialize express 
const express = require('express');
const date = require(__dirname + '/date.js');

// initialize app
const app = express();

// Set 'Public' as the static folder. Also use body-parser. 
app.use(express.static('Public'));
app.use(express.urlencoded());

// Set ejs as the main view engine 
app.set('view engine', 'ejs');

const new_reminder_array = [];

app.get('/' , (req,res) => {
    
    const day = date.getDate();

    res.render('list', {day: day, new_list_item_array: new_reminder_array});
});

app.post('/', (req,res) => {
    const new_reminder = req.body.new_reminder;
    new_reminder_array.push(new_reminder);
    res.redirect('/');
})

// Initialize the local server 
app.listen(process.env.PORT || 8080, () =>
    console.log('Server is running on http://localhost:8080/')
);