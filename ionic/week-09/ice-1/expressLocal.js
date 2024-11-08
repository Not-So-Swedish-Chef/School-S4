const express = require('express');
const app = express();
const port = 8887;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

// app.use((req, res, next) => {
//     res.write('<!doctype html><html lang="en"><head><meta charset="utf-8">' +
//               '<title>LOCAL Request</title></head><h3>LOCAL Request</h3><div><ul>');
//     next();
// });

app.get('/retrieve', (req, res, next) => {
    const input = req.query;
    var params = '';
//     res.write('<h2>Hello Class - ' + req.method + '</h2>');
    for (const key in input) {
        params += ' - ' + input[key];
//         res.write('<li>' + key + ' - ' + input[key] + '</li>');
    }
    res.send({msg: 'Return from retrieve' + params});
//     next();
});

app.post('/insert', (req, res, next) => {
    var params = '';
    const input = req.body.params;
//     res.write('<h2>Hello Class - ' + req.method + '</h2>');
    for (const key in input) {
        params += ' - ' + input[key];
//         res.write('<li>' + key + ' - ' + input[key] + '</li>');
    }
    res.send({msg: 'Return from insert' + params});
//     next();
});

app.use((req, res, next) => {
    res.write('<p>This is the end</p>');
    res.end();
});

app.listen(port, () => console.log(`server at localhost ${port}.`));