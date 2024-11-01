const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/text'});
    req.on('data', (postData) => {
        const formdata = decodeURIComponent(postData);
        res.write(formdata+'\n');
        const _input = formdata.split('&');
        _input.forEach((item, index) => {
            res.write(index+'-'+item.split('=')[1]+'\n');
        });
        res.end();
    });
    req.on('end', () => { console.log("End of data"); });
}).listen(8887, () => {
    console.log('Server running at localhost:8887');
});