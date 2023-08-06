// Create web server
const http = require('http');
// Create server
const server = http.createServer(function (req, res) {
    // Set response header
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // Set response content
    res.write('<html><body><h1>Hello World!</h1></body></html>');
    res.end();
});
// Set listen port
server.listen(8080);
console.log('Node.js web server at port 8080 is running..')
// Execute in terminal: node comments.js
// Open browser: http://localhost:8080
// Output: Hello World!
// Explanation: In the above example, we have created a simple web server that listens to port 8080. When a client sends a request to http://localhost:8080, the server responds with a status code 200 and a response header of Content-Type: text/html. The response content is an HTML string that renders “Hello World!”.
// The response.write() method is used to set the response content. The response.end() method is used to end the response process. If we don’t call the end() method, the request will stay pending forever.