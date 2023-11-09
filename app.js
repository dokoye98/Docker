const express = require('express')
const {restart} = require('nodemon')
const app = express()
const BodyParser = require('body-parser')
require('dotenv/config')
const mongoose = require('mongoose')
const CustomerRouter = require('./routes/customerRoute')
app.use(BodyParser.json())
app.use('/Customer',CustomerRouter)
mongoose.connect(process.env.DB_CONNECTOR).then(()=>{

    console.log('DB connected')
})

app.listen(3000,()=>{
    console.log('app is running')
})