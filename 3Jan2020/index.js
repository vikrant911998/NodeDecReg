const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use('/',require('./Routes/user'));

app.listen(3000,()=>{
    console.log('Server Started...');
});