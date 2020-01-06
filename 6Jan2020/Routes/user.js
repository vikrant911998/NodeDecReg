const express = require('express');
const Routes = express.Router();
const passport = require('passport');
// const db = require('../db/connection');
// const userOperations = require('../db/helpers/userOperation1');


Routes.get('/user/register',passport.authenticate('google',{
    scope:['profile','email']
}));


Routes.get('/dashboard',passport.authenticate('google'),(req,res)=>{
    // console.log(req);
    let obj = {
        name:req.user.name,
        email:req.user.email
    }
    res.render('DS',obj);
    // response.status(200).json({msg:'Record Verified and Added'});
});








// Routes.post('/user/register',(request,response)=>{
//     let userid = request.body.userid;
//     let pwd = request.body.pwd;
//     let email = request.body.email;

//     var userObject = {userid,pwd,email};

//     userOperations.add(userObject,response);

// });






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