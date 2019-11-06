const express = require('express')
const router = express.Router()
const tattoos = require('../models/tattoos.js')
const Collection = require('../models/collection.js')

//Collection page with save buttons, Log in only
router.get('/', (req, res) => {
  if(req.session.username){
    res.render('tattoos/index.ejs', {
      allTattoos: tattoos
    })
  } else {
    res.redirect('/')
  }
})

//Save a tattoo from the index page to your collection
router.post('/my-collection/:id', (req, res) => {
  if(req.session.username){
    Collection.create(tattoos[req.params.id], {user: req.sessions.username}, (error, createdUser) => {
      res.redirect('/tattoos')
    })
  } else {
    res.redirect('/')
  }
})

//Personal collection page
router.get('/my-collection', (req, res) => {
  if(req.session.username){
    Collection.find({user: req.sessions.username}, (error, allTattoos) => {
      res.render('sessions/collection.ejs', {
        tattoos: allTattoos
      })
    })
  } else {
    res.redirect('/')
  }
})

module.exports = router
