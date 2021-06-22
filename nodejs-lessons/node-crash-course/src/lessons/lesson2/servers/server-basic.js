const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    res.setHeader('Content-Type', 'text/html');
    res.write('<head><link rel="stylesheet" href="#" /></head>');
    res.write('<h1>hello</h1>');
    res.write('<p>this is page hello</p>');
    res.end();
});









server.listen(8000, 'localhost', ()=>{
    console.log('server runing in http://localhost:8000 ');
})