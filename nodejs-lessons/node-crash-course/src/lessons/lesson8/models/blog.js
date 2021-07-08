const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    author: String,
    body: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;