/**
 * Primary file for the API
 */

const http = require('http');
const url = require('url');

const server = http.createServer(function (req, res) {

    const parsedUrl = url.parse(req.url, true);

    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g,'')

    const queryStringObject = parsedUrl.query;

    const method = req.method.toLowerCase();

    const headers = req.headers;

    res.end('Hello World\n');

    console.log(`Request received on path: ${trimmedPath} with method: ${method}`);
    console.log('Query string parameters: ', queryStringObject);
    console.log('Headers received: ', headers);

});

server.listen(3000, function() {
    console.log("Server is running on port 3000");
});