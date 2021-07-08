// for using static files we need to install morgan package with code npm install morgan 
// documentation https://www.npmjs.com/package/morgan
// morgan let us log in the terminal all static file requests easyly, we use it as middleware with the app.use() function
/*
morgan(format, options)
Create a new morgan logger middleware function using the given format and options. 
The format argument may be a string of a predefined name (see below for the names), 
a string of a format string, or a function that will produce a log entry.

The format function will be called with three arguments tokens, req, and res, 
where tokens is an object with all defined tokens, req is the HTTP request and res is the 
HTTP response. The function is expected to return a string that will be the log line, 
or undefined / null to skip logging.
*
*/
const express = require('express');
const path = require('path');
// require morgan
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

// set port and express server
const port = 8000;
const app = express();

// connect to mongo db
const dbURI = `mongodb+srv://nodecourse:test12345@cluster0.nkate.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const runServer = () => {
    mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => app.listen(port, () => {
        console.log(`app listening at http://localhost:${port}`)
    }))
    .catch(err => console.log(err));
}
// set ejs view engine and public views directory
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/public/views'))


// example middlewares
// app.use((req, res, next) => {
//     console.log('begin petition.')
//     console.log('url', req.url)
//     // usging next to continue the code flow
//     next();
// })
// app.use((req, res, next) => {
//     console.log('continue petition.');
//     // usging next to continue the code flow
//     next();
// })

// Set STATIC FILES MIDDLEWARE
//app.use(morgan('tiny')) // The minimal output. -  will return get request that we do when page is loaded  .

//app.use(morgan('combined')) // Standard Apache combined log output. -  will return complete information of the request we do when page is loaded .

//app.use(morgan('dev')) // Concise output colored by response status for development use - will return get request that we do when page is loaded and time of execution .

//app.use(morgan('short')) // Shorter than default, also including response time.

//app.use(morgan('common')) // Standard Apache common log output.

// NOTE: for this example we will use the tiny method

// set public static directory directly from express before the middleware
//app.use(express.static(path.join(__dirname, '/public/static')))
app.use('/static', express.static(path.join(__dirname, '/public/static'))) // will create virtual path /static before the static fields
app.use(morgan('tiny')) 

// Note: next step is load static files in head of ejs pages.

// test
app.get('/user/:id', (req, res) => {
    res.send('hello world'+req.params.id)
})

// mongoose & mongo tests
app.get('/add-blogDocument', (req, res) => {
    const blogDocument = new Blog({
      title: 'Test this',
      snippet: 'about my new blog',
      body: 'more about my new blog'
    })
  
    blogDocument.save()
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        console.log(err);
      });
  });

app.get('/all-blogDocuments', (req, res) => {
    Blog.find()
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        console.log(err);
      });
  });

app.get('/single-blogDocument', (req, res) => {
    Blog.findById('60e4e575b4c0a9970cc172c9')
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        console.log(err);
      });
  }); 

app.get('/find-blogDocument', (req, res) => {
    Blog.findOne({ title: 'Test this' })
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        console.log(err);
      });
}); 


// home page
app.get('/', (req, res) => {
    res.redirect('/blog');
    // // initialize demo blogs entries
    // const blogs = [
    //     {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //     {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //     {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    // ]
    // // render index ejs view
    // res.render('index', {"title":'Home', "blogs": blogs})
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
    //res.redirect('/');
    Blog.find().sort({createdAt: -1})
    .then(result => {
        res.render('index', { blogs: result, title: 'All blogs' });
    })
    .catch( err => {
        console.log(err)
    })
})

// 404 page - this always goes at the end of all previews get requests
app.use(
    (req, res) => {
        res.status(404).render('404', {"title":'404 error'})
    }
)

// listening
// const runExpressServer = () => {
//      app.listen(port, () => {
//         console.log(`app listening at http://localhost:${port}`)
//     });
// }

module.exports = runServer;
