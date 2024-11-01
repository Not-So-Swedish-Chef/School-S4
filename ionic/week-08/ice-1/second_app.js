/*
// general usage
console.log(__filename);
const path = require("path");
console.log(path);
console.log(`Directory is ${path.dirname(__filename)}`);
console.log(`File is ${path.basename(__filename)}`);
/*
// Async - get content
const fs = require('fs');
fs.readFile(__filename, 'utf-8', (err, data) => {
    if(err) { throw err; }
    console.log('\nFile content:\n' + data);
});

// Sync - get content
content = fs.readFileSync(__filename);
console.log('\nFile content:\n' + content);

// pulls in additional files:
require('./first_app');
*/

// use variables/functions from other files
const convert = require('./convert');
console.log('\n' + convert.desc);

const cel = 0;
console.log(`${cel} degrees Celsius = ${convert.toFah(cel)} degrees Fahrenheit`);

const fah = 32;
console.log(`${fah} degrees Fahrenheit = ${convert.toCel(fah)} degrees Celsius`);
