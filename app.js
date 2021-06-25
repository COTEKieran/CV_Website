'use strict'

const express = require('express');

const app = express();

const port = 8080;

app.use(express.static('public'));
app.use(express.static('js'));
app.use(express.static(__dirname));

app.listen(port, (err) => {
    console.log(`server listening on http://localhost:${port}`)
});

app.get('/', function (res,req){
    res.sendFile('index.js')
});