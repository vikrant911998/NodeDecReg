const express = require('express');
const routes = express.Router();


routes.post('/message',(req,res)=>{
    res.status(200).json({"cursor":"pointer"});
})

module.exports = routes