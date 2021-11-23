const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/Websurge', (err) => {
    if (!err)
        console.log('Mongodb connection successful');
    else
        console.log('Mongo connection error:' + JSON.stringify(err, undefined, 2));
});
module.exports = mongoose;