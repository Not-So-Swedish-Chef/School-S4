const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<!doctype html><html lang="en"><head><meta charset="utf-8">' +
            '<title>POST Request</title></head><body><h3>POST Request</h3><div><ul>');
    
    req.on('data', (postData) => {
        const formdata = decodeURIComponent(postData);
        const _input = formdata.split('&');
        _input.forEach((item, index) => {
            res.write('<li>'+item.split('=')[1]+'</li>');
        });
        res.write("</ul></div></body></html>");
        res.end();
    });
    req.on('end', () => { console.log("End of data"); });
}).listen(8887, () => {
    console.log('Server running at localhost:8887');
});