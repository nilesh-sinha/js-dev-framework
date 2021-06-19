const express = require('express');
const path = require('path');
const open = require('open');
const port = 3000;

const app = express();

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, (err) => {
    if (err) {
        console.log('Faield to start server', err);
    } else {
        console.log('Server listening at:', port);
        // open('http://localhost:' + port); // uncomment to open the browser
    }
});
