const mongoose = require('../connection');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    // userid:String,
    // pwd:String
    userid:{
        type:String,
        required:true
    },
    pwd:{
        type:String,
        required:true
    },
    email:{
        type:String
    }
});


const userModel = mongoose.model('users',userSchema);

module.exports = userModel;


