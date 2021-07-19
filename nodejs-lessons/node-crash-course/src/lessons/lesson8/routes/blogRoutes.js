const express = require('express')
const router = express.Router()
const blogController = require('../controllers/blogController')

// mongoose & mongo tests
router.get('/add-blogDocument', blogController.add_test_blogDocument)

router.get('/all-blogDocuments', blogController.all_test_blogDocuments)

router.get('/single-blogDocument', blogController.single_test_blogDocument)

router.get('/find-blogDocument',  blogController.find_test_one_blogDocument)

/// RENDERING VIEWS REQUESTS

// blog
router.get('/', blogController.render_index)
// create blog view
router.get('/create', blogController.render_create)
// get blog
router.get('/:id', blogController.render_single)

// POST REQUEST LOGIC FOR SAVE, UPDATE DATA

// create blog document
router.post('/create', blogController.save_blog)
// delete blog
router.delete('/:id', blogController.delete_blog)

module.exports = router;