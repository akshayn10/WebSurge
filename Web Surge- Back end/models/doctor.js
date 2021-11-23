const mongoose = require('mongoose');
var Doctor = mongoose.model('Doctor', {
    name: { type: String },
    address: { type: String },
    mobile_no: { type: String },
    email: { type: String }
});
module.exports = { Doctor };