const express = require('express')
const router = express.Router()
const tattoos = require('../models/tattoos.js')
const Collection = require('../models/collection.js')

//Collection page with save buttons, Logged in only
router.get('/', (req, res) => {
  if(req.session.username){
    res.render('tattoos/index.ejs', {
      allTattoos: tattoos
    })
  } else {
    res.redirect('/')
  }
})

//Save a tattoo from the index page to your collection, Logged in only
router.post('/my-collection/:id', (req, res) => {
    Collection.create(tattoos[req.params.id], {user: req.sessions.username}, (error, createdUser) => {
      res.redirect('/tattoos')
    })
})

//Personal collection page, Logged in only
router.get('/my-collection', (req, res) => {
  if(req.session.username){
    Collection.find({user: req.sessions.username}, (error, allTattoos) => {
      res.render('tattoos/collection.ejs', {
        tattoos: allTattoos
      })
    })
  } else {
    res.redirect('/')
  }
})

//Log Out
router.delete('/', (req, res) => {
  req.session.username = false
  res.redirect('/')
})


module.exports = router
