const express  =require('express');

const routes = express.Router();



routes.post('/message',(req,res)=>{
    
    let data = req.body.msg;
    console.log(data);

    res.send('data saved successfully...');
    
});


module.exports = routes;