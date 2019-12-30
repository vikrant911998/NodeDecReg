const express = require('express');

const routes = express.Router();


routes.post('/dynamic',(req,res)=>{
    console.log(req.body.dyMessage);
    let msg = req.body.dyMessage;

    res.render('Dy',{ routeMessage : msg });
});

module.exports = routes;

