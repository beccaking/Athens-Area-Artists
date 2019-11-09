//Dependencies
const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const app = express()
const db = mongoose.connection
const session = require('express-session')
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

app.get('/religious', (req, res) => {
  const religiousTattoos = tattoos.filter(tattoo => (tattoo.design[0] === 'Religious' || tattoo.design[1] === 'Religious'))
    res.render('index.ejs', {
    allTattoos: religiousTattoos,
    tabTitle: 'Religious'
  })
})

app.get('/sci-fi', (req, res) => {
  const scifiTattoos = tattoos.filter(tattoo => (tattoo.design[0] === 'Sci-Fi' || tattoo.design[1] === 'Sci-Fi'))
    res.render('index.ejs', {
    allTattoos: scifiTattoos,
    tabTitle: 'Sci-Fi'
  })
})

app.get('/abstract', (req, res) => {
  const abstractTattoos = tattoos.filter(tattoo => (tattoo.design[0] === 'Abstract' || tattoo.design[1] === 'Abstract'))
    res.render('index.ejs', {
    allTattoos: abstractTattoos,
    tabTitle: 'Abstract'
  })
})

app.get('/nature', (req, res) => {
  const natureTattoos = tattoos.filter(tattoo => (tattoo.design[0] === 'Nature' || tattoo.design[1] === 'Nature'))
    res.render('index.ejs', {
    allTattoos: natureTattoos,
    tabTitle: 'Nature'
  })
})

app.get('/skeletons', (req, res) => {
  const skeletonTattoos = tattoos.filter(tattoo => (tattoo.design[0] === 'Skeleton' || tattoo.design[1] === 'Skeleton'))
    res.render('index.ejs', {
    allTattoos: skeletonTattoos,
    tabTitle: 'Skeletons'
  })
})

app.get('/charlie', (req, res) => {
  const charlieTattoos = tattoos.filter(tattoo => tattoo.artist === 'Charlie Vieregge')
    res.render('index.ejs', {
    allTattoos: charlieTattoos,
    tabTitle: 'Charlie Vieregge'
  })
})

app.get('/shawn', (req, res) => {
  const shawnTattoos = tattoos.filter(tattoo => tattoo.artist === 'Shawn Hawks')
  res.render('index.ejs', {
    allTattoos: shawnTattoos,
    tabTitle: 'Shawn Hawks'
  })
})

app.get('/brad', (req, res) => {
  const bradTattoos = tattoos.filter(tattoo => tattoo.artist === 'Brad Clabaugh')
  res.render('index.ejs', {
    allTattoos: bradTattoos,
    tabTitle: 'Brad Clabaugh'
  })
})

app.get('/garrett', (req, res) => {
  const garrettTattoos = tattoos.filter(tattoo => tattoo.artist === 'Garrett Hyatt')
  res.render('index.ejs', {
    allTattoos: garrettTattoos,
    tabTitle: 'Garrett Hyatt'
  })
})

app.get('/bobby', (req, res) => {
  const bobbyTattoos = tattoos.filter(tattoo => tattoo.artist === 'Bobby Avalos')
  res.render('index.ejs', {
    allTattoos: bobbyTattoos,
    tabTitle: 'Garrett Hyatt'
  })
})

app.get('/eric', (req, res) => {
  const ericTattoos = tattoos.filter(tattoo => tattoo.artist === 'Eric Pierce')
  res.render('index.ejs', {
    allTattoos: ericTattoos,
    tabTitle: 'Eric Pierce'
  })
})

app.get('/jim', (req, res) => {
  const jimTattoos = tattoos.filter(tattoo => tattoo.artist === 'Jim Kisor')
  res.render('index.ejs', {
    allTattoos: jimTattoos,
    tabTitle: 'Jim Kisor'
  })
})

app.get('/joshua', (req, res) => {
  const joshuaTattoos = tattoos.filter(tattoo => tattoo.artist === 'Joshua Mullins')
  res.render('index.ejs', {
    allTattoos: joshuaTattoos,
    tabTitle: 'Joshua Mullins'
  })
})

app.get('/skin-hooked', (req, res) => {
  const skinhookedTattoos = tattoos.filter(tattoo => tattoo.studio === 'Skin Hooked Tattoo & Body Piercing')
  res.render('index.ejs', {
    allTattoos: skinhookedTattoos,
    tabTitle: 'Skin Hooked Tattoo & Body Piercing'
  })
})

app.get('/thunder-bunny', (req, res) => {
  const thunderbunnyTattoos = tattoos.filter(tattoo => tattoo.studio === 'Thunder Bunny Tattoo Parlor')
  res.render('index.ejs', {
    allTattoos: thunderbunnyTattoos,
    tabTitle: 'Thunder Bunny Tattoo Parlor'
  })
})

app.get('/decorative-injections', (req, res) => {
  const decorativeTattoos = tattoos.filter(tattoo => tattoo.studio === 'Decorative Injections Tattooing & Body Piercing')
  res.render('index.ejs', {
    allTattoos: decorativeTattoos,
    tabTitle: 'Decorative Injections Tattooing & Body Piercing'
  })
})

app.get('/joshua-mullins', (req, res) => {
  const joshuaTattoos = tattoos.filter(tattoo => tattoo.studio === 'Joshua Mullins Tattooing')
  res.render('index.ejs', {
    allTattoos: joshuaTattoos,
    tabTitle: 'Joshua Mullins Tattooing'
  })
})

app.get('/show/:index', (req, res) => {
  const element = tattoos.filter(tattoo => tattoo.index === req.params.index)
  res.render('show.ejs', {
    tattoo: element[0],
    tabTitle: element[0].artist
  })
})

app.get('/', (req, res) => {
  mistake = false
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
