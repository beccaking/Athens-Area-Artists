//Dependencies
const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const app = express()
const db = mongoose.connection
const session = require('express-session')
require('dotenv').config()
const User = require('./models/users.js')

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
app.use(session({
  secret: 'randomString',
  resave: false,
  saveUninitialized: false
}))

const usersController = require('./controllers/users.js')
app.use('/users', usersController);

const sessionsController = require('./controllers/sessions.js')
app.use('/sessions', sessionsController);

const tattoosController = require('./controllers/tattoos.js')
app.use('/tattoos', tattoosController);

const tattoos = require('./models/tattoos.js')

//Routes
app.get('/databasetest', (req, res) => {
  User.find({}, (error, foundElement) => {
    res.send(foundElement)
  })
})

app.get('/show/:tattooIndex', (req, res) => {
  res.render('show.ejs', {
    tattoo: tattoos[req.params.tattooIndex],
    tabTitle: tattoos[req.params.tattooIndex].artist
  })
})

app.get('/', (req, res) => {
  flag = false
  res.render('index.ejs', {
    allTattoos: tattoos,
    tabTitle: 'Home'
  })
})

//Listener
app.listen(PORT, () => {
  console.log('listening on port', PORT)
})
