const http = require('http');
const fs = require('fs');
const loadPublicFilesUrl = require('./publicFiles');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    // /
    if (req.url == '/') {
        renderPage(loadPublicFilesUrl('/views/index.html'), res);
        return 0;
    }
    // home
    if (req.url == '/home') {
        redirectPage('/', res);
        return 0;
    }
    // about
    if (req.url == '/about') {
        renderPage(loadPublicFilesUrl('/views/about.html'), res);
        return 0;
    }

    // about - me (redirct 301)
    if (req.url == '/about-me') {
        redirectPage('/about', res);
        return 0;
    }
 
    res.writeHeader(404, {'Content-Type':'text/html'});
    res.end('<h1>Error 404 - Page not found</h1>');
});

const renderPage = (urlFile, res) => {
    fs.readFile(
        urlFile, 
        'utf8',(err, data) => renderPageContent(err, data,res));
    
    
} 

const renderPageContent = (err, data, res) => {
    
    if (err) console.log(err.message);

    res.writeHeader(200, {'Content-Type': 'text/html'});
    //res.write(data);
    res.end(data);
    
}
    
const redirectPage = (urlRedirect, res) => {
    //res.statusCode = 301;
    res.writeHeader(301, {'location': urlRedirect});
    res.end();
    return 0;
} 


const runServer = () => {

    server.listen(8000, 'localhost', ()=>{
        console.log('server runing in http://localhost:8000 ');
    })
}
module.exports = runServer;