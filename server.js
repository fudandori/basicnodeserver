const http = require('http');
const fs = require('fs');
const host = '127.0.0.1';
const port = 3000;


const server = http.createServer((req, res) => {
    console.log(req.url);
    var filePath = '.' + req.url;
    if (filePath == './')
        filePath = './index.html';

    fs.readFile(filePath, (error, content) => {
        contentType = 'text/html';
        if (req.url.endsWith('.js')) contentType = 'text/javascript'
        else if (req.url.endsWith('.css')) contentType = 'text/css'
        else if (req.url.endsWith('json')) contentType = 'application/json'

        res.writeHead(200, { 'Content-Type': contentType })
        res.end(content);
    })

})

server.listen(port, host, () => {
    console.log(`Listening: ${host}:${port}`)
})
