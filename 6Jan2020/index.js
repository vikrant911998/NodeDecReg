const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');



const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(express.static('public'));
app.set('view engine','ejs');

const passport = require('passport');
const googlePassport = require('./utils/googlePassport');

app.use(passport.initialize());
// app.use(passport.session());

app.use('/',require('./Routes/user'));

app.listen(3000,()=>{
    console.log('Server Started...');
});