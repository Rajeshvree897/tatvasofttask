const mongoose = require('mongoose')

const blogSchemas = new mongoose.Schema({
    title : {
        type : String,
        required : true,
        minlength : 3
    },
    description : {
        type : String
    },
    status : {
        type : String,
        enum : ['publish', 'unpublish'],
        default : "publish"
    },
    publised_date : {
        type : Date,
        default :  Date.now(),
        required : true
    },
    modify_date : {
        type : Date,
        default : Date.now(),
        required : true
    },
    category : {
        type : String,
        required : true
    },
    start : {
        type : Date,
        required : true
    },
    end : {
        type : Date
    },
    email : {
        type : String,
        required : true,
    },
    recurrence : {
        type : String
    }

})
const Blog = new mongoose.model("Blog", blogSchemas)
module.exports = Blog