const express = require('express');
const Routes = express.Router();
// const db = require('../db/connection');
const userOperations = require('../db/helpers/userOperations');

Routes.post('/user/register',(request,response)=>{
    var userid = request.body.userid;
    var pwd = request.body.pwd;

    var userObject = {userid,pwd};

    userOperations.add(userObject,response);

});






module.exports = Routes;



// Routes.post('/user/register',(request,response)=>{
//     var userid = request.body.userid;
//     var pwd = request.body.pwd;

//     var userObject = {userid,pwd};


//     db.collection('applications').insertOne(userObject).then(res=>{
//         console.log('Record Saved ',res);
//         response.status(200).json({msg:'Record Saved...'});
//     }).catch(err=>{
//         console.log('Error is ',err);
//         response.status(404).json({msg:'Server Error....'});
//     });

    // MongoClient.connect(url, function(err, client) {
    //     assert.equal(null, err);
    //     const db = client.db('users');

    //     db.collection('applications').insertOne(userObject).then(res=>{
    //         console.log('Record Saved ',res);
    //         response.status(200).json({msg:'Record Saved...'});
    //     }).catch(err=>{
    //         console.log('Error is ',err);
    //         response.status(404).json({msg:'Server Error....'});
    //     });
       
    // });

// });

// module.exports = Routes;