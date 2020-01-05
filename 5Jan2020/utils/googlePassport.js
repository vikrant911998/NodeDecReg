const passport = require('passport');
const google = require('passport-google-oauth2');


passport.serializeUser((userObject,done)=>{
    console.log('Inside Serialize User.....');
    done(null,userObject);
});


passport.deserializeUser((userObject,done)=>{
    console.log('Inside Deserialize User.....');
    done(null,userObject);
});


passport.use(new google({
    callbackURL:'/dashboard',
    clientID:'',
    clientSecret:''
},(access,refresh,profile,done)=>{
    console.log('Google Profile ......');

    let customObject = {
        google_id:profile._json.sub,
        name:profile._json.name,
        email:profile._json.email,
    }
    done(null,customObject);
    
}));

