const passport = require('passport');
const google = require('passport-google-oauth2');
const userOperations = require('../db/helpers/userOperations');

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
    clientID:'22608993543-ksruo4vkd105f8a21mr1uemkr45la3bn.apps.googleusercontent.com',
    clientSecret:'3gPkx4-B65y0yYZi34yNWqDa'
},(access,refresh,profile,done)=>{
    console.log('Google Profile ......');

    let customObject = {
        google_id:profile._json.sub,
        name:profile._json.name,
        email:profile._json.email,
    }
    
    let promise = userOperations.findUser(customObject);
    promise.then(doc=>{
        console.log('Record Found ',doc);

        if(doc == null){
            let pr = userOperations.register(customObject);
            pr.then(doc=>{
                console.log('User registered in DB ',doc);
                done(null,customObject);

            }).catch(err=>{
                console.log('Error in registering User ',err);
            });
        }
        else if(doc != null){
            done(null,customObject);
        }

        

    }).catch(err=>{
        console.log('Record Not Found ',err);
       
            
     

    });



    // let promise = userOperations.register(customObject);

    // promise.then(doc=>{
    //     console.log('User Registerd in DB ',doc);
    //     if(doc)
    //         done(null,customObject);
    // }).catch(err=>{
    //     console.log('Error in User Registration ',err);
    // });

    
    
}));

