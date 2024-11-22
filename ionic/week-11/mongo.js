const express = require('express');
const app = express();
const port = 8887;
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());
app.listen(port, () =>
    console.log(`Server running at localhost: ${port}!`));