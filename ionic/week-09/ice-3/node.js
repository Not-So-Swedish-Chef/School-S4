const express = require('express');
const app = express();
const port = 8888;
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());
const convert = require('./convert2');

app.get('/celsius', (req, res) => {
    const input = parseInt(req.query.degree);
    const out = convert.toFah(input);
    res.send({desc:'('+convert.fah+')', msg:'degree', degree: out});
});
    app.get('/fahrenheit', (req, res) => {
    const input = parseInt(req.query.degree);
    const out = convert.toCel(input);
    res.send({desc:'('+convert.cel+')', msg:'degree', degree: out});
});

app.listen(port, () => console.log(`Server running at localhost: ${port}!`));