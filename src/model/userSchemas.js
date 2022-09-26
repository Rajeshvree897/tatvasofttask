const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    Firstname : {
        type : String,
        required : true,
        minlength : 3
    },
    Lastname : {
        type : String,
        required : true,
        minlength : 3
    },
    Email : {
        type : String,
        required : true,
        unique : [true, "email already exist"]
    },
    Possword : {
        type : String,
        required : true
    },
    DOB : {
        type : String,
        required : true
    },
    Role : {
        type : String,
        enum : ['user', 'admin'],
        default : "user"
    }

})
const User = new mongoose.model("User", userSchema)
module.exports = User