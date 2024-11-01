const http = require('http');
const options = {
    host: '127.0.0.1',
    port: 8887,
    method: 'GET'
};
const req = http.request(options, (res) => {
    console.log(res.statusCode);
    res.on('data', msg => { process.stdout.write(msg) });
});
req.on('error', error => { console.log(error); });
req.end();