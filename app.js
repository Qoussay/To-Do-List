const express = require('express');

const app = express();

app.use(express.static('Public'));
app.use(express.urlencoded());

app.get('/' , (req,res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(process.env.PORT || 8080, () =>
    console.log('Server is running on http://localhost:8080/')
);