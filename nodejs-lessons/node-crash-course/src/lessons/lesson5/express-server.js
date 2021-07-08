const express = require('express');
const path = require('path');

const port = 8000;
const app = express();

// set ejs view engine and public views directory
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/public'))

// home page
app.get('/', (req, res) => {
    // initialize demo blogs entries
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    ]
    // render index ejs view
    res.render('index', {"title":'Home', "blogs": blogs})
})
// about
app.get('/about', (req, res) => {
    // init demo content
    const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
    // render index ejs view
    res.render('about', {"title":'About', "content": content})
})
// create blog
app.get('/blogs/create', (req, res) => {
    // render index ejs view
    res.render('create-blog', {"title":'Create new blog'})
})

// redirects
app.get('/about-us', (req, res) => {
    // redirect to /about 301 default
    res.redirect('/about');
})
// blog
app.get('/blog', (req, res) => {
    // redirect to / 301 default
    res.redirect('/');
})

// 404 page - this always goes at the end of all previews get requests
app.use(
    (req, res) => {
        res.status(404).render('404', {"title":'404 error'})
    }
)

// listening
const runExpressServer = () => {
    app.listen(port, () => {
        console.log(`app listening at http://localhost:${port}`)
    });
}

module.exports = runExpressServer;
