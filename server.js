//Dependencies
const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const app = express()
const db = mongoose.connection
require('dotenv').config()

//Port
const PORT = process.env.PORT

//Database
const MONGODB_URI = process.env.MONGODB_URI

mongoose.connect(MONGODB_URI, {useNewUrlParser:true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true})

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

//Middleware
//use public folder for static assets, like css
app.use(express.static('public'))
//be able to use delete, put routes
app.use(methodOverride('_method'))
//populate req.body with parsed info from forms
app.use(express.urlencoded({extended:false}))

//Routes
app.get('/', (req, res) => {
  res.send('Hello World')
})

//Listener
app.listen(PORT, () => {
  console.log('listening on port', PORT)
})
