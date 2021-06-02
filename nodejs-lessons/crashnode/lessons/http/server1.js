/* HTTP
* @command: run node app.js in the root to execute this file
* @nodemon: if using nodemon run  `npm run dev` in the root. you must import this module first in the app.js
* @documentation: https://nodejs.org/dist/latest-v14.x/docs/api/http.html
*/

// - EXERCISE 2. BASIC SERVER WITH ENV PORT

// import module `http`
const http = require('http');

// initialize server
const $server1 = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello world.</h1>');
})

// initialize env port
const PORT = process.env.PORT || 3000

// listening port function
const runServer1 = () => {
    $server1.listen(PORT, (err) => {console.log(`connected to port ${PORT}`)} )
}


module.exports = runServer1;