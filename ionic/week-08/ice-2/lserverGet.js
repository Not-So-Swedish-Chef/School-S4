const http = require('http');
const url = require('url');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/text'});
    const _input = url.parse(req.url, true);
    for (let i in _input.query) {
        res.write(i+'-'+_input.query[i]+'\n');
    }
    res.end();
    req.on('end', () => { console.log("End of data"); })
}).listen(8887, () => {
    console.log('Server running at localhost:8887');
});