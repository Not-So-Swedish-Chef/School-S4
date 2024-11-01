const http = require('http');
const hostname = '127.0.0.1';
const port = 8887;

http.createServer((req,res) => {
    console.log('Header: ', req.headers);
    console.log('Method: ',req.method);
    res.writeHead(200, {'Content-Type': 'text/text'});
    res.write('Error 418: I\'m a Teapot.\n');
    res.end();
    req.on('end', () => { console.log("End of data"); });
}).listen(port,() => {
    console.log(`Server running at http://${hostname}:${port}/`);
});