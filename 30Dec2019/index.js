const express = require('express');
const bodyParser = require('body-parser');

const testRoute = require('./Routes/Test');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.set('view engine','ejs');



app.use('/',testRoute);
app.use('/',require('./Routes/Message'));
app.use('/',require('./Routes/dynamic'));
app.use('/',require('./Routes/home'));


// app.use('/',function(req,res,next){
//     next();
// });

// app.get('/test',function(req,res,next){
//     res.status(200).send('<h2>Inside Test Route</h2><br><form action="/message" method="POST"><input type="text" name="msg" ><button>SUBMIT</button></form>');
//     // next();
// });


// app.post('/message',function(req,res,next){
//     // console.log(req.body);
//     let data = req.body.msg;
//     console.log(data);

//     res.send('data saved successfully...');
//     // next();
// });



// app.use('/',function(req,res,next){
//     res.status(200).send('<h1>Hello From Express</h1>');
// });


app.listen( process.env.PORT || 3000 , ()=>{
    console.log('Server Started..... ');
});