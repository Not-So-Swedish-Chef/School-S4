const http = require('http');
const options = {
    host: '127.0.0.1',
    port: 8887,
    path: '/',
    method: 'POST'
};
const data = 'fName=Andy&lName=Pak&data=posting data';
const req = http.request(options, (res) => {
    res.on('data', msg => {
        process.stdout.write(msg);
    });
});
req.on('error', error => { console.log(error); });
req.write(data);
req.end(); 