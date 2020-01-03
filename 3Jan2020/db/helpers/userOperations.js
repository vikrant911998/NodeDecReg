const UserModel = require('../models/userSchema');

const userOperations={
    
    add(userObject,response){
        UserModel.create(userObject,(err)=>{
            if(err){
                console.log('Error is --> ',err);
                response.status(404).json({msg:'Server Error'});
            }
            else{
                console.log('Record Saved ');
                response.status(200).json({msg:'Record Saved.....'});
            }
        });
    }
};

module.exports = userOperations;