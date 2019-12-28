const express  =require('express');

const routes = express.Router();




routes.get('/test',(req,res) =>{
    
    res.status(200).send('<h2>Inside Test Route</h2><br><form action="/message" method="POST"><input type="text" name="msg" ><button>SUBMIT</button></form>');
    
});


module.exports = routes;