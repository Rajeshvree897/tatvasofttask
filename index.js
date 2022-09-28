const express = require('express')
const route = require('./src/route/api')
const dotenv = require('dotenv').config()
const db  = require('./src/config/database')
const session = require('express-session');
const app = express()
app.use(session({secret: 'ssshhhhh',saveUninitialized: true,resave: true}));
app.use(express.json())
app.use("/api", route)
app.listen(8080, () => {
    console.log("Server running on 4500")
})