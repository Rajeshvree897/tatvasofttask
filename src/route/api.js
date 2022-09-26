const express = require('express')
const appRouter = express.Router();
const userController = require('../controller/userController.js')
const blogController = require('../controller/blogController')

// *************************Register / Login ***************************
appRouter.route('/register/user').post(userController.register)
appRouter.route('/login').post(userController.login)

// *************************Blog ***************************

appRouter.route('/blog/create').post(blogController.create)
appRouter.route('/blogs').get(blogController.allBlogs)
appRouter.route('/blogs/:key/:value').post(blogController.blogsFilter)
appRouter.route('/update/:_id').patch(blogController.update)
appRouter.route('/delete/:_id').delete(blogController.delete)
appRouter.route('/blogs/:email').get(blogController.usersblog)




module.exports = appRouter