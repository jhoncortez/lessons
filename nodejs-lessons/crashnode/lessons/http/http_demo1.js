/* HTTP
* @command: run node http_demo1.js to execute this file
* @documentation: https://nodejs.org/dist/latest-v14.x/docs/api/http.html
*/

// - EXERCISE ONE. BASIC SERVER

// import module `http`
const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello world</h1>');
})
.listen(3000, () => console.log('server runing...'));
