const express = require('express');
const app = express();
const port = 8887;
const body_parser = require('body-parser');
const cors = require('cors');

app.use(body_parser.json());
app.use(cors());

let DATABASE = null;
let COLLECTION = null;
let DOCUMENTS = null;
let collectionInit = false;

app.listen(port, () => console.log(`Server Running at LocalHost: ${port}.`));

//

const mongoose = require ('mongoose');
const DataBase = 'mongodb://0.0.0.0:27017/sheridan';
mongoose.set('strictQuery', true);

//

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
      question : { type : String, required : true },
      answer : { type : String, required : true }
    });
    DOCUMENTS = mongoose.model(COLLECTION, SCHEMA);

    DOCUMENTS.create([
      {
        question : "What is the term for the boundary of a black hole?",
        answer : "Event horizon."
      },
      {
        question : "What is the closest star to Earth?",
        answer : "The Sun."
      },
      {
        question : "What is a light-year?",
        answer : "The distance light travels in one year."
      },
      {
        question : "What is the primary gas in Earth's atmosphere?",
        answer : "Nitrogen."
      },
      {
        question : "Which planet is tilted on its side, causing extreme seasons?",
        answer : "Uranus."
      }
    ]).then(() => {
      collectionInit = true;
      console.log(`Database (${DATABASE}) and Collection ${COLLECTION} initialized.`)
    }).catch(err => {
      console.error(err);
    });
  });
});

//#region CRUD OPERATIONS
//RETRIEVE MANY
app.get('/retrieve', (req, res) => {
  let documents = req.query;
  DOCUMENTS.find(documents).then(
    result => { res.send(result); },
    err => {res.send(err.message); }
  ).catch(
    err => { console.error(err); }
  );
});

//INSERT ONE
app.post('/insert', (req, res) => {
  let document = req.body.params;
  DOCUMENTS.create(document).then(
    result => { res.send({"message" : 'Record Added'}); },
    err => { res.send(err.message); }
  ).catch(
    err => { console.error(err); }
  );
});

//UPDATE ONE
app.put('/update', (req, res) => {
  let document = req.query;
  let fields = req.body.params;
  DOCUMENTS.updateOne(document, fields).then(
    result => { res.send({"message" : 'Record Updated'}); },
    err => { res.send(err.message); }
  ).catch(
    err => { console.error(err); }
  );
});

//DELETE ONE
app.delete('/delete', (req, res) => {
  let document = req.query;
  DOCUMENTS.deleteOne(document).then(
    result => { res.send({"message" : 'Record Deleted'}); },
    err => { res.send(err.message); }
  ).catch(
    err => { console.error(err); }
  );
});
//#endregion