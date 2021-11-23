const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var { Post } = require('../models/post');
router.get('/', (req, res) => {
    Post.find((err, docs) => {
        if (!err) { res.send(docs); } else { console.log('Error in retriving post data' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var pos = new Post({
        author_name: req.body.author_name,
        title: req.body.title,
        body: req.body.body
    });
    pos.save((err, doc) => {
        if (!err) {
            res.send(doc);
        } else { console.log('Error post save:' + JSON.stringify(err, undefined, 2)); }

    });
});
router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given Id: ${req.params.id}');
    Post.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); } else { console.log('Error retrieving posts:' + JSON.stringify(err, undefined, 2)); }

    });
});
router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given Id: ${req.params.id}');
    var pos = {
        author_name: req.body.author_name,
        title: req.body.title,
        body: req.body.body
    };
    Post.findByIdAndUpdate(req.params.id, { $set: pos }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); } else { console.log('Error updating post:' + JSON.stringify(err, undefined, 2)); }
    });
});
router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given Id: ${req.params.id}');
    Post.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); } else { console.log('Error deleting post:' + JSON.stringify(err, undefined, 2)); }
    });
});
module.exports = router;