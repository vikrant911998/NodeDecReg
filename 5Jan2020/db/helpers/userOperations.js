const UserModel = require('../models/userSchema');
const nodemailer = require('nodemailer');
const sendgrid = require('nodemailer-sendgrid-transport');


const transporter = nodemailer.createTransport(sendgrid({
    auth:{
        api_key:'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'
    }
}));


const userOperations={
    
    add(userObject,response){
        
        // UserModel.find({},(err,doc)=>{
        //     if(err){
        //         console.log('Error is --> ',err);
        //         response.status(404).json({msg:'Server Error'});
        //     }
        //     else if(doc){
        //         console.log('Record Saved ');
        //         response.status(200).json({isFound:true,document:doc});
        //     }
        // });
        UserModel.create(userObject,(err)=>{
            if(err){
                console.log('Error is --> ',err);
                response.status(404).json({msg:'Server Error'});
            }
            else{
                console.log('Record Saved ');
                const mailOptions = {
                    from:'vikrantbhadauriya2@gmail.com',
                    to:userObject.email,
                    subject:'TEST PURPOSE',
                    text:'This is a test mail',
                    html:'<h1>Congrats, You are Registered..'
                };
                transporter.sendMail(mailOptions,(err,res)=>{
                    if(err){
                        console.log('Error is ',err);
                    }
                    else if(res){
                        console.log('Mail Sent.....');
                        response.status(200).json({msg:'Record Saved.....'});
                    }

                });
                
            }
        });
    }
};

module.exports = userOperations;