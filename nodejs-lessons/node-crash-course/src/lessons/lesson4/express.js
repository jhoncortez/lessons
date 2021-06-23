const express = require('express');

const port = 8000;
const app = express();


// home page
app.get('/', (req, res) => {
    res.sendFile('./public/index.html', {root : __dirname })
})

app.get('/about', (req, res) => {
    //res.send('<h1>About page</h1>');
    // opening about html file, the root is the current dirname
    res.sendFile('./public/about.html', {root : __dirname })
})

// redirects
app.get('/about-us', (req, res) => {
    // redirect to /about 301 default
    res.redirect('/about');
})

// 404 page - this always goes at the end of all previews get requests
app.use(
    (req, res) => {
        res.status(404).sendFile('./public/404.html', {root : __dirname })
    }
)

// listening
const runExpressServer = () => {
    app.listen(port, () => {
        console.log(`app listening at http://localhost:${port}`)
    });
}

module.exports = runExpressServer;
