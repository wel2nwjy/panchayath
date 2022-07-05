const mongoose = require("mongoose");

const UserRoleSchema = new mongoose.Schema({
    role:{
        type:String,
        required:true,
        unique:true
    },
    dataEntry:{
        type:Boolean,
        default:true
    },
    masterEntryProject:{
        type:Boolean,
        default:true
    }
},
{ timestamps: true }
)

var UserRoles = mongoose.model('UserRole', UserRoleSchema);

module.exports = UserRoles