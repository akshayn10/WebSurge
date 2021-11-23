const express = require('express');
const router = new express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var { Doctor } = require('../models/doctor');
router.get('/', (req, res) => {
    Doctor.find((err, docs) => {
        if (!err) { res.send(docs); } else { console.log('Error in retriving doctor data' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var doct = new Doctor({
        name: req.body.name,
        address: req.body.address,
        mobile_no: req.body.mobile_no,
        email: req.body.email
    });
    doct.save((err, doc) => {
        if (!err) {
            res.send(doc);
        } else { console.log('Error doctor save:' + JSON.stringify(err, undefined, 2)); }

    });
});
router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given Id: ${req.params.id}');
    Doctor.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); } else { console.log('Error retrieving doctors:' + JSON.stringify(err, undefined, 2)); }

    });
});
router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given Id: ${req.params.id}');
    var doct = {
        name: req.body.name,
        address: req.body.address,
        mobile_no: req.body.mobile_no,
        email: req.body.email
    };
    Doctor.findByIdAndUpdate(req.params.id, { $set: doct }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); } else { console.log('Error updating doctor:' + JSON.stringify(err, undefined, 2)); }
    });
});
router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given Id: ${req.params.id}');
    Doctor.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); } else { console.log('Error deleting doctor:' + JSON.stringify(err, undefined, 2)); }
    });
});
module.exports = router;