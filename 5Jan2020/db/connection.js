const mongoose = require('mongoose');
const config = require('./config');

mongoose.connect(config.dbURL,
    {useNewUrlParser:true,useUnifiedTopology:true},
    ()=>{
        console.log('Database Connected.....');
    }
);

module.exports = mongoose;























// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');

// const url = 'mongodb://localhost:27017';

// var db;

// MongoClient.connect(url, function(err, client) {
//     assert.equal(null, err);
//     db = client.db('users');
 
// });

// if(db != undefined){
//     module.exports = db;
// }