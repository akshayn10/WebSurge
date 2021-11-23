const mongoose = require('mongoose');
var Post = mongoose.model('Post', {
    author_name: { type: String },
    title: { type: String },
    body: { type: String },
    creationDate: { type: Date, default: Date.now }
});
module.exports = { Post };