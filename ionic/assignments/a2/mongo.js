const express = require('express');
const app = express();
const port = 8887;
const body_parser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

app.use(body_parser.json());
app.use(cors());

let DATABASE = null;
let COLLECTION = null;
let DOCUMENTS = null;
let collectionInit = false;

app.listen(port, () => console.log(`Server Running at LocalHost: ${port}.`));

//

const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const exportFilePath = path.join(__dirname, 'exported-db.json');

//#region CREATE NEW DB
app.post('/create', (req, res) => {
  if (collectionInit) {
    return res.send("Database and Collection already initialized.");
  }

  const { dbName, collectionName } = req.body;

  if (!dbName || !collectionName) {
    return res.send("Database or Collection Name not provided.");
  }

  DATABASE = dbName;
  COLLECTION = collectionName;
  const dbAddress = `mongodb://0.0.0.0:27017/${DATABASE}`;

  mongoose.connect(dbAddress).then(() => {
    console.log(`Connected to ${DATABASE}.`);
    const SCHEMA = new mongoose.Schema({
      question: { type: String, required: true },
      answer: { type: String, required: true },
    });
    DOCUMENTS = mongoose.model(COLLECTION, SCHEMA);

    collectionInit = true;
    console.log(`Database (${DATABASE}) and Collection ${COLLECTION} initialized.`);
    res.send(`Database (${DATABASE}) and Collection ${COLLECTION} initialized.`);
  }).catch((err) => {
    console.error(err);
    res.status(500).send("Error initializing database.");
  });
});

//#endregion

//#region EXPORT (SAVE) CURRENT DB
app.get('/save', (req, res) => {
  if (!collectionInit) {
    return res.status(400).send('No database is currently initialized.');
  }

  const fileName = req.query.fileName || 'a2-vanduzee.json';
  const exportFilePath = `./exports/${fileName}`;

  DOCUMENTS.find({})
    .then((data) => {
      const exportData = { DATABASE, COLLECTION, data };
      fs.writeFileSync(exportFilePath, JSON.stringify(exportData, null, 2));
      console.log(`Database exported to ${exportFilePath}`);
      res.send(`Database exported to ${exportFilePath}`);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error exporting database.');
    });
});
//#endregion

//#region IMPORT (LOAD) DB FROM FILE
app.post('/load', (req, res) => {
  const { dbName, collectionName, data } = req.body;

  if (!dbName || !collectionName || !data) {
    return res.status(400).send('Database name, collection name, and data are required.');
  }

  const dbAddress = `mongodb://0.0.0.0:27017/${dbName}`;
  mongoose.connect(dbAddress).then(() => {
    console.log(`Connected to ${dbName}.`);
    const SCHEMA = new mongoose.Schema({
      question: { type: String, required: true },
      answer: { type: String, required: true },
    });
    DOCUMENTS = mongoose.model(collectionName, SCHEMA);

    // Insert the data into the collection
    DOCUMENTS.insertMany(data)
      .then(() => {
        DOCUMENTS.countDocuments({}, (err, count) => {
          if (err) {
            console.error(err);
            return res.status(500).send('Error counting documents.');
          }

          res.send({ itemCount: count });
        });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send('Error inserting documents.');
      });
  }).catch((err) => {
    console.error(err);
    res.status(500).send('Error connecting to the database.');
  });
});

//#endregion

//#region CLEAR DB
app.post('/clear', (req, res) => {
  DATABASE = null;
  COLLECTION = null;
  DOCUMENTS = null;
  collectionInit = false;
  console.log('Database and Collection cleared from memory.');
  res.send('Database and Collection cleared from memory.');
});
//#endregion

//#region CRUD OPERATIONS (Unchanged)
// RETRIEVE MANY
app.get('/retrieve', (req, res) => {
  let documents = req.query;
  DOCUMENTS.find(documents)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send(err.message);
    });
});

// INSERT ONE
app.post('/insert', (req, res) => {
  let document = req.body.params;
  DOCUMENTS.create(document)
    .then(() => {
      res.send({ message: 'Record Added' });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send(err.message);
    });
});

// UPDATE ONE
app.put('/update', (req, res) => {
  let document = req.query;
  let fields = req.body.params;
  DOCUMENTS.updateOne(document, fields)
    .then(() => {
      res.send({ message: 'Record Updated' });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send(err.message);
    });
});

// DELETE ONE
app.delete('/delete', (req, res) => {
  let document = req.query;
  DOCUMENTS.deleteOne(document)
    .then(() => {
      res.send({ message: 'Record Deleted' });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send(err.message);
    });
});
//#endregion
