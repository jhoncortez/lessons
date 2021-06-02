/* HTTP
* @command: run node app.js in the root to execute this file
* @nodemon: if using nodemon run  `npm run dev` in the root. you must import this module first in the app.js
* @documentation: https://nodejs.org/dist/latest-v14.x/docs/api/http.html
*/

// - EXERCISE 2. BASIC SERVER WITH ENV PORT

// import module `http`
const http = require('http');
const path = require('path');
const fs = require('fs');
const loadAssets = require('./init/assets');

// initialize server
const $server2 = http.createServer((req, res) => {
    // load assets
    const isAsset = /\/assets\/[a-z]/gi;
    //console.log(isAsset.test(req.url));
    //loadAssets(req, res);
    if (isAsset.test(req.url))
    {
        loadAssets(req, res);
    }
    // if is rquest url is home page
    if (req.url === '/') {
        // read html file from public folder (render)
        rendering(path.join(__dirname, 'public', 'index.html'), res,
        { 'Content-Type': 'text/html' }
        );
    }

    // if is rquest url is about page
    if (req.url === '/about') {
        // read html file from public folder (render)
        let opt = { 'Content-Type': 'text/html' }
        rendering(path.join(__dirname, 'public', 'about.html'), res, opt);
    }

    // if is rquest url json response
    if (req.url === '/api/users') {
        // read html file from public folder (render)
        let opt = { 'Content-Type': 'application/json' }
        rendering(path.join(__dirname, 'public', 'users.json'), res, opt);
    }

})

// custom render function
const rendering = (htmlFile, res, opt) => {
    fs.readFile(htmlFile, (err, content) => 
        {
            createPageContent(res, content, opt);
    })
}

// custom page content function
const createPageContent = (res, content, options) => {
    res.writeHead(200, options);
    //console.log(options);
    res.end(content);
}

// initialize env port
const PORT = process.env.PORT || 8000

// listening port function
const runServer2 = () => {
    $server2.listen(PORT, (err) => {console.log(`connected to port ${PORT}`)} )
}


module.exports = runServer2;