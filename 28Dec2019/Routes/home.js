const express = require('express');

const routes = express.Router();


routes.get('/',(req,res)=>{
    // res.status(200).send('<h1>Hello From Express</h1>');
    console.log(__dirname);
    res.status(200).sendFile(__dirname+'/index.html',(err)=>{
        console.log('Error happened ',err);
    });
});


module.exports=routes;