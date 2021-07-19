// import model
const Blog = require('../models/blog')

const add_test_blogDocument = (req, res) => {
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
}

const all_test_blogDocuments = (req, res) => {
    Blog.find()
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        console.log(err);
      });
}

const single_test_blogDocument = (req, res) => {
    Blog.findById('60e4e575b4c0a9970cc172c9')
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        console.log(err);
      });
}

const find_test_one_blogDocument = (req, res) => {
    Blog.findOne({ title: 'Test this' })
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        console.log(err);
      });
}

const render_index = (req, res) => {
    Blog.find().sort({createdAt: -1})
    .then(result => {
        res.render('blog/index', { blogs: result, title: 'All blogs' });
    })
    .catch( err => {
        console.log(err)
    })
}

const render_create = (req, res) => {
    // render index ejs view
    res.render('blog/create', {"title":'Create new blog'})
}

const render_single = (req, res) => {
    Blog.findById(req.params.id)
    .then(result => {
        res.render('blog/single', { blog: result, title: `Single Blog: ${result.title}` });
    })
    .catch( err => {
        console.log(err)
    })
}

const save_blog = (req, res) => {
    //console.log(req.body);
    const blogDocument = new Blog(req.body)
  
    blogDocument.save()
      .then(result => {
        res.redirect('/blog');
      })
      .catch(err => {
        console.log(err);
      });
}

const delete_blog =(req, res) => {
    const id = req.params.id;
    
    Blog.findByIdAndDelete(id)
    .then(result => {
      res.json({
        "redirect": '/blog'
      })
    })
    .catch( err => {
        console.log(err)
    })
  }

module.exports = {
    add_test_blogDocument,
    all_test_blogDocuments,
    single_test_blogDocument,
    find_test_one_blogDocument,
    render_index,
    render_create,
    render_single,
    save_blog,
    delete_blog,
}