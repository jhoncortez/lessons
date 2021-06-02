const path = require('path');
const fs = require('fs');

const loadAssetsUrl = (req) => path.join(__dirname, '/../public', req.url==='/assets/css'? 'css/style.css' : req.url);

const getAssetsExtension = (req) => path.extname(loadAssetsUrl(req)); 

const getAssetsContentType = (req) => {
    let ext = getAssetsExtension(req);

    let contentType = "text/css";

    switch (ext) {
        case '.js':
            contentType = "text/javascript";
            break;
        case '.json':
            contentType = "application/json";
            break;
        case '.png':
            contentType = "image/png";
            break;
        case '.jpg':
            contentType = "image/jpg";
            break;
        case '.ico':
            contentType = "image/ico";
             break;
    }
    return { 'Content-Type': contentType };
}

const loadAssets = (request, response) => {

    fs.readFile(loadAssetsUrl(request),(err, content) => 
    {
        response.writeHead(200, getAssetsContentType(request));
        //console.log(options);
        response.end(content);
    })
}

module.exports = loadAssets;