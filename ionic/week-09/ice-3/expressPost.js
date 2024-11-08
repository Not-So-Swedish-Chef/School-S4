const express = require('express');
const app = express();
const port = 8887;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));

app.use((req, res, next) => {
    res.write('<!doctype html><html lang="en"><head><meta charset="utf-8">' +
    '<title>POST Request</title></head><h3>POST Request</h3><div><ul>');
    next();
});

app.post('/insert', (req, res, next) => {
    const input = req.body;
    res.write('<h2>Hello Class - ' + req.method + '</h2>');
    for (const key in input) {
        res.write('<li>' + key + ' - ' + input[key] + '</li>');
    }
    res.write('<p>end</p>');
    res.end();
});
app.listen(8887, () => console.log(`Server running at localhost: ${port}!`));