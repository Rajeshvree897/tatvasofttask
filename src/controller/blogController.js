const Blog  = require("../model/blogSchema")
const User = require('../model/userSchemas')
const blogController = {
    create : async function (req, res) {
          try{
          console.log(req.body);
            if(req.body.email){
                const existUser = await User.findOne({Email : req.body.email})
                if(existUser){
                    const blogObj = new Blog(req.body)
                     const blogData = await blogObj.save();
                    if(blogData){
                        res.status(200).json(blogData)
                    }else{
                        res.status(400).json({message : "Blog not create sucessfully."})
                    }
                }else{
                    res.status(410).json({message : "User Doesn't exist"})
                }
            }
        }catch(err){
            res.status(500).json(err)
        }
    },
    blogsFilter : async function (req, res) {
        try{
        const searchBy = req.params.key
        const value = req.params.value
        let search = {}
        search[searchBy] = value 
        const blogData  = await Blog.find(search)
        res.status(200).json(blogData)
         }catch(err) {
             res.status(400).send(err)
         }
    },
    update : async function (req, res){
        try{
            const id = req.params._id
            const updateBlog = await Blog.findByIdAndUpdate(id, req.body)
            if(updateBlog){
                res.status(200).json(updateBlog)
            }else{
                res.status(400).send("Something went wrong")
            }
        }catch(err) {
            res.status(400).send(err)
        }
    },
    delete : async function (req, res){
        try{
            const id = req.params._id
            const deleteBlog = await Blog.findByIdAndDelete(id)
            if(deleteBlog){
                res.status(200).json(deleteBlog)
            }else{
                res.status(400).send("Something went wrong")
            }
        }catch(err) {
            res.status(400).send(err)
        }
    },
    usersblog : async function (req, res){
        //try{
            const email = req.params.email
            console.log(email);
            const userBlog = await Blog.find({email : email})
            res.status(200).json(userBlog)
        // }catch(err) {
        //     res.status(400).send(err)
        // }
    }
    
}
module.exports = blogController