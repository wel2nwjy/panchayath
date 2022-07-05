const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        default:""
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    mobileNo:{
        type:String,
        default:""
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        default:""
    },
    status:{
        type:Boolean,
        default:true
    }
},
{ timestamps: true }
)

var Users = mongoose.model('User', UserSchema);

module.exports = Users